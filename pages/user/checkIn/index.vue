<template>
    <div id="sc-page-wrapper">
      <div id="sc-page-content">
        <div class="uk-flex-center uk-grid" data-uk-grid>
          <div class="uk-width-2-3@l">
            <div class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                           sc-round sc-border md-bg-grey-100
                      ">
              <span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
              <h4 class="md-color-gray-600 uk-margin-remove">
                Giriş/Çıkış Kaydı
              </h4>
            </div>
            <form>
              <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
                  <div class="uk-width-1-2@m">
                    <ScInput v-model="formData.employeeId" read-only>
                      <label>Personel Kodu</label>
                    </ScInput>
                  </div>
                  <div class="uk-width-1-2@m">
                    <ScInput v-model="formData.employeeName" read-only>
                      <label>Adı Soyadı</label>
                    </ScInput>
                  </div>
                  <div class="uk-width-1-2@m">
                    <ScInput v-model="formData.employeeCardNo" read-only>
                      <label>Kart Numarası</label>
                    </ScInput>
                  </div>
                  <div class="uk-width-1-2@m">
                    <ScInput v-model="formData.processDate" read-only>
                      <label>İşlem Tarihi</label>
                    </ScInput>
                  </div>
                  <div class="uk-width-1-2@m">
                    <ScInput v-model="formData.processType" read-only>
                      <label>İşlem Tipi</label>
                    </ScInput>
                  </div>
                </div>
              </fieldset>
  
              <div class="uk-margin-large-top">
                <!-- <button type="button" @click="onSubmit"
                  class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                  <span data-uk-icon="icon: check" class="uk-icon"></span>
                </button> -->
                <button type="button" @click="onCancel"
                  class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                  <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
                </button>
                <button type="button" @click="onDelete" class="sc-button sc-button-danger sc-button-medium">
                  <span data-uk-icon="icon: trash" class="uk-icon"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import jQuery from '~/plugins/jquery'
  import ScInput from '~/components/Input'
  import ScTextarea from '~/components/Textarea'
  import PrettyRadio from 'pretty-checkbox-vue/radio';
  import PrettyCheck from 'pretty-checkbox-vue/check';
  import { useApi } from '~/composable/useApi';
  import { getQS } from '~/composable/useHelpers';
  import { useUserSession } from '~/composable/userSession';
  import moment from '~/plugins/moment'
  
  if (process.client) {
    require('~/plugins/inputmask');
    require('~/plugins/flatpickr');
  }
  
  export default {
    name: 'EmployeeForm',
    components: {
      Select2: process.client ? () => import('~/components/Select2') : null,
      ScInput,
      ScTextarea,
      PrettyRadio,
      PrettyCheck
    },
    data: () => ({
      formData: {
        id: 0,
        employeeCode: null,
        employeeName: null,
        employeeCardNo: null,
        employeeHourlyWage: null,
        employeePhone: null,
        employeeAddress: null,
        departmentId: null,
        employeeId: null,
        processDate : null,
        processType: null,
      },
      departments: [],
    }),
    async mounted() {
      const qsId = getQS('id');
      if (qsId) this.formData.id = parseInt(qsId);
      else this.formData.id = 0;
  
      await this.bindModel();
    },
    methods: {
      async bindModel() {
        const self = this;
        const api = useApi();
        try {
          /* const getData = (await api.get('Employee/' + this.formData.id)).data;
          const departmentData = (await api.get('Department')).data;
          if (departmentData)
            this.departments = departmentData.map((d) => {
              return {
                ...d,
                text: d.departmentName,
              };
            }) */
          const getData = (await api.get('EmployeeCheckIn/' + this.formData.id)).data;
          if (getData) {
            const employeeData = (await api.get('Employee/' + getData.employeeId)).data;
            getData.employeeName = employeeData.employeeName;
            getData.employeeCardNo = employeeData.employeeCardNo;
            getData.processDate =  self.$moment(getData.processDate).format('DD-MM-YYYY HH:mm');
            getData.processType == 0 ? getData.processType = "Giriş" : getData.processType = "Çıkış"; 
            this.formData = getData;
          }
        } catch (error) {
  
        }
      },
      /* async onSubmit() {
        try {
          const api = useApi();
          const postResult = (await api.post('CheckIn', this.formData)).data;
          if (postResult.result) {
            this.showNotification('Kayıt başarılı', false, 'success');
            this.formData.id = postResult.recordId;
  
            this.$router.go(-1);
          }
          else
            this.showNotification(postResult.errorMessage, false, 'error');
        } catch (error) {
          this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
        }
        console.error(this.formData)
      }, */
      onCancel() {
        this.$router.push('/user/checkIn/list');
      },
      async onDelete() {
        const self = this;
        UIkit.modal.confirm('Bu checkIn kaydını silmek istediğinizden emin misiniz?').then(
          async function () {
            try {
              const api = useApi();
              const delResult = (await api.delete('EmployeeCheckIn/' + self.formData.id)).data;
              if (delResult.result) {
                self.showNotification('Silme işlemi başarılı', false, 'success');
  
                self.$router.go(-1);
              }
              else
                self.showNotification(delResult.errorMessage, false, 'error');
            } catch (error) {
  
            }
          });
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
      hasViewAuth(sectionKey) {
        if (process.client) {
          const session = useUserSession();
          if (session && session.checkAuthSection)
            return session.checkAuthSection(sectionKey);
        }
        return false;
      },
    }
  }
  </script>
  
  <style lang="scss">
  @import '~scss/vue/_pretty_checkboxes';
  </style>