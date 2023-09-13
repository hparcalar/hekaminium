<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Araç Raporu
                <div style="right: 0; margin-top: -25px; margin-bottom: -5px;" class="uk-flex uk-flex-right">
                  <div class="uk-width-1-6">
                    <ScInput v-model="detailDateStart" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr
                      @change="onDateChange" mode="outline">
                      <label>Başlangıç Tarihi</label>
                    </ScInput>
                  </div>
                  <div class="uk-width-1-6">
                    <ScInput v-model="detailDateEnd" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr
                      @change="onDateChange" mode="outline">
                      <label>Bitiş Tarihi</label>
                    </ScInput>
                  </div>
                </div>
              </ScCardTitle>
            </div>
          </div>
        </ScCardHeader>
        <ScCardBody>
          <DataTable :value="visualData" responsiveLayout="scroll" ref="dtable" columnResizeMode="fit" dataKey="id"
            :paginator="true" showGridlines :rows="13" :filters.sync="filterGeneral" selectionMode="single"
            filterDisplay="row" sortField="id" :sortOrder="-1"
            :globalFilterFields="['detailDate', 'carName', 'costExplanation', 'value', 'detailCodeText']">
            <template #header>
              <div style="float:right;text-align:right;">
                <Button icon="pi pi-external-link" label="Dışarı Aktar" @click="exportToCsv($event)" />
              </div>
              <!-- <div style="float:right;text-align:right;margin-right: 10px;">
                <Button icon="pi pi-plus" label="Detay Ekle" @click="hideHandler(true)" />
              </div> -->
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
              Detay bilgisi bulunamadı.
            </template>
            <template #loading>
              Yükleniyor. Lütfen bekleyiniz.
            </template>
            <Column field="detailDate" header="Tarih" sortable :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
              <template #body="slotProps">
                {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
              </template>
            </Column>
            <Column field="carName" header="Araç Adı" sortable :style="{ width: '15%' }" :headerStyle="{ width: '15%' }">
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <!-- <Column field="detailCodeText" header="Kategori" sortable>
							<template #filter="{filterModel, filterCallback}">
							<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column> -->
            <Column field="costExplanation" header="Açıklama" sortable :style="{ width: '35%' }"
              :headerStyle="{ width: '35%' }">
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column field="value" header="Değer" sortable>
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column field="detailCode" header="Detay Türü" sortable>
              <template #body="{ data }">
                <span :class="'project-badge status-' + data.detailCode">{{ data.detailCodeText }}</span>
              </template>
              <template #filter="{ filterModel, filterCallback }">
                <client-only>
                  <Select2 v-model="filterModel.value" @change="filterCallback" :options="statusList"
                    :settings="{ 'width': '100%', 'placeholder': 'Detay Türü', 'allowClear': true }"></Select2>
                </client-only>
              </template>
            </Column>
          </DataTable>
        </ScCardBody>
      </ScCard>
    </div>
  </div>
</template>
<script>
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import { numberToStr } from '~/composable/useHelpers';
import { FilterMatchMode, FilterOperator } from 'primevue/api/';
import { dateToStr } from "~/composable/useHelpers";
import moment from '~/plugins/moment'
import ScInput from '~/components/Input'

if (process.client) {
  require('~/plugins/inputmask');
  require('~/plugins/flatpickr');
}

export default {
  name: 'ProjectList',
  components: {
    Select2: process.client ? () => import('~/components/Select2') : null,
    ScInput,
  },
  data: () => {
    return {
      visualData: [],
      filterGeneral: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        detailDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
        carName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        detailCodeText: { value: null, matchMode: FilterMatchMode.CONTAINS },
        costExplanation: { value: null, matchMode: FilterMatchMode.CONTAINS },
        value: { value: null, matchMode: FilterMatchMode.CONTAINS },
        detailCode: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      detailDateStart: null,
      detailDateEnd: null,
      refreshDetailForm: false,
      selectedDetail: 1,
      mileage: null,
      statusList: [
        { id: 1, text: 'Güncel Kilometre' },
        { id: 2, text: 'Bakım Kilometresi' },
        { id: 3, text: 'Muayene Tarihi' },
        { id: 9, text: 'Sigorta Tarihi' },
        { id: 4, text: 'Yakıt Maliyeti' },
        { id: 5, text: 'Bakım Maliyeti' },
        { id: 6, text: 'Vergi  Maliyeti' },
        { id: 7, text: 'Ceza  Maliyeti' },
        { id: 8, text: 'Diğer  Maliyetler' }
      ]
    }
  },
  async mounted() {
    this.detailDateStart = this.$moment().startOf('Month').format('YYYY-MM-DD');
    this.detailDateEnd = this.$moment().endOf('Month').format('YYYY-MM-DD');
    const api = useApi();
    const rawData = (await api.get("Car/GetAll/" + this.detailDateStart + "/" + this.detailDateEnd)).data.map((d) => {
      return {
        ...d,
      }
    });

    this.visualData = rawData;
  },
  methods: {
    async onDateChange() {
      setTimeout(async () => {
        const api = useApi();
        const rawData = (await api.get("Car/GetAll/" + this.detailDateStart + "/" + this.detailDateEnd)).data.map((d) => {
          return {
            ...d,
          }
        });

        this.visualData = rawData;
      }, "250");

    },
    submitDetail(){

    },
    onSelectedDetailChange(){

    },
    exportToCsv() {
      this.$refs.dtable.exportCSV();
    },
    clearGeneralFilter() {
      this.filterGeneral.global.value = null;
    },
    convertNumberToStr(number) {
      return numberToStr(number);
    },
    openDetailForm(){
      this.refreshDetailForm = true
    },
    hideHandler(event) {
      this.refreshDetailForm = event;
    },
    newRecord() {
      this.$router.push('/project');
    },
    hasViewAuth(sectionKey, authCode) {
      if (process.client) {
        const session = useUserSession();
        if (session && session.checkAuthSection)
          return session.checkAuthSection(sectionKey, authCode);
      }

      return false;
    },
    convertDateToStr(prm) {
      return dateToStr(prm)
    },
  }
}
</script>
<style lang="scss">
@import "~scss/common/md_colors";
@import "~scss/common/variables_mixins";
@import "~scss/plugins/datatables";
@import '~scss/vue/_pretty_checkboxes';

.project-badge {
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #afafaf;
  font-weight: bold;
}

.status-1 {
  background-color: lightgreen;
}

.status-2 {
  background-color: orange;
}

.status-3 {
  background-color: lightblue;
}

.status-4 {
  background-color: rgb(84, 167, 240);
}

.status-5 {
  background-color: greenyellow;
}

.status-6 {
  background-color: lightcoral;
}

.status-7 {
  background-color: red;
}

.status-8 {
  background-color: white;
}
</style>