import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_pluginutils_58c61206 from 'nuxt_plugin_pluginutils_58c61206' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_163bb908 from 'nuxt_plugin_pluginrouting_163bb908' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_05670f67 from 'nuxt_plugin_pluginmain_05670f67' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_togglebuttonplugin371d27c6_7180cd10 from 'nuxt_plugin_togglebuttonplugin371d27c6_7180cd10' // Source: ./togglebutton.plugin.371d27c6.js (mode: 'all')
import nuxt_plugin_calendarplugin214d1ed5_a5f38f8a from 'nuxt_plugin_calendarplugin214d1ed5_a5f38f8a' // Source: ./calendar.plugin.214d1ed5.js (mode: 'all')
import nuxt_plugin_tooltipplugin050eb416_0ce52b9a from 'nuxt_plugin_tooltipplugin050eb416_0ce52b9a' // Source: ./tooltip.plugin.050eb416.js (mode: 'all')
import nuxt_plugin_dialogplugin692d54df_59ffd522 from 'nuxt_plugin_dialogplugin692d54df_59ffd522' // Source: ./dialog.plugin.692d54df.js (mode: 'all')
import nuxt_plugin_rowplugin7a1bcc2d_cdd4a100 from 'nuxt_plugin_rowplugin7a1bcc2d_cdd4a100' // Source: ./row.plugin.7a1bcc2d.js (mode: 'all')
import nuxt_plugin_columngroupplugin6bff767c_0e6ba3b2 from 'nuxt_plugin_columngroupplugin6bff767c_0e6ba3b2' // Source: ./columngroup.plugin.6bff767c.js (mode: 'all')
import nuxt_plugin_fileuploadplugin55a0bed4_120ce78e from 'nuxt_plugin_fileuploadplugin55a0bed4_120ce78e' // Source: ./fileupload.plugin.55a0bed4.js (mode: 'all')
import nuxt_plugin_toolbarplugin2c14798e_53c5b36e from 'nuxt_plugin_toolbarplugin2c14798e_53c5b36e' // Source: ./toolbar.plugin.2c14798e.js (mode: 'all')
import nuxt_plugin_dropdownpluginf61a8830_1dd7d202 from 'nuxt_plugin_dropdownpluginf61a8830_1dd7d202' // Source: ./dropdown.plugin.f61a8830.js (mode: 'all')
import nuxt_plugin_inputnumberplugin4df494a6_07304426 from 'nuxt_plugin_inputnumberplugin4df494a6_07304426' // Source: ./inputnumber.plugin.4df494a6.js (mode: 'all')
import nuxt_plugin_inputtextplugin0e3a58ec_174e7ccc from 'nuxt_plugin_inputtextplugin0e3a58ec_174e7ccc' // Source: ./inputtext.plugin.0e3a58ec.js (mode: 'all')
import nuxt_plugin_datatableplugin10a16492_46287d5d from 'nuxt_plugin_datatableplugin10a16492_46287d5d' // Source: ./datatable.plugin.10a16492.js (mode: 'all')
import nuxt_plugin_buttonplugin2621a249_55c05cfc from 'nuxt_plugin_buttonplugin2621a249_55c05cfc' // Source: ./button.plugin.2621a249.js (mode: 'all')
import nuxt_plugin_columnplugin867f1d26_492fd15a from 'nuxt_plugin_columnplugin867f1d26_492fd15a' // Source: ./column.plugin.867f1d26.js (mode: 'all')
import nuxt_plugin_configpluginripplef7f494d0_568322de from 'nuxt_plugin_configpluginripplef7f494d0_568322de' // Source: ./config.plugin-ripple.f7f494d0.js (mode: 'all')
import nuxt_plugin_googleanalytics_165c1a68 from 'nuxt_plugin_googleanalytics_165c1a68' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_axios_188e12fe from 'nuxt_plugin_axios_188e12fe' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_componentsglobal_65822712 from 'nuxt_plugin_componentsglobal_65822712' // Source: ../plugins/components.global.js (mode: 'all')
import nuxt_plugin_directivesclient_62899358 from 'nuxt_plugin_directivesclient_62899358' // Source: ../plugins/directives.client.js (mode: 'client')
import nuxt_plugin_filters_2dd71012 from 'nuxt_plugin_filters_2dd71012' // Source: ../plugins/filters.js (mode: 'all')
import nuxt_plugin_mixinsclient_17bef234 from 'nuxt_plugin_mixinsclient_17bef234' // Source: ../plugins/mixins.client.js (mode: 'client')
import nuxt_plugin_wavesclient_1c42c07c from 'nuxt_plugin_wavesclient_1c42c07c' // Source: ../plugins/waves.client.js (mode: 'client')
import nuxt_plugin_retinaclient_15ff09a2 from 'nuxt_plugin_retinaclient_15ff09a2' // Source: ../plugins/retina.client.js (mode: 'client')
import nuxt_plugin_vueVisibleclient_0d907940 from 'nuxt_plugin_vueVisibleclient_0d907940' // Source: ../plugins/vueVisible.client.js (mode: 'client')
import nuxt_plugin_vuegoogleapis_2fb356b0 from 'nuxt_plugin_vuegoogleapis_2fb356b0' // Source: ../plugins/vue-googleapis.js (mode: 'all')

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

  if (typeof nuxt_plugin_pluginutils_58c61206 === 'function') {
    await nuxt_plugin_pluginutils_58c61206(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_163bb908 === 'function') {
    await nuxt_plugin_pluginrouting_163bb908(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_05670f67 === 'function') {
    await nuxt_plugin_pluginmain_05670f67(app.context, inject)
  }

  if (typeof nuxt_plugin_togglebuttonplugin371d27c6_7180cd10 === 'function') {
    await nuxt_plugin_togglebuttonplugin371d27c6_7180cd10(app.context, inject)
  }

  if (typeof nuxt_plugin_calendarplugin214d1ed5_a5f38f8a === 'function') {
    await nuxt_plugin_calendarplugin214d1ed5_a5f38f8a(app.context, inject)
  }

  if (typeof nuxt_plugin_tooltipplugin050eb416_0ce52b9a === 'function') {
    await nuxt_plugin_tooltipplugin050eb416_0ce52b9a(app.context, inject)
  }

  if (typeof nuxt_plugin_dialogplugin692d54df_59ffd522 === 'function') {
    await nuxt_plugin_dialogplugin692d54df_59ffd522(app.context, inject)
  }

  if (typeof nuxt_plugin_rowplugin7a1bcc2d_cdd4a100 === 'function') {
    await nuxt_plugin_rowplugin7a1bcc2d_cdd4a100(app.context, inject)
  }

  if (typeof nuxt_plugin_columngroupplugin6bff767c_0e6ba3b2 === 'function') {
    await nuxt_plugin_columngroupplugin6bff767c_0e6ba3b2(app.context, inject)
  }

  if (typeof nuxt_plugin_fileuploadplugin55a0bed4_120ce78e === 'function') {
    await nuxt_plugin_fileuploadplugin55a0bed4_120ce78e(app.context, inject)
  }

  if (typeof nuxt_plugin_toolbarplugin2c14798e_53c5b36e === 'function') {
    await nuxt_plugin_toolbarplugin2c14798e_53c5b36e(app.context, inject)
  }

  if (typeof nuxt_plugin_dropdownpluginf61a8830_1dd7d202 === 'function') {
    await nuxt_plugin_dropdownpluginf61a8830_1dd7d202(app.context, inject)
  }

  if (typeof nuxt_plugin_inputnumberplugin4df494a6_07304426 === 'function') {
    await nuxt_plugin_inputnumberplugin4df494a6_07304426(app.context, inject)
  }

  if (typeof nuxt_plugin_inputtextplugin0e3a58ec_174e7ccc === 'function') {
    await nuxt_plugin_inputtextplugin0e3a58ec_174e7ccc(app.context, inject)
  }

  if (typeof nuxt_plugin_datatableplugin10a16492_46287d5d === 'function') {
    await nuxt_plugin_datatableplugin10a16492_46287d5d(app.context, inject)
  }

  if (typeof nuxt_plugin_buttonplugin2621a249_55c05cfc === 'function') {
    await nuxt_plugin_buttonplugin2621a249_55c05cfc(app.context, inject)
  }

  if (typeof nuxt_plugin_columnplugin867f1d26_492fd15a === 'function') {
    await nuxt_plugin_columnplugin867f1d26_492fd15a(app.context, inject)
  }

  if (typeof nuxt_plugin_configpluginripplef7f494d0_568322de === 'function') {
    await nuxt_plugin_configpluginripplef7f494d0_568322de(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_165c1a68 === 'function') {
    await nuxt_plugin_googleanalytics_165c1a68(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_188e12fe === 'function') {
    await nuxt_plugin_axios_188e12fe(app.context, inject)
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
