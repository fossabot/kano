// Override defaults if env provided
const kargoDomain = (process.env.SUBDOMAIN ? process.env.SUBDOMAIN : 'test.kalisio.xyz')
const mapproxyUrl = (process.env.GATEWAY ? 'https://api.' + kargoDomain + '/mapproxy' : 'https://mapproxy.' + kargoDomain)
const k2Url = (process.env.GATEWAY ? 'https://api.' + kargoDomain + '/k2' : 'https://k2.' + kargoDomain)
const forecastZIndex = 300

module.exports = [
  {
    name: 'Sentinel 2',
    description: 'Cloudless',
    tags: [
      'imagery'
    ],
    iconUrl: `${mapproxyUrl}/wmts/s2/GLOBAL_WEBMERCATOR/0/0/0.jpeg`,
    icon: 'satellite',
    attribution: 'Sentinel-2 cloudless <a href="https://s2maps.eu">by EOX IT Services GmbH </a>',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      source: `${mapproxyUrl}/wmts/s2/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.jpeg`,
      maxZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      isVisible: true,
      fileExtension: 'jpeg',
      url: `${mapproxyUrl}/wmts/s2/GLOBAL_WEBMERCATOR`
    }
  },
  {
    name: 'OSM Bright',
    description: 'OpenStreetMap',
    tags: [
      'street'
    ],
    iconUrl: `${mapproxyUrl}/wmts/osm-bright/GLOBAL_WEBMERCATOR/0/0/0.png`,
    icon: 'streetview',
    attribution: 'OpenMapTiles © <a href="https://openmaptiles.com">OpenMapTiles</a> & OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      isVisible: true,
      source: `${mapproxyUrl}/wmts/osm-bright/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.png`,
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `${mapproxyUrl}/wmts/osm-bright/GLOBAL_WEBMERCATOR`
    }
  },
  {
    name: 'OSM Dark',
    description: 'OpenStreetMap',
    tags: [
      'street'
    ],
    iconUrl: `${mapproxyUrl}/wmts/osm-dark/GLOBAL_WEBMERCATOR/0/0/0.png`,
    icon: 'streetview',
    attribution: 'OpenMapTiles © <a href="https://openmaptiles.com">OpenMapTiles</a> & OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      source: `${mapproxyUrl}/wmts/osm-dark/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.png`,
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `${mapproxyUrl}/wmts/osm-dark/GLOBAL_WEBMERCATOR`
    }
  },
  {
    name: 'OSMT bright',
    description: 'OpenStreetMap & Terrain',
    tags: [
      'street',
      'terrain'
    ],
    iconUrl: `${mapproxyUrl}/wmts/osm-terrain-bright/GLOBAL_WEBMERCATOR/0/0/0.png`,
    icon: 'terrain',
    attribution: 'OpenMapTiles © <a href="https://openmaptiles.com">OpenMapTiles</a> & OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      source: `${mapproxyUrl}/wmts/osm-terrain-bright/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.png`,
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `${mapproxyUrl}/wmts/osm-terrain-bright/GLOBAL_WEBMERCATOR`
    }
  },
  {
    name: 'OSMT dark',
    description: 'OpenStreetMap & Terrain',
    tags: [
      'street',
      'terrain'
    ],
    iconUrl: `${mapproxyUrl}/wmts/osm-terrain-dark/GLOBAL_WEBMERCATOR/0/0/0.png`,
    icon: 'terrain',
    attribution: 'OpenMapTiles © <a href="https://openmaptiles.com">OpenMapTiles</a> & OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      source: `${mapproxyUrl}/wmts/osm-terrain-dark/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.png`,
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `${mapproxyUrl}/wmts/osm-terrain-dark/GLOBAL_WEBMERCATOR`
    }
  },
  {
    name: 'Mosaic',
    description: 'Mosaic',
    tags: [
      'street',
      'imagery'
    ],
    iconUrl: `${mapproxyUrl}/wmts/mosaic/GLOBAL_WEBMERCATOR/0/0/0.jpeg`,
    icon: 'terrain',
    attribution: 'BD Ortho <a href="http://www.ign.fr/">by IGN</a>, Sentinel-2 cloudless <a href="https://s2maps.eu">by EOX IT Services GmbH </a>, OpenMapTiles © <a href="https://openmaptiles.com">OpenMapTiles</a> & OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      source: `${mapproxyUrl}/wmts/mosaic/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.jpeg`,
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `${mapproxyUrl}/wmts/mosaic/GLOBAL_WEBMERCATOR`,
      fileExtension: 'jpeg'
    }
  },
  {
    name: 'WGS84',
    description: 'Standard Ellipsoid',
    tags: [
      'terrain'
    ],
    iconUrl: 'statics/Cesium/Widgets/Images/TerrainProviders/Ellipsoid.png',
    icon: 'fiber_manual_record',
    attribution: '',
    'default': true,
    type: 'TerrainLayer',
    cesium: {
      type: 'Ellipsoid',
      isVisible: true
    }
  },
  {
    name: 'Cesium Terrain',
    description: 'World-wide 30m',
    tags: [
      'terrain'
    ],
    iconUrl: 'statics/Cesium/Widgets/Images/TerrainProviders/CesiumWorldTerrain.png',
    icon: 'terrain',
    attribution: 'High-resolution, mesh-based terrain for the entire globe.\nBy https://cesiumjs.org',
    type: 'TerrainLayer',
    cesium: {
      type: 'Cesium',
      requestWaterMask: 'true',
      requestVertexNormals: 'true'
    }
  },
  {
    name: 'Kalisio Terrain',
    description: 'World-wide 30m',
    tags: [
      'terrain'
    ],
    iconUrl: 'statics/Cesium/Widgets/Images/TerrainProviders/CesiumWorldTerrain.png',
    icon: 'terrain',
    attribution: 'High-resolution, mesh-based terrain for the entire globe.\nBy http://www.kalisio.com',
    type: 'TerrainLayer',
    cesium: {
      type: 'Cesium',
      url: k2Url,
      requestWaterMask: 'true',
      requestVertexNormals: 'true'
    }
  },
  {
    name: 'Wind',
    description: 'Speed and direction',
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/wind.jpg',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'windSpeed',
        label: 'Variables.WIND_SPEED',
        units: [
          'm/s', 'km/h', 'kt'
        ],
        range: [0, 60],
        chartjs: {
          backgroundColor: 'rgba(255, 159, 64, 128)',
          borderColor: 'rgb(255, 159, 64)',
          fill: false
        },
        chromajs: {
          scale: 'RdYlBu',
          domain: [20, 3]
        }
      },
      {
        name: 'windDirection',
        label: 'Variables.WIND_DIRECTION',
        units: [
          'deg'
        ],
        chartjs: {
          backgroundColor: 'rgba(191, 191, 63, 128)',
          borderColor: 'rgb(191, 191, 63)',
          fill: false
        }
      }
    ],
    /* When available at different levels
    levels: {
      name: 'pressure',
      label: 'Levels.PRESSURE',
      units: [
        'mb'
      ],
      values: [ 1000, 700, 450, 300, 200 ]
    },*/
    leaflet: {
      type: 'weacast.flowLayer',
      elements: [
        'u-wind',
        'v-wind'
      ],
      lineWidth: 4,
      frameRate: 20,
      particleMultiplier: 0.001,
      displayValues: false,
      zIndex: forecastZIndex      
      /*
      displayOptions: {
        velocityType: 'Wind',
        position: 'bottomright',
        emptyString: 'No wind data',
        angleConvention: 'meteoCW',
        speedUnit: 'm/s'
      }
      */
    }
  },
  {
    name: 'Gust',
    description: 'Max wind speed',
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/gust.jpg',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'gust',
        label: 'Variables.WIND_GUST',
        units: [
          'm/s', 'km/h', 'kt'
        ],
        range: [0, 60],
        chartjs: {
          backgroundColor: 'rgba(255, 99, 132, 128)',
          borderColor: 'rgb(255, 99, 132)',
          fill: false
        },
        chromajs: {
          scale: 'OrRd'
        }
      }
    ],
    leaflet: {
      type: 'weacast.scalarLayer',
      elements: [
        'gust'
      ],
      zIndex: forecastZIndex,
      mesh: true
    }
  },
  {
    name: 'Precipitations',
    description: '3h accumulation',
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/precipitations.png',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'precipitations',
        label: 'Variables.PRECIPITATIONS',
        units: [
          'mm'
        ],
        range: [0, 300],
        chartjs: {
          backgroundColor: 'rgba(54, 162, 235, 128)',
          borderColor: 'rgb(54, 162, 235)',
          fill: false
        },
        chromajs: {
          scale: 'BuPu',
          classes: [
            0,
            1,
            2,
            4,
            10,
            25,
            50,
            100,
            300
          ]
        }
      }
    ],
    leaflet: {
      type: 'weacast.scalarLayer',
      elements: [
        'precipitations'
      ],
      zIndex: forecastZIndex,
      mesh: true
    }
  },
  {
    name: 'Temperature',
    description: 'Mean temperature',
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/temperature.png',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'temperature',
        label: 'Variables.TEMPERATURE',
        units: [
          'degC', 'degF', 'K'
        ],
        range: [0, 50],
        chartjs: {
          backgroundColor: 'rgba(255, 215, 0, 128)',
          borderColor: 'rgb(255, 215, 0)',
          fill: false
        },
        chromajs: {
          scale: 'RdBu',
          invertScale: true
        }
      }
    ],
    /* When available at different levels 
    levels: {
      name: 'pressure',
      label: 'Levels.PRESSURE',
      units: [
        'mb'
      ],
      values: [ 1000, 700, 450, 300, 200 ]
    },*/
    leaflet: {
      type: 'weacast.scalarLayer',
      elements: [
        'temperature'
      ],
      zIndex: forecastZIndex,
      mesh: true
    }
  },
  {
    name: 'Vigicrues',
    description: 'Carte de vigilance crues nationale',
    tags: [
      'measure'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/vigicrues-icon.png',
    attribution: '',
    type: 'OverlayLayer',
    featureId: 'gid',
    service: 'vigicrues',
    dbName: (process.env.DATA_DB_URL ? 'data' : undefined),
    leaflet: {
      type: 'geoJson',
      source: '/api/vigicrues',
      realtime: true,
      interval: 900000,
      popup: {
        pick: [
          'NomEntVigiCru'
        ]
      }
    },
    cesium: {
      type: 'geoJson',
      source: '/api/vigicrues',
      realtime: true,
      interval: 900000,
      popup: {
        pick: [
          'NomEntVigiCru'
        ]
      }
    }
  },
  /* tiled mesh layer examples */
  {
    name: 'Flood map',
    description: 'Water level elevation map',
    tags: [
      'measure'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/vigicrues-icon.png',
    attribution: 'bla bla',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'temperature',
        label: 'Variables.TEMPERATURE',
        units: [
          'degC', 'degF', 'K'
        ],
        chartjs: {
          backgroundColor: 'rgba(255, 215, 0, 128)',
          borderColor: 'rgb(255, 215, 0)',
          fill: false
        },
        chromajs: {
          scale: 'RdYlBu',
          invertScale: true,
          domain: [ 0, 800 ]
        }
      }
    ],
    levels: {
      name: 'waterLevel',
      label: 'Levels.WATER',
      units: [ 'm' ],
      values: [ 0, 20, 50, 100, 150 ]
    },
    wcs: {
      url: 'https://mapserver.dev.kalisio.xyz/cgi-bin/ows', // wcs server url
      coverage: 'srtm'                                      // coverage name to request
    },
    /*
    opendap: {
      // url: 'https://thredds.irsn.kalisio.xyz/thredds/dodsC/mf-arpege-05/2019/06/14/12/T6086_G_T_Hau_20190614120000.grib',
      // query: 'Temperature_height_above_ground',
      // dimensions: { time: 0, height_above_ground: 0 },
      url: 'https://thredds.irsn.kalisio.xyz/thredds/dodsC/mf-arpege-01/2019/06/15/11360000000.20190615180000.grib',
      // query: 'Temperature_surface',
      // dimensions: { time2: 0 },
      query: 'Temperature_height_above_ground',
      dimensions: { time2: 0, height_above_ground1: 0 },
      // query: 'u-component_of_wind_height_above_ground',
      // dimensions: { time2: 0, height_above_ground: 0},
      // query: 'Wind_speed_height_above_ground',
      // dimensions: { time2: 0, height_above_ground2: 0},
      // query: 'High_cloud_cover_surface',
      // dimensions: { time2: 0 },
      latitude: 'lat',
      longitude: 'lon'
    },
    */
    leaflet: {
      type: 'tiledMeshLayer',
      resolutionScale: [ 2.0, 2.0 ],
      opacity: 0.6,                       // layer opacity
      // fillColor: [1.0, 0.0, 0.0, 1.0], // rgba value to use as fill color for the data (no color map will be used)
      // cutOver: 'waterLevel',              // value or level name to use as input to cutOver value
      // cutUnder: 100,                   // value or level name to use as input to cutUnde value
    },
  },
  {
    name: 'Hub\'Eau Hydrométrie',
    description: 'Données hydrométriques',
    tags: [
      'measure'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/hubeau-hydrometrie-icon.png',
    attribution: '',
    type: 'OverlayLayer',
    service: 'hubeau-observations',
    dbName: (process.env.DATA_DB_URL ? 'data' : undefined),
    probeService: 'hubeau-stations',
    featureId: 'code_station',
    history: 604800,
    variables: [
      {
        name: 'H',
        label: 'Variables.H',
        units: [
          'm'
        ],
        range: [0, 10],
        chartjs: {
          backgroundColor: 'rgba(63, 63, 191, 128)',
          borderColor: 'rgb(63, 63, 191)',
          fill: false
        }
      },
      {
        name: 'Q',
        label: 'Variables.Q',
        units: [
          'm3/s'
        ],
        range: [0, 1000],
        chartjs: {
          backgroundColor: 'rgba(54, 162, 235, 128)',
          borderColor: 'rgb(54, 162, 235)',
          fill: false
        }
      }
    ],
    leaflet: {
      type: 'geoJson',
      source: '/api/hubeaus-observations',
      realtime: true,
      interval: 900000,
      cluster: { disableClusteringAtZoom: 18 },
      'marker-color': '#00a9ce',
      'icon-color': 'white',
      'icon-classes': 'fa fa-tint',
      popup: {
        pick: [
          'name'
        ]
      },
      tooltip: {
        template: `<% if (properties.H) { %>H = <%= properties.H.toFixed(2) %> m<% }
                   if (feature.time && feature.time.H) { %></br><%= new Date(feature.time.H).toLocaleString() %><% }
                   if (properties.Q) { %></br>Q = <%= properties.Q.toFixed(2) %> m3/s<% }
                   if (feature.time && feature.time.Q) { %></br><%= new Date(feature.time.Q).toLocaleString() %><% } %>`
      }
    },
    cesium: {
      type: 'geoJson',
      source: '/api/hubeau-observations',
      realtime: true,
      interval: 900000,
      cluster: { pixelRange: 50 },
      'marker-symbol': 'water',
      'marker-color': '#00a9ce',
      popup: {
        pick: [
          'libelle_station'
        ]
      },
      tooltip: {
        template: `<% if (properties.H) { %>H = <%= properties.H.toFixed(2) %> m<% }
                   if (feature.time && feature.time.H) { %>\n<%= new Date(feature.time.H).toLocaleString() %><% }
                   if (properties.Q) { %>\nQ = <%= properties.Q.toFixed(2) %> m3/s<% }
                   if (feature.time && feature.time.Q) { %>\n<%= new Date(feature.time.Q).toLocaleString() %><% } %>`
      }
    }
  },
  {
    name: 'OpenAQ',
    description: 'Air Quality data',
    tags: [
      'measure'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/openaq-icon.png',
    attribution: '',
    type: 'OverlayLayer',
    service: 'openaq',
    dbName: (process.env.DATA_DB_URL ? 'data' : undefined),
    featureId: 'location',
    history: 604800,
    variables: [
      {
        name: 'pm25',
        label: 'Variables.PM25',
        units: [
          'µg/m³'
        ],
        range: [0, 100],
        chartjs: {
          backgroundColor: 'rgba(11, 117, 169, 128)',
          borderColor: 'rgb(11, 117, 169)',
          fill: false
        }
      },
      {
        name: 'pm10',
        label: 'Variables.PM10',
        units: [
          'µg/m³'
        ],
        range: [0, 200],
        chartjs: {
          backgroundColor: 'rgba(63, 63, 191, 128)',
          borderColor: 'rgb(63, 63, 191)',
          fill: false
        }
      },
      {
        name: 'co',
        label: 'Variables.CO',
        units: [
          'ppm'
        ],
        range: [0, 10000],
        chartjs: {
          backgroundColor: 'rgba(255, 99, 132, 128)',
          borderColor: 'rgb(255, 99, 132)',
          fill: false
        }
      },
      {
        name: 'no2',
        label: 'Variables.NO2',
        units: [
          'ppm'
        ],
        range: [0, 400],
        chartjs: {
          backgroundColor: 'rgba(81, 186, 153, 128)',
          borderColor: 'rgb(81, 186, 153)',
          fill: false
        }
      },
      {
        name: 'so2',
        label: 'Variables.SO2',
        units: [
          'ppm'
        ],
        range: [0, 500],
        chartjs: {
          backgroundColor: 'rgba(40, 44, 32, 128)',
          borderColor: 'rgb(40, 44, 32)',
          fill: false
        }
      },
      {
        name: 'o3',
        label: 'Variables.O3',
        units: [
          'ppm'
        ],
        range: [0, 400],
        chartjs: {
          backgroundColor: 'rgba(83, 134, 106, 128)',
          borderColor: 'rgb(83, 134, 106)',
          fill: false
        }
      },
      {
        name: 'bc',
        label: 'Variables.BC',
        units: [
          'µg/m³'
        ],
        range: [0, 400],
        chartjs: {
          backgroundColor: 'rgba(0, 0, 0, 128)',
          borderColor: 'rgb(0, 0, 0)',
          fill: false
        }
      }
    ],
    leaflet: {
      type: 'geoJson',
      source: '/api/openaq',
      realtime: true,
      interval: 900000,
      queryInterval: 86400000,
      cluster: { disableClusteringAtZoom: 18 },
      'marker-color': '#0B75A9',
      'icon-color': 'white',
      'icon-classes': 'fa fa-heartbeat',
      popup: {
        pick: [
          'location'
        ]
      },
      tooltip: {
        template: `<% if (properties.pm25) { %>PM2.5 = <%= properties.pm25.toFixed(2) %> µg/m³<% }
                   if (feature.time && feature.time.pm25) { %></br><%= new Date(feature.time.pm25).toLocaleString() %><% }
                   if (properties.pm10) { %></br>PM10 = <%= properties.pm10.toFixed(2) %> µg/m³<% }
                   if (feature.time && feature.time.pm10) { %></br><%= new Date(feature.time.pm10).toLocaleString() %><% }
                   if (properties.so2) { %></br>SO2 = <%= properties.so2.toFixed(2) %> ppm<% }
                   if (feature.time && feature.time.so2) { %></br><%= new Date(feature.time.so2).toLocaleString() %><% }
                   if (properties.no2) { %></br>NO2 = <%= properties.no2.toFixed(2) %> ppm<% }
                   if (feature.time && feature.time.no2) { %></br><%= new Date(feature.time.no2).toLocaleString() %><% }
                   if (properties.o3) { %></br>O3 = <%= properties.o3.toFixed(2) %> ppm<% }
                   if (feature.time && feature.time.o3) { %></br><%= new Date(feature.time.o3).toLocaleString() %><% }
                   if (properties.co) { %></br>CO = <%= properties.co.toFixed(2) %> ppm<% }
                   if (feature.time && feature.time.co) { %></br><%= new Date(feature.time.co).toLocaleString() %><% }
                   if (properties.bc) { %></br>BC = <%= properties.bc.toFixed(2) %> µg/m³<% }
                   if (feature.time && feature.time.bc) { %></br><%= new Date(feature.time.bc).toLocaleString() %><% } %>`
      }
    },
    cesium: {
      type: 'geoJson',
      source: '/api/openaq',
      realtime: true,
      interval: 900000,
      queryInterval: 86400000 * 2,
      cluster: { pixelRange: 50 },
      'marker-symbol': 'air',
      'marker-color': '#0B75A9',
      popup: {
        pick: [
          'location'
        ]
      },
      tooltip: {
        template: `<% if (properties.pm25) { %>PM2.5 = <%= properties.pm25.toFixed(2) %> µg/m³<% }
                   if (properties.pm10) { %>\nPM10 = <%= properties.pm10.toFixed(2) %> µg/m³<% }
                   if (properties.so2) { %>\nSO2 = <%= properties.so2.toFixed(2) %> ppm<% }
                   if (properties.no2) { %>\nNO2 = <%= properties.no2.toFixed(2) %> ppm<% }
                   if (properties.o3) { %>\nO3 = <%= properties.o3.toFixed(2) %> ppm<% }
                   if (properties.co) { %>\nCO = <%= properties.co.toFixed(2) %> ppm<% }
                   if (properties.bc) { %>\nBC = <%= properties.bc.toFixed(2) %> µg/m³<% } %>`
      }
    }
  },
  {
    name: 'Téléray',
    description: 'Débit de dose gamma ambiant',
    tags: [
      'measure'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/teleray-icon.jpg',
    attribution: '',
    type: 'OverlayLayer',
    service: 'teleray',
    dbName: (process.env.DATA_DB_URL ? 'data' : undefined),
    featureId: 'irsnId',
    history: 604800,
    variables: [
      {
        name: 'value',
        label: 'Variables.GAMMA_DOSE_RATE',
        units: [
          'nSv/h'
        ],
        range: [0, 500],
        chartjs: {
          backgroundColor: 'rgba(11, 117, 169, 128)',
          borderColor: 'rgb(11, 117, 169)',
          fill: false
        }
      }
    ],
    leaflet: {
      type: 'geoJson',
      source: '/api/teleray',
      realtime: true,
      interval: 600000,
      queryInterval: 3600000,
      cluster: { disableClusteringAtZoom: 18 },
      'marker-color': `<% if (properties.libelle === "VA") { %>darkblue<% }
                          else if (properties.visibility === "NV") { %>orange<% }
                          else { %>dark<% } %>`,
      'icon-classes': `<% if (properties.libelle === "VA") { %>fa fa-info-circle<% }
                          else if (properties.visibility === "NV") { %>fa fa-question-circle<% }
                          else { %>fa fa-times-circle<% } %>`,
      'icon-color': '#FFF',
      template: ['marker-color', 'icon-classes'],
      popup: {
        pick: [
          'name'
        ]
      },
      tooltip: {
        template: `<% if (properties.value) { %>Dose = <%= properties.value.toFixed(2) %> nSv/h</br>
                   <%= new Date(properties.measureDateFormatted).toLocaleString() %><% } %>`
      }
    },
    cesium: {
      type: 'geoJson',
      source: '/api/teleray',
      realtime: true,
      interval: 600000,
      queryInterval: 3600000,
      cluster: { pixelRange: 50 },
      'marker-symbol': 'lighthouse',
      'marker-color': '#180EF1',
      popup: {
        pick: [
          'name'
        ]
      },
      tooltip: {
        template: `<% if (properties.value) { %>Dose = <%= properties.value.toFixed(2) %> nSv/h\n
                   <%= new Date(properties.measureDateFormatted).toLocaleString() %><% } %>`
      }
    }
  }
]
