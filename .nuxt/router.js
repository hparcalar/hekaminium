import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51d079c8 = () => interopDefault(import('../pages/account_auth.vue' /* webpackChunkName: "pages/account_auth" */))
const _5704df63 = () => interopDefault(import('../pages/firm/index.vue' /* webpackChunkName: "pages/firm/index" */))
const _d45ff384 = () => interopDefault(import('../pages/firm-category/index.vue' /* webpackChunkName: "pages/firm-category/index" */))
const _4f8bc410 = () => interopDefault(import('../pages/item/index.vue' /* webpackChunkName: "pages/item/index" */))
const _cf41416e = () => interopDefault(import('../pages/item-category/index.vue' /* webpackChunkName: "pages/item-category/index" */))
const _17e8f547 = () => interopDefault(import('../pages/login_page.vue' /* webpackChunkName: "pages/login_page" */))
const _2099c050 = () => interopDefault(import('../pages/login_page_auth.vue' /* webpackChunkName: "pages/login_page_auth" */))
const _f8529d08 = () => interopDefault(import('../pages/plant/index.vue' /* webpackChunkName: "pages/plant/index" */))
const _3b280b2a = () => interopDefault(import('../pages/project/index.vue' /* webpackChunkName: "pages/project/index" */))
const _37b7ab52 = () => interopDefault(import('../pages/project-category/index.vue' /* webpackChunkName: "pages/project-category/index" */))
const _1681618c = () => interopDefault(import('../pages/staffpermit/index.vue' /* webpackChunkName: "pages/staffpermit/index" */))
const _218eb8d4 = () => interopDefault(import('../pages/warehouse/index.vue' /* webpackChunkName: "pages/warehouse/index" */))
const _93b0609e = () => interopDefault(import('../pages/components/accordion.vue' /* webpackChunkName: "pages/components/accordion" */))
const _3aaefa45 = () => interopDefault(import('../pages/components/alert.vue' /* webpackChunkName: "pages/components/alert" */))
const _61e5f6d6 = () => interopDefault(import('../pages/components/animations.vue' /* webpackChunkName: "pages/components/animations" */))
const _49dd283a = () => interopDefault(import('../pages/components/avatars.vue' /* webpackChunkName: "pages/components/avatars" */))
const _a3486cfe = () => interopDefault(import('../pages/components/badge_label.vue' /* webpackChunkName: "pages/components/badge_label" */))
const _11a4ce78 = () => interopDefault(import('../pages/components/base.vue' /* webpackChunkName: "pages/components/base" */))
const _6b65312c = () => interopDefault(import('../pages/components/breadcrumb.vue' /* webpackChunkName: "pages/components/breadcrumb" */))
const _5a84c5aa = () => interopDefault(import('../pages/components/buttons.vue' /* webpackChunkName: "pages/components/buttons" */))
const _f76c0668 = () => interopDefault(import('../pages/components/cards.vue' /* webpackChunkName: "pages/components/cards" */))
const _63791008 = () => interopDefault(import('../pages/components/color_palette.vue' /* webpackChunkName: "pages/components/color_palette" */))
const _7e05dcce = () => interopDefault(import('../pages/components/drop_dropdowns.vue' /* webpackChunkName: "pages/components/drop_dropdowns" */))
const _5220ebf2 = () => interopDefault(import('../pages/components/fab_buttons.vue' /* webpackChunkName: "pages/components/fab_buttons" */))
const _0f815878 = () => interopDefault(import('../pages/components/fancy_footer.vue' /* webpackChunkName: "pages/components/fancy_footer" */))
const _0e0a8b6e = () => interopDefault(import('../pages/components/fancy_toolbar.vue' /* webpackChunkName: "pages/components/fancy_toolbar" */))
const _e35045b8 = () => interopDefault(import('../pages/components/filters.vue' /* webpackChunkName: "pages/components/filters" */))
const _0009e082 = () => interopDefault(import('../pages/components/footer.vue' /* webpackChunkName: "pages/components/footer" */))
const _e993df26 = () => interopDefault(import('../pages/components/grid.vue' /* webpackChunkName: "pages/components/grid" */))
const _0433160e = () => interopDefault(import('../pages/components/height.vue' /* webpackChunkName: "pages/components/height" */))
const _4004b503 = () => interopDefault(import('../pages/components/icons.vue' /* webpackChunkName: "pages/components/icons" */))
const _49ef0ffe = () => interopDefault(import('../pages/components/lists.vue' /* webpackChunkName: "pages/components/lists" */))
const _3d99fb24 = () => interopDefault(import('../pages/components/masonry.vue' /* webpackChunkName: "pages/components/masonry" */))
const _3150be8e = () => interopDefault(import('../pages/components/modals_dialogs.vue' /* webpackChunkName: "pages/components/modals_dialogs" */))
const _1d4e7ed1 = () => interopDefault(import('../pages/components/notifications.vue' /* webpackChunkName: "pages/components/notifications" */))
const _abcd6a0e = () => interopDefault(import('../pages/components/overlay.vue' /* webpackChunkName: "pages/components/overlay" */))
const _80b868fe = () => interopDefault(import('../pages/components/pagination.vue' /* webpackChunkName: "pages/components/pagination" */))
const _47e5aa96 = () => interopDefault(import('../pages/components/progress_spinners.vue' /* webpackChunkName: "pages/components/progress_spinners" */))
const _5d00130e = () => interopDefault(import('../pages/components/scrollable.vue' /* webpackChunkName: "pages/components/scrollable" */))
const _2566de70 = () => interopDefault(import('../pages/components/slider.vue' /* webpackChunkName: "pages/components/slider" */))
const _3e6beec2 = () => interopDefault(import('../pages/components/sortable.vue' /* webpackChunkName: "pages/components/sortable" */))
const _0f2495ea = () => interopDefault(import('../pages/components/swipe_list.vue' /* webpackChunkName: "pages/components/swipe_list" */))
const _52bcf44c = () => interopDefault(import('../pages/components/tables.vue' /* webpackChunkName: "pages/components/tables" */))
const _433cdca5 = () => interopDefault(import('../pages/components/tabs.vue' /* webpackChunkName: "pages/components/tabs" */))
const _3bdff730 = () => interopDefault(import('../pages/components/timeline.vue' /* webpackChunkName: "pages/components/timeline" */))
const _2e9304a4 = () => interopDefault(import('../pages/components/toolbar.vue' /* webpackChunkName: "pages/components/toolbar" */))
const _cdd2fd12 = () => interopDefault(import('../pages/components/tooltips.vue' /* webpackChunkName: "pages/components/tooltips" */))
const _8c5b2632 = () => interopDefault(import('../pages/components/transitions.vue' /* webpackChunkName: "pages/components/transitions" */))
const _e2714ca2 = () => interopDefault(import('../pages/components/width.vue' /* webpackChunkName: "pages/components/width" */))
const _03c63078 = () => interopDefault(import('../pages/dashboard/v1.vue' /* webpackChunkName: "pages/dashboard/v1" */))
const _03d447f9 = () => interopDefault(import('../pages/dashboard/v2.vue' /* webpackChunkName: "pages/dashboard/v2" */))
const _670b35e2 = () => interopDefault(import('../pages/firm-category/list.vue' /* webpackChunkName: "pages/firm-category/list" */))
const _22f4241d = () => interopDefault(import('../pages/firm/list.vue' /* webpackChunkName: "pages/firm/list" */))
const _39cde9bb = () => interopDefault(import('../pages/forms/dynamic_fields.vue' /* webpackChunkName: "pages/forms/dynamic_fields" */))
const _322a2a3c = () => interopDefault(import('../pages/forms/regular_elements.vue' /* webpackChunkName: "pages/forms/regular_elements" */))
const _96999f0a = () => interopDefault(import('../pages/forms/validation.vue' /* webpackChunkName: "pages/forms/validation" */))
const _71222d26 = () => interopDefault(import('../pages/forms/wizard.vue' /* webpackChunkName: "pages/forms/wizard" */))
const _bf335a7a = () => interopDefault(import('../pages/forms/wizard/step1.vue' /* webpackChunkName: "pages/forms/wizard/step1" */))
const _bf172b78 = () => interopDefault(import('../pages/forms/wizard/step2.vue' /* webpackChunkName: "pages/forms/wizard/step2" */))
const _befafc76 = () => interopDefault(import('../pages/forms/wizard/step3.vue' /* webpackChunkName: "pages/forms/wizard/step3" */))
const _7c11e112 = () => interopDefault(import('../pages/item-category/list.vue' /* webpackChunkName: "pages/item-category/list" */))
const _98fb8230 = () => interopDefault(import('../pages/item/list.vue' /* webpackChunkName: "pages/item/list" */))
const _59763cb2 = () => interopDefault(import('../pages/layout/boxed.vue' /* webpackChunkName: "pages/layout/boxed" */))
const _ee0367f2 = () => interopDefault(import('../pages/layout/mini_sidebar.vue' /* webpackChunkName: "pages/layout/mini_sidebar" */))
const _2fcb1fbe = () => interopDefault(import('../pages/layout/offcanvas_sidebar.vue' /* webpackChunkName: "pages/layout/offcanvas_sidebar" */))
const _020a399c = () => interopDefault(import('../pages/layout/top_menu.vue' /* webpackChunkName: "pages/layout/top_menu" */))
const _1e8e0317 = () => interopDefault(import('../pages/pages/blank.vue' /* webpackChunkName: "pages/pages/blank" */))
const _d98fa1fa = () => interopDefault(import('../pages/pages/blank_header_expanded.vue' /* webpackChunkName: "pages/pages/blank_header_expanded" */))
const _5bafff65 = () => interopDefault(import('../pages/pages/chat.vue' /* webpackChunkName: "pages/pages/chat" */))
const _312e75ea = () => interopDefault(import('../pages/pages/contact_list.vue' /* webpackChunkName: "pages/pages/contact_list" */))
const _0ccd3626 = () => interopDefault(import('../pages/pages/contact_list_single.vue' /* webpackChunkName: "pages/pages/contact_list_single" */))
const _4353e5c8 = () => interopDefault(import('../pages/pages/data_visualization.vue' /* webpackChunkName: "pages/pages/data_visualization" */))
const _3b73c956 = () => interopDefault(import('../pages/pages/gallery.vue' /* webpackChunkName: "pages/pages/gallery" */))
const _035ccaa5 = () => interopDefault(import('../pages/pages/help_faq.vue' /* webpackChunkName: "pages/pages/help_faq" */))
const _9689551a = () => interopDefault(import('../pages/pages/invoices.vue' /* webpackChunkName: "pages/pages/invoices" */))
const _4560b9b6 = () => interopDefault(import('../pages/pages/invoices/index.vue' /* webpackChunkName: "pages/pages/invoices/index" */))
const _39d38684 = () => interopDefault(import('../pages/pages/invoices/new.vue' /* webpackChunkName: "pages/pages/invoices/new" */))
const _261db19e = () => interopDefault(import('../pages/pages/invoices/_id.vue' /* webpackChunkName: "pages/pages/invoices/_id" */))
const _28a2d487 = () => interopDefault(import('../pages/pages/issues.vue' /* webpackChunkName: "pages/pages/issues" */))
const _0b24d33a = () => interopDefault(import('../pages/pages/issues/details.vue' /* webpackChunkName: "pages/pages/issues/details" */))
const _0c74f3e5 = () => interopDefault(import('../pages/pages/issues/details/_id.vue' /* webpackChunkName: "pages/pages/issues/details/_id" */))
const _8129fe54 = () => interopDefault(import('../pages/pages/issues/list.vue' /* webpackChunkName: "pages/pages/issues/list" */))
const _0214a892 = () => interopDefault(import('../pages/pages/mailbox.vue' /* webpackChunkName: "pages/pages/mailbox" */))
const _3dab660c = () => interopDefault(import('../pages/pages/mailbox/index.vue' /* webpackChunkName: "pages/pages/mailbox/index" */))
const _07385c8c = () => interopDefault(import('../pages/pages/mailbox/compose.vue' /* webpackChunkName: "pages/pages/mailbox/compose" */))
const _11a6084c = () => interopDefault(import('../pages/pages/mailbox/message/_id.vue' /* webpackChunkName: "pages/pages/mailbox/message/_id" */))
const _27924204 = () => interopDefault(import('../pages/pages/notes.vue' /* webpackChunkName: "pages/pages/notes" */))
const _5c298cdc = () => interopDefault(import('../pages/pages/poi_listing.vue' /* webpackChunkName: "pages/pages/poi_listing" */))
const _2effe86a = () => interopDefault(import('../pages/pages/pricing_tables.vue' /* webpackChunkName: "pages/pages/pricing_tables" */))
const _0bb30830 = () => interopDefault(import('../pages/pages/settings.vue' /* webpackChunkName: "pages/pages/settings" */))
const _4ad905f9 = () => interopDefault(import('../pages/pages/task_board.vue' /* webpackChunkName: "pages/pages/task_board" */))
const _06ed11c2 = () => interopDefault(import('../pages/pages/user_profile.vue' /* webpackChunkName: "pages/pages/user_profile" */))
const _cff9aa38 = () => interopDefault(import('../pages/plant/list.vue' /* webpackChunkName: "pages/plant/list" */))
const _21f94f51 = () => interopDefault(import('../pages/plugins/ajax.vue' /* webpackChunkName: "pages/plugins/ajax" */))
const _4b63e4ef = () => interopDefault(import('../pages/plugins/calendar.vue' /* webpackChunkName: "pages/plugins/calendar" */))
const _ce3cface = () => interopDefault(import('../pages/plugins/calendar_events.vue' /* webpackChunkName: "pages/plugins/calendar_events" */))
const _fa9f4674 = () => interopDefault(import('../pages/plugins/charts.vue' /* webpackChunkName: "pages/plugins/charts" */))
const _4144e344 = () => interopDefault(import('../pages/plugins/code_editor.vue' /* webpackChunkName: "pages/plugins/code_editor" */))
const _37f9ae4c = () => interopDefault(import('../pages/plugins/data_grid.vue' /* webpackChunkName: "pages/plugins/data_grid" */))
const _52cdfd80 = () => interopDefault(import('../pages/plugins/datatables.vue' /* webpackChunkName: "pages/plugins/datatables" */))
const _74e82831 = () => interopDefault(import('../pages/plugins/diff_tool.vue' /* webpackChunkName: "pages/plugins/diff_tool" */))
const _4a39dc92 = () => interopDefault(import('../pages/plugins/gantt_chart.vue' /* webpackChunkName: "pages/plugins/gantt_chart" */))
const _17701f88 = () => interopDefault(import('../pages/plugins/google_maps.vue' /* webpackChunkName: "pages/plugins/google_maps" */))
const _4ace3927 = () => interopDefault(import('../pages/plugins/idle_timeout.vue' /* webpackChunkName: "pages/plugins/idle_timeout" */))
const _360d8948 = () => interopDefault(import('../pages/plugins/image_cropper.vue' /* webpackChunkName: "pages/plugins/image_cropper" */))
const _43405474 = () => interopDefault(import('../pages/plugins/push_notifications.vue' /* webpackChunkName: "pages/plugins/push_notifications" */))
const _01fb2b89 = () => interopDefault(import('../pages/plugins/tour.vue' /* webpackChunkName: "pages/plugins/tour" */))
const _f6adbc62 = () => interopDefault(import('../pages/plugins/tree.vue' /* webpackChunkName: "pages/plugins/tree" */))
const _7c798f1c = () => interopDefault(import('../pages/plugins/vector_maps.vue' /* webpackChunkName: "pages/plugins/vector_maps" */))
const _10767cd4 = () => interopDefault(import('../pages/plugins/vue_good_table.vue' /* webpackChunkName: "pages/plugins/vue_good_table" */))
const _3805aaa9 = () => interopDefault(import('../pages/project-category/list.vue' /* webpackChunkName: "pages/project-category/list" */))
const _011dddd4 = () => interopDefault(import('../pages/project/fieldservice/index.vue' /* webpackChunkName: "pages/project/fieldservice/index" */))
const _e52e3914 = () => interopDefault(import('../pages/project/list.vue' /* webpackChunkName: "pages/project/list" */))
const _367a5b6f = () => interopDefault(import('../pages/purchasing/internal-demand/index.vue' /* webpackChunkName: "pages/purchasing/internal-demand/index" */))
const _3a5d6259 = () => interopDefault(import('../pages/purchasing/item-demand/index.vue' /* webpackChunkName: "pages/purchasing/item-demand/index" */))
const _16cf2d38 = () => interopDefault(import('../pages/purchasing/item-offer/index.vue' /* webpackChunkName: "pages/purchasing/item-offer/index" */))
const _a4106054 = () => interopDefault(import('../pages/purchasing/item-order/index.vue' /* webpackChunkName: "pages/purchasing/item-order/index" */))
const _574ed200 = () => interopDefault(import('../pages/purchasing/item-receipt/index.vue' /* webpackChunkName: "pages/purchasing/item-receipt/index" */))
const _e78b8e58 = () => interopDefault(import('../pages/staffpermit/list.vue' /* webpackChunkName: "pages/staffpermit/list" */))
const _6a51cfa2 = () => interopDefault(import('../pages/user/member/index.vue' /* webpackChunkName: "pages/user/member/index" */))
const _e9d63cea = () => interopDefault(import('../pages/user/role/index.vue' /* webpackChunkName: "pages/user/role/index" */))
const _3a00d88c = () => interopDefault(import('../pages/warehouse/list.vue' /* webpackChunkName: "pages/warehouse/list" */))
const _3e4c01da = () => interopDefault(import('../pages/warehouse/live.vue' /* webpackChunkName: "pages/warehouse/live" */))
const _6b60c37c = () => interopDefault(import('../pages/forms/advanced_elements/checkbox_radio.vue' /* webpackChunkName: "pages/forms/advanced_elements/checkbox_radio" */))
const _dffdb0b2 = () => interopDefault(import('../pages/forms/advanced_elements/color_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/color_picker" */))
const _5aa560dc = () => interopDefault(import('../pages/forms/advanced_elements/date_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_picker" */))
const _e7ea1a58 = () => interopDefault(import('../pages/forms/advanced_elements/date_range_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_range_picker" */))
const _6b42c249 = () => interopDefault(import('../pages/forms/advanced_elements/inputmask.vue' /* webpackChunkName: "pages/forms/advanced_elements/inputmask" */))
const _62f989c8 = () => interopDefault(import('../pages/forms/advanced_elements/multiselect.vue' /* webpackChunkName: "pages/forms/advanced_elements/multiselect" */))
const _5fd06060 = () => interopDefault(import('../pages/forms/advanced_elements/range_slider.vue' /* webpackChunkName: "pages/forms/advanced_elements/range_slider" */))
const _5d9cf69a = () => interopDefault(import('../pages/forms/advanced_elements/rating.vue' /* webpackChunkName: "pages/forms/advanced_elements/rating" */))
const _4ac64609 = () => interopDefault(import('../pages/forms/advanced_elements/select2.vue' /* webpackChunkName: "pages/forms/advanced_elements/select2" */))
const _39253c1f = () => interopDefault(import('../pages/forms/advanced_elements/switches.vue' /* webpackChunkName: "pages/forms/advanced_elements/switches" */))
const _0c85d9da = () => interopDefault(import('../pages/forms/advanced_elements/time_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/time_picker" */))
const _2f3b5108 = () => interopDefault(import('../pages/forms/examples/advertising_evaluation_form.vue' /* webpackChunkName: "pages/forms/examples/advertising_evaluation_form" */))
const _7ae54b5e = () => interopDefault(import('../pages/forms/examples/booking_form.vue' /* webpackChunkName: "pages/forms/examples/booking_form" */))
const _16b09950 = () => interopDefault(import('../pages/forms/examples/car_rental_form.vue' /* webpackChunkName: "pages/forms/examples/car_rental_form" */))
const _41933ad9 = () => interopDefault(import('../pages/forms/examples/checkout_form.vue' /* webpackChunkName: "pages/forms/examples/checkout_form" */))
const _d825dee8 = () => interopDefault(import('../pages/forms/examples/contact_forms.vue' /* webpackChunkName: "pages/forms/examples/contact_forms" */))
const _97a300ee = () => interopDefault(import('../pages/forms/examples/job_application_form.vue' /* webpackChunkName: "pages/forms/examples/job_application_form" */))
const _6bd30171 = () => interopDefault(import('../pages/forms/examples/medical_history_form.vue' /* webpackChunkName: "pages/forms/examples/medical_history_form" */))
const _58ce4274 = () => interopDefault(import('../pages/forms/examples/registration_form.vue' /* webpackChunkName: "pages/forms/examples/registration_form" */))
const _47bbed4a = () => interopDefault(import('../pages/forms/examples/rental_application_form.vue' /* webpackChunkName: "pages/forms/examples/rental_application_form" */))
const _49225e59 = () => interopDefault(import('../pages/forms/examples/transaction_feedback_form.vue' /* webpackChunkName: "pages/forms/examples/transaction_feedback_form" */))
const _3a36a9ce = () => interopDefault(import('../pages/forms/wysiwyg/ckeditor.vue' /* webpackChunkName: "pages/forms/wysiwyg/ckeditor" */))
const _61f0591e = () => interopDefault(import('../pages/forms/wysiwyg/quill.vue' /* webpackChunkName: "pages/forms/wysiwyg/quill" */))
const _6231700a = () => interopDefault(import('../pages/project/fieldservice/list.vue' /* webpackChunkName: "pages/project/fieldservice/list" */))
const _2fce12de = () => interopDefault(import('../pages/purchasing/internal-demand/list.vue' /* webpackChunkName: "pages/purchasing/internal-demand/list" */))
const _d4b72b32 = () => interopDefault(import('../pages/purchasing/item-demand/list.vue' /* webpackChunkName: "pages/purchasing/item-demand/list" */))
const _7dee68f0 = () => interopDefault(import('../pages/purchasing/item-demand/my-demands.vue' /* webpackChunkName: "pages/purchasing/item-demand/my-demands" */))
const _ea32e2e0 = () => interopDefault(import('../pages/purchasing/item-demand/waiting-for-approve.vue' /* webpackChunkName: "pages/purchasing/item-demand/waiting-for-approve" */))
const _44925408 = () => interopDefault(import('../pages/purchasing/item-offer/list.vue' /* webpackChunkName: "pages/purchasing/item-offer/list" */))
const _07104d6c = () => interopDefault(import('../pages/purchasing/item-order/list.vue' /* webpackChunkName: "pages/purchasing/item-order/list" */))
const _153dc566 = () => interopDefault(import('../pages/purchasing/item-order/waiting-for-approve.vue' /* webpackChunkName: "pages/purchasing/item-order/waiting-for-approve" */))
const _46a6f640 = () => interopDefault(import('../pages/purchasing/item-receipt/list.vue' /* webpackChunkName: "pages/purchasing/item-receipt/list" */))
const _aa5cbc5e = () => interopDefault(import('../pages/user/member/list.vue' /* webpackChunkName: "pages/user/member/list" */))
const _8d718616 = () => interopDefault(import('../pages/user/role/list.vue' /* webpackChunkName: "pages/user/role/list" */))
const _195a46c0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _51d079c8,
    name: "account_auth"
  }, {
    path: "/firm",
    component: _5704df63,
    name: "firm"
  }, {
    path: "/firm-category",
    component: _d45ff384,
    name: "firm-category"
  }, {
    path: "/item",
    component: _4f8bc410,
    name: "item"
  }, {
    path: "/item-category",
    component: _cf41416e,
    name: "item-category"
  }, {
    path: "/login_page",
    component: _17e8f547,
    name: "login_page"
  }, {
    path: "/login_page_auth",
    component: _2099c050,
    name: "login_page_auth"
  }, {
    path: "/plant",
    component: _f8529d08,
    name: "plant"
  }, {
    path: "/project",
    component: _3b280b2a,
    name: "project"
  }, {
    path: "/project-category",
    component: _37b7ab52,
    name: "project-category"
  }, {
    path: "/staffpermit",
    component: _1681618c,
    name: "staffpermit"
  }, {
    path: "/warehouse",
    component: _218eb8d4,
    name: "warehouse"
  }, {
    path: "/components/accordion",
    component: _93b0609e,
    name: "components-accordion"
  }, {
    path: "/components/alert",
    component: _3aaefa45,
    name: "components-alert"
  }, {
    path: "/components/animations",
    component: _61e5f6d6,
    name: "components-animations"
  }, {
    path: "/components/avatars",
    component: _49dd283a,
    name: "components-avatars"
  }, {
    path: "/components/badge_label",
    component: _a3486cfe,
    name: "components-badge_label"
  }, {
    path: "/components/base",
    component: _11a4ce78,
    name: "components-base"
  }, {
    path: "/components/breadcrumb",
    component: _6b65312c,
    name: "components-breadcrumb"
  }, {
    path: "/components/buttons",
    component: _5a84c5aa,
    name: "components-buttons"
  }, {
    path: "/components/cards",
    component: _f76c0668,
    name: "components-cards"
  }, {
    path: "/components/color_palette",
    component: _63791008,
    name: "components-color_palette"
  }, {
    path: "/components/drop_dropdowns",
    component: _7e05dcce,
    name: "components-drop_dropdowns"
  }, {
    path: "/components/fab_buttons",
    component: _5220ebf2,
    name: "components-fab_buttons"
  }, {
    path: "/components/fancy_footer",
    component: _0f815878,
    name: "components-fancy_footer"
  }, {
    path: "/components/fancy_toolbar",
    component: _0e0a8b6e,
    name: "components-fancy_toolbar"
  }, {
    path: "/components/filters",
    component: _e35045b8,
    name: "components-filters"
  }, {
    path: "/components/footer",
    component: _0009e082,
    name: "components-footer"
  }, {
    path: "/components/grid",
    component: _e993df26,
    name: "components-grid"
  }, {
    path: "/components/height",
    component: _0433160e,
    name: "components-height"
  }, {
    path: "/components/icons",
    component: _4004b503,
    name: "components-icons"
  }, {
    path: "/components/lists",
    component: _49ef0ffe,
    name: "components-lists"
  }, {
    path: "/components/masonry",
    component: _3d99fb24,
    name: "components-masonry"
  }, {
    path: "/components/modals_dialogs",
    component: _3150be8e,
    name: "components-modals_dialogs"
  }, {
    path: "/components/notifications",
    component: _1d4e7ed1,
    name: "components-notifications"
  }, {
    path: "/components/overlay",
    component: _abcd6a0e,
    name: "components-overlay"
  }, {
    path: "/components/pagination",
    component: _80b868fe,
    name: "components-pagination"
  }, {
    path: "/components/progress_spinners",
    component: _47e5aa96,
    name: "components-progress_spinners"
  }, {
    path: "/components/scrollable",
    component: _5d00130e,
    name: "components-scrollable"
  }, {
    path: "/components/slider",
    component: _2566de70,
    name: "components-slider"
  }, {
    path: "/components/sortable",
    component: _3e6beec2,
    name: "components-sortable"
  }, {
    path: "/components/swipe_list",
    component: _0f2495ea,
    name: "components-swipe_list"
  }, {
    path: "/components/tables",
    component: _52bcf44c,
    name: "components-tables"
  }, {
    path: "/components/tabs",
    component: _433cdca5,
    name: "components-tabs"
  }, {
    path: "/components/timeline",
    component: _3bdff730,
    name: "components-timeline"
  }, {
    path: "/components/toolbar",
    component: _2e9304a4,
    name: "components-toolbar"
  }, {
    path: "/components/tooltips",
    component: _cdd2fd12,
    name: "components-tooltips"
  }, {
    path: "/components/transitions",
    component: _8c5b2632,
    name: "components-transitions"
  }, {
    path: "/components/width",
    component: _e2714ca2,
    name: "components-width"
  }, {
    path: "/dashboard/v1",
    component: _03c63078,
    name: "dashboard-v1"
  }, {
    path: "/dashboard/v2",
    component: _03d447f9,
    name: "dashboard-v2"
  }, {
    path: "/firm-category/list",
    component: _670b35e2,
    name: "firm-category-list"
  }, {
    path: "/firm/list",
    component: _22f4241d,
    name: "firm-list"
  }, {
    path: "/forms/dynamic_fields",
    component: _39cde9bb,
    name: "forms-dynamic_fields"
  }, {
    path: "/forms/regular_elements",
    component: _322a2a3c,
    name: "forms-regular_elements"
  }, {
    path: "/forms/validation",
    component: _96999f0a,
    name: "forms-validation"
  }, {
    path: "/forms/wizard",
    component: _71222d26,
    name: "forms-wizard",
    children: [{
      path: "step1",
      component: _bf335a7a,
      name: "forms-wizard-step1"
    }, {
      path: "step2",
      component: _bf172b78,
      name: "forms-wizard-step2"
    }, {
      path: "step3",
      component: _befafc76,
      name: "forms-wizard-step3"
    }]
  }, {
    path: "/item-category/list",
    component: _7c11e112,
    name: "item-category-list"
  }, {
    path: "/item/list",
    component: _98fb8230,
    name: "item-list"
  }, {
    path: "/layout/boxed",
    component: _59763cb2,
    name: "layout-boxed"
  }, {
    path: "/layout/mini_sidebar",
    component: _ee0367f2,
    name: "layout-mini_sidebar"
  }, {
    path: "/layout/offcanvas_sidebar",
    component: _2fcb1fbe,
    name: "layout-offcanvas_sidebar"
  }, {
    path: "/layout/top_menu",
    component: _020a399c,
    name: "layout-top_menu"
  }, {
    path: "/pages/blank",
    component: _1e8e0317,
    name: "pages-blank"
  }, {
    path: "/pages/blank_header_expanded",
    component: _d98fa1fa,
    name: "pages-blank_header_expanded"
  }, {
    path: "/pages/chat",
    component: _5bafff65,
    name: "pages-chat"
  }, {
    path: "/pages/contact_list",
    component: _312e75ea,
    name: "pages-contact_list"
  }, {
    path: "/pages/contact_list_single",
    component: _0ccd3626,
    name: "pages-contact_list_single"
  }, {
    path: "/pages/data_visualization",
    component: _4353e5c8,
    name: "pages-data_visualization"
  }, {
    path: "/pages/gallery",
    component: _3b73c956,
    name: "pages-gallery"
  }, {
    path: "/pages/help_faq",
    component: _035ccaa5,
    name: "pages-help_faq"
  }, {
    path: "/pages/invoices",
    component: _9689551a,
    children: [{
      path: "",
      component: _4560b9b6,
      name: "pages-invoices"
    }, {
      path: "new",
      component: _39d38684,
      name: "pages-invoices-new"
    }, {
      path: ":id",
      component: _261db19e,
      name: "pages-invoices-id"
    }]
  }, {
    path: "/pages/issues",
    component: _28a2d487,
    name: "pages-issues",
    children: [{
      path: "details",
      component: _0b24d33a,
      name: "pages-issues-details",
      children: [{
        path: ":id?",
        component: _0c74f3e5,
        name: "pages-issues-details-id"
      }]
    }, {
      path: "list",
      component: _8129fe54,
      name: "pages-issues-list"
    }]
  }, {
    path: "/pages/mailbox",
    component: _0214a892,
    children: [{
      path: "",
      component: _3dab660c,
      name: "pages-mailbox"
    }, {
      path: "compose",
      component: _07385c8c,
      name: "pages-mailbox-compose"
    }, {
      path: "message/:id?",
      component: _11a6084c,
      name: "pages-mailbox-message-id"
    }]
  }, {
    path: "/pages/notes",
    component: _27924204,
    name: "pages-notes"
  }, {
    path: "/pages/poi_listing",
    component: _5c298cdc,
    name: "pages-poi_listing"
  }, {
    path: "/pages/pricing_tables",
    component: _2effe86a,
    name: "pages-pricing_tables"
  }, {
    path: "/pages/settings",
    component: _0bb30830,
    name: "pages-settings"
  }, {
    path: "/pages/task_board",
    component: _4ad905f9,
    name: "pages-task_board"
  }, {
    path: "/pages/user_profile",
    component: _06ed11c2,
    name: "pages-user_profile"
  }, {
    path: "/plant/list",
    component: _cff9aa38,
    name: "plant-list"
  }, {
    path: "/plugins/ajax",
    component: _21f94f51,
    name: "plugins-ajax"
  }, {
    path: "/plugins/calendar",
    component: _4b63e4ef,
    name: "plugins-calendar"
  }, {
    path: "/plugins/calendar_events",
    component: _ce3cface,
    name: "plugins-calendar_events"
  }, {
    path: "/plugins/charts",
    component: _fa9f4674,
    name: "plugins-charts"
  }, {
    path: "/plugins/code_editor",
    component: _4144e344,
    name: "plugins-code_editor"
  }, {
    path: "/plugins/data_grid",
    component: _37f9ae4c,
    name: "plugins-data_grid"
  }, {
    path: "/plugins/datatables",
    component: _52cdfd80,
    name: "plugins-datatables"
  }, {
    path: "/plugins/diff_tool",
    component: _74e82831,
    name: "plugins-diff_tool"
  }, {
    path: "/plugins/gantt_chart",
    component: _4a39dc92,
    name: "plugins-gantt_chart"
  }, {
    path: "/plugins/google_maps",
    component: _17701f88,
    name: "plugins-google_maps"
  }, {
    path: "/plugins/idle_timeout",
    component: _4ace3927,
    name: "plugins-idle_timeout"
  }, {
    path: "/plugins/image_cropper",
    component: _360d8948,
    name: "plugins-image_cropper"
  }, {
    path: "/plugins/push_notifications",
    component: _43405474,
    name: "plugins-push_notifications"
  }, {
    path: "/plugins/tour",
    component: _01fb2b89,
    name: "plugins-tour"
  }, {
    path: "/plugins/tree",
    component: _f6adbc62,
    name: "plugins-tree"
  }, {
    path: "/plugins/vector_maps",
    component: _7c798f1c,
    name: "plugins-vector_maps"
  }, {
    path: "/plugins/vue_good_table",
    component: _10767cd4,
    name: "plugins-vue_good_table"
  }, {
    path: "/project-category/list",
    component: _3805aaa9,
    name: "project-category-list"
  }, {
    path: "/project/fieldservice",
    component: _011dddd4,
    name: "project-fieldservice"
  }, {
    path: "/project/list",
    component: _e52e3914,
    name: "project-list"
  }, {
    path: "/purchasing/internal-demand",
    component: _367a5b6f,
    name: "purchasing-internal-demand"
  }, {
    path: "/purchasing/item-demand",
    component: _3a5d6259,
    name: "purchasing-item-demand"
  }, {
    path: "/purchasing/item-offer",
    component: _16cf2d38,
    name: "purchasing-item-offer"
  }, {
    path: "/purchasing/item-order",
    component: _a4106054,
    name: "purchasing-item-order"
  }, {
    path: "/purchasing/item-receipt",
    component: _574ed200,
    name: "purchasing-item-receipt"
  }, {
    path: "/staffpermit/list",
    component: _e78b8e58,
    name: "staffpermit-list"
  }, {
    path: "/user/member",
    component: _6a51cfa2,
    name: "user-member"
  }, {
    path: "/user/role",
    component: _e9d63cea,
    name: "user-role"
  }, {
    path: "/warehouse/list",
    component: _3a00d88c,
    name: "warehouse-list"
  }, {
    path: "/warehouse/live",
    component: _3e4c01da,
    name: "warehouse-live"
  }, {
    path: "/forms/advanced_elements/checkbox_radio",
    component: _6b60c37c,
    name: "forms-advanced_elements-checkbox_radio"
  }, {
    path: "/forms/advanced_elements/color_picker",
    component: _dffdb0b2,
    name: "forms-advanced_elements-color_picker"
  }, {
    path: "/forms/advanced_elements/date_picker",
    component: _5aa560dc,
    name: "forms-advanced_elements-date_picker"
  }, {
    path: "/forms/advanced_elements/date_range_picker",
    component: _e7ea1a58,
    name: "forms-advanced_elements-date_range_picker"
  }, {
    path: "/forms/advanced_elements/inputmask",
    component: _6b42c249,
    name: "forms-advanced_elements-inputmask"
  }, {
    path: "/forms/advanced_elements/multiselect",
    component: _62f989c8,
    name: "forms-advanced_elements-multiselect"
  }, {
    path: "/forms/advanced_elements/range_slider",
    component: _5fd06060,
    name: "forms-advanced_elements-range_slider"
  }, {
    path: "/forms/advanced_elements/rating",
    component: _5d9cf69a,
    name: "forms-advanced_elements-rating"
  }, {
    path: "/forms/advanced_elements/select2",
    component: _4ac64609,
    name: "forms-advanced_elements-select2"
  }, {
    path: "/forms/advanced_elements/switches",
    component: _39253c1f,
    name: "forms-advanced_elements-switches"
  }, {
    path: "/forms/advanced_elements/time_picker",
    component: _0c85d9da,
    name: "forms-advanced_elements-time_picker"
  }, {
    path: "/forms/examples/advertising_evaluation_form",
    component: _2f3b5108,
    name: "forms-examples-advertising_evaluation_form"
  }, {
    path: "/forms/examples/booking_form",
    component: _7ae54b5e,
    name: "forms-examples-booking_form"
  }, {
    path: "/forms/examples/car_rental_form",
    component: _16b09950,
    name: "forms-examples-car_rental_form"
  }, {
    path: "/forms/examples/checkout_form",
    component: _41933ad9,
    name: "forms-examples-checkout_form"
  }, {
    path: "/forms/examples/contact_forms",
    component: _d825dee8,
    name: "forms-examples-contact_forms"
  }, {
    path: "/forms/examples/job_application_form",
    component: _97a300ee,
    name: "forms-examples-job_application_form"
  }, {
    path: "/forms/examples/medical_history_form",
    component: _6bd30171,
    name: "forms-examples-medical_history_form"
  }, {
    path: "/forms/examples/registration_form",
    component: _58ce4274,
    name: "forms-examples-registration_form"
  }, {
    path: "/forms/examples/rental_application_form",
    component: _47bbed4a,
    name: "forms-examples-rental_application_form"
  }, {
    path: "/forms/examples/transaction_feedback_form",
    component: _49225e59,
    name: "forms-examples-transaction_feedback_form"
  }, {
    path: "/forms/wysiwyg/ckeditor",
    component: _3a36a9ce,
    name: "forms-wysiwyg-ckeditor"
  }, {
    path: "/forms/wysiwyg/quill",
    component: _61f0591e,
    name: "forms-wysiwyg-quill"
  }, {
    path: "/project/fieldservice/list",
    component: _6231700a,
    name: "project-fieldservice-list"
  }, {
    path: "/purchasing/internal-demand/list",
    component: _2fce12de,
    name: "purchasing-internal-demand-list"
  }, {
    path: "/purchasing/item-demand/list",
    component: _d4b72b32,
    name: "purchasing-item-demand-list"
  }, {
    path: "/purchasing/item-demand/my-demands",
    component: _7dee68f0,
    name: "purchasing-item-demand-my-demands"
  }, {
    path: "/purchasing/item-demand/waiting-for-approve",
    component: _ea32e2e0,
    name: "purchasing-item-demand-waiting-for-approve"
  }, {
    path: "/purchasing/item-offer/list",
    component: _44925408,
    name: "purchasing-item-offer-list"
  }, {
    path: "/purchasing/item-order/list",
    component: _07104d6c,
    name: "purchasing-item-order-list"
  }, {
    path: "/purchasing/item-order/waiting-for-approve",
    component: _153dc566,
    name: "purchasing-item-order-waiting-for-approve"
  }, {
    path: "/purchasing/item-receipt/list",
    component: _46a6f640,
    name: "purchasing-item-receipt-list"
  }, {
    path: "/user/member/list",
    component: _aa5cbc5e,
    name: "user-member-list"
  }, {
    path: "/user/role/list",
    component: _8d718616,
    name: "user-role-list"
  }, {
    path: "/",
    component: _195a46c0,
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
