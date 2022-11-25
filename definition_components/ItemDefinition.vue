<template>
    <div class="uk-flex-center uk-grid" data-uk-grid>
        <div :class="{ 'uk-width-2-3@l': !isDialog, 'uk-width-3-3@l': isDialog }">
            <div v-show="isDialog == false" class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                        sc-round sc-border md-bg-grey-100
                ">
                <span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
                <h4 class="md-color-gray-600 uk-margin-remove">
                    Stok Tanımı
                </h4>
            </div>
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                    <!-- <legend class="uk-legend">
                            Genel Bilgiler
                        </legend> -->
                    <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
                        <div>
                            <ScInput v-model="formData.itemCode" :read-only="true">
                                <label>Stok Kodu</label>
                            </ScInput>
                        </div>
                        <div>
                            <ScInput v-model="formData.itemName">
                                <label>Stok Adı</label>
                            </ScInput>
                        </div>
                        <div>
                            <client-only>
                                <Select2 v-model="formData.itemCategoryId" :options="categories"
                                    :settings="{ 'width': '100%', 'placeholder': 'Kategori', 'allowClear': true }">
                                </Select2>
                            </client-only>
                        </div>
                        <div>
                            <PrettyCheck name="isActive" v-model="formData.isActive" :value="true" class="p-icon">
                                <i slot="extra" class="icon mdi mdi-check"></i>
                                Aktif
                            </PrettyCheck>
                        </div>
                    </div>
                </fieldset>

                <div class="uk-margin-large-top">
                    <button type="button" @click="onSubmit"
                        class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                        <span data-uk-icon="icon: check" class="uk-icon"></span>
                    </button>
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
</template>

<script>
import jQuery from '~/plugins/jquery'
import ScInput from '~/components/Input'
import ScTextarea from '~/components/Textarea'
import PrettyRadio from 'pretty-checkbox-vue/radio';
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { getQS } from '~/composable/useHelpers';

if (process.client) {
    require('~/plugins/inputmask');
}

export default {
    name: 'ItemDefinition',
    components: {
        Select2: process.client ? () => import('~/components/Select2') : null,
        ScInput,
        ScTextarea,
        PrettyRadio,
        PrettyCheck
    },
    emits: ['onItemSaved', 'onCancel'],
    props: {
        recordId: {
            required: true,
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
        },
    },
    data: () => ({
        formData: {
            id: 0,
            itemCode: '',
            itemName: '',
            plantId: null,
            isActive: true,
            itemCategoryId: null,
        },
        isMounting: false,
        categories: [],
    }),
    computed: {

    },
    async mounted() {
        this.isMounting = true;
        this.formData.id = this.recordId;

        if (this.projectId && this.projectId > 0)
            this.formData.projectId = this.projectId;

        await this.bindModel();
        this.isMounting = false;
    },
    methods: {
        async bindModel() {

            const api = useApi();
            try {
                const catData = (await api.get('Item/Category')).data;
                if (catData)
                    this.categories = catData.map((d) => {
                        return {
                            ...d,
                            text: d.itemCategoryName,
                        };
                    })

                const getData = (await api.get('Item/' + this.formData.id)).data;
                if (getData && getData.id > 0) {
                    this.formData = getData;
                }
                else{
                    this.formData.itemCode = getData.itemCode
                }
            } catch (error) {

            }
        },
        async onSubmit() {
            try {
                const api = useApi();
                const postResult = (await api.post('Item', this.formData)).data;
                if (postResult.result) {
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;
                    this.$emit('onItemSaved');

                    if (this.isDialog)
                        UIkit.modal(document.getElementById(this.dialogContainer)).hide();
                    else
                        this.$router.go(-1);
                }
                else
                    this.showNotification(postResult.errorMessage, false, 'error');
            } catch (error) {
                this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
            }
        },
        onCancel() {
            if (this.isDialog)
                this.$emit('onCancel');
            else
                this.$router.push('/item/list');
        },
        async onDelete() {
            const self = this;
            UIkit.modal.confirm('Bu stoğu silmek istediğinizden emin misiniz?').then(
                async function () {
                    try {
                        const api = useApi();
                        const delResult = (await api.delete('Item/' + self.formData.id)).data;
                        if (delResult.result) {
                            self.showNotification('Silme işlemi başarılı', false, 'success');
                            self.$emit('onDemandSaved');

                            if (self.isDialog)
                                UIkit.modal(document.getElementById(self.dialogContainer)).hide();
                            else
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
        }
    },
    watch: {
        recordId: async function (newVal, oldVal) {
            this.formData.id = this.recordId;
            await this.bindModel();
        },
    }
}
</script>

<style lang="scss">
@import '~scss/vue/_pretty_checkboxes';
</style>
