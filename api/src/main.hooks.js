// Application hooks that run for every service
import fuzzySearch from 'feathers-mongodb-fuzzy-search'
import { hooks as coreHooks } from 'kCore'
import { defineAbilitiesForSubject, hooks as teamHooks } from 'kTeam'

// Register all default hooks for authorisation
defineAbilitiesForSubject.registerDefaultHooks()

module.exports = {
  before: {
    all: [ coreHooks.log, teamHooks.authorise ],
    find: [ fuzzySearch() ],
    get: [],
    create: [],
    update: [ coreHooks.preventUpdatePerspectives ],
    patch: [],
    remove: []
  },

  after: {
    all: [ coreHooks.log, coreHooks.processPerspectives ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [ coreHooks.log ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
