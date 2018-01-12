import { iffElse } from 'feathers-hooks-common'
import { hooks as teamHooks } from 'kTeam'
import { hooks as notifyHooks } from 'kNotify'

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ notifyHooks.addVerification ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ notifyHooks.removeVerification ],
    find: [],
    get: [],
    create: [ notifyHooks.sendVerificationEmail, iffElse(hook => hook.result.sponsor, teamHooks.joinOrganisation, teamHooks.createPrivateOrganisation) ],
    update: [],
    patch: [],
    remove: [ teamHooks.removePrivateOrganisation, notifyHooks.unregisterDevices ]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
