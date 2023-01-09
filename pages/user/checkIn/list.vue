<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Check In
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
          <client-only>
            <Datatable id="sc-dt-roles-table" ref="buttonsTable" :data="visualData" :options="dtDOptions"
              :customColumns="dtColumns" :buttons="true" :customEvents="[{ name: 'select'}]"
              @initComplete="dtButtonsInitialized"></Datatable>
          </client-only>
        </ScCardBody>
      </ScCard>
    </div>
  </div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import moment from 'moment';

export default {
  name: 'RoleList',
  components: {
    Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
    PrettyCheck
  },
  data: () => {
    return {
      visualData: [],
      dtColumns: [
        { data: "id", title: "#", visible: true, },
        { data: "employeeName", title: "Ad Soyad", visible: true, },
        { data: "processDate", title: "İşlem Tarihi", visible: true, 
          render: function (data, ev, row) {
            return row && row.processDate ? moment(row.processDate).format('YYYY.MM.DD HH:mm') : '';
          },
        },
        { data: "processType", title: "İşlem Türü", visible: true, 
          render: function (data, ev, row) {
            return row && row.processType == 0 ? "Giriş" : "Çıkış";
          },
        },
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
    const api = useApi();
    const rawData = (await api.get('EmployeeCheckIn')).data;

    this.visualData = rawData;

    if (this.$refs.buttonsTable) {
      // this.$refs.buttonsTable.$dt.state().clear()
      console.log(this.$refs.buttonsTable);
      // console.log(this.$refs.buttonsTable.$dt.state().clear());
    }

  },
  methods: {
    dtButtonsInitialized() {
      // append buttons to custom container
      this.$refs.buttonsTable.$dt.buttons().container().appendTo(document.getElementById('sc-dt-buttons'));
    },
    toggleCol(e, col) {
      var column = this.$refs.buttonsTable.$dt.column(col);
      column.visible(e).draw('page');
    },
    /* clickDetail: function (e, dt, type, indexes) {
      this.$router.push('/user/employee?id=' + this.visualData[indexes[0]].id);
    }, */
  }
}
</script>
<style lang="scss">
@import "~scss/common/md_colors";
@import "~scss/common/variables_mixins";
@import "~scss/plugins/datatables";
@import '~scss/vue/_pretty_checkboxes';
</style>