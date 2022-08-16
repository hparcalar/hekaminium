import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1bb89a48 = () => interopDefault(import('../pages/account_auth.vue' /* webpackChunkName: "pages/account_auth" */))
const _e06c81ba = () => interopDefault(import('../pages/firm/index.vue' /* webpackChunkName: "pages/firm/index" */))
const _2a2ade7e = () => interopDefault(import('../pages/firm-category/index.vue' /* webpackChunkName: "pages/firm-category/index" */))
const _50add507 = () => interopDefault(import('../pages/login_page.vue' /* webpackChunkName: "pages/login_page" */))
const _daaa8ee0 = () => interopDefault(import('../pages/login_page_auth.vue' /* webpackChunkName: "pages/login_page_auth" */))
const _63adc9bc = () => interopDefault(import('../pages/plant/index.vue' /* webpackChunkName: "pages/plant/index" */))
const _1bd76a17 = () => interopDefault(import('../pages/project-category/index.vue' /* webpackChunkName: "pages/project-category/index" */))
const _a5b0011e = () => interopDefault(import('../pages/components/accordion.vue' /* webpackChunkName: "pages/components/accordion" */))
const _0abd0a05 = () => interopDefault(import('../pages/components/alert.vue' /* webpackChunkName: "pages/components/alert" */))
const _4aebbf16 = () => interopDefault(import('../pages/components/animations.vue' /* webpackChunkName: "pages/components/animations" */))
const _404ae8ba = () => interopDefault(import('../pages/components/avatars.vue' /* webpackChunkName: "pages/components/avatars" */))
const _33e1ed7e = () => interopDefault(import('../pages/components/badge_label.vue' /* webpackChunkName: "pages/components/badge_label" */))
const _f8947290 = () => interopDefault(import('../pages/components/base.vue' /* webpackChunkName: "pages/components/base" */))
const _9959a0ac = () => interopDefault(import('../pages/components/breadcrumb.vue' /* webpackChunkName: "pages/components/breadcrumb" */))
const _5f4de56a = () => interopDefault(import('../pages/components/buttons.vue' /* webpackChunkName: "pages/components/buttons" */))
const _54580c8c = () => interopDefault(import('../pages/components/cards.vue' /* webpackChunkName: "pages/components/cards" */))
const _7b5b5fc8 = () => interopDefault(import('../pages/components/color_palette.vue' /* webpackChunkName: "pages/components/color_palette" */))
const _b5368c4e = () => interopDefault(import('../pages/components/drop_dropdowns.vue' /* webpackChunkName: "pages/components/drop_dropdowns" */))
const _ec57a89c = () => interopDefault(import('../pages/components/fab_buttons.vue' /* webpackChunkName: "pages/components/fab_buttons" */))
const _6393de90 = () => interopDefault(import('../pages/components/fancy_footer.vue' /* webpackChunkName: "pages/components/fancy_footer" */))
const _25ecdb2e = () => interopDefault(import('../pages/components/fancy_toolbar.vue' /* webpackChunkName: "pages/components/fancy_toolbar" */))
const _d9be0638 = () => interopDefault(import('../pages/components/filters.vue' /* webpackChunkName: "pages/components/filters" */))
const _31bdc8c2 = () => interopDefault(import('../pages/components/footer.vue' /* webpackChunkName: "pages/components/footer" */))
const _0571eea6 = () => interopDefault(import('../pages/components/grid.vue' /* webpackChunkName: "pages/components/grid" */))
const _35e6fe4e = () => interopDefault(import('../pages/components/height.vue' /* webpackChunkName: "pages/components/height" */))
const _1012c4c3 = () => interopDefault(import('../pages/components/icons.vue' /* webpackChunkName: "pages/components/icons" */))
const _19fd1fbe = () => interopDefault(import('../pages/components/lists.vue' /* webpackChunkName: "pages/components/lists" */))
const _3407bba4 = () => interopDefault(import('../pages/components/masonry.vue' /* webpackChunkName: "pages/components/masonry" */))
const _68816e0e = () => interopDefault(import('../pages/components/modals_dialogs.vue' /* webpackChunkName: "pages/components/modals_dialogs" */))
const _3530ce91 = () => interopDefault(import('../pages/components/notifications.vue' /* webpackChunkName: "pages/components/notifications" */))
const _a23b2a8e = () => interopDefault(import('../pages/components/overlay.vue' /* webpackChunkName: "pages/components/overlay" */))
const _aeacd87e = () => interopDefault(import('../pages/components/pagination.vue' /* webpackChunkName: "pages/components/pagination" */))
const _d27ccb16 = () => interopDefault(import('../pages/components/progress_spinners.vue' /* webpackChunkName: "pages/components/progress_spinners" */))
const _4605db4e = () => interopDefault(import('../pages/components/scrollable.vue' /* webpackChunkName: "pages/components/scrollable" */))
const _1f007908 = () => interopDefault(import('../pages/components/slider.vue' /* webpackChunkName: "pages/components/slider" */))
const _7524e0df = () => interopDefault(import('../pages/components/sortable.vue' /* webpackChunkName: "pages/components/sortable" */))
const _0fab43ac = () => interopDefault(import('../pages/components/swipe_list.vue' /* webpackChunkName: "pages/components/swipe_list" */))
const _f71e46e8 = () => interopDefault(import('../pages/components/tables.vue' /* webpackChunkName: "pages/components/tables" */))
const _95645636 = () => interopDefault(import('../pages/components/tabs.vue' /* webpackChunkName: "pages/components/tabs" */))
const _766adca8 = () => interopDefault(import('../pages/components/timeline.vue' /* webpackChunkName: "pages/components/timeline" */))
const _335c2464 = () => interopDefault(import('../pages/components/toolbar.vue' /* webpackChunkName: "pages/components/toolbar" */))
const _2d7159b7 = () => interopDefault(import('../pages/components/tooltips.vue' /* webpackChunkName: "pages/components/tooltips" */))
const _1cf4a6b2 = () => interopDefault(import('../pages/components/transitions.vue' /* webpackChunkName: "pages/components/transitions" */))
const _5ed5696f = () => interopDefault(import('../pages/components/width.vue' /* webpackChunkName: "pages/components/width" */))
const _1ed22038 = () => interopDefault(import('../pages/dashboard/v1.vue' /* webpackChunkName: "pages/dashboard/v1" */))
const _1ee037b9 = () => interopDefault(import('../pages/dashboard/v2.vue' /* webpackChunkName: "pages/dashboard/v2" */))
const _6bd455a2 = () => interopDefault(import('../pages/firm-category/list.vue' /* webpackChunkName: "pages/firm-category/list" */))
const _5b976746 = () => interopDefault(import('../pages/firm/list.vue' /* webpackChunkName: "pages/firm/list" */))
const _30ce197b = () => interopDefault(import('../pages/forms/dynamic_fields.vue' /* webpackChunkName: "pages/forms/dynamic_fields" */))
const _69dd69fc = () => interopDefault(import('../pages/forms/regular_elements.vue' /* webpackChunkName: "pages/forms/regular_elements" */))
const _f67d7f8a = () => interopDefault(import('../pages/forms/validation.vue' /* webpackChunkName: "pages/forms/validation" */))
const _3b0a4da6 = () => interopDefault(import('../pages/forms/wizard.vue' /* webpackChunkName: "pages/forms/wizard" */))
const _b5a11afa = () => interopDefault(import('../pages/forms/wizard/step1.vue' /* webpackChunkName: "pages/forms/wizard/step1" */))
const _b584ebf8 = () => interopDefault(import('../pages/forms/wizard/step2.vue' /* webpackChunkName: "pages/forms/wizard/step2" */))
const _b568bcf6 = () => interopDefault(import('../pages/forms/wizard/step3.vue' /* webpackChunkName: "pages/forms/wizard/step3" */))
const _235e5d32 = () => interopDefault(import('../pages/layout/boxed.vue' /* webpackChunkName: "pages/layout/boxed" */))
const _1d592447 = () => interopDefault(import('../pages/layout/mini_sidebar.vue' /* webpackChunkName: "pages/layout/mini_sidebar" */))
const _0006803e = () => interopDefault(import('../pages/layout/offcanvas_sidebar.vue' /* webpackChunkName: "pages/layout/offcanvas_sidebar" */))
const _741b31dc = () => interopDefault(import('../pages/layout/top_menu.vue' /* webpackChunkName: "pages/layout/top_menu" */))
const _0335c952 = () => interopDefault(import('../pages/pages/blank.vue' /* webpackChunkName: "pages/pages/blank" */))
const _0752717a = () => interopDefault(import('../pages/pages/blank_header_expanded.vue' /* webpackChunkName: "pages/pages/blank_header_expanded" */))
const _d71641b6 = () => interopDefault(import('../pages/pages/chat.vue' /* webpackChunkName: "pages/pages/chat" */))
const _35f795aa = () => interopDefault(import('../pages/pages/contact_list.vue' /* webpackChunkName: "pages/pages/contact_list" */))
const _43fde5a6 = () => interopDefault(import('../pages/pages/contact_list_single.vue' /* webpackChunkName: "pages/pages/contact_list_single" */))
const _138f4648 = () => interopDefault(import('../pages/pages/data_visualization.vue' /* webpackChunkName: "pages/pages/data_visualization" */))
const _28b82395 = () => interopDefault(import('../pages/pages/gallery.vue' /* webpackChunkName: "pages/pages/gallery" */))
const _e9a86b36 = () => interopDefault(import('../pages/pages/help_faq.vue' /* webpackChunkName: "pages/pages/help_faq" */))
const _3c8a5533 = () => interopDefault(import('../pages/pages/invoices.vue' /* webpackChunkName: "pages/pages/invoices" */))
const _3c60e976 = () => interopDefault(import('../pages/pages/invoices/index.vue' /* webpackChunkName: "pages/pages/invoices/index" */))
const _3e9ca644 = () => interopDefault(import('../pages/pages/invoices/new.vue' /* webpackChunkName: "pages/pages/invoices/new" */))
const _2ae6d15e = () => interopDefault(import('../pages/pages/invoices/_id.vue' /* webpackChunkName: "pages/pages/invoices/_id" */))
const _43aec447 = () => interopDefault(import('../pages/pages/issues.vue' /* webpackChunkName: "pages/pages/issues" */))
const _022502fa = () => interopDefault(import('../pages/pages/issues/details.vue' /* webpackChunkName: "pages/pages/issues/details" */))
const _245743a5 = () => interopDefault(import('../pages/pages/issues/details/_id.vue' /* webpackChunkName: "pages/pages/issues/details/_id" */))
const _1dc22dd4 = () => interopDefault(import('../pages/pages/issues/list.vue' /* webpackChunkName: "pages/pages/issues/list" */))
const _4567b3f7 = () => interopDefault(import('../pages/pages/mailbox.vue' /* webpackChunkName: "pages/pages/mailbox" */))
const _7585253a = () => interopDefault(import('../pages/pages/mailbox/index.vue' /* webpackChunkName: "pages/pages/mailbox/index" */))
const _352ccc0c = () => interopDefault(import('../pages/pages/mailbox/compose.vue' /* webpackChunkName: "pages/pages/mailbox/compose" */))
const _48d6b7cc = () => interopDefault(import('../pages/pages/mailbox/message/_id.vue' /* webpackChunkName: "pages/pages/mailbox/message/_id" */))
const _07695a44 = () => interopDefault(import('../pages/pages/notes.vue' /* webpackChunkName: "pages/pages/notes" */))
const _039f21d2 = () => interopDefault(import('../pages/pages/poi_listing.vue' /* webpackChunkName: "pages/pages/poi_listing" */))
const _40ff88ea = () => interopDefault(import('../pages/pages/pricing_tables.vue' /* webpackChunkName: "pages/pages/pricing_tables" */))
const _d8fbf020 = () => interopDefault(import('../pages/pages/settings.vue' /* webpackChunkName: "pages/pages/settings" */))
const _1ae715b9 = () => interopDefault(import('../pages/pages/task_board.vue' /* webpackChunkName: "pages/pages/task_board" */))
const _0bb63182 = () => interopDefault(import('../pages/pages/user_profile.vue' /* webpackChunkName: "pages/pages/user_profile" */))
const _5e6feab8 = () => interopDefault(import('../pages/plant/list.vue' /* webpackChunkName: "pages/plant/list" */))
const _3d053f11 = () => interopDefault(import('../pages/plugins/ajax.vue' /* webpackChunkName: "pages/plugins/ajax" */))
const _1b71f4af = () => interopDefault(import('../pages/plugins/calendar.vue' /* webpackChunkName: "pages/plugins/calendar" */))
const _57963ad9 = () => interopDefault(import('../pages/plugins/calendar_events.vue' /* webpackChunkName: "pages/plugins/calendar_events" */))
const _0a7f5c86 = () => interopDefault(import('../pages/plugins/charts.vue' /* webpackChunkName: "pages/plugins/charts" */))
const _73b8669e = () => interopDefault(import('../pages/plugins/code_editor.vue' /* webpackChunkName: "pages/plugins/code_editor" */))
const _15b7111a = () => interopDefault(import('../pages/plugins/data_grid.vue' /* webpackChunkName: "pages/plugins/data_grid" */))
const _57971d40 = () => interopDefault(import('../pages/plugins/datatables.vue' /* webpackChunkName: "pages/plugins/datatables" */))
const _b2c7df1e = () => interopDefault(import('../pages/plugins/diff_tool.vue' /* webpackChunkName: "pages/plugins/diff_tool" */))
const _42d6965c = () => interopDefault(import('../pages/plugins/gantt_chart.vue' /* webpackChunkName: "pages/plugins/gantt_chart" */))
const _eeba6f08 = () => interopDefault(import('../pages/plugins/google_maps.vue' /* webpackChunkName: "pages/plugins/google_maps" */))
const _41ce68e7 = () => interopDefault(import('../pages/plugins/idle_timeout.vue' /* webpackChunkName: "pages/plugins/idle_timeout" */))
const _1f135188 = () => interopDefault(import('../pages/plugins/image_cropper.vue' /* webpackChunkName: "pages/plugins/image_cropper" */))
const _28649798 = () => interopDefault(import('../pages/plugins/push_notifications.vue' /* webpackChunkName: "pages/plugins/push_notifications" */))
const _1d071b49 = () => interopDefault(import('../pages/plugins/tour.vue' /* webpackChunkName: "pages/plugins/tour" */))
const _c095dce2 = () => interopDefault(import('../pages/plugins/tree.vue' /* webpackChunkName: "pages/plugins/tree" */))
const _561e10b2 = () => interopDefault(import('../pages/plugins/vector_maps.vue' /* webpackChunkName: "pages/plugins/vector_maps" */))
const _2f780156 = () => interopDefault(import('../pages/plugins/vue_good_table.vue' /* webpackChunkName: "pages/plugins/vue_good_table" */))
const _210b72e9 = () => interopDefault(import('../pages/project-category/list.vue' /* webpackChunkName: "pages/project-category/list" */))
const _2a1c833c = () => interopDefault(import('../pages/forms/advanced_elements/checkbox_radio.vue' /* webpackChunkName: "pages/forms/advanced_elements/checkbox_radio" */))
const _3629d767 = () => interopDefault(import('../pages/forms/advanced_elements/color_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/color_picker" */))
const _1e60b05c = () => interopDefault(import('../pages/forms/advanced_elements/date_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_picker" */))
const _669a1b14 = () => interopDefault(import('../pages/forms/advanced_elements/date_range_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_range_picker" */))
const _1ac3aaee = () => interopDefault(import('../pages/forms/advanced_elements/inputmask.vue' /* webpackChunkName: "pages/forms/advanced_elements/inputmask" */))
const _fdc83bf0 = () => interopDefault(import('../pages/forms/advanced_elements/multiselect.vue' /* webpackChunkName: "pages/forms/advanced_elements/multiselect" */))
const _05f91020 = () => interopDefault(import('../pages/forms/advanced_elements/range_slider.vue' /* webpackChunkName: "pages/forms/advanced_elements/range_slider" */))
const _3cf4765a = () => interopDefault(import('../pages/forms/advanced_elements/rating.vue' /* webpackChunkName: "pages/forms/advanced_elements/rating" */))
const _565ebe49 = () => interopDefault(import('../pages/forms/advanced_elements/select2.vue' /* webpackChunkName: "pages/forms/advanced_elements/select2" */))
const _bec86842 = () => interopDefault(import('../pages/forms/advanced_elements/switches.vue' /* webpackChunkName: "pages/forms/advanced_elements/switches" */))
const _17df6b53 = () => interopDefault(import('../pages/forms/advanced_elements/time_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/time_picker" */))
const _b2dd9e70 = () => interopDefault(import('../pages/forms/examples/advertising_evaluation_form.vue' /* webpackChunkName: "pages/forms/examples/advertising_evaluation_form" */))
const _37f838c4 = () => interopDefault(import('../pages/forms/examples/booking_form.vue' /* webpackChunkName: "pages/forms/examples/booking_form" */))
const _13efcde0 = () => interopDefault(import('../pages/forms/examples/car_rental_form.vue' /* webpackChunkName: "pages/forms/examples/car_rental_form" */))
const _0770aace = () => interopDefault(import('../pages/forms/examples/checkout_form.vue' /* webpackChunkName: "pages/forms/examples/checkout_form" */))
const _4ea1804c = () => interopDefault(import('../pages/forms/examples/contact_forms.vue' /* webpackChunkName: "pages/forms/examples/contact_forms" */))
const _5b5e506e = () => interopDefault(import('../pages/forms/examples/job_application_form.vue' /* webpackChunkName: "pages/forms/examples/job_application_form" */))
const _ec154c9e = () => interopDefault(import('../pages/forms/examples/medical_history_form.vue' /* webpackChunkName: "pages/forms/examples/medical_history_form" */))
const _3b0f6e86 = () => interopDefault(import('../pages/forms/examples/registration_form.vue' /* webpackChunkName: "pages/forms/examples/registration_form" */))
const _0677ad0a = () => interopDefault(import('../pages/forms/examples/rental_application_form.vue' /* webpackChunkName: "pages/forms/examples/rental_application_form" */))
const _47ed2e19 = () => interopDefault(import('../pages/forms/examples/transaction_feedback_form.vue' /* webpackChunkName: "pages/forms/examples/transaction_feedback_form" */))
const _1a97ead9 = () => interopDefault(import('../pages/forms/wysiwyg/ckeditor.vue' /* webpackChunkName: "pages/forms/wysiwyg/ckeditor" */))
const _6362abb1 = () => interopDefault(import('../pages/forms/wysiwyg/quill.vue' /* webpackChunkName: "pages/forms/wysiwyg/quill" */))
const _311db640 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account_auth",
    component: _1bb89a48,
    name: "account_auth"
  }, {
    path: "/firm",
    component: _e06c81ba,
    name: "firm"
  }, {
    path: "/firm-category",
    component: _2a2ade7e,
    name: "firm-category"
  }, {
    path: "/login_page",
    component: _50add507,
    name: "login_page"
  }, {
    path: "/login_page_auth",
    component: _daaa8ee0,
    name: "login_page_auth"
  }, {
    path: "/plant",
    component: _63adc9bc,
    name: "plant"
  }, {
    path: "/project-category",
    component: _1bd76a17,
    name: "project-category"
  }, {
    path: "/components/accordion",
    component: _a5b0011e,
    name: "components-accordion"
  }, {
    path: "/components/alert",
    component: _0abd0a05,
    name: "components-alert"
  }, {
    path: "/components/animations",
    component: _4aebbf16,
    name: "components-animations"
  }, {
    path: "/components/avatars",
    component: _404ae8ba,
    name: "components-avatars"
  }, {
    path: "/components/badge_label",
    component: _33e1ed7e,
    name: "components-badge_label"
  }, {
    path: "/components/base",
    component: _f8947290,
    name: "components-base"
  }, {
    path: "/components/breadcrumb",
    component: _9959a0ac,
    name: "components-breadcrumb"
  }, {
    path: "/components/buttons",
    component: _5f4de56a,
    name: "components-buttons"
  }, {
    path: "/components/cards",
    component: _54580c8c,
    name: "components-cards"
  }, {
    path: "/components/color_palette",
    component: _7b5b5fc8,
    name: "components-color_palette"
  }, {
    path: "/components/drop_dropdowns",
    component: _b5368c4e,
    name: "components-drop_dropdowns"
  }, {
    path: "/components/fab_buttons",
    component: _ec57a89c,
    name: "components-fab_buttons"
  }, {
    path: "/components/fancy_footer",
    component: _6393de90,
    name: "components-fancy_footer"
  }, {
    path: "/components/fancy_toolbar",
    component: _25ecdb2e,
    name: "components-fancy_toolbar"
  }, {
    path: "/components/filters",
    component: _d9be0638,
    name: "components-filters"
  }, {
    path: "/components/footer",
    component: _31bdc8c2,
    name: "components-footer"
  }, {
    path: "/components/grid",
    component: _0571eea6,
    name: "components-grid"
  }, {
    path: "/components/height",
    component: _35e6fe4e,
    name: "components-height"
  }, {
    path: "/components/icons",
    component: _1012c4c3,
    name: "components-icons"
  }, {
    path: "/components/lists",
    component: _19fd1fbe,
    name: "components-lists"
  }, {
    path: "/components/masonry",
    component: _3407bba4,
    name: "components-masonry"
  }, {
    path: "/components/modals_dialogs",
    component: _68816e0e,
    name: "components-modals_dialogs"
  }, {
    path: "/components/notifications",
    component: _3530ce91,
    name: "components-notifications"
  }, {
    path: "/components/overlay",
    component: _a23b2a8e,
    name: "components-overlay"
  }, {
    path: "/components/pagination",
    component: _aeacd87e,
    name: "components-pagination"
  }, {
    path: "/components/progress_spinners",
    component: _d27ccb16,
    name: "components-progress_spinners"
  }, {
    path: "/components/scrollable",
    component: _4605db4e,
    name: "components-scrollable"
  }, {
    path: "/components/slider",
    component: _1f007908,
    name: "components-slider"
  }, {
    path: "/components/sortable",
    component: _7524e0df,
    name: "components-sortable"
  }, {
    path: "/components/swipe_list",
    component: _0fab43ac,
    name: "components-swipe_list"
  }, {
    path: "/components/tables",
    component: _f71e46e8,
    name: "components-tables"
  }, {
    path: "/components/tabs",
    component: _95645636,
    name: "components-tabs"
  }, {
    path: "/components/timeline",
    component: _766adca8,
    name: "components-timeline"
  }, {
    path: "/components/toolbar",
    component: _335c2464,
    name: "components-toolbar"
  }, {
    path: "/components/tooltips",
    component: _2d7159b7,
    name: "components-tooltips"
  }, {
    path: "/components/transitions",
    component: _1cf4a6b2,
    name: "components-transitions"
  }, {
    path: "/components/width",
    component: _5ed5696f,
    name: "components-width"
  }, {
    path: "/dashboard/v1",
    component: _1ed22038,
    name: "dashboard-v1"
  }, {
    path: "/dashboard/v2",
    component: _1ee037b9,
    name: "dashboard-v2"
  }, {
    path: "/firm-category/list",
    component: _6bd455a2,
    name: "firm-category-list"
  }, {
    path: "/firm/list",
    component: _5b976746,
    name: "firm-list"
  }, {
    path: "/forms/dynamic_fields",
    component: _30ce197b,
    name: "forms-dynamic_fields"
  }, {
    path: "/forms/regular_elements",
    component: _69dd69fc,
    name: "forms-regular_elements"
  }, {
    path: "/forms/validation",
    component: _f67d7f8a,
    name: "forms-validation"
  }, {
    path: "/forms/wizard",
    component: _3b0a4da6,
    name: "forms-wizard",
    children: [{
      path: "step1",
      component: _b5a11afa,
      name: "forms-wizard-step1"
    }, {
      path: "step2",
      component: _b584ebf8,
      name: "forms-wizard-step2"
    }, {
      path: "step3",
      component: _b568bcf6,
      name: "forms-wizard-step3"
    }]
  }, {
    path: "/layout/boxed",
    component: _235e5d32,
    name: "layout-boxed"
  }, {
    path: "/layout/mini_sidebar",
    component: _1d592447,
    name: "layout-mini_sidebar"
  }, {
    path: "/layout/offcanvas_sidebar",
    component: _0006803e,
    name: "layout-offcanvas_sidebar"
  }, {
    path: "/layout/top_menu",
    component: _741b31dc,
    name: "layout-top_menu"
  }, {
    path: "/pages/blank",
    component: _0335c952,
    name: "pages-blank"
  }, {
    path: "/pages/blank_header_expanded",
    component: _0752717a,
    name: "pages-blank_header_expanded"
  }, {
    path: "/pages/chat",
    component: _d71641b6,
    name: "pages-chat"
  }, {
    path: "/pages/contact_list",
    component: _35f795aa,
    name: "pages-contact_list"
  }, {
    path: "/pages/contact_list_single",
    component: _43fde5a6,
    name: "pages-contact_list_single"
  }, {
    path: "/pages/data_visualization",
    component: _138f4648,
    name: "pages-data_visualization"
  }, {
    path: "/pages/gallery",
    component: _28b82395,
    name: "pages-gallery"
  }, {
    path: "/pages/help_faq",
    component: _e9a86b36,
    name: "pages-help_faq"
  }, {
    path: "/pages/invoices",
    component: _3c8a5533,
    children: [{
      path: "",
      component: _3c60e976,
      name: "pages-invoices"
    }, {
      path: "new",
      component: _3e9ca644,
      name: "pages-invoices-new"
    }, {
      path: ":id",
      component: _2ae6d15e,
      name: "pages-invoices-id"
    }]
  }, {
    path: "/pages/issues",
    component: _43aec447,
    name: "pages-issues",
    children: [{
      path: "details",
      component: _022502fa,
      name: "pages-issues-details",
      children: [{
        path: ":id?",
        component: _245743a5,
        name: "pages-issues-details-id"
      }]
    }, {
      path: "list",
      component: _1dc22dd4,
      name: "pages-issues-list"
    }]
  }, {
    path: "/pages/mailbox",
    component: _4567b3f7,
    children: [{
      path: "",
      component: _7585253a,
      name: "pages-mailbox"
    }, {
      path: "compose",
      component: _352ccc0c,
      name: "pages-mailbox-compose"
    }, {
      path: "message/:id?",
      component: _48d6b7cc,
      name: "pages-mailbox-message-id"
    }]
  }, {
    path: "/pages/notes",
    component: _07695a44,
    name: "pages-notes"
  }, {
    path: "/pages/poi_listing",
    component: _039f21d2,
    name: "pages-poi_listing"
  }, {
    path: "/pages/pricing_tables",
    component: _40ff88ea,
    name: "pages-pricing_tables"
  }, {
    path: "/pages/settings",
    component: _d8fbf020,
    name: "pages-settings"
  }, {
    path: "/pages/task_board",
    component: _1ae715b9,
    name: "pages-task_board"
  }, {
    path: "/pages/user_profile",
    component: _0bb63182,
    name: "pages-user_profile"
  }, {
    path: "/plant/list",
    component: _5e6feab8,
    name: "plant-list"
  }, {
    path: "/plugins/ajax",
    component: _3d053f11,
    name: "plugins-ajax"
  }, {
    path: "/plugins/calendar",
    component: _1b71f4af,
    name: "plugins-calendar"
  }, {
    path: "/plugins/calendar_events",
    component: _57963ad9,
    name: "plugins-calendar_events"
  }, {
    path: "/plugins/charts",
    component: _0a7f5c86,
    name: "plugins-charts"
  }, {
    path: "/plugins/code_editor",
    component: _73b8669e,
    name: "plugins-code_editor"
  }, {
    path: "/plugins/data_grid",
    component: _15b7111a,
    name: "plugins-data_grid"
  }, {
    path: "/plugins/datatables",
    component: _57971d40,
    name: "plugins-datatables"
  }, {
    path: "/plugins/diff_tool",
    component: _b2c7df1e,
    name: "plugins-diff_tool"
  }, {
    path: "/plugins/gantt_chart",
    component: _42d6965c,
    name: "plugins-gantt_chart"
  }, {
    path: "/plugins/google_maps",
    component: _eeba6f08,
    name: "plugins-google_maps"
  }, {
    path: "/plugins/idle_timeout",
    component: _41ce68e7,
    name: "plugins-idle_timeout"
  }, {
    path: "/plugins/image_cropper",
    component: _1f135188,
    name: "plugins-image_cropper"
  }, {
    path: "/plugins/push_notifications",
    component: _28649798,
    name: "plugins-push_notifications"
  }, {
    path: "/plugins/tour",
    component: _1d071b49,
    name: "plugins-tour"
  }, {
    path: "/plugins/tree",
    component: _c095dce2,
    name: "plugins-tree"
  }, {
    path: "/plugins/vector_maps",
    component: _561e10b2,
    name: "plugins-vector_maps"
  }, {
    path: "/plugins/vue_good_table",
    component: _2f780156,
    name: "plugins-vue_good_table"
  }, {
    path: "/project-category/list",
    component: _210b72e9,
    name: "project-category-list"
  }, {
    path: "/forms/advanced_elements/checkbox_radio",
    component: _2a1c833c,
    name: "forms-advanced_elements-checkbox_radio"
  }, {
    path: "/forms/advanced_elements/color_picker",
    component: _3629d767,
    name: "forms-advanced_elements-color_picker"
  }, {
    path: "/forms/advanced_elements/date_picker",
    component: _1e60b05c,
    name: "forms-advanced_elements-date_picker"
  }, {
    path: "/forms/advanced_elements/date_range_picker",
    component: _669a1b14,
    name: "forms-advanced_elements-date_range_picker"
  }, {
    path: "/forms/advanced_elements/inputmask",
    component: _1ac3aaee,
    name: "forms-advanced_elements-inputmask"
  }, {
    path: "/forms/advanced_elements/multiselect",
    component: _fdc83bf0,
    name: "forms-advanced_elements-multiselect"
  }, {
    path: "/forms/advanced_elements/range_slider",
    component: _05f91020,
    name: "forms-advanced_elements-range_slider"
  }, {
    path: "/forms/advanced_elements/rating",
    component: _3cf4765a,
    name: "forms-advanced_elements-rating"
  }, {
    path: "/forms/advanced_elements/select2",
    component: _565ebe49,
    name: "forms-advanced_elements-select2"
  }, {
    path: "/forms/advanced_elements/switches",
    component: _bec86842,
    name: "forms-advanced_elements-switches"
  }, {
    path: "/forms/advanced_elements/time_picker",
    component: _17df6b53,
    name: "forms-advanced_elements-time_picker"
  }, {
    path: "/forms/examples/advertising_evaluation_form",
    component: _b2dd9e70,
    name: "forms-examples-advertising_evaluation_form"
  }, {
    path: "/forms/examples/booking_form",
    component: _37f838c4,
    name: "forms-examples-booking_form"
  }, {
    path: "/forms/examples/car_rental_form",
    component: _13efcde0,
    name: "forms-examples-car_rental_form"
  }, {
    path: "/forms/examples/checkout_form",
    component: _0770aace,
    name: "forms-examples-checkout_form"
  }, {
    path: "/forms/examples/contact_forms",
    component: _4ea1804c,
    name: "forms-examples-contact_forms"
  }, {
    path: "/forms/examples/job_application_form",
    component: _5b5e506e,
    name: "forms-examples-job_application_form"
  }, {
    path: "/forms/examples/medical_history_form",
    component: _ec154c9e,
    name: "forms-examples-medical_history_form"
  }, {
    path: "/forms/examples/registration_form",
    component: _3b0f6e86,
    name: "forms-examples-registration_form"
  }, {
    path: "/forms/examples/rental_application_form",
    component: _0677ad0a,
    name: "forms-examples-rental_application_form"
  }, {
    path: "/forms/examples/transaction_feedback_form",
    component: _47ed2e19,
    name: "forms-examples-transaction_feedback_form"
  }, {
    path: "/forms/wysiwyg/ckeditor",
    component: _1a97ead9,
    name: "forms-wysiwyg-ckeditor"
  }, {
    path: "/forms/wysiwyg/quill",
    component: _6362abb1,
    name: "forms-wysiwyg-quill"
  }, {
    path: "/",
    component: _311db640,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
