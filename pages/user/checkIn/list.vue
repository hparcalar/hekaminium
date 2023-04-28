<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Giriş/Çıkış Raporu
                <button type="button" @click="newRecord" v-show="hasViewAuth('Report', 1)"
                  class="sc-button sc-button-small uk-margin-small-left">
                  <span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
                  Yeni
                </button>
              </ScCardTitle>
            </div>
          </div>
        </ScCardHeader>
        <ScCardBody>
          <div class="uk-flex" style="margin-bottom:15px;">
            <div class="">
              <label for="startDate">Başlangıç</label>
              <div class="field col-12 md:col-4">
                <Calendar id="time24" v-model="startDate" :showTime="false" dateFormat="dd.mm.yy" @date-select="bindList"
                  :showSeconds="false" placeholder="Time" />
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
          <DataTable :value="visualData" responsiveLayout="scroll" :filters.sync="filterGeneral" ref="dtable"
            filterDisplay="row" @row-select="clickDetail" columnResizeMode="fit" dataKey="id" :paginator="true"
            showGridlines :rows="20" selectionMode="single" sortField="processDate" :sortOrder="-1"
            :globalFilterFields="['employeeName', 'processDate', 'exitDate']">
            <template #header>
              <div style="float:right;text-align:right;">
                <Button icon="pi pi-external-link" label="Dışarı Aktar" @click="exportToCsv($event)" />
              </div>
              <div class="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Temizle" class="p-button-outlined"
                  @click="clearGeneralFilter()" />
                <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <InputText v-model="filterGeneral['global'].value" placeholder="Genel Arama" />
                </span>
              </div>
            </template>
            <template #empty>
              Hiç kayıt yok.
            </template>
            <template #loading>
              Yükleniyor. Lütfen bekleyiniz.
            </template>
            <!-- <Column field="id" header="#" sortable>
						</Column> -->
            <Column field="employeeName" header="Ad Soyad" sortable :style="{ width: '20%' }" :headerStyle="{ width: '20%' }">
            </Column>
            <Column field="processDate" header="Giriş Tarihi" sortable :style="{ width: '25%' }"
              :headerStyle="{ width: '25%' }">
              <template #body="slotProps">
                {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
              </template>
            </Column>
            <Column field="exitDate" header="Çıkış Tarihi" sortable :style="{ width: '25%' }" :headerStyle="{ width: '25%' }">
              <template #body="slotProps">
                {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
              </template>
            </Column>
            <!-- <Column field="autoCheckOut" header="Uyarı" sortable :style="{width: '10%'}" :headerStyle="{width: '10%'}">
						</Column> -->
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
import { useUserSession } from "~/composable/userSession";
import { FilterMatchMode, FilterOperator } from 'primevue/api/';
import * as XLSX from 'xlsx';

export default {
  name: 'RoleList',
  components: {
    PrettyCheck,
    ScInput,
  },
  data: () => {
    return {
      startDate: moment().toDate(),
      endDate: moment().toDate(),
      visualData: [],
      filterGeneral: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        employeeName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        processDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
        exitDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
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
      const rawData = (await api.get('EmployeeCheckIn?startDate=' + encodeURIComponent(prmStart) + '&endDate=' + encodeURIComponent(prmEnd))).data;

      this.visualData = rawData;
    },
    clearGeneralFilter(){
      this.filterGeneral.global.value = null;
    },
    clickDetail: function (e) {
      this.$router.push('/user/checkIn?id=' + e.data.id);
    },
    newRecord() {
      this.$router.push('/user/checkIn/checkIn');
    },
    exportToCsv() {
      var checkList = this.visualData.reduce((checkList, checkin) => {
        checkList.push({
          'Personel': checkin.employeeName,
          'Giriş Tarihi': moment(checkin.processDate).locale("tr").format('YYYY.MM.DD HH:mm dddd'),
          'Çıkış Tarihi': checkin.exitDate != null ? moment(checkin.exitDate).format('YYYY.MM.DD HH:mm') : "-",
        })
        return checkList;
      }, [])
      
      checkList.sort(function (a, b) {
        if (a.Personel < b.Personel) {
          return -1;
        }
        if (a.Personel > b.Personel) {
          return 1;
        }
        return 0;
      });

      var checkinWs = XLSX.utils.json_to_sheet(checkList)
      var wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, checkinWs, 'Checkin list')
      XLSX.writeFile(wb, 'Giris Cikis Raporu.xlsx')
    },
    hasViewAuth(sectionKey, authCode) {
      if (process.client) {
        const session = useUserSession();
        if (session && session.checkAuthSection)
          return session.checkAuthSection(sectionKey, authCode);
      }
      return false;
    },
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