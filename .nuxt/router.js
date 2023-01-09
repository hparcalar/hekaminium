import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _df818fc2 = () => interopDefault(import('..\\pages\\account_auth.vue' /* webpackChunkName: "pages/account_auth" */))
const _5c71cecf = () => interopDefault(import('..\\pages\\attachment-category\\index.vue' /* webpackChunkName: "pages/attachment-category/index" */))
const _4ced1382 = () => interopDefault(import('..\\pages\\firm\\index.vue' /* webpackChunkName: "pages/firm/index" */))
const _666e8e2a = () => interopDefault(import('..\\pages\\firm-category\\index.vue' /* webpackChunkName: "pages/firm-category/index" */))
const _7efc0a4a = () => interopDefault(import('..\\pages\\item\\index.vue' /* webpackChunkName: "pages/item/index" */))
const _946b5302 = () => interopDefault(import('..\\pages\\item-category\\index.vue' /* webpackChunkName: "pages/item-category/index" */))
const _594061ec = () => interopDefault(import('..\\pages\\login_page.vue' /* webpackChunkName: "pages/login_page" */))
const _9178ef26 = () => interopDefault(import('..\\pages\\login_page_auth.vue' /* webpackChunkName: "pages/login_page_auth" */))
const _4cb4fdac = () => interopDefault(import('..\\pages\\plant\\index.vue' /* webpackChunkName: "pages/plant/index" */))
const _3f047fe8 = () => interopDefault(import('..\\pages\\process\\index.vue' /* webpackChunkName: "pages/process/index" */))
const _58f4b604 = () => interopDefault(import('..\\pages\\project\\index.vue' /* webpackChunkName: "pages/project/index" */))
const _5d11864b = () => interopDefault(import('..\\pages\\project-category\\index.vue' /* webpackChunkName: "pages/project-category/index" */))
const _2de7415c = () => interopDefault(import('..\\pages\\staffpermit\\index.vue' /* webpackChunkName: "pages/staffpermit/index" */))
const _2934b058 = () => interopDefault(import('..\\pages\\warehouse\\index.vue' /* webpackChunkName: "pages/warehouse/index" */))
const _75b59731 = () => interopDefault(import('..\\pages\\attachment-category\\list.vue' /* webpackChunkName: "pages/attachment-category/list" */))
const _ae6d19c6 = () => interopDefault(import('..\\pages\\components\\accordion.vue' /* webpackChunkName: "pages/components/accordion" */))
const _43b9989e = () => interopDefault(import('..\\pages\\components\\alert.vue' /* webpackChunkName: "pages/components/alert" */))
const _790e7e2c = () => interopDefault(import('..\\pages\\components\\animations.vue' /* webpackChunkName: "pages/components/animations" */))
const _725cfa4f = () => interopDefault(import('..\\pages\\components\\avatars.vue' /* webpackChunkName: "pages/components/avatars" */))
const _7f2241ed = () => interopDefault(import('..\\pages\\components\\badge_label.vue' /* webpackChunkName: "pages/components/badge_label" */))
const _b96490e8 = () => interopDefault(import('..\\pages\\components\\base.vue' /* webpackChunkName: "pages/components/base" */))
const _2be0317e = () => interopDefault(import('..\\pages\\components\\breadcrumb.vue' /* webpackChunkName: "pages/components/breadcrumb" */))
const _1c5f57d4 = () => interopDefault(import('..\\pages\\components\\buttons.vue' /* webpackChunkName: "pages/components/buttons" */))
const _27be3638 = () => interopDefault(import('..\\pages\\components\\cards.vue' /* webpackChunkName: "pages/components/cards" */))
const _1c831d74 = () => interopDefault(import('..\\pages\\components\\color_palette.vue' /* webpackChunkName: "pages/components/color_palette" */))
const _2934b1ad = () => interopDefault(import('..\\pages\\components\\drop_dropdowns.vue' /* webpackChunkName: "pages/components/drop_dropdowns" */))
const _22e7645e = () => interopDefault(import('..\\pages\\components\\fab_buttons.vue' /* webpackChunkName: "pages/components/fab_buttons" */))
const _5789ed8c = () => interopDefault(import('..\\pages\\components\\fancy_footer.vue' /* webpackChunkName: "pages/components/fancy_footer" */))
const _71d6ce4c = () => interopDefault(import('..\\pages\\components\\fancy_toolbar.vue' /* webpackChunkName: "pages/components/fancy_toolbar" */))
const _25a36b90 = () => interopDefault(import('..\\pages\\components\\filters.vue' /* webpackChunkName: "pages/components/filters" */))
const _69c656d4 = () => interopDefault(import('..\\pages\\components\\footer.vue' /* webpackChunkName: "pages/components/footer" */))
const _1cdef981 = () => interopDefault(import('..\\pages\\components\\grid.vue' /* webpackChunkName: "pages/components/grid" */))
const _6173ebbc = () => interopDefault(import('..\\pages\\components\\height.vue' /* webpackChunkName: "pages/components/height" */))
const _390e2322 = () => interopDefault(import('..\\pages\\components\\icons.vue' /* webpackChunkName: "pages/components/icons" */))
const _25396d2c = () => interopDefault(import('..\\pages\\components\\lists.vue' /* webpackChunkName: "pages/components/lists" */))
const _787e90da = () => interopDefault(import('..\\pages\\components\\masonry.vue' /* webpackChunkName: "pages/components/masonry" */))
const _4f8f40cd = () => interopDefault(import('..\\pages\\components\\modals_dialogs.vue' /* webpackChunkName: "pages/components/modals_dialogs" */))
const _534ee786 = () => interopDefault(import('..\\pages\\components\\notifications.vue' /* webpackChunkName: "pages/components/notifications" */))
const _4164d965 = () => interopDefault(import('..\\pages\\components\\overlay.vue' /* webpackChunkName: "pages/components/overlay" */))
const _21369595 = () => interopDefault(import('..\\pages\\components\\pagination.vue' /* webpackChunkName: "pages/components/pagination" */))
const _858abbbe = () => interopDefault(import('..\\pages\\components\\progress_spinners.vue' /* webpackChunkName: "pages/components/progress_spinners" */))
const _82da45bc = () => interopDefault(import('..\\pages\\components\\scrollable.vue' /* webpackChunkName: "pages/components/scrollable" */))
const _8f40f648 = () => interopDefault(import('..\\pages\\components\\slider.vue' /* webpackChunkName: "pages/components/slider" */))
const _32f047b3 = () => interopDefault(import('..\\pages\\components\\sortable.vue' /* webpackChunkName: "pages/components/sortable" */))
const _70b75ffe = () => interopDefault(import('..\\pages\\components\\swipe_list.vue' /* webpackChunkName: "pages/components/swipe_list" */))
const _1dcfe860 = () => interopDefault(import('..\\pages\\components\\tables.vue' /* webpackChunkName: "pages/components/tables" */))
const _5634748e = () => interopDefault(import('..\\pages\\components\\tabs.vue' /* webpackChunkName: "pages/components/tabs" */))
const _3436437c = () => interopDefault(import('..\\pages\\components\\timeline.vue' /* webpackChunkName: "pages/components/timeline" */))
const _7442d9e0 = () => interopDefault(import('..\\pages\\components\\toolbar.vue' /* webpackChunkName: "pages/components/toolbar" */))
const _29867eea = () => interopDefault(import('..\\pages\\components\\tooltips.vue' /* webpackChunkName: "pages/components/tooltips" */))
const _eace355a = () => interopDefault(import('..\\pages\\components\\transitions.vue' /* webpackChunkName: "pages/components/transitions" */))
const _323b931b = () => interopDefault(import('..\\pages\\components\\width.vue' /* webpackChunkName: "pages/components/width" */))
const _39c1dd3a = () => interopDefault(import('..\\pages\\dashboard\\v1.vue' /* webpackChunkName: "pages/dashboard/v1" */))
const _39cff4bb = () => interopDefault(import('..\\pages\\dashboard\\v2.vue' /* webpackChunkName: "pages/dashboard/v2" */))
const _6dc60076 = () => interopDefault(import('..\\pages\\firm-category\\list.vue' /* webpackChunkName: "pages/firm-category/list" */))
const _67597c7e = () => interopDefault(import('..\\pages\\firm\\list.vue' /* webpackChunkName: "pages/firm/list" */))
const _492cab93 = () => interopDefault(import('..\\pages\\forms\\dynamic_fields.vue' /* webpackChunkName: "pages/forms/dynamic_fields" */))
const _364053d8 = () => interopDefault(import('..\\pages\\forms\\regular_elements.vue' /* webpackChunkName: "pages/forms/regular_elements" */))
const _5cac9e53 = () => interopDefault(import('..\\pages\\forms\\validation.vue' /* webpackChunkName: "pages/forms/validation" */))
const _78390345 = () => interopDefault(import('..\\pages\\forms\\wizard.vue' /* webpackChunkName: "pages/forms/wizard" */))
const _ae311ba0 = () => interopDefault(import('..\\pages\\forms\\wizard\\step1.vue' /* webpackChunkName: "pages/forms/wizard/step1" */))
const _ae14ec9e = () => interopDefault(import('..\\pages\\forms\\wizard\\step2.vue' /* webpackChunkName: "pages/forms/wizard/step2" */))
const _adf8bd9c = () => interopDefault(import('..\\pages\\forms\\wizard\\step3.vue' /* webpackChunkName: "pages/forms/wizard/step3" */))
const _70555981 = () => interopDefault(import('..\\pages\\item-category\\list.vue' /* webpackChunkName: "pages/item-category/list" */))
const _4d888056 = () => interopDefault(import('..\\pages\\item\\list.vue' /* webpackChunkName: "pages/item/list" */))
const _36d88beb = () => interopDefault(import('..\\pages\\layout\\boxed.vue' /* webpackChunkName: "pages/layout/boxed" */))
const _acb1657a = () => interopDefault(import('..\\pages\\layout\\mini_sidebar.vue' /* webpackChunkName: "pages/layout/mini_sidebar" */))
const _37665736 = () => interopDefault(import('..\\pages\\layout\\offcanvas_sidebar.vue' /* webpackChunkName: "pages/layout/offcanvas_sidebar" */))
const _42058e50 = () => interopDefault(import('..\\pages\\layout\\top_menu.vue' /* webpackChunkName: "pages/layout/top_menu" */))
const _3904c396 = () => interopDefault(import('..\\pages\\pages\\blank.vue' /* webpackChunkName: "pages/pages/blank" */))
const _310c63be = () => interopDefault(import('..\\pages\\pages\\blank_header_expanded.vue' /* webpackChunkName: "pages/pages/blank_header_expanded" */))
const _021ceef2 = () => interopDefault(import('..\\pages\\pages\\chat.vue' /* webpackChunkName: "pages/pages/chat" */))
const _53edbd0c = () => interopDefault(import('..\\pages\\pages\\contact_list.vue' /* webpackChunkName: "pages/pages/contact_list" */))
const _5154338b = () => interopDefault(import('..\\pages\\pages\\contact_list_single.vue' /* webpackChunkName: "pages/pages/contact_list_single" */))
const _d2501a84 = () => interopDefault(import('..\\pages\\pages\\data_visualization.vue' /* webpackChunkName: "pages/pages/data_visualization" */))
const _29bb66f3 = () => interopDefault(import('..\\pages\\pages\\gallery.vue' /* webpackChunkName: "pages/pages/gallery" */))
const _aade1a72 = () => interopDefault(import('..\\pages\\pages\\help_faq.vue' /* webpackChunkName: "pages/pages/help_faq" */))
const _5bef7d95 = () => interopDefault(import('..\\pages\\pages\\invoices.vue' /* webpackChunkName: "pages/pages/invoices" */))
const _d7095566 = () => interopDefault(import('..\\pages\\pages\\invoices\\index.vue' /* webpackChunkName: "pages/pages/invoices/index" */))
const _8d83c84a = () => interopDefault(import('..\\pages\\pages\\invoices\\new.vue' /* webpackChunkName: "pages/pages/invoices/new" */))
const _b4ef7216 = () => interopDefault(import('..\\pages\\pages\\invoices\\_id.vue' /* webpackChunkName: "pages/pages/invoices/_id" */))
const _01a69d29 = () => interopDefault(import('..\\pages\\pages\\issues.vue' /* webpackChunkName: "pages/pages/issues" */))
const _5ff23e2e = () => interopDefault(import('..\\pages\\pages\\issues\\details.vue' /* webpackChunkName: "pages/pages/issues/details" */))
const _b2244fbe = () => interopDefault(import('..\\pages\\pages\\issues\\details\\_id.vue' /* webpackChunkName: "pages/pages/issues/details/_id" */))
const _26006987 = () => interopDefault(import('..\\pages\\pages\\issues\\list.vue' /* webpackChunkName: "pages/pages/issues/list" */))
const _466af755 = () => interopDefault(import('..\\pages\\pages\\mailbox.vue' /* webpackChunkName: "pages/pages/mailbox" */))
const _50b7638d = () => interopDefault(import('..\\pages\\pages\\mailbox\\index.vue' /* webpackChunkName: "pages/pages/mailbox/index" */))
const _85f4e0e6 = () => interopDefault(import('..\\pages\\pages\\mailbox\\compose.vue' /* webpackChunkName: "pages/pages/mailbox/compose" */))
const _29339528 = () => interopDefault(import('..\\pages\\pages\\mailbox\\message\\_id.vue' /* webpackChunkName: "pages/pages/mailbox/message/_id" */))
const _26fc45bc = () => interopDefault(import('..\\pages\\pages\\notes.vue' /* webpackChunkName: "pages/pages/notes" */))
const _ff14f3a0 = () => interopDefault(import('..\\pages\\pages\\poi_listing.vue' /* webpackChunkName: "pages/pages/poi_listing" */))
const _588a126d = () => interopDefault(import('..\\pages\\pages\\pricing_tables.vue' /* webpackChunkName: "pages/pages/pricing_tables" */))
const _9a319f5c = () => interopDefault(import('..\\pages\\pages\\settings.vue' /* webpackChunkName: "pages/pages/settings" */))
const _14b8a4ca = () => interopDefault(import('..\\pages\\pages\\task_board.vue' /* webpackChunkName: "pages/pages/task_board" */))
const _29ac58e4 = () => interopDefault(import('..\\pages\\pages\\user_profile.vue' /* webpackChunkName: "pages/pages/user_profile" */))
const _1ddace98 = () => interopDefault(import('..\\pages\\plant\\list.vue' /* webpackChunkName: "pages/plant/list" */))
const _b32ac12a = () => interopDefault(import('..\\pages\\plugins\\ajax.vue' /* webpackChunkName: "pages/plugins/ajax" */))
const _cfc8cfee = () => interopDefault(import('..\\pages\\plugins\\calendar.vue' /* webpackChunkName: "pages/plugins/calendar" */))
const _40ee0382 = () => interopDefault(import('..\\pages\\plugins\\calendar_events.vue' /* webpackChunkName: "pages/plugins/calendar_events" */))
const _9fe3e340 = () => interopDefault(import('..\\pages\\plugins\\charts.vue' /* webpackChunkName: "pages/plugins/charts" */))
const _d69e65f8 = () => interopDefault(import('..\\pages\\plugins\\code_editor.vue' /* webpackChunkName: "pages/plugins/code_editor" */))
const _2e41d900 = () => interopDefault(import('..\\pages\\plugins\\data_grid.vue' /* webpackChunkName: "pages/plugins/data_grid" */))
const _5065521a = () => interopDefault(import('..\\pages\\plugins\\datatables.vue' /* webpackChunkName: "pages/plugins/datatables" */))
const _81b24f52 = () => interopDefault(import('..\\pages\\plugins\\diff_tool.vue' /* webpackChunkName: "pages/plugins/diff_tool" */))
const _00e5c990 = () => interopDefault(import('..\\pages\\plugins\\gantt_chart.vue' /* webpackChunkName: "pages/plugins/gantt_chart" */))
const _acc9a23c = () => interopDefault(import('..\\pages\\plugins\\google_maps.vue' /* webpackChunkName: "pages/plugins/google_maps" */))
const _3fe2cf41 = () => interopDefault(import('..\\pages\\plugins\\idle_timeout.vue' /* webpackChunkName: "pages/plugins/idle_timeout" */))
const _38e89324 = () => interopDefault(import('..\\pages\\plugins\\image_cropper.vue' /* webpackChunkName: "pages/plugins/image_cropper" */))
const _5f6e6f0e = () => interopDefault(import('..\\pages\\plugins\\push_notifications.vue' /* webpackChunkName: "pages/plugins/push_notifications" */))
const _f32708ba = () => interopDefault(import('..\\pages\\plugins\\tour.vue' /* webpackChunkName: "pages/plugins/tour" */))
const _091a71e9 = () => interopDefault(import('..\\pages\\plugins\\tree.vue' /* webpackChunkName: "pages/plugins/tree" */))
const _77167718 = () => interopDefault(import('..\\pages\\plugins\\vector_maps.vue' /* webpackChunkName: "pages/plugins/vector_maps" */))
const _0be78da0 = () => interopDefault(import('..\\pages\\plugins\\vue_good_table.vue' /* webpackChunkName: "pages/plugins/vue_good_table" */))
const _19ebdef8 = () => interopDefault(import('..\\pages\\process\\list.vue' /* webpackChunkName: "pages/process/list" */))
const _d279ff96 = () => interopDefault(import('..\\pages\\project-category\\list.vue' /* webpackChunkName: "pages/project-category/list" */))
const _ab05e4ee = () => interopDefault(import('..\\pages\\project\\docview.vue' /* webpackChunkName: "pages/project/docview" */))
const _4910f323 = () => interopDefault(import('..\\pages\\project\\fieldservice\\index.vue' /* webpackChunkName: "pages/project/fieldservice/index" */))
const _60c6bf22 = () => interopDefault(import('..\\pages\\project\\list.vue' /* webpackChunkName: "pages/project/list" */))
const _262e42fa = () => interopDefault(import('..\\pages\\purchasing\\internal-demand\\index.vue' /* webpackChunkName: "pages/purchasing/internal-demand/index" */))
const _fc5aa960 = () => interopDefault(import('..\\pages\\purchasing\\item-demand\\index.vue' /* webpackChunkName: "pages/purchasing/item-demand/index" */))
const _2176ed46 = () => interopDefault(import('..\\pages\\purchasing\\item-offer\\index.vue' /* webpackChunkName: "pages/purchasing/item-offer/index" */))
const _61d1f12b = () => interopDefault(import('..\\pages\\purchasing\\item-order\\index.vue' /* webpackChunkName: "pages/purchasing/item-order/index" */))
const _03eccf7e = () => interopDefault(import('..\\pages\\purchasing\\item-receipt\\index.vue' /* webpackChunkName: "pages/purchasing/item-receipt/index" */))
const _63b11f04 = () => interopDefault(import('..\\pages\\staffpermit\\list.vue' /* webpackChunkName: "pages/staffpermit/list" */))
const _3bf03480 = () => interopDefault(import('..\\pages\\user\\department\\index.vue' /* webpackChunkName: "pages/user/department/index" */))
const _6971ecb8 = () => interopDefault(import('..\\pages\\user\\employee\\index.vue' /* webpackChunkName: "pages/user/employee/index" */))
const _4a926438 = () => interopDefault(import('..\\pages\\user\\member\\index.vue' /* webpackChunkName: "pages/user/member/index" */))
const _5b9b56dc = () => interopDefault(import('..\\pages\\user\\role\\index.vue' /* webpackChunkName: "pages/user/role/index" */))
const _7210098c = () => interopDefault(import('..\\pages\\warehouse\\list.vue' /* webpackChunkName: "pages/warehouse/list" */))
const _765b32da = () => interopDefault(import('..\\pages\\warehouse\\live.vue' /* webpackChunkName: "pages/warehouse/live" */))
const _6c61a789 = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\checkbox_radio.vue' /* webpackChunkName: "pages/forms/advanced_elements/checkbox_radio" */))
const _4415aaf4 = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\color_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/color_picker" */))
const _0cf6a2b6 = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\date_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_picker" */))
const _52b577a7 = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\date_range_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_range_picker" */))
const _0f066bc8 = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\inputmask.vue' /* webpackChunkName: "pages/forms/advanced_elements/inputmask" */))
const _ec5e2e4a = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\multiselect.vue' /* webpackChunkName: "pages/forms/advanced_elements/multiselect" */))
const _13e4e3ad = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\range_slider.vue' /* webpackChunkName: "pages/forms/advanced_elements/range_slider" */))
const _4ef537a7 = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\rating.vue' /* webpackChunkName: "pages/forms/advanced_elements/rating" */))
const _f713b2c8 = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\select2.vue' /* webpackChunkName: "pages/forms/advanced_elements/select2" */))
const _35716dec = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\switches.vue' /* webpackChunkName: "pages/forms/advanced_elements/switches" */))
const _20947226 = () => interopDefault(import('..\\pages\\forms\\advanced_elements\\time_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/time_picker" */))
const _406739b9 = () => interopDefault(import('..\\pages\\forms\\examples\\advertising_evaluation_form.vue' /* webpackChunkName: "pages/forms/examples/advertising_evaluation_form" */))
const _44c536cd = () => interopDefault(import('..\\pages\\forms\\examples\\booking_form.vue' /* webpackChunkName: "pages/forms/examples/booking_form" */))
const _77774381 = () => interopDefault(import('..\\pages\\forms\\examples\\car_rental_form.vue' /* webpackChunkName: "pages/forms/examples/car_rental_form" */))
const _989e856c = () => interopDefault(import('..\\pages\\forms\\examples\\checkout_form.vue' /* webpackChunkName: "pages/forms/examples/checkout_form" */))
const _060a92fd = () => interopDefault(import('..\\pages\\forms\\examples\\contact_forms.vue' /* webpackChunkName: "pages/forms/examples/contact_forms" */))
const _4a9f8bf8 = () => interopDefault(import('..\\pages\\forms\\examples\\job_application_form.vue' /* webpackChunkName: "pages/forms/examples/job_application_form" */))
const _02440de0 = () => interopDefault(import('..\\pages\\forms\\examples\\medical_history_form.vue' /* webpackChunkName: "pages/forms/examples/medical_history_form" */))
const _1d5dc0b7 = () => interopDefault(import('..\\pages\\forms\\examples\\registration_form.vue' /* webpackChunkName: "pages/forms/examples/registration_form" */))
const _5551d67b = () => interopDefault(import('..\\pages\\forms\\examples\\rental_application_form.vue' /* webpackChunkName: "pages/forms/examples/rental_application_form" */))
const _48e2bf4a = () => interopDefault(import('..\\pages\\forms\\examples\\transaction_feedback_form.vue' /* webpackChunkName: "pages/forms/examples/transaction_feedback_form" */))
const _2b2b50b8 = () => interopDefault(import('..\\pages\\forms\\wysiwyg\\ckeditor.vue' /* webpackChunkName: "pages/forms/wysiwyg/ckeditor" */))
const _35912a32 = () => interopDefault(import('..\\pages\\forms\\wysiwyg\\quill.vue' /* webpackChunkName: "pages/forms/wysiwyg/quill" */))
const _0d92cf46 = () => interopDefault(import('..\\pages\\project\\fieldservice\\list.vue' /* webpackChunkName: "pages/project/fieldservice/list" */))
const _20571cb4 = () => interopDefault(import('..\\pages\\purchasing\\internal-demand\\list.vue' /* webpackChunkName: "pages/purchasing/internal-demand/list" */))
const _af12b2e0 = () => interopDefault(import('..\\pages\\purchasing\\item-demand\\list.vue' /* webpackChunkName: "pages/purchasing/item-demand/list" */))
const _1a032259 = () => interopDefault(import('..\\pages\\purchasing\\item-demand\\my-demands.vue' /* webpackChunkName: "pages/purchasing/item-demand/my-demands" */))
const _eb9d4972 = () => interopDefault(import('..\\pages\\purchasing\\item-demand\\waiting-for-approve.vue' /* webpackChunkName: "pages/purchasing/item-demand/waiting-for-approve" */))
const _c90b5a3a = () => interopDefault(import('..\\pages\\purchasing\\item-offer\\list.vue' /* webpackChunkName: "pages/purchasing/item-offer/list" */))
const _54d9b955 = () => interopDefault(import('..\\pages\\purchasing\\item-order\\list.vue' /* webpackChunkName: "pages/purchasing/item-order/list" */))
const _0247c5e2 = () => interopDefault(import('..\\pages\\purchasing\\item-order\\waiting-for-approve.vue' /* webpackChunkName: "pages/purchasing/item-order/waiting-for-approve" */))
const _6225d77f = () => interopDefault(import('..\\pages\\purchasing\\item-receipt\\list.vue' /* webpackChunkName: "pages/purchasing/item-receipt/list" */))
const _7849abeb = () => interopDefault(import('..\\pages\\user\\checkIn\\list.vue' /* webpackChunkName: "pages/user/checkIn/list" */))
const _7ceb3760 = () => interopDefault(import('..\\pages\\user\\department\\list.vue' /* webpackChunkName: "pages/user/department/list" */))
const _bad9a488 = () => interopDefault(import('..\\pages\\user\\employee\\list.vue' /* webpackChunkName: "pages/user/employee/list" */))
const _e42f9eb0 = () => interopDefault(import('..\\pages\\user\\member\\list.vue' /* webpackChunkName: "pages/user/member/list" */))
const _4c645984 = () => interopDefault(import('..\\pages\\user\\role\\list.vue' /* webpackChunkName: "pages/user/role/list" */))
const _2695b4fd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _df818fc2,
    name: "account_auth"
  }, {
    path: "/attachment-category",
    component: _5c71cecf,
    name: "attachment-category"
  }, {
    path: "/firm",
    component: _4ced1382,
    name: "firm"
  }, {
    path: "/firm-category",
    component: _666e8e2a,
    name: "firm-category"
  }, {
    path: "/item",
    component: _7efc0a4a,
    name: "item"
  }, {
    path: "/item-category",
    component: _946b5302,
    name: "item-category"
  }, {
    path: "/login_page",
    component: _594061ec,
    name: "login_page"
  }, {
    path: "/login_page_auth",
    component: _9178ef26,
    name: "login_page_auth"
  }, {
    path: "/plant",
    component: _4cb4fdac,
    name: "plant"
  }, {
    path: "/process",
    component: _3f047fe8,
    name: "process"
  }, {
    path: "/project",
    component: _58f4b604,
    name: "project"
  }, {
    path: "/project-category",
    component: _5d11864b,
    name: "project-category"
  }, {
    path: "/staffpermit",
    component: _2de7415c,
    name: "staffpermit"
  }, {
    path: "/warehouse",
    component: _2934b058,
    name: "warehouse"
  }, {
    path: "/attachment-category/list",
    component: _75b59731,
    name: "attachment-category-list"
  }, {
    path: "/components/accordion",
    component: _ae6d19c6,
    name: "components-accordion"
  }, {
    path: "/components/alert",
    component: _43b9989e,
    name: "components-alert"
  }, {
    path: "/components/animations",
    component: _790e7e2c,
    name: "components-animations"
  }, {
    path: "/components/avatars",
    component: _725cfa4f,
    name: "components-avatars"
  }, {
    path: "/components/badge_label",
    component: _7f2241ed,
    name: "components-badge_label"
  }, {
    path: "/components/base",
    component: _b96490e8,
    name: "components-base"
  }, {
    path: "/components/breadcrumb",
    component: _2be0317e,
    name: "components-breadcrumb"
  }, {
    path: "/components/buttons",
    component: _1c5f57d4,
    name: "components-buttons"
  }, {
    path: "/components/cards",
    component: _27be3638,
    name: "components-cards"
  }, {
    path: "/components/color_palette",
    component: _1c831d74,
    name: "components-color_palette"
  }, {
    path: "/components/drop_dropdowns",
    component: _2934b1ad,
    name: "components-drop_dropdowns"
  }, {
    path: "/components/fab_buttons",
    component: _22e7645e,
    name: "components-fab_buttons"
  }, {
    path: "/components/fancy_footer",
    component: _5789ed8c,
    name: "components-fancy_footer"
  }, {
    path: "/components/fancy_toolbar",
    component: _71d6ce4c,
    name: "components-fancy_toolbar"
  }, {
    path: "/components/filters",
    component: _25a36b90,
    name: "components-filters"
  }, {
    path: "/components/footer",
    component: _69c656d4,
    name: "components-footer"
  }, {
    path: "/components/grid",
    component: _1cdef981,
    name: "components-grid"
  }, {
    path: "/components/height",
    component: _6173ebbc,
    name: "components-height"
  }, {
    path: "/components/icons",
    component: _390e2322,
    name: "components-icons"
  }, {
    path: "/components/lists",
    component: _25396d2c,
    name: "components-lists"
  }, {
    path: "/components/masonry",
    component: _787e90da,
    name: "components-masonry"
  }, {
    path: "/components/modals_dialogs",
    component: _4f8f40cd,
    name: "components-modals_dialogs"
  }, {
    path: "/components/notifications",
    component: _534ee786,
    name: "components-notifications"
  }, {
    path: "/components/overlay",
    component: _4164d965,
    name: "components-overlay"
  }, {
    path: "/components/pagination",
    component: _21369595,
    name: "components-pagination"
  }, {
    path: "/components/progress_spinners",
    component: _858abbbe,
    name: "components-progress_spinners"
  }, {
    path: "/components/scrollable",
    component: _82da45bc,
    name: "components-scrollable"
  }, {
    path: "/components/slider",
    component: _8f40f648,
    name: "components-slider"
  }, {
    path: "/components/sortable",
    component: _32f047b3,
    name: "components-sortable"
  }, {
    path: "/components/swipe_list",
    component: _70b75ffe,
    name: "components-swipe_list"
  }, {
    path: "/components/tables",
    component: _1dcfe860,
    name: "components-tables"
  }, {
    path: "/components/tabs",
    component: _5634748e,
    name: "components-tabs"
  }, {
    path: "/components/timeline",
    component: _3436437c,
    name: "components-timeline"
  }, {
    path: "/components/toolbar",
    component: _7442d9e0,
    name: "components-toolbar"
  }, {
    path: "/components/tooltips",
    component: _29867eea,
    name: "components-tooltips"
  }, {
    path: "/components/transitions",
    component: _eace355a,
    name: "components-transitions"
  }, {
    path: "/components/width",
    component: _323b931b,
    name: "components-width"
  }, {
    path: "/dashboard/v1",
    component: _39c1dd3a,
    name: "dashboard-v1"
  }, {
    path: "/dashboard/v2",
    component: _39cff4bb,
    name: "dashboard-v2"
  }, {
    path: "/firm-category/list",
    component: _6dc60076,
    name: "firm-category-list"
  }, {
    path: "/firm/list",
    component: _67597c7e,
    name: "firm-list"
  }, {
    path: "/forms/dynamic_fields",
    component: _492cab93,
    name: "forms-dynamic_fields"
  }, {
    path: "/forms/regular_elements",
    component: _364053d8,
    name: "forms-regular_elements"
  }, {
    path: "/forms/validation",
    component: _5cac9e53,
    name: "forms-validation"
  }, {
    path: "/forms/wizard",
    component: _78390345,
    name: "forms-wizard",
    children: [{
      path: "step1",
      component: _ae311ba0,
      name: "forms-wizard-step1"
    }, {
      path: "step2",
      component: _ae14ec9e,
      name: "forms-wizard-step2"
    }, {
      path: "step3",
      component: _adf8bd9c,
      name: "forms-wizard-step3"
    }]
  }, {
    path: "/item-category/list",
    component: _70555981,
    name: "item-category-list"
  }, {
    path: "/item/list",
    component: _4d888056,
    name: "item-list"
  }, {
    path: "/layout/boxed",
    component: _36d88beb,
    name: "layout-boxed"
  }, {
    path: "/layout/mini_sidebar",
    component: _acb1657a,
    name: "layout-mini_sidebar"
  }, {
    path: "/layout/offcanvas_sidebar",
    component: _37665736,
    name: "layout-offcanvas_sidebar"
  }, {
    path: "/layout/top_menu",
    component: _42058e50,
    name: "layout-top_menu"
  }, {
    path: "/pages/blank",
    component: _3904c396,
    name: "pages-blank"
  }, {
    path: "/pages/blank_header_expanded",
    component: _310c63be,
    name: "pages-blank_header_expanded"
  }, {
    path: "/pages/chat",
    component: _021ceef2,
    name: "pages-chat"
  }, {
    path: "/pages/contact_list",
    component: _53edbd0c,
    name: "pages-contact_list"
  }, {
    path: "/pages/contact_list_single",
    component: _5154338b,
    name: "pages-contact_list_single"
  }, {
    path: "/pages/data_visualization",
    component: _d2501a84,
    name: "pages-data_visualization"
  }, {
    path: "/pages/gallery",
    component: _29bb66f3,
    name: "pages-gallery"
  }, {
    path: "/pages/help_faq",
    component: _aade1a72,
    name: "pages-help_faq"
  }, {
    path: "/pages/invoices",
    component: _5bef7d95,
    children: [{
      path: "",
      component: _d7095566,
      name: "pages-invoices"
    }, {
      path: "new",
      component: _8d83c84a,
      name: "pages-invoices-new"
    }, {
      path: ":id",
      component: _b4ef7216,
      name: "pages-invoices-id"
    }]
  }, {
    path: "/pages/issues",
    component: _01a69d29,
    name: "pages-issues",
    children: [{
      path: "details",
      component: _5ff23e2e,
      name: "pages-issues-details",
      children: [{
        path: ":id?",
        component: _b2244fbe,
        name: "pages-issues-details-id"
      }]
    }, {
      path: "list",
      component: _26006987,
      name: "pages-issues-list"
    }]
  }, {
    path: "/pages/mailbox",
    component: _466af755,
    children: [{
      path: "",
      component: _50b7638d,
      name: "pages-mailbox"
    }, {
      path: "compose",
      component: _85f4e0e6,
      name: "pages-mailbox-compose"
    }, {
      path: "message/:id?",
      component: _29339528,
      name: "pages-mailbox-message-id"
    }]
  }, {
    path: "/pages/notes",
    component: _26fc45bc,
    name: "pages-notes"
  }, {
    path: "/pages/poi_listing",
    component: _ff14f3a0,
    name: "pages-poi_listing"
  }, {
    path: "/pages/pricing_tables",
    component: _588a126d,
    name: "pages-pricing_tables"
  }, {
    path: "/pages/settings",
    component: _9a319f5c,
    name: "pages-settings"
  }, {
    path: "/pages/task_board",
    component: _14b8a4ca,
    name: "pages-task_board"
  }, {
    path: "/pages/user_profile",
    component: _29ac58e4,
    name: "pages-user_profile"
  }, {
    path: "/plant/list",
    component: _1ddace98,
    name: "plant-list"
  }, {
    path: "/plugins/ajax",
    component: _b32ac12a,
    name: "plugins-ajax"
  }, {
    path: "/plugins/calendar",
    component: _cfc8cfee,
    name: "plugins-calendar"
  }, {
    path: "/plugins/calendar_events",
    component: _40ee0382,
    name: "plugins-calendar_events"
  }, {
    path: "/plugins/charts",
    component: _9fe3e340,
    name: "plugins-charts"
  }, {
    path: "/plugins/code_editor",
    component: _d69e65f8,
    name: "plugins-code_editor"
  }, {
    path: "/plugins/data_grid",
    component: _2e41d900,
    name: "plugins-data_grid"
  }, {
    path: "/plugins/datatables",
    component: _5065521a,
    name: "plugins-datatables"
  }, {
    path: "/plugins/diff_tool",
    component: _81b24f52,
    name: "plugins-diff_tool"
  }, {
    path: "/plugins/gantt_chart",
    component: _00e5c990,
    name: "plugins-gantt_chart"
  }, {
    path: "/plugins/google_maps",
    component: _acc9a23c,
    name: "plugins-google_maps"
  }, {
    path: "/plugins/idle_timeout",
    component: _3fe2cf41,
    name: "plugins-idle_timeout"
  }, {
    path: "/plugins/image_cropper",
    component: _38e89324,
    name: "plugins-image_cropper"
  }, {
    path: "/plugins/push_notifications",
    component: _5f6e6f0e,
    name: "plugins-push_notifications"
  }, {
    path: "/plugins/tour",
    component: _f32708ba,
    name: "plugins-tour"
  }, {
    path: "/plugins/tree",
    component: _091a71e9,
    name: "plugins-tree"
  }, {
    path: "/plugins/vector_maps",
    component: _77167718,
    name: "plugins-vector_maps"
  }, {
    path: "/plugins/vue_good_table",
    component: _0be78da0,
    name: "plugins-vue_good_table"
  }, {
    path: "/process/list",
    component: _19ebdef8,
    name: "process-list"
  }, {
    path: "/project-category/list",
    component: _d279ff96,
    name: "project-category-list"
  }, {
    path: "/project/docview",
    component: _ab05e4ee,
    name: "project-docview"
  }, {
    path: "/project/fieldservice",
    component: _4910f323,
    name: "project-fieldservice"
  }, {
    path: "/project/list",
    component: _60c6bf22,
    name: "project-list"
  }, {
    path: "/purchasing/internal-demand",
    component: _262e42fa,
    name: "purchasing-internal-demand"
  }, {
    path: "/purchasing/item-demand",
    component: _fc5aa960,
    name: "purchasing-item-demand"
  }, {
    path: "/purchasing/item-offer",
    component: _2176ed46,
    name: "purchasing-item-offer"
  }, {
    path: "/purchasing/item-order",
    component: _61d1f12b,
    name: "purchasing-item-order"
  }, {
    path: "/purchasing/item-receipt",
    component: _03eccf7e,
    name: "purchasing-item-receipt"
  }, {
    path: "/staffpermit/list",
    component: _63b11f04,
    name: "staffpermit-list"
  }, {
    path: "/user/department",
    component: _3bf03480,
    name: "user-department"
  }, {
    path: "/user/employee",
    component: _6971ecb8,
    name: "user-employee"
  }, {
    path: "/user/member",
    component: _4a926438,
    name: "user-member"
  }, {
    path: "/user/role",
    component: _5b9b56dc,
    name: "user-role"
  }, {
    path: "/warehouse/list",
    component: _7210098c,
    name: "warehouse-list"
  }, {
    path: "/warehouse/live",
    component: _765b32da,
    name: "warehouse-live"
  }, {
    path: "/forms/advanced_elements/checkbox_radio",
    component: _6c61a789,
    name: "forms-advanced_elements-checkbox_radio"
  }, {
    path: "/forms/advanced_elements/color_picker",
    component: _4415aaf4,
    name: "forms-advanced_elements-color_picker"
  }, {
    path: "/forms/advanced_elements/date_picker",
    component: _0cf6a2b6,
    name: "forms-advanced_elements-date_picker"
  }, {
    path: "/forms/advanced_elements/date_range_picker",
    component: _52b577a7,
    name: "forms-advanced_elements-date_range_picker"
  }, {
    path: "/forms/advanced_elements/inputmask",
    component: _0f066bc8,
    name: "forms-advanced_elements-inputmask"
  }, {
    path: "/forms/advanced_elements/multiselect",
    component: _ec5e2e4a,
    name: "forms-advanced_elements-multiselect"
  }, {
    path: "/forms/advanced_elements/range_slider",
    component: _13e4e3ad,
    name: "forms-advanced_elements-range_slider"
  }, {
    path: "/forms/advanced_elements/rating",
    component: _4ef537a7,
    name: "forms-advanced_elements-rating"
  }, {
    path: "/forms/advanced_elements/select2",
    component: _f713b2c8,
    name: "forms-advanced_elements-select2"
  }, {
    path: "/forms/advanced_elements/switches",
    component: _35716dec,
    name: "forms-advanced_elements-switches"
  }, {
    path: "/forms/advanced_elements/time_picker",
    component: _20947226,
    name: "forms-advanced_elements-time_picker"
  }, {
    path: "/forms/examples/advertising_evaluation_form",
    component: _406739b9,
    name: "forms-examples-advertising_evaluation_form"
  }, {
    path: "/forms/examples/booking_form",
    component: _44c536cd,
    name: "forms-examples-booking_form"
  }, {
    path: "/forms/examples/car_rental_form",
    component: _77774381,
    name: "forms-examples-car_rental_form"
  }, {
    path: "/forms/examples/checkout_form",
    component: _989e856c,
    name: "forms-examples-checkout_form"
  }, {
    path: "/forms/examples/contact_forms",
    component: _060a92fd,
    name: "forms-examples-contact_forms"
  }, {
    path: "/forms/examples/job_application_form",
    component: _4a9f8bf8,
    name: "forms-examples-job_application_form"
  }, {
    path: "/forms/examples/medical_history_form",
    component: _02440de0,
    name: "forms-examples-medical_history_form"
  }, {
    path: "/forms/examples/registration_form",
    component: _1d5dc0b7,
    name: "forms-examples-registration_form"
  }, {
    path: "/forms/examples/rental_application_form",
    component: _5551d67b,
    name: "forms-examples-rental_application_form"
  }, {
    path: "/forms/examples/transaction_feedback_form",
    component: _48e2bf4a,
    name: "forms-examples-transaction_feedback_form"
  }, {
    path: "/forms/wysiwyg/ckeditor",
    component: _2b2b50b8,
    name: "forms-wysiwyg-ckeditor"
  }, {
    path: "/forms/wysiwyg/quill",
    component: _35912a32,
    name: "forms-wysiwyg-quill"
  }, {
    path: "/project/fieldservice/list",
    component: _0d92cf46,
    name: "project-fieldservice-list"
  }, {
    path: "/purchasing/internal-demand/list",
    component: _20571cb4,
    name: "purchasing-internal-demand-list"
  }, {
    path: "/purchasing/item-demand/list",
    component: _af12b2e0,
    name: "purchasing-item-demand-list"
  }, {
    path: "/purchasing/item-demand/my-demands",
    component: _1a032259,
    name: "purchasing-item-demand-my-demands"
  }, {
    path: "/purchasing/item-demand/waiting-for-approve",
    component: _eb9d4972,
    name: "purchasing-item-demand-waiting-for-approve"
  }, {
    path: "/purchasing/item-offer/list",
    component: _c90b5a3a,
    name: "purchasing-item-offer-list"
  }, {
    path: "/purchasing/item-order/list",
    component: _54d9b955,
    name: "purchasing-item-order-list"
  }, {
    path: "/purchasing/item-order/waiting-for-approve",
    component: _0247c5e2,
    name: "purchasing-item-order-waiting-for-approve"
  }, {
    path: "/purchasing/item-receipt/list",
    component: _6225d77f,
    name: "purchasing-item-receipt-list"
  }, {
    path: "/user/checkIn/list",
    component: _7849abeb,
    name: "user-checkIn-list"
  }, {
    path: "/user/department/list",
    component: _7ceb3760,
    name: "user-department-list"
  }, {
    path: "/user/employee/list",
    component: _bad9a488,
    name: "user-employee-list"
  }, {
    path: "/user/member/list",
    component: _e42f9eb0,
    name: "user-member-list"
  }, {
    path: "/user/role/list",
    component: _4c645984,
    name: "user-role-list"
  }, {
    path: "/",
    component: _2695b4fd,
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
