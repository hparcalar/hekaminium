<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Tamamlanmış Projeler
              </ScCardTitle>
            </div>
          </div>
        </ScCardHeader>
        <ScCardBody>
          <DataTable :value="visualData" responsiveLayout="scroll" v-on:filter="onFilter" ref="dtable"
            @row-select="clickDetail" columnResizeMode="fit" dataKey="id" :paginator="true" showGridlines :rows="13"
            :filters.sync="filterGeneral" selectionMode="single" filterDisplay="row" sortField="projectCode"
            :sortOrder="-1"
            :globalFilterFields="['projectCode', 'projectName', 'firmName', 'forexName', 'offerPrice', 'offerForexPrice', 'explanation']">
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
              Hiç proje yok.
            </template>
            <template #loading>
              Yükleniyor. Lütfen bekleyiniz.
            </template>
            <Column field="projectCode" header="Proje Kodu" sortable :style="{ width: '5%' }"
              :headerStyle="{ width: '5%' }">
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column field="projectName" header="Proje Adı" sortable :style="{ width: '20%' }"
              :headerStyle="{ width: '20%' }">
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column field="firmName" header="Müşteri" sortable :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column v-if="hasViewAuth('ProjectBudgetView', 0)" field="forexName" header="Döviz" sortable
              :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column v-if="hasViewAuth('ProjectBudgetView', 0)" field="offerPrice" header="Bedel (TL)" sortable
              :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
              <template #body="slotProps">
                {{ convertNumberToStr(slotProps.data[slotProps.column.field]) }}
              </template>
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column v-if="hasViewAuth('ProjectBudgetView', 0)" field="offerForexPrice" header="Bedel (Döviz)" sortable
              :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
              <template #body="slotProps">
                {{ convertNumberToStr(slotProps.data[slotProps.column.field]) }}
              </template>
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column v-if="hasViewAuth('ProjectBudgetView', 0)" field="expiryExplanation" header="Açıklama" sortable
              :style="{ width: '15%' }" :headerStyle="{ width: '15%' }">
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column v-if="hasViewAuth('ProjectBudgetView', 0)" field="expiryStartDate" header="Vade Başlangıç Tarihi"
              sortable>
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column v-if="hasViewAuth('ProjectBudgetView', 0)" field="expiryEndDate" header="Vade Bitiş Tarihi" sortable>
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <Column v-if="hasViewAuth('ProjectBudgetView', 0)" field="expiryTime" header="Vade Süresi(Gün)" sortable>
              <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" @input="filterCallback()" />
              </template>
            </Column>
            <!-- <Column v-if="hasViewAuth('ProjectBudgetView',0)" field="isInvoiced" header="Fatura Durumu" :style="{width: '5%'}" :headerStyle="{width: '5%'}">
							<template #body="slotProps">
								<div style="text-align: center; font-weight: bold;">
									{{  slotProps.data[slotProps.column.field] ? '✓' : '' }}
								</div>
							</template>
						</Column> -->
            <Column header="Fatura Durumu">
              <template #body="slotProps">
                <Button label="" icon="pi pi-file"
                  :class="'pi-button-sm' && slotProps.data.isInvoiced == true ? 'p-button-success' : null"
                  @click="showFoldersDialog(slotProps.data)" />
              </template>
            </Column>
            <ColumnGroup type="footer" v-if="hasViewAuth('ProjectBudgetView', 1)">
              <Row>
                <Column footer="Toplam: " :colspan="4" :footerStyle="{ 'text-align': 'right' }"></Column>
                <Column :footer="sumOfferPrice" />
                <Column :footer="sumOfferForexPrice" />
                <Column footer="" />
                <Column footer="" />
                <Column footer="" />
                <Column footer="" />
                <Column footer="" />
              </Row>
            </ColumnGroup>
          </DataTable>
        </ScCardBody>
      </ScCard>
    </div>
    <Dialog header="Dosya" :visible="refreshAttachmentForm" :close-on-escape="true" :dismissable-mask="true" :modal="true"
      @update:visible="hideHandler" :style="{ width: '75vw', 'z-index': '5000 !important' }">
      <AttachmentForm v-if="refreshAttachmentForm == true && attachmentDialogVisible"
        :record-object="selectedAttachmentRow" :is-dialog="true" :dialog-container="'dlgAttachment'"
        @onCancel="closeAttachmentDialog" @onSubmit="onSubmitAttachment" />
    </Dialog>
    <Dialog header="Dosyalar" :visible="isFolderDialog" :dismissable-mask="true" :close-on-escape="true" :modal="true"
      @update:visible="isFolderDialog = $event" :style="{ width: '75vw', 'z-index': '3000 !important' }">
      <div v-if="selectedProject" class="sc-padding-medium sc-padding-remove-top" style="margin-top:5px;">
        <div class="uk-margin-medium uk-margin-remove-left">
          <button v-if="selectedProject" type="button" @click="showNewAttachment" style="height:34px;"
            class="sc-button sc-button-success sc-button-small">
            <span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
            Dosya Ekle
          </button>
          <client-only>
            <Datatable id="sc-dt-atc-table" ref="atcTable" :data="attachmentList" :options="dtAttachmentOptions"
              :customColumns="dtAttachmentCols" :buttons="true"
              :customEvents="[{ name: 'select', function: clickAttachmentRow }]">
            </Datatable>
          </client-only>
        </div>
      </div>
    </Dialog>
  </div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import { numberToStr } from '~/composable/useHelpers';
import { FilterMatchMode, FilterOperator } from 'primevue/api/';
import * as XLSX from 'xlsx';
import moment from 'moment';

export default {
  name: 'ProjectList',
  components: {
    PrettyCheck,
    Select2: process.client ? () => import('~/components/Select2') : null,
    Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
    AttachmentForm: process.client ? () => import("~/logical_components/AttachmentForm") : null,
  },
  data: () => {
    return {
      filteredData: [],
      visualData: [],
      sumOfferPrice: 0,
      sumOfferForexPrice: 0,
      filterGeneral: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        projectCode: { value: null, matchMode: FilterMatchMode.CONTAINS },
        projectName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        firmName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        forexName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        offerPrice: { value: null, matchMode: FilterMatchMode.CONTAINS },
        offerForexPrice: { value: null, matchMode: FilterMatchMode.CONTAINS },
        expiryExplanation: { value: null, matchMode: FilterMatchMode.CONTAINS },
        expiryStartDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
        expiryTime: { value: null, matchMode: FilterMatchMode.CONTAINS },
        expiryEndDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      selectedProject: null,
      isFolderDialog: false,
      attachmentList: [],
      refreshAttachmentForm: false,
      selectedAttachmentRow: { id: 0, recordType: 2, recordId: 0 },
      dtAttachmentOptions: {
        autoWidth: false,
        select: true,
        searching: false,
        paging: false,
      },
      dtAttachmentCols: [
        { data: "title", title: "Başlık", visible: true },
        { data: "fileName", title: "Dosya Adı", visible: true, },
        { data: "explanation", title: "Açıklama", visible: true, },
      ],
    }
  },
  computed: {
  },
  async mounted() {
    this.bindModel();
  },
  methods: {
    async bindModel() {
      const api = useApi();
      const rawData = (await api.get("Project")).data.map((d) => {
        return {
          ...d,
          offerForexPrice: d.offerForexPrice,
          offerPrice: d.offerPrice,
          expiryStartDate: d.expiryStartDate != null ? moment(d.expiryStartDate).format('YYYY.MM.DD') : '',
          expiryEndDate: d.expiryEndDate != null ? moment(d.expiryEndDate).format('YYYY.MM.DD') : '',
        }
      });
      this.visualData = rawData.filter(d => d.projectStatus == 4)
    },

    onFilter(event) {
      this.filteredData = event.filteredValue;

      // calculate summaries
      let sum = 0;
      sum = 0;
      if (this.filteredData && this.filteredData.length > 0) {
        sum = this.filteredData.map((d) => d.offerPrice).reduce((a, b) => a + b);
      }
      else
        sum = 0;
      this.sumOfferPrice = this.convertNumberToStr(sum);

      sum = 0;
      if (this.filteredData && this.filteredData.length > 0) {
        sum = this.filteredData.map((d) => d.offerForexPrice).reduce((a, b) => a + b);
      }
      else
        sum = 0;
      this.sumOfferForexPrice = this.convertNumberToStr(sum);
    },
    exportToCsv() {
      var trackList = this.visualData.reduce((trackList, track) => {
        trackList.push({
          'Proje Kodu': track.projectCode,
          'Proje Adı': track.projectName,
          'Proje Kategorisi': track.projectCategoryName,
          'Müşteri': track.firmName,
          'Döviz Cinsi': track.forexName,
          'Döviz Kuru': track.forexRate != null ? track.forexRate.toFixed(2) : '',
          'Proje Bedeli(TL)': track.offerPrice != null ? track.offerPrice.toFixed(2) : '',
          'Proje Bedeli(Döviz)': track.offerForexPrice != null ? track.offerForexPrice.toFixed(2) : '',
          'Vade Başlangıç Tarihi': track.expiryStartDate != null ? moment(track.expiryStartDate).format('YYYY.MM.DD') : "",
          'Vade Bitiş Tarihi': track.expiryEndDate != null ? moment(track.expiryEndDate).format('YYYY.MM.DD') : "",
          'Vade Süresi': track.expiryTime,
          'Açıklama': track.expiryExplanation,
        })
        return trackList;
      }, [])
      var trackWs = XLSX.utils.json_to_sheet(trackList)
      var wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, trackWs, 'Invoice tracking list')
      XLSX.writeFile(wb, 'Fatura Takip Raporu.xlsx')
    },
    clearGeneralFilter() {
      this.filterGeneral.global.value = null;
    },
    convertNumberToStr(number) {
      return numberToStr(number);
    },
    async showFoldersDialog(data) {
      this.selectedProject = data;
      await this.bindAttachments();
      this.isFolderDialog = true
    },
    async bindAttachments() {
      const api = useApi();
      try {
        this.attachmentList = (await api.get('Attachment/OfRecord/3/' + this.selectedProject.id)).data;
      } catch (error) {

      }
    },
    showNewAttachment() {
      const self = this;
      this.selectedAttachmentRow = { id: 0, recordType: 3, recordId: self.selectedProject.id };
      this.showAttachment();
    },
    hideHandler(event) {
      this.refreshAttachmentForm = event;
      this.isFolderDialog = true
    },
    closeAttachmentDialog() {
      this.attachmentDialogVisible = false;
      this.refreshAttachmentForm = false;
      this.isFolderDialog = true
    },
    async onSubmitAttachment() {
      try {
        const api = useApi();
        const postData = {
          id: this.selectedProject.id,
          isInvoiced: true,
        };
        const result = await api.post('Project/ChangeInvoiceStatus', postData);
        if (result.data.result) {
          this.showNotification('Kayıt başarılı', false, 'success');
        }
        else {
          this.showNotification(result.data.errorMessage, false, 'error');
        }
      } catch (error) {
        this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
      }
      this.closeAttachmentDialog();
      await this.bindAttachments();
      await this.bindModel();
    },
    showAttachment() {
      this.isFolderDialog = false;
      this.attachmentDialogVisible = true;
      this.refreshAttachmentForm = true;
    },
    clickAttachmentRow: function (e, dt, type, indexes) {
      const selIndex = indexes[0];
      this.selectedAttachmentRow = this.attachmentList[selIndex];
      this.showAttachment();
    },
    clickDetail: function (event) {
      this.$router.push('/project/invoice-track?id=' + event.data.id);
    },
    hasViewAuth(sectionKey, authCode) {
      if (process.client) {
        const session = useUserSession();
        if (session && session.checkAuthSection)
          return session.checkAuthSection(sectionKey, authCode);
      }
      return false;
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

.status-0 {
  background-color: white;
}

.status-1 {
  background-color: orange;
}

.status-2 {
  background-color: lightblue;
}

.status-3 {
  background-color: rgb(84, 167, 240);
}

.status-4 {
  background-color: greenyellow;
}

.status-5 {
  background-color: red;
}
</style>