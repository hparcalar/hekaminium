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
							Depo Tanımı
						</h4>
					</div>
					<form>
						<fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
							<legend class="uk-legend">
								Depo Bilgileri
							</legend>
							<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
								<div>
									<ScInput v-model="formData.warehouseCode">
										<label>Depo Kodu</label>
									</ScInput>
								</div>
								<div>
									<ScInput v-model="formData.warehouseName">
										<label>Depo Adı</label>
									</ScInput>
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
							<button type="button" @click="onSubmit" v-show="hasViewAuth('StockAndWarehouse',1)"
								class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
								<span data-uk-icon="icon: check" class="uk-icon"></span>
							</button>
							<button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
								<span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
							</button>
							<button type="button" @click="onDelete" v-show="hasViewAuth('StockAndWarehouse',2)"
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
import { useApi } from '../../composable/useApi';
import { getQS } from '../../composable/useHelpers';
import { useUserSession } from "~/composable/userSession";

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'WarehouseForm',
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
			warehouseCode: '',
			warehouseName: '',
            plantId: null,
			isActive: true,
		},
	}),
	computed: {
		
	},
	async mounted () {
        const qsId = getQS('id');
        if (qsId) this.formData.id = parseInt(qsId);
        else this.formData.id = 0;

		await this.bindModel();
	},
	methods: {
        async bindModel(){

            const api = useApi();
            try {
                const getData = (await api.get('Warehouse/' + this.formData.id)).data;   
                if (getData && getData.id > 0){
                    this.formData = getData;
                }
            } catch (error) {
                
            }
        },
		async onSubmit(){
            try {
                const api = useApi();
                const postResult = (await api.post('Warehouse', this.formData)).data;
                if (postResult.result){
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
        onCancel(){
            this.$router.push('/warehouse/list');
        },
        async onDelete(){

        },
				hasViewAuth(sectionKey,authCode){
            if (process.client){
                const session = useUserSession();
                if (session && session.checkAuthSection)
                    return session.checkAuthSection(sectionKey, authCode);
            }
            return false;
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
		}
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
