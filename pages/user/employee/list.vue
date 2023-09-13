<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Personeller
                <button type="button" @click="newRecord" v-show="hasViewAuth('Employee', 1)"
                  class="sc-button sc-button-small uk-margin-small-left">
                  <span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
                  Yeni
                </button>
              </ScCardTitle>
            </div>
          </div>
        </ScCardHeader>
        <ScCardBody>
          <DataTable :value="visualData" responsiveLayout="scroll" :filters.sync="filterGeneral" ref="dtable"
            filterDisplay="row" @row-select="clickDetail" columnResizeMode="fit" dataKey="id" :paginator="true"
            showGridlines :rows="20" selectionMode="single" sortField="employeeCode" :sortOrder="1"
            :globalFilterFields="['employeeName']">
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
            <Column field="employeeCode" header="Personel Kodu" sortable :style="{ width: '5%' }"
              :headerStyle="{ width: '5%' }">
            </Column>
            <Column field="employeeName" header="Ad Soyad" sortable :style="{ width: '10%' }"
              :headerStyle="{ width: '10%' }">
            </Column>
            <Column field="employeeCardNo" header="Kart Numarası" sortable :style="{ width: '8%' }"
              :headerStyle="{ width: '8%' }">
            </Column>
            <Column field="employeeHourlyWage" header="Saatlik Brüt Ücret" sortable :style="{ width: '5%' }"
              :headerStyle="{ width: '5%' }">
            </Column>
            <Column field="employeePhone" header="Telefon" sortable :style="{ width: '8%' }"
              :headerStyle="{ width: '8%' }">
            </Column>
            <Column field="employeeAddress" header="Adres" sortable :style="{ width: '19%' }"
              :headerStyle="{ width: '19%' }">
            </Column>
            <Column field="dateOfStart" header="Giriş Tarihi" sortable :style="{ width: '10%' }"
              :headerStyle="{ width: '10%' }">
              <template #body="slotProps">
                {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
              </template>
            </Column>
            <Column field="severancePay" header="Kıdem Tazminatı" sortable :style="{ width: '10%' }"
              :headerStyle="{ width: '10%' }">
            </Column>
            <Column field="isActive" header="Durum" sortable :style="{ width: '5%' }" :headerStyle="{ width: '5%' }">
            </Column>
            <Column field="dateOfEnd" header="Çıkış Tarihi" sortable :style="{ width: '10%' }"
              :headerStyle="{ width: '10%' }">
              <template #body="slotProps">
                {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
              </template>
            </Column>
            <Column header="#" :style="{ width: '5%' }" :headerStyle="{ width: '5%' }">
              <template #body="slotProps">
                <Button label="" icon="pi pi-file" :class="'p-button-sm'" v-tooltip="'Dosyalar'"
                  @click="showFoldersDialog(slotProps.data)" />
              </template>
            </Column>
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
      <div v-if="selectedEmployee" class="sc-padding-medium sc-padding-remove-top" style="margin-top:5px;">
        <div class="uk-margin-medium uk-margin-remove-left">
          <client-only>
            <Button label="Yeni" icon="pi pi-plus" :class="'p-button-sm'" style="margin-bottom: 15px;" v-tooltip="'Sil'"
              @click="showNewAttachment" />
            <DataTable :value="attachmentList" responsiveLayout="scroll" :selection.sync="selectedAttachmentRow"
              @row-select="clickAttachmentRow" selectionMode="single" sortField="lineNumber" :sortOrder="1">
              <Column field="title" header="Başlık" sortable :style="{ width: '20%', 'max-width': '20%' }"
                :headerStyle="{ width: '20%', 'max-width': '20%' }"></Column>
              <Column field="fileName" header="Dosya Adı" sortable :style="{ width: '30%', 'max-width': '30%' }"
                :headerStyle="{ width: '30%', 'max-width': '30%' }"></Column>
              <Column field="explanation" header="Açıklama" sortable :style="{ width: '45%', 'max-width': '45%' }"
                :headerStyle="{ width: '45%', 'max-width': '45%' }"></Column>
              <Column header="#">
                <template #body="slotProps" :style="{ width: '5%', 'max-width': '5%' }"
                  :headerStyle="{ width: '5%', 'max-width': '5%' }">
                  <Button v-if="slotProps.data.isPart != true" label="" icon="pi pi-trash"
                    :class="'p-button-sm p-button-danger'" v-tooltip="'Sil'" @click="deleteAttachment(slotProps.data)" />
                </template>
              </Column>
            </DataTable>
          </client-only>
        </div>
      </div>
    </Dialog>
  </div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { useUserSession } from "~/composable/userSession";
import { FilterMatchMode, FilterOperator } from 'primevue/api/';
import moment from 'moment';
import * as XLSX from 'xlsx';

export default {
  name: 'EmployeeList',
  components: {
    Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
    PrettyCheck,
    Select2: process.client ? () => import('~/components/Select2') : null,
    AttachmentForm: process.client ? () => import("~/logical_components/AttachmentForm") : null,
  },
  data: () => {
    return {
      visualData: [],
      filterGeneral: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        employeeName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        //processDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
        //exitDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      attachmentDialogVisible: false,
      isFolderDialog: false,
      selectedAttachmentRow: { id: 0, recordType: 5, recordId: 0 },
      attachmentList: [],
      refreshAttachmentForm: false,
      selectedEmployee: {
        id: 0,
      },
    }
  },
  async mounted() {
    const api = useApi();
    const rawData = (await api.get('Employee')).data;

    this.visualData = rawData;
  },
  methods: {
    clearGeneralFilter() {
      this.filterGeneral.global.value = null;
    },
    exportToCsv() {
      var empList = this.visualData.reduce((empList, employee) => {
        empList.push({
          'PersonelKodu': employee.employeeCode,
          'Personel': employee.employeeName,
          'Kart Numarası': employee.employeeCardNo,
          'Saatlik Brüt Ücret': employee.employeeHourlyWage,
          'Telefon': employee.employeePhone,
          'Adres': employee.employeeAddress,
          'Giriş Tarihi': employee.dateOfStart != null ? moment(employee.dateOfStart).locale("tr").format('YYYY.MM.DD') : "-",
          'Kıdem Tazminatı': employee.severancePay,
          'Durum': employee.isActive,
          'Çıkış Tarihi': employee.dateOfEnd != null ? moment(employee.dateOfEnd).format('YYYY.MM.DD') : "-",
        })
        return empList;
      }, [])

      empList.sort(function (a, b) {
        if (a.PersonelKodu < b.PersonelKodu) {
          return -1;
        }
        if (a.PersonelKodu > b.PersonelKodu) {
          return 1;
        }
        return 0;
      });

      var empWs = XLSX.utils.json_to_sheet(empList)
      var wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, empWs, 'Employee list')
      XLSX.writeFile(wb, 'Personel Listesi.xlsx')
    },
    async showFoldersDialog(data) {
      this.selectedEmployee = data;
      await this.bindAttachments();
      this.isFolderDialog = true
      console.error(data)
    },
    async bindAttachments() {
      const api = useApi();
      try {
        this.attachmentList = (await api.get('Attachment/OfRecord/5/' + this.selectedEmployee.id)).data;
      } catch (error) {

      }
    },
    async deleteAttachment(selectedAttachment) {
      this.isFolderDialog = false;
      const self = this;
      UIkit.modal.confirm('Bu dosyayı silmek istediğinizden emin misiniz?').then(
        async function () {
          try {
            const api = useApi();
            const delResult = (await api.delete('Attachment/' + selectedAttachment.id)).data;
            if (delResult.result) {
              self.showNotification('Silme işlemi başarılı', false, 'success');
              self.bindAttachments();
            }
            else
              self.showNotification(delResult.errorMessage, false, 'error');
          } catch (error) {
          }
          self.isFolderDialog = true;
        },
        async function () {
          self.isFolderDialog = true;
        }
      );
    },
    showNewAttachment() {
      const self = this;
      this.selectedAttachmentRow = { id: 0, recordType: 5, recordId: self.selectedEmployee.id };
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
      // const modalElement = document.getElementById('dlgAttachment');
      // UIkit.modal(modalElement).hide();
    },
    async onSubmitAttachment() {
      this.closeAttachmentDialog();
      await this.bindAttachments();
    },
    showAttachment() {
      this.isFolderDialog = false;
      this.attachmentDialogVisible = true;
      this.refreshAttachmentForm = true;
      // setTimeout(() => { this.refreshAttachmentForm = true; }, 200);

      // const modalElement = document.getElementById('dlgAttachment');
      // modalElement.width = window.innerWidth * 0.7;
      // modalElement.height = window.innerHeight * 0.8;
      // UIkit.modal(modalElement).show();
    },
    clickAttachment: async function (event) {
      try {
        // this.selectedDemandDetail = this.details[indexes[0]];
        await this.bindAttachments();
      } catch (error) {

      }
    },
    clickAttachmentRow: function (event) {
      this.selectedAttachmentRow = event.data;
      this.showAttachment();
    },
    clickDetail: function (e) {
      //this.$router.push('/user/employee?id=' + this.visualData[indexes[0]].id);
      this.$router.push('/user/employee?id=' + e.data.id);
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
        return moment(date).format("DD.MM.YYYY")
      return ""
    },
    newRecord() {
      this.$router.push('/user/employee');
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