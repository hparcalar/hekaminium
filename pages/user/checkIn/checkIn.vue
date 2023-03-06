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
                    <client-only>
                      <Select2 v-model="formData.employeeId" :options="employee" single
                        :settings="{ 'width': '100%', 'placeholder': 'Personel', 'allowClear': true }">
                      </Select2>
                    </client-only>
                  </div>
                  <div class="uk-width-1-2@m">
                    <client-only>
                      <Select2 v-model="formData.processType" :options="processType" single
                        :settings="{ 'width': '100%', 'placeholder': 'İşlem Tipi', 'allowClear': true }">
                      </Select2>
                    </client-only>
                  </div>
                  <div class="field col-12 md:col-4">
                    <Calendar id="time24" v-model="formData.processDate" :showTime="true" :showSeconds="false" placeholder="Time"/>
                  </div>
                </div>
              </fieldset>
              <div class="uk-margin-large-top">
                <button type="button" @click="onSubmit" v-show="hasViewAuth('Report',1)"
                  class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                  <span data-uk-icon="icon: check" class="uk-icon"></span>
                </button>
                <button type="button" @click="onCancel"
                  class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                  <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
                </button>
                <!--  <button type="button" @click="onDelete" class="sc-button sc-button-danger sc-button-medium">
                  <span data-uk-icon="icon: trash" class="uk-icon"></span>
                </button> -->
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
  import DateRangePicker from '../../../components/DateRangePicker.vue';
  import { dateToStr } from '~/composable/useHelpers';
  
  if (process.client) {
    require('~/plugins/inputmask');
    require('~/plugins/flatpickr');
  }
  
  export default {
    name: 'EmployeeForm',
    components: {
      Select2: process.client ? () => import("~/components/Select2") : null,
      ScInput,
      ScTextarea,
      PrettyRadio,
      PrettyCheck,
      DateRangePicker
  },
    data: () => ({
      formData: {
        id: 0,
        employeeId: null,
        cardNo: null,
        processDate: null,
        processType: null,
      },
      departments: [],
      employee: [],
      processType: [
        { id: 0, text: 'Giriş' },
        { id: 1, text: 'Çıkış' },
      ],
    }),
    async mounted() {
      const qsId = getQS('id');
      if (qsId) this.formData.id = parseInt(qsId);
      else this.formData.id = 0;
      await this.bindModel();
    },
    methods: {
      async bindModel() {
        try {
          const api = useApi();
          const employeeData = (await api.get('Employee')).data;
          if (employeeData) {
            this.employee = employeeData.map((d) => {
                return {
                  ...d,
                  text: d.employeeName,
                };
              })
          }
        } catch (error) {
  
        }
      },
      async onSubmit() {
        try {
          let self = this;
          const api = useApi();
          if(this.formData){
            this.formData.cardNo = this.employee.find(x => x.id == this.formData.employeeId).employeeCardNo
            let now = self.$moment(this.formData.processDate).format('YYYY-MM-DD HH:mm:ss')
            this.formData.processDate = now.substring(0, 10) + 'T' + now.substring(11, 19)
          }
          const postResult = (await api.post('EmployeeCheckIn', this.formData)).data;
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
      },
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
      hasViewAuth(sectionKey,authCode){
            if (process.client){
                const session = useUserSession();
                if (session && session.checkAuthSection)
                    return session.checkAuthSection(sectionKey, authCode);
            }
            return false;
        },
    }
  }
  </script>
  
  <style lang="scss">
  @import '~scss/vue/_pretty_checkboxes';
  </style>