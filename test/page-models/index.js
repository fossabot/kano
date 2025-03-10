import { ClientFunction } from 'testcafe'
import ApplicationLayout from './layout'
import Authentication from './authentication'
import LayerPanelMap from './layerPanelMap'
import LayerPanelGlobe from './layerPanelGlobe'
import Sidenav from './sidenav'
import MapView from './mapView'

// Export all models
export {
  ApplicationLayout,
  Authentication,
  LayerPanelMap,
  LayerPanelGlobe,
  Sidenav,
  MapView
}

// Access store
export const getFromStore = ClientFunction((path) => window.$store.get(path))
// Access Feathers services
export const api = {
  logout: ClientFunction(() => window.$api.logout()),
  get: ClientFunction((service, id) => window.$api.getService(service).get(id)),
  find: ClientFunction((service, params) => window.$api.getService(service).find(params)),
  remove: ClientFunction((service, id) => window.$api.getService(service).remove(id))
}
// Access routes
const baseUrl = process.env.APP_URL || (process.env.NODE_ENV === 'production' ? `http://localhost:8081` : `http://localhost:8080`)
export const getUrl = (path) => path ? baseUrl + '/#/' + path : baseUrl
export const goBack = ClientFunction(() => window.history.back())
// Access console errors
export const checkNoClientError = async (test) => {
  const { error } = await test.getBrowserConsoleMessages()
  await test.expect(error[0]).notOk()
}
export const checkClientError = async (test) => {
  const { error } = await test.getBrowserConsoleMessages()
  await test.expect(error[0]).ok()
}
// Mock Geolocation API that does not work well in headless browsers
// See https://github.com/DevExpress/testcafe/issues/1991
export const mockLocationAPI = ClientFunction(() => {
  navigator.geolocation.getCurrentPosition =
    (callback) => callback({
      coords: {
        latitude: 43.2996151,
        longitude: 1.9287062
      },
      timestamp: Date.now()
    })
})
