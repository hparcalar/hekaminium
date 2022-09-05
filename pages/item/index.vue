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
							Stok Tanımı
						</h4>
					</div>
					<form>
						<fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
							<legend class="uk-legend">
								Genel Bilgiler
							</legend>
							<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
								<div>
									<ScInput v-model="formData.itemCode">
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
                                        <Select2
                                            v-model="formData.itemCategoryId"
                                            :options="categories"
                                            :settings="{ 'width': '100%', 'placeholder': 'Kategori', 'allowClear': true }"
                                        ></Select2>
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

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'ItemForm',
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
			itemCode: '',
			itemName: '',
            plantId: null,
			isActive: true,
            itemCategoryId: null,
		},
        categories: [],
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
                const catData = (await api.get('Item/Category')).data;
                if (catData)
                    this.categories = catData.map((d) => {
                        return {
                            ...d,
                            text: d.itemCategoryName,
                        };
                    })

                const getData = (await api.get('Item/' + this.formData.id)).data;   
                if (getData && getData.id > 0){
                    this.formData = getData;
                }
            } catch (error) {
                
            }
        },
		async onSubmit(){
            try {
                const api = useApi();
                const postResult = (await api.post('Item', this.formData)).data;
                if (postResult.result){
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;
                }
                else
                    this.showNotification(postResult.errorMessage, false, 'error');
            } catch (error) {
                this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
            }
        },
        onCancel(){
            this.$router.push('/item/list');
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
		}
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
