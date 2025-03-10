import 'whatwg-fetch'
import config from 'config'
import logger from 'loglevel'
import postRobot from 'post-robot'
import { colors } from 'quasar'
import utils from '../utils'
import appHooks from '../main.hooks'
import services from '../services'
import plugin from '../vue-kdk'
import { kalisio, beforeGuard, authenticationGuard } from '@kalisio/kdk-core/client'

function updateThemeColors () {
  const theme = config.theme
  // Default theme override
  if (theme) {
    if (theme.primary) colors.setBrand('primary', theme.primary)
    if (theme.secondary) colors.setBrand('secondary', theme.secondary)
    if (theme.accent) colors.setBrand('accent', theme.accent)
  }
}

postRobot.on('setLocalStorage', async (event) => {
  _.forOwn(event.data, (value, key) => {
    window.localStorage.setItem(key, (typeof value === 'object' ? JSON.stringify(value) : value))
  })
})
postRobot.on('unsetLocalStorage', async (event) => {
  _.forEach(event.data, (key) => {
    window.localStorage.removeItem(key)
  })
})
postRobot.on('setConfiguration', async (event) => {
  _.forOwn(event.data, (value, key) => {
    _.set(config, key, value)
  })
  updateThemeColors()
})

export default async ({ app, router, Vue }) => {
  await utils.sendEmbedEvent('kano-ready')

  let api = kalisio()

  // Setup app hooks
  api.hooks(appHooks)
  // Then all services
  services.call(api)

  Vue.use(plugin, { api })

  // Add global guard
  beforeGuard.registerGuard(authenticationGuard)

  updateThemeColors()

  api.on('authenticated', (data) => {
    // Store API gateway token if any
    if (data.gatewayToken) api.get('storage').setItem(config.gatewayJwt, data.gatewayToken)
    utils.sendEmbedEvent('kano-login')
  })
  api.on('logout', (data) => {
    // Remove API gateway token if any
    api.get('storage').removeItem(config.gatewayJwt)
    utils.sendEmbedEvent('kano-logout')
  })
}
