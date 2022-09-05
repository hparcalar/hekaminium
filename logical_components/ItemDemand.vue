<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-2-3@l">
            <div v-if="isDialog == false" class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                    sc-round sc-border md-bg-grey-100
            ">
                <span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
                <h4 class="md-color-gray-600 uk-margin-remove">
                    Malzeme Talebi
                </h4>
            </div>
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                    <!-- <legend class="uk-legend">
                        Talep Bilgileri
                    </legend> -->
                    <div class="uk-child-width-1-1@m uk-grid" data-uk-grid>
                        <div>
                            <ScInput v-model="formData.receiptNo">
                                <label>Talep No</label>
                            </ScInput>
                        </div>
                        <div>
                            <client-only v-if="!isDialog">
                                <Select2
                                    v-model="formData.projectId"
                                    :options="projects"
                                    :settings="{ 'width': '100%', 'placeholder': 'Proje', 'allowClear': true }"
                                ></Select2>
                            </client-only>
                            <ScInput v-else :value="currentProjectName" read-only="true">
                                <label>Proje</label>
                            </ScInput>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                    <legend>
                        Malzeme Bilgileri
                    </legend>
                    <div class="uk-margin-medium uk-margin-remove-left">
                        <div class="uk-button-group sc-padding-remove-left" style="height:34px;">
                            <button type="button" @click="showDemandDetail" class="sc-button sc-button-default sc-button-small uk-width-1-3" style="height:34px;">
                                <span data-uk-icon="icon: plus" class="uk-icon"></span>
                            </button>
                            <button type="button" class="sc-button sc-button-default sc-button-small uk-width-1-3" style="height:34px;">
                                <span data-uk-icon="icon: pencil" class="uk-icon"></span>
                            </button>
                            <button type="button" class="sc-button sc-button-danger sc-button-small uk-width-1-3" style="height:34px;">
                                <span data-uk-icon="icon: trash" class="uk-icon"></span>
                            </button>
                        </div>
                        <client-only>
                            <Datatable
                                id="sc-dt-details-table"
                                ref="demandDetailsTable"
                                :data="details"
                                :options="dtOptions"
                                :customColumns="dtDetailCols"
                                :buttons="true"
                                :customEvents="[{ name: 'select', function: clickDetail }]"
                            ></Datatable>
                        </client-only>
                    </div>
                </fieldset>

                <div class="uk-margin-large-top">
                    <button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-large uk-margin-small-right">
                        <span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
                        Kaydet
                    </button>
                    <button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-large uk-margin-small-right">
                        <span data-uk-icon="icon: arrow-left" class="uk-margin-small-right uk-icon"></span>
                        Vazgeç
                    </button>
                    <button type="button" @click="onDelete" class="sc-button sc-button-danger sc-button-large">
                        <span data-uk-icon="icon: trash" class="uk-margin-small-right uk-icon"></span>
                        Sil
                    </button>
                </div>
            </form>
        </div>

        <div id="dlgDemandDetail" class="uk-modal" data-uk-modal>
			<div class="uk-modal-dialog uk-modal-body uk-width-2-3">
				<!-- <ItemDemandDetail
					:detail-object="{}"
					:total-detail-count="0"
					:is-dialog="true"
					:dialog-container="'dlgDemandDetail'"
				/> -->
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
// import ItemDemandDetail from './ItemDemandDetail.vue';
import { useApi } from '~/composable/useApi';

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'ItemDemand',
    props: {
        recordId: {
            required: true,
            type: Number,
            default: 0,
        },
        projectId: {
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
        Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		Select2: process.client ? () => import('~/components/Select2') : null,
        ItemDemandDetail,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
		formData: {
            id: 0,
			receiptNo: '',
			projectId: null,
            plantId: null,
			demandStatus: 0,
		},
        details: [],
        projects: [],
        dtOptions: {
			select: true,
			searching: false,
			paging: false,
		},
		dtDetailCols: [
			{ data: "demandDate", title: "Tarih", visible: true, },
			{ data: "itemName", title: "Stok Adı", visible: true, },
			{ data: "quantity", title: "Miktar", visible: true, },
			{ data: "statusText", title: "Durum", visible: true, },
		],
        selectedDemandDetail: {
            id: 0,
        }
	}),
	computed: {
		currentProjectName() {
            if (this.formData.projectId > 0){
                var project = this.projects.find(d => d.id == this.formData.projectId);
                if (project)
                    return project.text;
            }

            return '';
        }
	},
	async mounted () {
        this.formData.id = this.recordId;
        this.formData.projectId = this.projectId;
		await this.bindModel();
	},
	methods: {
        async bindModel(){
            const api = useApi();
            try {
                const projData = (await api.get('Project')).data;
                if (projData)
                    this.projects = projData.map((d) => {
                        return {
                            ...d,
                            text: d.projectName,
                        };
                    })

                const getData = (await api.get('ItemDemand/' + this.formData.id)).data;   
                if (getData && getData.id > 0){
                    this.formData = getData;
                }
                else
                    this.formData.receiptNo = getData.receiptNo;

            } catch (error) {
                
            }
        },
		async onSubmit(){
            try {
                const api = useApi();
                const postResult = (await api.post('ItemDemand', this.formData)).data;
                if (postResult.result){
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;

                    if (this.isDialog)
                        UIkit.modal(document.getElementById(this.dialogContainer)).hide();
                }
                else
                    this.showNotification(postResult.errorMessage, false, 'error');
            } catch (error) {
                this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
            }
        },
        onCancel(){
            if (this.isDialog)
                UIkit.modal(document.getElementById(this.dialogContainer)).hide();
            else
                this.$router.push('/item-demand/list');
        },
        async onDelete(){

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
        showDemandDetail(){
			const modalElement = document.getElementById('dlgDemandDetail');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
		},
        clickDetail: function (e, dt, type, indexes){
            this.selectedDemandDetail = this.details[indexes[0]];
        },
	},
    watch: {
        recordId: async(newVal, oldVal) => {
            await bindModel();
        },
        projectId: (newVal, oldVal) => {
            formData.projectId = newVal;
        }
    }
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
    @import "~scss/plugins/datatables";
</style>
