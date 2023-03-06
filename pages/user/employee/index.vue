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
                Personel Tanımı
              </h4>
            </div>
            <form>
              <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
                  <div class="uk-width-1-2@m">
                    <ScInput v-model="formData.employeeCode" read-only>
                      <label>Personel Kodu</label>
                    </ScInput>
                  </div>
                  <div class="uk-width-1-2@m">
                    <ScInput v-model="formData.employeeName">
                      <label>Adı Soyadı</label>
                    </ScInput>
                  </div>
                  <div class="uk-width-1-2@m">
                    <ScInput v-model="formData.employeeCardNo">
                      <label>Kart Numarası</label>
                    </ScInput>
                  </div>
                  <div class="uk-width-1-2@m">
                    <client-only>
                      <Select2 v-model="formData.departmentId"
                        :options="departments" 
                        single
                        :settings="{ 'width': '100%', 'placeholder': 'Departman', 'allowClear': true }">
                      </Select2>
                    </client-only>
                  </div>
                  <div class="uk-width-1-2@m">
                    <ScInput :type="'number'" v-model="formData.employeeHourlyWage">
                      <label>Saatlik Ücreti</label>
                    </ScInput>
                  </div>
                  <div class="uk-width-1-2@m">
                    <ScInput v-model="formData.employeePhone">
                      <label>Telefon Numarası</label>
                    </ScInput>
                  </div>
                  <div class="uk-width-1-2@m">
                    <ScInput v-model="formData.employeeAddress">
                      <label>Adresi</label>
                    </ScInput>
                  </div>
                </div>
              </fieldset>
  
              <div class="uk-margin-large-top">
                <button type="button" @click="onSubmit" v-show="hasViewAuth('Employee',1)"
                  class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                  <span data-uk-icon="icon: check" class="uk-icon"></span>
                </button>
                <button type="button" @click="onCancel"
                  class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                  <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
                </button>
                <button type="button" @click="onDelete" v-show="hasViewAuth('Employee',2)"
                  class="sc-button sc-button-danger sc-button-medium">
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
  
        const api = useApi();
        try {
          const getData = (await api.get('Employee/' + this.formData.id)).data;
          const departmentData = (await api.get('Department')).data;
          if (departmentData)
            this.departments = departmentData.map((d) => {
              return {
                ...d,
                text: d.departmentName,
              };
            })
          if (getData) {
            this.formData = getData;
            console.error(this.formData)
          }
        } catch (error) {
  
        }
      },
      async onSubmit() {
        try {
          const api = useApi();
          const postResult = (await api.post('Employee', this.formData)).data;
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
      },
      onCancel() {
        this.$router.push('/user/employee/list');
      },
      hasViewAuth(sectionKey,authCode){
            if (process.client){
                const session = useUserSession();
                if (session && session.checkAuthSection)
                    return session.checkAuthSection(sectionKey, authCode);
            }
            return false;
        },
      async onDelete() {
        const self = this;
        UIkit.modal.confirm('Bu personeli silmek istediğinizden emin misiniz?').then(
          async function () {
            try {
              const api = useApi();
              const delResult = (await api.delete('Employee/' + self.formData.id)).data;
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
    }
  }
  </script>
  
  <style lang="scss">
  @import '~scss/vue/_pretty_checkboxes';
  </style>