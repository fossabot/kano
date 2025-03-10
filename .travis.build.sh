#!/bin/bash
source .travis.env.sh

# It first need to create the required network 
docker network create --attachable $DOCKER_NETWORK

#
# Build the app
#
travis_fold start "build"

# NOTE: The process build the image and run the container in order to allow us to copy the 
# built artifact from the container to the host. Indeed the artifact is then copied to S3 
# (see the deploy hook) and can be used by the following stages (i.e. Android and iOS).

#
# Build the docker image
#
if [[ $TRAVIS_COMMIT_MESSAGE != *"[skip build]"* ]]
then
	# Build the image
	# FIXME: building Kano raises travis error related to the output log => override the
	# output to a file and push it to S3. Be careful if the building process come to take
	# more than 10 minutes, Travis will stop
	docker-compose -f deploy/app.yml -f deploy/app.build.yml build 
	ERROR_CODE=$?
	# Exit if an error has occured
	if [ $ERROR_CODE -ne 0 ]; then
		echo "Building the docker image has failed [error: $ERROR_CODE]"
		exit 1
	fi
	
	# Tag the built image and push it to the hub
	docker tag kalisio/$APP kalisio/$APP:$VERSION_TAG
	docker login -u="$DOCKER_USER" -p="$DOCKER_PASSWORD"
	docker push kalisio/$APP:$VERSION_TAG
	ERROR_CODE=$?
	if [ $ERROR_CODE -eq 1 ]; then
	  echo "Pushing the docker image has failed [error: $ERROR_CODE]"
		exit 1
	fi
fi

travis_fold end "build"

#
#  Backup the artifact to S3
#
travis_fold start "backup"

# Copy the artifact from the container to the host
# See https://docs.docker.com/compose/reference/envvars/#compose_project_name
# explanation on the container name
docker-compose -f deploy/app.yml up -d
docker cp ${APP}_app_1:/opt/$APP/dist/spa dist

# Backup the artifact to S3
aws s3 sync dist s3://$BUILDS_BUCKET/$BUILD_NUMBER/www > /dev/null
ERROR_CODE=$?
if [ $ERROR_CODE -eq 1 ]; then
	echo "Copying the artifacr to S3 has failed [error: $ERROR_CODE]"
	exit 1
fi

travis_fold end "backup"

