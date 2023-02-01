import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_pluginutils_c7f1556e from 'nuxt_plugin_pluginutils_c7f1556e' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_6d87b454 from 'nuxt_plugin_pluginrouting_6d87b454' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_4b5c90ca from 'nuxt_plugin_pluginmain_4b5c90ca' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_calendarplugin6d0595fc_66f3239c from 'nuxt_plugin_calendarplugin6d0595fc_66f3239c' // Source: .\\calendar.plugin.6d0595fc.js (mode: 'all')
import nuxt_plugin_rowplugin08268ea6_920ee734 from 'nuxt_plugin_rowplugin08268ea6_920ee734' // Source: .\\row.plugin.08268ea6.js (mode: 'all')
import nuxt_plugin_columngrouppluginb8765a16_449c013f from 'nuxt_plugin_columngrouppluginb8765a16_449c013f' // Source: .\\columngroup.plugin.b8765a16.js (mode: 'all')
import nuxt_plugin_fileuploadplugin48d2ce81_15d4ac7c from 'nuxt_plugin_fileuploadplugin48d2ce81_15d4ac7c' // Source: .\\fileupload.plugin.48d2ce81.js (mode: 'all')
import nuxt_plugin_toolbarplugind2f86df2_af4ca30e from 'nuxt_plugin_toolbarplugind2f86df2_af4ca30e' // Source: .\\toolbar.plugin.d2f86df2.js (mode: 'all')
import nuxt_plugin_dropdownplugin2d22d215_1ebc88de from 'nuxt_plugin_dropdownplugin2d22d215_1ebc88de' // Source: .\\dropdown.plugin.2d22d215.js (mode: 'all')
import nuxt_plugin_inputnumberpluginf48c1dc2_031feda0 from 'nuxt_plugin_inputnumberpluginf48c1dc2_031feda0' // Source: .\\inputnumber.plugin.f48c1dc2.js (mode: 'all')
import nuxt_plugin_inputtextplugin1b6af983_169aa50d from 'nuxt_plugin_inputtextplugin1b6af983_169aa50d' // Source: .\\inputtext.plugin.1b6af983.js (mode: 'all')
import nuxt_plugin_datatableplugin1a3773b0_73e4bc2c from 'nuxt_plugin_datatableplugin1a3773b0_73e4bc2c' // Source: .\\datatable.plugin.1a3773b0.js (mode: 'all')
import nuxt_plugin_buttonplugin7fc14214_7cd1a8d4 from 'nuxt_plugin_buttonplugin7fc14214_7cd1a8d4' // Source: .\\button.plugin.7fc14214.js (mode: 'all')
import nuxt_plugin_columnplugin56be2e1a_1683446e from 'nuxt_plugin_columnplugin56be2e1a_1683446e' // Source: .\\column.plugin.56be2e1a.js (mode: 'all')
import nuxt_plugin_configpluginripple98f0676a_29ff9d76 from 'nuxt_plugin_configpluginripple98f0676a_29ff9d76' // Source: .\\config.plugin-ripple.98f0676a.js (mode: 'all')
import nuxt_plugin_googleanalytics_a935817e from 'nuxt_plugin_googleanalytics_a935817e' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_axios_45ab7bc5 from 'nuxt_plugin_axios_45ab7bc5' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_componentsglobal_65822712 from 'nuxt_plugin_componentsglobal_65822712' // Source: ..\\plugins\\components.global.js (mode: 'all')
import nuxt_plugin_directivesclient_62899358 from 'nuxt_plugin_directivesclient_62899358' // Source: ..\\plugins\\directives.client.js (mode: 'client')
import nuxt_plugin_filters_2dd71012 from 'nuxt_plugin_filters_2dd71012' // Source: ..\\plugins\\filters.js (mode: 'all')
import nuxt_plugin_mixinsclient_17bef234 from 'nuxt_plugin_mixinsclient_17bef234' // Source: ..\\plugins\\mixins.client.js (mode: 'client')
import nuxt_plugin_wavesclient_1c42c07c from 'nuxt_plugin_wavesclient_1c42c07c' // Source: ..\\plugins\\waves.client.js (mode: 'client')
import nuxt_plugin_retinaclient_15ff09a2 from 'nuxt_plugin_retinaclient_15ff09a2' // Source: ..\\plugins\\retina.client.js (mode: 'client')
import nuxt_plugin_vueVisibleclient_0d907940 from 'nuxt_plugin_vueVisibleclient_0d907940' // Source: ..\\plugins\\vueVisible.client.js (mode: 'client')
import nuxt_plugin_vuegoogleapis_2fb356b0 from 'nuxt_plugin_vuegoogleapis_2fb356b0' // Source: ..\\plugins\\vue-googleapis.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"en"},"title":"HEKA","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Scutum Admin Template (Vue.js version)"}],"script":[{"src":"\u002Fvendor\u002Fuikit.min.js"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preload","href":"\u002Fvendor\u002Fuikit.min.js","as":"script"},{"rel":"preload","href":"\u002Ffonts\u002Froboto_base64.css","as":"style"},{"rel":"preload","href":"\u002Ffonts\u002FsourceCodePro_base64.css","as":"style"},{"rel":"preload","href":"\u002Ffonts\u002Fmdi\u002Fcss\u002Fmaterialdesignicons.css","as":"style"},{"rel":"stylesheet","href":"\u002Ffonts\u002Froboto_base64.css"},{"rel":"stylesheet","href":"\u002Ffonts\u002FsourceCodePro_base64.css"},{"rel":"stylesheet","href":"\u002Ffonts\u002Fmdi\u002Fcss\u002Fmaterialdesignicons.css"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_pluginutils_c7f1556e === 'function') {
    await nuxt_plugin_pluginutils_c7f1556e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_6d87b454 === 'function') {
    await nuxt_plugin_pluginrouting_6d87b454(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_4b5c90ca === 'function') {
    await nuxt_plugin_pluginmain_4b5c90ca(app.context, inject)
  }

  if (typeof nuxt_plugin_calendarplugin6d0595fc_66f3239c === 'function') {
    await nuxt_plugin_calendarplugin6d0595fc_66f3239c(app.context, inject)
  }

  if (typeof nuxt_plugin_rowplugin08268ea6_920ee734 === 'function') {
    await nuxt_plugin_rowplugin08268ea6_920ee734(app.context, inject)
  }

  if (typeof nuxt_plugin_columngrouppluginb8765a16_449c013f === 'function') {
    await nuxt_plugin_columngrouppluginb8765a16_449c013f(app.context, inject)
  }

  if (typeof nuxt_plugin_fileuploadplugin48d2ce81_15d4ac7c === 'function') {
    await nuxt_plugin_fileuploadplugin48d2ce81_15d4ac7c(app.context, inject)
  }

  if (typeof nuxt_plugin_toolbarplugind2f86df2_af4ca30e === 'function') {
    await nuxt_plugin_toolbarplugind2f86df2_af4ca30e(app.context, inject)
  }

  if (typeof nuxt_plugin_dropdownplugin2d22d215_1ebc88de === 'function') {
    await nuxt_plugin_dropdownplugin2d22d215_1ebc88de(app.context, inject)
  }

  if (typeof nuxt_plugin_inputnumberpluginf48c1dc2_031feda0 === 'function') {
    await nuxt_plugin_inputnumberpluginf48c1dc2_031feda0(app.context, inject)
  }

  if (typeof nuxt_plugin_inputtextplugin1b6af983_169aa50d === 'function') {
    await nuxt_plugin_inputtextplugin1b6af983_169aa50d(app.context, inject)
  }

  if (typeof nuxt_plugin_datatableplugin1a3773b0_73e4bc2c === 'function') {
    await nuxt_plugin_datatableplugin1a3773b0_73e4bc2c(app.context, inject)
  }

  if (typeof nuxt_plugin_buttonplugin7fc14214_7cd1a8d4 === 'function') {
    await nuxt_plugin_buttonplugin7fc14214_7cd1a8d4(app.context, inject)
  }

  if (typeof nuxt_plugin_columnplugin56be2e1a_1683446e === 'function') {
    await nuxt_plugin_columnplugin56be2e1a_1683446e(app.context, inject)
  }

  if (typeof nuxt_plugin_configpluginripple98f0676a_29ff9d76 === 'function') {
    await nuxt_plugin_configpluginripple98f0676a_29ff9d76(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_a935817e === 'function') {
    await nuxt_plugin_googleanalytics_a935817e(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_45ab7bc5 === 'function') {
    await nuxt_plugin_axios_45ab7bc5(app.context, inject)
  }

  if (typeof nuxt_plugin_componentsglobal_65822712 === 'function') {
    await nuxt_plugin_componentsglobal_65822712(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_directivesclient_62899358 === 'function') {
    await nuxt_plugin_directivesclient_62899358(app.context, inject)
  }

  if (typeof nuxt_plugin_filters_2dd71012 === 'function') {
    await nuxt_plugin_filters_2dd71012(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_mixinsclient_17bef234 === 'function') {
    await nuxt_plugin_mixinsclient_17bef234(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_wavesclient_1c42c07c === 'function') {
    await nuxt_plugin_wavesclient_1c42c07c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_retinaclient_15ff09a2 === 'function') {
    await nuxt_plugin_retinaclient_15ff09a2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueVisibleclient_0d907940 === 'function') {
    await nuxt_plugin_vueVisibleclient_0d907940(app.context, inject)
  }

  if (typeof nuxt_plugin_vuegoogleapis_2fb356b0 === 'function') {
    await nuxt_plugin_vuegoogleapis_2fb356b0(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
