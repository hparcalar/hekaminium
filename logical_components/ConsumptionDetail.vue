<template>
  <div class="uk-flex-center uk-grid" data-uk-grid>
    <div class="uk-width-3-3@l">
      <form>
        <fieldset class="uk-fieldset uk-fieldset-alt uk-background-muted sc-padding-medium">
          <div class="uk-child-width-1-3@m uk-grid sc-padding-remove-top uk-margin-remove-top" data-uk-grid>
            <div>
              <ScInput v-model="formData.lineNumber" :type="'number'" :read-only="true">
                <label>Satır No</label>
              </ScInput>
            </div>
            <div>
              <ScInput :type="'number'" v-model="formData.quantity">
                <label>Miktar</label>
              </ScInput>
            </div>
          </div>
          <div class="uk-child-width-2-3@m uk-grid uk-margin-small" data-uk-grid>
            <div class="uk-width-4-5@m">
              <div class="uk-grid">
                <div class="uk-width-3-5">
                  <div>
                    <client-only>
                      <Select2 v-model="formData.itemId" :options="itemList"
                        :settings="{ 'width': '100%', 'placeholder': 'Stok Seçiniz', 'allowClear': true }"></Select2>
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" @click="onSubmit"
              class="sc-button sc-button-primary sc-button-small uk-margin-medium uk-margin-remove-top uk-width-1-5@m"
              style="height:34px;">
              <span :data-uk-icon="'icon: ' + detailObject.id > 0 ? 'check' : 'check'" class="uk-icon"></span> {{
                  detailObject.id > 0 ? 'Kaydet' : 'Ekle'
              }}
            </button>
          </div>          
        </fieldset>
      </form>
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
import moment from '~/plugins/moment'

if (process.client) {
  require('~/plugins/inputmask');
}

export default {
  name: 'ConsumptionDetail',
  props: {
    detailObject: {
      type: Object,
      default: { id: 0 },
      required: true,
    },
    totalDetailCount: {
      type: Number,
      default: 0,
    },
    isDialog: {
      type: Boolean,
      default: false,
    },
    dialogContainer: {
      type: String,
      default: '',
    }
  },
  emits: ['onDetailSubmit'],
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
      lineNumber: 0,
      itemId: null,
      itemName: '',
      quantity: null,
      newRecord: true,
    },
    itemList: [],
    refreshItemDialog: false,
  }),
  async mounted() {
    await this.bindModel();
  },
  methods: {
    async bindModel() {
      const api = useApi();
      try {
        this.itemList = (await api.get('Warehouse/ItemStocks')).data.map((d) => {
          return {
            id: d.id,
            text: d.itemName + " - Kalan Stok: " + d.totalQuantity,
            itemName: d.itemName,
            quantity: d.totalQuantity
          };
        });
      } catch (error) {

      }

      this.formData = this.detailObject;
      try {
        this.formData.itemId = this.formData.itemId ? this.formData.itemId.toString() : null;
      } catch (error) {

      }
      if (this.formData.id <= 0) {
        this.formData.lineNumber = this.totalDetailCount + 1;
      }
    },
    onSubmit() {
      const self = this;

      if (!this.formData.itemId)
      {
          this.showNotification('Bir stok seçmelisiniz.', false, 'error');
          return;
      }

      if (!this.formData.quantity || this.formData.quantity <= 0) {
        this.showNotification('Miktar 0 dan büyük olmalıdır.', false, 'error');
        return;
      }

      const selectedItem = this.itemList.find(d => d.id == this.formData.itemId);
      if (selectedItem)
        this.formData.itemName = selectedItem.itemName;

      if (!this.formData.itemName)
        this.formData.itemName = '';

      if(selectedItem.quantity < this.formData.quantity){
        this.showNotification('Stok miktarı yetersiz.', false, 'error');
        return;
      }

      // #endregion

      this.$emit('onDetailSubmit', {
        action: 'save',
        data: this.formData,
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
  },
  watch: {
    detailObject: {
      handler: async function (newVal, oldVal) {
        await this.bindModel();
      },
      deep: true,
    },
    totalDetailCount: async function (newVal, oldVal) {
      await this.bindModel();
    }
  }
}
</script>

<style lang="scss">
@import '~scss/vue/_pretty_checkboxes';
@import "~scss/plugins/datatables";
</style>
