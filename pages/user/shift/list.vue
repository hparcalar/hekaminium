<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Mesai Raporu
              </ScCardTitle>
            </div>
            <div class="uk-width-auto@s">
              <div id="sc-dt-buttons"></div>
            </div>
            <div class="uk-width-auto@s">
              <!-- <button class="sc-button sc-button-primary sc-button-flex" type="button">
              Sütun Seç <i class="mdi mdi-chevron-down uk-margin-small-left"></i>
            </button> -->
              <div class="uk-dropdown uk-width-small" data-uk-drop="mode: click">
                <div class="sc-padding-small">
                  <div v-for="(checkbox, index) in dtDHeaders" :key="index" class="uk-margin-small">
                    <PrettyCheck class="p-icon" :value="index" :checked="checkbox.checked" :disabled="checkbox.disabled"
                      @change="toggleCol($event, index)">
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
          <div class="uk-flex" style="margin-bottom:15px;">
            <div class="">
              <label for="startDate">Başlangıç</label>
              <div class="field col-12 md:col-4">
                <Calendar id="time24" v-model="startDate" :showTime="false" dateFormat="dd.mm.yy"
                  @date-select="bindList" :showSeconds="false" placeholder="Time" />
              </div>
            </div>

            <div style="margin-left:20px;">
              <label for="endDate">Bitiş</label>
              <div class="field col-12 md:col-4">
                <Calendar id="time24" v-model="endDate" :showTime="false" dateFormat="dd.mm.yy" @date-select="bindList"
                  :showSeconds="false" placeholder="Time" />
              </div>
            </div>
          </div>
          <DataTable :value="visualData" responsiveLayout="scroll" ref="dtable"
            columnResizeMode="fit" dataKey="id" :paginator="true" showGridlines :rows="25" selectionMode="single"
            sortField="id" :sortOrder="-1">
            <template #empty>
              Hiç kayıt yok.
            </template>
            <template #loading>
              Yükleniyor. Lütfen bekleyiniz.
            </template>
            <!-- <Column field="id" header="#" sortable>
						</Column> -->
            <Column field="employeeName" header="Ad Soyad" sortable :style="{ width: '20%' }"
              :headerStyle="{ width: '20%' }">
            </Column>
            <Column field="totalMinutes" header="Toplam süre (dk)" sortable :style="{ width: '10%' }"
              :headerStyle="{ width: '10%' }">
            </Column>
            <Column field="requiredMinutes" header="Gerekli süre (dk)" sortable :style="{ width: '10%' }"
              :headerStyle="{ width: '10%' }">
            </Column>
            <Column field="diffMinute" header="Fark (dk)" sortable :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
            </Column>
            <Column field="totalHours" header="Toplam süre (saat)" sortable :style="{ width: '10%' }"
              :headerStyle="{ width: '10%' }">
            </Column>
          </DataTable>
        </ScCardBody>
      </ScCard>
    </div>
  </div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import moment from 'moment';
import ScInput from '~/components/Input'

export default {
  name: 'RoleList',
  components: {
    Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
    PrettyCheck,
    ScInput,
  },
  data: () => {
    return {
      startDate: moment().toDate(),
      endDate: moment().toDate(),
      visualData: [],
      dtColumns: [
        { data: "id", title: "#", visible: true, },
        { data: "employeeName", title: "Ad Soyad", visible: true, },
      ],
      dtDHeaders: [],
      dtDOptions: {
        select: true,
        "stateSave": false,
        "order": [
          [0, "desc"]
        ],
        pageLength: 50,
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
            text: 'Excel '
          },
          {
            extend: "pdfHtml5",
            className: "sc-button sc-button-icon",
            text: '<i class="mdi mdi-file-pdf md-color-red-800"></i>'
          },
          {
            extend: "print",
            className: "sc-button sc-button-icon",
            text: '<i class="mdi mdi-printer"></i>',
            title: 'Yazdır',
            autoPrint: true
          }
        ]
      }
    }
  },
  async mounted() {
    await this.bindList();
  },
  methods: {
    async bindList() {
      const prmStart = moment(this.startDate).format('DD.MM.YYYY');
      const prmEnd = moment(this.endDate).format('DD.MM.YYYY');

      const api = useApi();
      const rawData = (await api.get('Shift?startDate=' + encodeURIComponent(prmStart) + '&endDate=' + encodeURIComponent(prmEnd))).data;

      if (rawData) {
        var result = [];
        rawData.reduce(function (res, value) {
          if (!res[value.employeeId]) {
            res[value.employeeId] = { Id: value.employeeId, totalHour: 0 };
            result.push(res[value.employeeId])
          }
          res[value.employeeId].employeeName = value.employeeName;
          res[value.employeeId].totalHour += value.totalHour;
          return res;
        }, {});

        this.visualData = result.map((d) => {
          return {
            ...d,
            totalMinutes: parseInt(d.totalHour),
            requiredMinutes: parseInt((this.endDate - this.startDate) / 864e5) * 450,
            totalHours: parseInt(d.totalHour / 60) + "." + ('0' + parseInt(d.totalHour % 60)).slice(-2),
            diffMinute: (parseInt((this.endDate - this.startDate) / 864e5) * 450) - (parseInt(d.totalHour))
          };
        })
      }
    },
    dtButtonsInitialized() {
      // append buttons to custom container
      this.$refs.buttonsTable.$dt.buttons().container().appendTo(document.getElementById('sc-dt-buttons'));
    },
    toggleCol(e, col) {
      var column = this.$refs.buttonsTable.$dt.column(col);
      column.visible(e).draw('page');
    },
    /* clickDetail: function (e) {
      this.$router.push('/user/shift?id=' + e.data.id);
    }, */
    convertDateToStr(date) {
      if (date && date.length > 0)
        return moment(date).format("DD.MM.YYYY HH.mm")
      return ""
    }
  }
}
</script>
<style lang="scss">
@import "~scss/common/md_colors";
@import "~scss/common/variables_mixins";
@import "~scss/plugins/datatables";
@import '~scss/vue/_pretty_checkboxes';
</style>