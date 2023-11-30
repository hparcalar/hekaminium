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
                            Remote Ofis Kontrol
                        </h4>
                    </div>
                    <form>
                        <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                            <legend class="uk-legend">
                                Kontroller
                            </legend>
                            <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
                                <div>
                                    <PrettyCheck name="isActive" v-model="formData.out0" :value="true"
                                        class="p-icon">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                        Kahve Makinası Aç
                                    </PrettyCheck>
                                </div>
                                <div>
                                    <PrettyCheck name="isActive" v-model="formData.out1" :value="true"
                                        class="p-icon">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                        Isıtıcı-1 Aç
                                    </PrettyCheck>
                                </div>
                                <div>
                                    <PrettyCheck name="isActive" v-model="formData.out2" :value="true"
                                        class="p-icon">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                        Isıtıcı-2 Aç
                                    </PrettyCheck>
                                </div>
                                <div>
                                    <PrettyCheck name="isActive" v-model="formData.out3" :value="true"
                                        class="p-icon">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                        Dış Lamba Aç
                                    </PrettyCheck>
                                </div>
                                <div>
                                    <PrettyCheck name="isActive" v-model="formData.out4" :value="true"
                                        class="p-icon">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                        Perde Kapat
                                    </PrettyCheck>
                                </div>
                                <div>
                                    <PrettyCheck name="isActive" v-model="formData.out5" :value="true"
                                        class="p-icon">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                        Kilit Aç
                                    </PrettyCheck>
                                </div>
                                <div>
                                    <PrettyCheck name="isActive" v-model="formData.out6" :value="true"
                                        class="p-icon">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                        Ana Şalteri Kapat
                                    </PrettyCheck>
                                </div>
                                <div>
                                    <PrettyCheck name="isActive" v-model="formData.out7" :value="true"
                                        class="p-icon">
                                        <i slot="extra" class="icon mdi mdi-check"></i>
                                        Diğer
                                    </PrettyCheck>
                                </div>
                            </div>
                        </fieldset>

                        <div class="uk-margin-large-top">
                            <button type="button" @click="onSubmit"
                                class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                                <span data-uk-icon="icon: check" class="uk-icon"></span>
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

if (process.client) {
    require('~/plugins/inputmask');
}

export default {
    name: 'RemoteOfficeForm',
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
            out0:false,
            out1:false,
            out2:false,
            out3:false,
            out4:false,
            out5:false,
            out6:false,
            out7:false,
        },
    }),
    computed: {

    },
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
                const getData = (await api.get('RemoteOffice')).data;
                if (getData && getData.id > 0) {
                    this.formData = getData;
                }
            } catch (error) {

            }
        },
        async onSubmit() {
            try {
                const api = useApi();
                const postResult = (await api.post('RemoteOffice', this.formData)).data;
                if (postResult.result) {
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;
                }
                else
                    this.showNotification(postResult.errorMessage, false, 'error');
            } catch (error) {
                this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
            }
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
    }
}
</script>

<style lang="scss">
@import '~scss/vue/_pretty_checkboxes';
</style>
