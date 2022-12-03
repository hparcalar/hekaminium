<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt uk-background-muted sc-padding-medium">
                    <div class="uk-child-width-1-2@m uk-grid sc-padding-remove-top uk-margin-remove-top" data-uk-grid>
                        <div>
                            <ScInput v-model="formData.lineNumber" :type="'number'" :read-only="true">
                                <label>Satır No</label>
                            </ScInput>
                        </div>
                        <div>
                            <ScInput v-model="formData.workExplanation" :read-only="true">
                                <label>Yapılan İş</label>
                            </ScInput>
                        </div>
                    </div>
                    <div class="uk-child-width-1-2@m uk-grid sc-padding-remove-top uk-margin-small" data-uk-grid>
                        <div>
                            <ScInput v-model="formData.startDate" :read-only="true">
                                <label>Başlama</label>
                            </ScInput>
                        </div>
                        <div>
                            <ScInput v-model="formData.endDate" :read-only="true">
                                <label>Bitiş</label>
                            </ScInput>
                        </div>
                    </div>
                    <div v-show="formData.attachments && formData.attachments.length > 0">
                        <div class="uk-child-width-1-2@m uk-grid">
                            <img v-for="(atc, atcIndex) in formData.attachments" :key="atcIndex" v-show="atc.contentBase64 && atc.contentBase64.length > 0"
                                style="height:250px;"
                                :src="'data:image/png;base64, ' + atc.contentBase64" />
                        </div>
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

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'ProjectFieldServiceDetail',
    props: {
        detailObject: {
            type: Object,
            default: { id:0 },
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
			projectFieldServiceId: null,
			lineNumber: 0,
            workExplanation: '',
            startDate: null,
            endDate: null,
            attachments: [],
		},
	}),
	async mounted () {
		await this.bindModel();
	},
	methods: {
        async bindModel(){
            this.formData = this.detailObject;
                
            if (this.formData.id <= 0){
                this.formData.lineNumber = this.totalDetailCount + 1;
            }
        },
        showNotification (text, pos, status, persistent) {
			var config = {};
			config.timeout = persistent ? !persistent : 3000;
			if(status) {
				config.status = status;
			}
			if(pos) {
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
        totalDetailCount: async function(newVal, oldVal){
            await this.bindModel();
        }
    }
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
    @import "~scss/plugins/datatables";
</style>
