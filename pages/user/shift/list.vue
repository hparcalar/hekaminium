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
          <DataTable :value="visualData" responsiveLayout="scroll" ref="dtable" :filters.sync="filterGeneral" filterDisplay="row"
            columnResizeMode="fit" dataKey="id" :paginator="true" showGridlines :rows="25" selectionMode="single"
            sortField="id" :sortOrder="-1" :globalFilterFields="['employeeName']">
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
import { FilterMatchMode, FilterOperator } from 'primevue/api/';
import * as XLSX from 'xlsx';

export default {
  name: 'ShiftList',
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
            diffMinute: (parseInt(d.totalHour)) - (parseInt((this.endDate - this.startDate) / 864e5) * 450)
          };
        })
      }
    },
    clearGeneralFilter(){
      this.filterGeneral.global.value = null;
    },
    exportToCsv() {
      var ShiftList = this.visualData.reduce((ShiftList, shift) => {
        ShiftList.push({
          'Personel': shift.employeeName,
          'Toplam Süre(dk)': shift.totalMinutes,
          'Gerekli Süre(dk)': shift.requiredMinutes,
          'Fark(dk)': shift.diffMinute,
          'Toplam Süre(saat)': shift.totalHours,
          
        })
        return ShiftList;
      }, [])
      
      ShiftList.sort(function (a, b) {
        if (a.Personel < b.Personel) {
          return -1;
        }
        if (a.Personel > b.Personel) {
          return 1;
        }
        return 0;
      });

      var shiftWs = XLSX.utils.json_to_sheet(ShiftList)
      var wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, shiftWs, 'Shift list')
      XLSX.writeFile(wb, 'Mesai Listesi.xlsx')
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