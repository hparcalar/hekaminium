<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle> Onay Bekleyen Talepler </ScCardTitle>
            </div>
            <div class="uk-width-auto@s">
              <div id="sc-dt-buttons"></div>
            </div>
            <div class="uk-width-auto@s">
              <!-- <button class="sc-button sc-button-primary sc-button-flex" type="button">
								Sütun Seç <i class="mdi mdi-chevron-down uk-margin-small-left"></i>
							</button> -->
              <div
                class="uk-dropdown uk-width-small"
                data-uk-drop="mode: click"
              >
                <div class="sc-padding-small">
                  <div
                    v-for="(checkbox, index) in dtDHeaders"
                    :key="index"
                    class="uk-margin-small"
                  >
                    <PrettyCheck
                      class="p-icon"
                      :value="index"
                      :checked="checkbox.checked"
                      :disabled="checkbox.disabled"
                      @change="toggleCol($event, index)"
                    >
                      <i slot="extra" class="icon mdi mdi-check"></i>
                      {{ checkbox.name }}
                    </PrettyCheck>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScCardHeader>
        <ScCardBody>
          <div class="uk-grid">
            <div class="uk-width-3-4@m">
              <div class="uk-flex-left uk-grid">
                <div
                  class="uk-button-group sc-padding-remove-left uk-width-expand uk-margin-medium"
                  style="height: 34px"
                >
                  <button
                    v-show="demandsAreReadyForApprove"
                    @click="createOrderDetail"
                    type="button"
                    class="sc-button sc-button-default sc-button-small uk-width-1-4"
                    style="height: 34px"
                  >
                    <span
                      data-uk-icon="icon: plus"
                      class="uk-margin-small-right uk-icon"
                    ></span>
                    Grup Oluştur
                  </button>
                  <button
                    v-show="demandsAreReadyForApprove && selectedGroup != null"
                    @click="addToSelectedGroup"
                    type="button"
                    class="sc-button sc-button-default sc-button-small uk-width-1-4"
                    style="height: 34px"
                  >
                    <span
                      data-uk-icon="icon: plus"
                      class="uk-margin-small-right uk-icon"
                    ></span>
                    Seçilen Gruba Ekle
                  </button>
                  <button
                    v-show="
                      selectedDemandRow &&
                      selectedDemandRow.id > 0 &&
                      selectedDemandIndexes.length == 1
                    "
                    @click="showItemDemandDialog"
                    type="button"
                    class="sc-button sc-button-warning sc-button-small uk-width-1-4"
                    style="height: 34px"
                  >
                    <span
                      data-uk-icon="icon: list"
                      class="uk-margin-small-right uk-icon"
                    ></span>
                    Talep Detayı
                  </button>
                  <button
                    v-show="demandsAreReadyForDeny"
                    @click="denyDetails"
                    type="button"
                    class="sc-button sc-button-default sc-button-small uk-width-1-4"
                    style="height: 34px"
                  >
                    <span
                      data-uk-icon="icon: ban"
                      class="uk-margin-small-right uk-icon"
                    ></span>
                    Reddet
                  </button>
                  <button
                    v-show="demandsAreReadyForDelete"
                    type="button"
                    class="sc-button sc-button-danger sc-button-small uk-width-1-4"
                    style="height: 34px"
                  >
                    <span
                      data-uk-icon="icon: trash"
                      class="uk-margin-small-right uk-icon"
                    ></span>
                    Sil
                  </button>
                </div>
              </div>
              <client-only>
                <Datatable
                  id="sc-dt-demands-waiting-for-approve-table"
                  ref="buttonsTable"
                  :data="visualData"
                  :options="dtDOptions"
                  :customColumns="dtColumns"
                  :buttons="true"
                  :customEvents="[
                    { name: 'select', function: clickDemandRow },
                    { name: 'deselect', function: deselectDemandRow },
                  ]"
                  @initComplete="dtButtonsInitialized"
                ></Datatable>
              </client-only>
            </div>
            <div class="uk-width-1-4@m">
              <h3>
                Teklif Kalemleri
                <button
                  type="button"
                  @click="redirectOfferForm"
                  style="float: right"
                  class="sc-button sc-button-primary sc-button-small uk-margin-small-right"
                >
                  <span data-uk-icon="icon: check" class="uk-icon"></span>Teklif
                  Oluştur
                </button>
              </h3>
              <div>
                <client-only>
                  <Select2
                    v-model="selectedFirms"
                    :options="firmList"
                    multiple
                    :settings="{
                      width: '100%',
                      placeholder: 'Firmalar',
                      allowClear: true,
                    }"
                    ><label>Firmalar</label></Select2
                  >
                </client-only>
              </div>
              <table
                class="uk-table uk-table-striped uk-table-responsive uk-table-small"
                style="width: 100%"
              >
                <tr>
                  <th class="uk-text-nowrap">#</th>
                  <th class="uk-text-nowrap">Sıra</th>
                  <th class="uk-text-nowrap">Açıklama</th>
                  <th class="uk-text-nowrap">Miktar</th>
                  <th class="uk-text-nowrap">#</th>
                </tr>

                <!-- OFFER DETAILS -->
                <tr
                  v-for="(item, index) in offerDetails"
                  :key="index"
                  @click="clickGroupRow(item)"
                  :class="{ 'group-selected': item == selectedGroup }"
                >
                  <td>
                    <button
                      type="button"
                      @click="expandOfferDetail(item)"
                      class="sc-button sc-button-default sc-button-small uk-margin-small-right"
                    >
                      <span
                        :data-uk-icon="
                          'icon:' + (item.expanded ? 'minus' : 'plus')
                        "
                        class="uk-icon"
                      ></span>
                    </button>
                  </td>
                  <td colspan="4" v-if="item.expanded">
                    <span>{{ item.itemExplanation }}</span>
                    <div class="uk-overflow-auto" style="max-height: 250px">
                      <div
                        v-for="(demand, demandIndex) in item.demandDetails"
                        :key="demandIndex"
                        style="
                          border: 1px solid #888;
                          border-radius: 5px;
                          margin: 5px;
                          padding: 5px;
                        "
                        class="uk-grid"
                      >
                        <div class="uk-width-4-5@m">
                          <p class="uk-padding-remove uk-margin-remove">
                            <b>Stok:</b> {{ demand.itemName }}, <b>Proje: </b>
                            {{ demand.projectName }}
                          </p>
                          <p class="uk-padding-remove uk-margin-remove">
                            <b>Açıklama:</b> {{ demand.itemExplanation }}
                          </p>
                          <p class="uk-padding-remove uk-margin-remove">
                            <b>Parça No:</b> {{ demand.partNo }}, <b>Boyut:</b>
                            {{ demand.partDimensions }}, <b>Miktar:</b>
                            {{ demand.quantity }}
                          </p>
                        </div>
                        <div class="uk-width-1-5@m">
                          <button
                            type="button"
                            @click="removeDemandDetailFromOrder(item, demand)"
                            class="sc-button sc-button-danger sc-button-small uk-margin-medium-top uk-margin-small-right"
                          >
                            <span
                              data-uk-icon="icon: trash"
                              class="uk-icon"
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td v-if="!item.expanded">
                    <span style="display: block; margin-top: 10px">{{
                      (index + 1).toString()
                    }}</span>
                  </td>
                  <td v-if="!item.expanded">
                    <ScInput v-model="item.itemExplanation" />
                  </td>
                  <td v-if="!item.expanded">
                    <ScInput v-model="item.quantity" :type="'number'" />
                  </td>
                  <td v-if="!item.expanded">
                    <button
                      type="button"
                      @click="removeOrderDetail(item)"
                      class="sc-button sc-button-danger sc-button-small uk-margin-small-right"
                    >
                      <span data-uk-icon="icon: trash" class="uk-icon"></span>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </ScCardBody>
      </ScCard>
    </div>

    <div id="dlgItemDemandDetail" class="uk-modal" data-uk-modal stack="true">
      <div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
        <div class="uk-modal-body">
          <ItemDemandDetail
            v-if="
              refreshDemandDialog &&
              selectedDemandRow &&
              selectedDemandRow.id > 0
            "
            :detail-object="{ ...selectedDemandRow }"
            :is-dialog="true"
            :dialog-container="'dlgItemDemandDetail'"
            @onDetailSubmit="onDemandDetailSaved"
            @onCancel="closeDemandDialog"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PrettyCheck from "pretty-checkbox-vue/check";
import { useApi } from "~/composable/useApi";
import { dateToStr } from "~/composable/useHelpers";
import ScInput from "~/components/Input";
import moment from "~/plugins/moment";

export default {
  name: "DemandsWaitingForApproveList",
  components: {
    Datatable: process.client
      ? () => import("~/components/datatables/Datatables")
      : null,
    Select2: process.client ? () => import("~/components/Select2") : null,
    ItemDemandDetail: process.client
      ? () => import("~/logical_components/ItemDemandDetail")
      : null,
    PrettyCheck,
    ScInput,
  },
  data: () => {
    return {
      visualData: [],
      dtColumns: [
        { data: "demandDate", title: "Tarih", visible: true, type: "date" },
        { data: "itemDemandNo", title: "Talep No", visible: true },
        {
          data: "projectName",
          title: "Proje Adı",
          visible: true,
          width: "20%",
          render: function (data, ev, row) {
            return data && data.length > 0 ? data : "İç Üretim";
          },
        },
        {
          data: "itemName",
          title: "Stok Adı",
          visible: true,
          render: function (data, ev, row) {
            return data && data.length > 0 ? data : "";
          },
        },
        {
          data: "itemExplanation",
          title: "Açıklama",
          visible: true,
          width: "20%",
        },
        { data: "partNo", title: "Parça Kodu", visible: true },
        { data: "partDimensions", title: "Boyutlar", visible: true },
        { data: "quantity", title: "Miktar", visible: true },
        { data: "userName", title: "Oluşturan", visible: true },
      ],
      dtDHeaders: [],
      dtDOptions: {
        autoWidth: false,
        select: true,
        paging: false,
        stateSave: false,
        rowCallback: function (row, data, index) {
          if (data.demandStatus == 4) {
            $("td", row).addClass("demand-denied");
          } else if (!data.itemId) {
            $("td", row).addClass("item-selection-required");
          }
        },
        order: [[1, "dsc"]],
        buttons: [
          // {
          // 	extend: "copyHtml5",
          // 	className: "sc-button",
          // 	text: 'Kopyala'
          // },
          // {
          // 	extend: "csvHtml5",
          // 	className: "sc-button",
          // 	text: 'CSV '
          // },
          {
            extend: "excelHtml5",
            className: "sc-button",
            text: "Excel ",
          },
          {
            extend: "pdfHtml5",
            className: "sc-button sc-button-icon",
            text: '<i class="mdi mdi-file-pdf md-color-red-800"></i>',
          },
          {
            extend: "print",
            className: "sc-button sc-button-icon",
            text: '<i class="mdi mdi-printer"></i>',
            title: "Yazdır",
            autoPrint: true,
          },
        ],
      },
      refreshDemandDialog: false,
      lastSelectionTime: null,
      selectedDemandRow: { id: 0, itemDemandId: 0 },
      selectedDemandIndexes: [],
      selectedGroup: null,
      offerDetails: [],
      firmList: [],
      selectedFirms: [],
    };
  },
  computed: {
    demandsAreReadyForApprove() {
      let result = true;

      if (this.selectedDemandIndexes.length == 0) result = false;

      if (result) {
        for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
          const dmnIndex = this.selectedDemandIndexes[i];
          const dmnObj = this.visualData[dmnIndex];
          if (
            !dmnObj ||
            (dmnObj.demandStatus != 0 && dmnObj.demandStatus != 4)
          ) {
            result = false;
            break;
          }
        }
      }

      return result;
    },
    demandsAreReadyForDeny() {
      let result = true;

      if (this.selectedDemandIndexes.length == 0) result = false;

      if (result) {
        for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
          const dmnIndex = this.selectedDemandIndexes[i];
          const dmnObj = this.visualData[dmnIndex];
          if (!dmnObj || dmnObj.demandStatus >= 2) {
            result = false;
            break;
          }
        }
      }

      return result;
    },
    demandsAreReadyForDelete() {
      let result = true;

      if (this.selectedDemandIndexes.length == 0) result = false;

      if (result) {
        for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
          const dmnIndex = this.selectedDemandIndexes[i];
          const dmnObj = this.visualData[dmnIndex];
          if (
            !dmnObj ||
            (dmnObj.demandStatus >= 2 && dmnObj.demandStatus != 4)
          ) {
            result = false;
            break;
          }
        }
      }

      return result;
    },
  },
  async mounted() {
    await this.bindList();
  },
  methods: {
    async bindList() {
      const api = useApi();
      const rawData = (await api.get("ItemDemand/WaitingForApprove")).data;

      this.visualData = rawData.map((d) => {
        return {
          ...d,
          demandDate: dateToStr(d.demandDate),
        };
      });

      this.firmList = (await api.get("Firm")).data.map((d) => {
        return {
          id: d.id,
          text: d.firmName,
        };
      });
    },
    dtButtonsInitialized() {
      // append buttons to custom container
      this.$refs.buttonsTable.$dt
        .buttons()
        .container()
        .appendTo(document.getElementById("sc-dt-buttons"));
    },
    toggleCol(e, col) {
      var column = this.$refs.buttonsTable.$dt.column(col);
      column.visible(e).draw("page");
    },
    clickDemandRow: function (e, dt, type, indexes) {
      const selIndex = indexes[0];
      const selRow = this.visualData[selIndex];
      if (this.selectedDemandIndexes.length > 0 && !selRow.itemId) {
        this.showNotification(
          "Bu kalemi gruba dahil edebilmeniz için ilgili stok seçilmelidir.",
          false,
          "warning"
        );
        dt.row().deselect();
        return;
      }

      this.selectedDemandIndexes.push(selIndex);
      // this.selectedDemandIndexes = indexes;
      this.selectedDemandRow = selRow;

      this.lastSelectionTime = this.$moment();
    },
    deselectDemandRow: function (e, dt, type, indexes) {
      try {
        const timeNow = this.$moment();
        if (
          indexes.length > 0 &&
          timeNow.diff(this.lastSelectionTime) < 300 &&
          indexes.length == 1 &&
          this.selectedDemandIndexes.length == 1 &&
          this.visualData[indexes[0]].id ==
            this.visualData[this.selectedDemandIndexes[0]].id
        ) {
          const selRow = this.visualData[indexes[0]];
          if (!selRow.itemId) {
            this.showNotification(
              "Bu kalemi tekliflendirebilmek için ilgili stok seçilmelidir.",
              false,
              "warning"
            );
            return;
          }
          this.selectedDemandRow = this.visualData[indexes[0]];
          this.createOrderDetailWithOne();
        } else {
          this.selectedDemandIndexes = this.selectedDemandIndexes.filter(
            (d) => !indexes.includes(d)
          );
          if (this.selectedDemandIndexes.length > 0) {
            this.selectedDemandRow =
              this.visualData[this.selectedDemandIndexes[0]];
          } else this.selectedDemandRow = { id: 0, itemDemandId: 0 };
        }
      } catch (error) {}
    },
    clickGroupRow: function (item) {
      if (this.selectedGroup == item) this.selectedGroup = null;
      else this.selectedGroup = item;
    },
    async approveDetails() {
      const self = this;

      UIkit.modal
        .confirm("Seçilen talepleri onaylamak istediğinizden emin misiniz?")
        .then(async function () {
          const api = useApi();
          try {
            const demandIdList = [];
            for (let i = 0; i < self.selectedDemandIndexes.length; i++) {
              const dmnIndex = self.selectedDemandIndexes[i];
              const dmnObj = self.visualData[dmnIndex];
              demandIdList.push(dmnObj.id);
            }

            const api = useApi();
            const postResult = (
              await api.post("ItemDemand/ApproveDetails", demandIdList)
            ).data;
            if (postResult.result) {
              self.selectedDemandIndexes = [];
              self.showNotification("Onay işlemi başarılı.", false, "success");
              await self.bindList();
            } else self.showNotification(postResult.errorMessage, false, "error");
          } catch (error) {
            self.showNotification("Bir hata oluştu.", false, "error");
          }
        });
    },
    async denyDetails() {
      const self = this;

      UIkit.modal
        .confirm("Seçilen talepleri reddetmek istediğinizden emin misiniz?")
        .then(async function () {
          const api = useApi();
          try {
            const demandIdList = [];
            for (let i = 0; i < self.selectedDemandIndexes.length; i++) {
              const dmnIndex = self.selectedDemandIndexes[i];
              const dmnObj = self.visualData[dmnIndex];
              demandIdList.push(dmnObj.id);
            }

            const api = useApi();
            const postResult = (
              await api.post("ItemDemand/DenyDetails", demandIdList)
            ).data;
            if (postResult.result) {
              self.selectedDemandIndexes = [];
              self.showNotification("Red işlemi başarılı.", false, "success");
              await self.bindList();
            } else self.showNotification(postResult.errorMessage, false, "error");
          } catch (error) {
            self.showNotification("Bir hata oluştu.", false, "error");
          }
        });
    },
    createOrderDetail() {
      const demandList = [];
      for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
        const dmnIndex = this.selectedDemandIndexes[i];
        const dmnObj = this.visualData[dmnIndex];
        if (!dmnObj.itemId) {
          this.showNotification(
            "Seçimlerinizin içerisinde stok tanımı seçilmeyen talepler var.",
            false,
            "warning"
          );
          return;
        }
        demandList.push(dmnObj);
      }

      this.selectedDemandIndexes = [];
      this.selectedDemandRow = { id: 0 };
      this.visualData = this.visualData.filter(
        (d) => !demandList.some((m) => m.id == d.id)
      );

      this.offerDetails.push({
        expanded: false,
        itemExplanation: "Yeni Grup",
        quantity: 1,
        demandDetails: demandList,
      });
    },
    createOrderDetailWithOne() {
      const demandList = [];
      for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
        const dmnIndex = this.selectedDemandIndexes[i];
        const dmnObj = this.visualData[dmnIndex];
        demandList.push(dmnObj);
      }

      this.selectedDemandIndexes = [];
      this.selectedDemandRow = { id: 0 };
      this.visualData = this.visualData.filter(
        (d) => !demandList.some((m) => m.id == d.id)
      );

      this.offerDetails.push({
        expanded: false,
        itemExplanation:
          demandList[0].itemName && demandList[0].itemName.length > 0
            ? demandList[0].itemName
            : demandList[0].itemExplanation,
        quantity: demandList[0].quantity,
        demandDetails: demandList,
      });
    },
    addToSelectedGroup() {
      if (this.selectedGroup != null) {
        const demandList = [];
        for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
          const dmnIndex = this.selectedDemandIndexes[i];
          const dmnObj = this.visualData[dmnIndex];
          demandList.push(dmnObj);
        }

        this.selectedDemandIndexes = [];
        this.selectedDemandRow = { id: 0 };
        this.visualData = this.visualData.filter(
          (d) => !demandList.some((m) => m.id == d.id)
        );

        for (let i = 0; i < demandList.length; i++) {
          const element = demandList[i];
          this.selectedGroup.demandDetails.push(element);
        }
      }
    },
    removeDemandDetailFromOrder(orderDetail, demandDetail) {
      try {
        const detailIndex = orderDetail.demandDetails.indexOf(demandDetail);
        if (detailIndex > -1) {
          this.visualData.push(demandDetail);
          orderDetail.demandDetails.splice(detailIndex, 1);
        }
      } catch (error) {}
    },
    removeOrderDetail(orderDetail) {
      try {
        const ordIndex = this.offerDetails.indexOf(orderDetail);
        if (ordIndex > -1) {
          for (let i = 0; i < orderDetail.demandDetails.length; i++) {
            const dmnDetail = orderDetail.demandDetails[i];
            this.visualData.push(dmnDetail);
          }

          this.offerDetails.splice(ordIndex, 1);

          this.selectedGroup = null;
          this.selectedDemandIndexes = [];
          this.selectedDemandRow = null;
        }
      } catch (error) {
        console.error(error);
      }
    },
    redirectOfferForm() {
      if (process.client) {
        const self = this;

        UIkit.modal
          .confirm("Teklif oluşturmak istediğinizden emin misiniz?")
          .then(async function () {
            localStorage.setItem(
              "grouped-demand-details",
              JSON.stringify(self.offerDetails)
            );
            localStorage.setItem(
              "grouped-demand-firms",
              JSON.stringify(self.selectedFirms)
            );
            self.$router.push("/purchasing/item-offer");
          });
      }
    },
    expandOfferDetail(item) {
      if (!item.expanded) item.expanded = true;
      else item.expanded = !item.expanded;
    },
    showNotification(text, pos, status, persistent) {
      var config = {};
      config.timeout = persistent ? !persistent : 3000;
      if (status) {
        config.status = status;
      }
      if (pos) {
        config.pos = pos;
      }
      UIkit.notification(text, config);
    },
    async onDemandDetailSaved(resultObj) {
      if (resultObj && resultObj.action == "save" && resultObj.data) {
        const api = useApi();
        let success = false;

        try {
          resultObj.data.demandDate = null;
          const postResult = (
            await api.post("ItemDemand/SaveDetail", resultObj.data)
          ).data;
          if (postResult.result) {
            this.showNotification("Kayıt başarılı", false, "success");
            success = true;
          } else
            this.showNotification(
              "Hata: " + postResult.errorMessage,
              false,
              "error"
            );
        } catch (error) {
          this.showNotification("Bir hata oluştu.", false, "error");
        }

        this.closeDemandDialog();
        if (success) await this.bindList();
      }
    },
    closeDemandDialog() {
      const modalElement = document.getElementById("dlgItemDemandDetail");
      UIkit.modal(modalElement).hide();
    },
    showItemDemandDialog() {
      this.refreshItemDialog = false;
      setTimeout(() => {
        this.refreshDemandDialog = true;
      }, 200);

      const modalElement = document.getElementById("dlgItemDemandDetail");
      modalElement.width = window.innerWidth * 0.7;
      modalElement.height = window.innerHeight * 0.8;
      UIkit.modal(modalElement).show();
    },
  },
};
</script>
<style lang="scss">
@import "~scss/common/md_colors";
@import "~scss/common/variables_mixins";
@import "~scss/plugins/datatables";
@import "~scss/vue/_pretty_checkboxes";
</style>
<style type="text/css">
.demand-denied {
  background-color: rgba(230, 50, 50, 0.3);
}
.group-selected,
.group-selected td {
  background-color: rgba(81, 150, 214, 0.3);
}
.item-selection-required {
  background-color: rgba(226, 214, 51, 0.3);
}
</style>
