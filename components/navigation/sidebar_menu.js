import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

let _authDictionary = [];
export const setAuthDictionary = function (dict) {
  _authDictionary = dict;
};

function checkAuth(sectionKey) {
  return _authDictionary.some(
    (d) => d.SectionKey == sectionKey && d.CanRead == true
  );
}

export const menuEntries = [
  {
    section_title: "Süreçler",
    visible: function () {
      return checkAuth("Demand");
    },
  },
  {
    id: uniqueID(),
    title: "Satın Alma",
    icon: "mdi mdi-basket",
    page: "/purchasing",
    isOpen: false,
    level: 0,
    visible: function () {
      return checkAuth("Demand");
    },
    submenu: [
      {
        id: uniqueID(),
        title: "Talep",
        icon: "mdi mdi-human-handsup",
        page: "/purchasing/item-demand/list",
        visible: function () {
          return checkAuth("Demand");
        },
      },
      {
        id: uniqueID(),
        title: "İç Üretim",
        icon: "mdi mdi-human-handsup",
        page: "/purchasing/internal-demand/list",
        visible: function () {
          return checkAuth("Demand");
        },
      },
      {
        id: uniqueID(),
        icon: "mdi mdi-offer",
        title: "Teklif",
        page: "/purchasing/item-offer/list",
        visible: function () {
          return checkAuth("OfferOrderReceipt");
        },
      },
      {
        id: uniqueID(),
        icon: "mdi mdi-bookmark-outline",
        title: "Sipariş",
        page: "/purchasing/item-order/list",
        visible: function () {
          return checkAuth("OfferOrderReceipt");
        },
      },
      {
        id: uniqueID(),
        icon: "mdi mdi-receipt",
        title: "İrsaliye",
        page: "/purchasing/item-receipt/list",
        visible: function () {
          return checkAuth("OfferOrderReceipt");
        },
      },
      {
        id: uniqueID(),
        title: "Bekleyen Talepler",
        icon: "mdi mdi-clock",
        page: "/purchasing/item-demand/waiting-for-approve",
        visible: function () {
          return checkAuth("WaitingDemands");
        },
      },
    ],
  },
  {
    id: uniqueID(),
    title: "Proje Yönetimi",
    icon: "mdi mdi-memory",
    page: "/project",
    isOpen: false,
    level: 0,
    visible: function () {
      return checkAuth("Project");
    },
    submenu: [
      {
        id: uniqueID(),
        title: "Projeler",
        icon: "mdi mdi-format-list-bulleted-square",
        page: "/project/list",
        visible: function () {
          return checkAuth("Project");
        },
      },
      {
        id: uniqueID(),
        title: "Fatura Takibi",
        icon: "mdi mdi-format-list-bulleted-square",
        page: "/project/invoice-track/list",
        visible: function () {
          return checkAuth("ProjectBudgetView");
        },
      },
      {
        id: uniqueID(),
        title: "Döküman İzleme",
        icon: "mdi mdi-document",
        page: "/project/docview",
        visible: function () {
          return checkAuth("Document");
        },
      },
      {
        id: uniqueID(),
        icon: "mdi mdi-bookmark-outline",
        title: "Güncel Durum Analizi",
        page: "/project/live-analysis",
        visible: function () {
          return checkAuth("Document");
        },
      },
      {
        id: uniqueID(),
        title: "Bekleyen Siparişler",
        icon: "mdi mdi-clock",
        page: "/purchasing/item-order/waiting-for-approve",
        visible: function () {
          return checkAuth("WaitingOrders");
        },
      },
      {
        id: uniqueID(),
        title: "Saha Servisleri",
        icon: "mdi mdi-wrench",
        page: "/project/fieldservice/list",
        visible: function () {
          return checkAuth("FieldServices");
        },
      },
    ],
  },
  // {
  // 	id: uniqueID(),
  // 	title: "Satış",
  // 	icon: "mdi mdi-percent",
  // 	page: "/sales",
  // 	isOpen: false,
  // 	level: 0,
  // 	submenu: [
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-bookmark-outline",
  // 			title: "Sipariş",
  // 			page: "/sales/order"
  // 		},
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-receipt",
  // 			title: "İrsaliye",
  // 			page: "/sales/receipt"
  // 		}
  // 	]
  // },
  // {
  // 	id: uniqueID(),
  // 	title: "Planlama",
  // 	icon: "mdi mdi-floor-plan",
  // 	page: "/planning",
  // 	isOpen: false,
  // 	level: 0,
  // 	submenu: [
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-sitemap",
  // 			title: "Hammadde İhtiyaçları",
  // 			page: "/planning/item-needs"
  // 		},
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-arrow-decision",
  // 			title: "Üretim Planlama",
  // 			page: "/planning/production"
  // 		},
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-truck-fast-outline",
  // 			title: "Sevkiyat Planlama",
  // 			page: "/planning/delivery"
  // 		}
  // 	]
  // },
  // {
  // 	id: uniqueID(),
  // 	title: "Üretim",
  // 	icon: "mdi mdi-factory",
  // 	page: "/production",
  // 	isOpen: false,
  // 	level: 0,
  // 	submenu: [
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-cast",
  // 			title: "Üretim İzleme",
  // 			page: "/production/live"
  // 		},
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-selection-ellipse-arrow-inside",
  // 			title: "Üretim Hareketleri",
  // 			page: "/production/operations"
  // 		},
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-wrench",
  // 			title: "Bakım Yönetimi",
  // 			page: "/production/maintenance"
  // 		},
  // 	]
  // },
  {
    id: uniqueID(),
    title: "Depo",
    icon: "mdi mdi-warehouse",
    page: "/warehouse",
    isOpen: false,
    level: 0,
    submenu: [
      {
        id: uniqueID(),
        icon: "mdi mdi-selection-ellipse-arrow-inside",
        title: "Malzeme Hareketleri",
        page: "/warehouse/receipt",
      },
      {
        id: uniqueID(),
        icon: "mdi mdi-chart-areaspline",
        title: "Depo Durumları",
        page: "/warehouse/live",
        visible: function () {
          return checkAuth("WarehouseStatuses");
        },
      },
      {
        id: uniqueID(),
        icon: "mdi mdi-arrow-decision",
        title: "Stok Çıkışı",
        page: "/item/consumption",
        visible: function () {
          return checkAuth("StockOut");
        },
      },
      {
        id: uniqueID(),
        icon: "mdi mdi-arrow-decision",
        title: "Stok Sayımı",
        page: "/warehouse/stocktaking/list",
        visible: function () {
          return checkAuth("WarehouseStatuses");
        },
      },
    ],
  },
  {
    id: uniqueID(),
    title: "İzinler",
    icon: "mdi mdi-calendar-text",
    page: "/staffpermit/list",
    visible: function () {
      return checkAuth("StaffPermit");
    },
  },
  {
    id: uniqueID(),
    title: "Araçlar",
    icon: "mdi mdi-car",
    page: "/car",
    isOpen: false,
    level: 0,
    visible: function () {
      return checkAuth("CarService");
    },
    submenu: [
      {
        id: uniqueID(),
        title: "Araç Listesi",
        page: "/car/list",
				visible: function () {
					return checkAuth("CarService");
				},
      },
      {
        id: uniqueID(),
        title: "Araç Raporu",
        page: "/car/detail",
        visible: function () {
          return checkAuth("CarService");
        },
      },
    ],
  },
  {
    section_title: "TANIMLAR",
    visible: function () {
      return checkAuth("StockAndWarehouse");
    },
  },
  {
    id: uniqueID(),
    title: "Malzeme Yönetimi",
    page: "/definitions/material",
    icon: "mdi mdi-archive",
    isOpen: false,
    visible: function () {
      return checkAuth("StockAndWarehouse");
    },
    level: 0,
    submenu: [
      {
        id: uniqueID(),
        title: "Stok",
        icon: "mdi mdi-sitemap",
        page: "/item/list",
        visible: function () {
          return checkAuth("StockAndWarehouse");
        },
      },
      {
        id: uniqueID(),
        title: "Depo",
        icon: "mdi mdi-warehouse",
        page: "/warehouse/list",
        visible: function () {
          return checkAuth("StockAndWarehouse");
        },
      },
      {
        id: uniqueID(),
        title: "Stok Kategorisi",
        icon: "mdi mdi-folder-multiple",
        page: "/item-category/list",
        visible: function () {
          return checkAuth("StockAndWarehouse");
        },
      },
      {
        id: uniqueID(),
        title: "Proses",
        icon: "mdi mdi-wrench",
        page: "/process/list",
        visible: function () {
          return checkAuth("Process");
        },
      },
    ],
  },
  {
    id: uniqueID(),
    title: "Tedarik ve Satış",
    page: "/definitions/trade",
    icon: "mdi mdi-account-supervisor-circle",
    isOpen: false,
    visible: function () {
      return checkAuth("FirmAndProjectCategories");
    },
    level: 0,
    submenu: [
      {
        id: uniqueID(),
        title: "Firma",
        icon: "mdi mdi-account-box",
        page: "/firm/list",
        visible: function () {
          return checkAuth("FirmAndProjectCategories");
        },
      },
      {
        id: uniqueID(),
        title: "Firma Kategorisi",
        icon: "mdi mdi-folder-multiple",
        page: "/firm-category/list",
        visible: function () {
          return checkAuth("FirmAndProjectCategories");
        },
      },
      {
        id: uniqueID(),
        title: "Proje Kategorisi",
        icon: "mdi mdi-folder-multiple",
        page: "/project-category/list",
        visible: function () {
          return checkAuth("FirmAndProjectCategories");
        },
      },
    ],
  },
  // {
  // 	id: uniqueID(),
  // 	title: "Üretim Yönetimi",
  // 	icon: "mdi mdi-factory",
  // 	page: "/definitions/production",
  // 	isOpen: false,
  // 	level: 0,
  // 	submenu: [
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-road",
  // 			title: "Üretim Hattı",
  // 			page: "/definitions/production/production-line"
  // 		},
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-chip",
  // 			title: "Makine",
  // 			page: "/definitions/production/machine"
  // 		},
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-transit-connection-variant",
  // 			title: "Proses",
  // 			page: "/definitions/production/process"
  // 		},
  // 		{
  // 			id: uniqueID(),
  // 			icon: "mdi mdi-routes",
  // 			title: "Rota",
  // 			page: "/definitions/production/route"
  // 		},
  // 	]
  // },
  {
    section_title: "ANALİZ",
  },
  // {
  // 	id: uniqueID(),
  // 	title: "Üretim Verimliliği",
  // 	page: "/dashboard/v1",
  // 	icon: "mdi mdi-monitor-dashboard",
  // },
  {
    id: uniqueID(),
    title: "Satış İstatistikleri",
    page: "/dashboard/v2",
    icon: "mdi mdi-chart-bar",
  },
  {
    section_title: "SİSTEM",
    visible: function () {
      return checkAuth("Employee");
    },
  },
  {
    id: uniqueID(),
    title: "Kullanıcı Yönetimi",
    page: "/user",
    icon: "mdi mdi-account-key",
    isOpen: false,
    visible: function () {
      return checkAuth("Employee");
    },
    level: 0,
    submenu: [
      {
        id: uniqueID(),
        title: "Rol",
        page: "/user/role/list",
        visible: function () {
          return checkAuth("Role");
        },
      },
      {
        id: uniqueID(),
        title: "Kullanıcı",
        page: "/user/member/list",
        visible: function () {
          return checkAuth("Employee");
        },
      },
      {
        id: uniqueID(),
        title: "Personel",
        page: "/user/employee/list",
        visible: function () {
          return checkAuth("Employee");
        },
      },
      {
        id: uniqueID(),
        title: "Departman",
        page: "/user/department/list",
        visible: function () {
          return checkAuth("Employee");
        },
      },
      {
        id: uniqueID(),
        title: "Giriş/Çıkış Raporu",
        page: "/user/checkIn/list",
        visible: function () {
          return checkAuth("Report");
        },
      },
      {
        id: uniqueID(),
        title: "Mesai Raporu",
        page: "/user/shift/list",
        visible: function () {
          return checkAuth("Report");
        },
      },
    ],
  },
  {
    id: uniqueID(),
    title: "İşletmeler",
    page: "/plant/list",
    icon: "mdi mdi-office-building",
    visible: function () {
      return checkAuth("WaitingDemands");
    },
  },
  {
    id: uniqueID(),
    title: "Döküman Tipi",
    page: "/attachment-category/list",
    icon: "mdi mdi-office-building",
    visible: function () {
      return checkAuth("WaitingDemands");
    },
  },
  {
    id: uniqueID(),
    title: "Uygulama Ayarları",
    page: "/settings",
    icon: "mdi mdi-tune",
    visible: function () {
      return checkAuth("Application");
    },
  },
  {
    id: uniqueID(),
    title: "Veri Yedekleme",
    page: "/backup",
    icon: "mdi mdi-backup-restore",
    visible: function () {
      return checkAuth("Application");
    },
  },
];

// get all titles
// const titles = [];
// function deepFind (key, list) {
// 	list.forEach((entry) => {
// 		if(entry[key]) {
// 			titles.push(entry[key])
// 		}
// 		if(entry.submenu) {
// 			deepFind('title', entry.submenu)
// 		}
// 	})
// };
// deepFind('title', menuEntries);
// console.log(titles);
