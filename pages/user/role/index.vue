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
							Rol Tanımı
						</h4>
					</div>
					<form>
						<fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
							<legend class="uk-legend">
								Genel Bilgiler
							</legend>
							<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
								<div>
									<ScInput v-model="formData.roleCode">
										<label>Rol Kodu</label>
									</ScInput>
								</div>
								<div>
									<ScInput v-model="formData.roleName">
										<label>Rol Adı</label>
									</ScInput>
								</div>
							</div>
						</fieldset>

						<fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
							<legend class="uk-legend">
								Yetki Tanımları
							</legend>
							<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
								<div v-for="(item, index) in sectionList" :key="index">
									<!-- <PrettyCheck class="p-icon" v-model="item.canRead" :value="false">
                                        <i slot="extra" class="icon mdi mdi-check"></i> {{ item.title }}
                                    </PrettyCheck> -->
									<div style="font-weight: bold;">
										{{ item.title }}
									</div>
									<div>
										<div v-for="(child, childIndex) in item.children" :key="childIndex"
											style="marginLeft: 15px">
											<div style="font-weight: 500;">
												{{ child.title }}
											</div>
											<div style="marginLeft: 15px">
												<!-- <PrettyCheck class="p-icon" v-model="child.canRead" :value="false">
													<i slot="extra" class="icon mdi mdi-check"></i> {{ "Okuma" }}
												</PrettyCheck>
												<PrettyCheck class="p-icon" v-model="child.canWrite" :value="false">
													<i slot="extra" class="icon mdi mdi-check"></i> {{ "Yazma" }}
												</PrettyCheck>
												<PrettyCheck class="p-icon" v-model="child.canDelete" :value="false">
													<i slot="extra" class="icon mdi mdi-check"></i> {{ "Silme" }}
												</PrettyCheck> -->
												<ToggleButton v-model="child.canRead" onLabel="Okuma" offLabel="Okuma" />
												<ToggleButton v-model="child.canWrite" onLabel="Yazma" offLabel="Yazma" />
												<ToggleButton v-model="child.canDelete" onLabel="Silme" offLabel="Silme" />
											</div>
										</div>
									</div>
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
import { useUserSession } from '../../../composable/userSession';

if (process.client) {
	require('~/plugins/inputmask');
}

export default {
	name: 'RoleForm',
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
			roleCode: '',
			roleName: '',
			plantId: null,
			isActive: true,
			sections: [],
		},
		sectionList: [
			/* {
				sectionKey: 'SystemSection', title: 'Sistem Yönetimi', canRead: false, canWrite: false, canDelete: false,
				children: [
					{ sectionKey: 'PermissionSection', title: 'Yetki Yönetimi', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'StockSection', title: 'Stok Yönetimi', canRead: false, canWrite: false, canDelete: false, },
				]
			},
			{ sectionKey: 'Definitions', title: 'Tanım Yönetimi', canRead: false, canWrite: false, canDelete: false, },
			{ sectionKey: 'ProjectBudgetView', title: 'Proje Bedeli Görüntüleme', canRead: false, canWrite: false, canDelete: false, },
			{ sectionKey: 'ItemDemandApproval', title: 'Malzeme Talebi Onaylama', canRead: false, canWrite: false, canDelete: false, },
			{ sectionKey: 'ItemOrderApproval', title: 'Sipariş Onaylama', canRead: false, canWrite: false, canDelete: false, },
			{ sectionKey: 'ProjectManagement', title: 'Proje Yönetimi', canRead: false, canWrite: false, canDelete: false, },
			{ sectionKey: 'StaffPermit', title: 'Personel İzin Yönetimi', canRead: false, canWrite: false, canDelete: false, }, */
			{
				sectionKey: 'SalesSection', title: 'Satın Alma Yönetimi', canRead: false, canWrite: false, canDelete: false,
				children: [
					{ sectionKey: 'Demand', title: 'Talep', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'OfferOrderReceipt', title: 'Teklif/Sipariş/İrsaliye', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'Invoice', title: 'Fatura', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'WaitingDemands', title: 'Bekleyen Talepler', canRead: false, canWrite: false, canDelete: false, },
				]
			},
			{
				sectionKey: 'ProjectSection', title: 'Proje Yönetimi', canRead: false, canWrite: false, canDelete: false,
				children: [
					{ sectionKey: 'Project', title: 'Projeler', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'ProjectBudgetView', title: 'Proje Bilgileri', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'Document', title: 'Doküman İzleme', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'WaitingOrders', title: 'Bekleyen Siparişler', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'FieldServices', title: 'Saha Servisleri', canRead: false, canWrite: false, canDelete: false, },
				]
			},
			{
				sectionKey: 'ItemManagementSection', title: 'Malzeme Yönetimi', canRead: false, canWrite: false, canDelete: false,
				children: [
					{ sectionKey: 'StockAndWarehouse', title: 'Stok ve Depo', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'Process', title: 'Proses', canRead: false, canWrite: false, canDelete: false, },
				]
			},
			{
				sectionKey: 'WarehouseSection', title: 'Depo Yönetimi', canRead: false, canWrite: false, canDelete: false,
				children: [
					{ sectionKey: 'WarehouseStatuses', title: 'Depo Durumları', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'StockOut', title: 'Stok Çıkışı', canRead: false, canWrite: false, canDelete: false, },
				]
			},
			{
				sectionKey: 'StaffPermitSection', title: 'Personel İzin Yönetimi', canRead: false, canWrite: false, canDelete: false,
				children: [
					{ sectionKey: 'StaffPermit', title: 'Personel İzinleri', canRead: false, canWrite: false, canDelete: false, },
				]
			},
			{
				sectionKey: 'SupplyAndSalesSection', title: 'Tedarik Ve Satış Yönetimi', canRead: false, canWrite: false, canDelete: false,
				children: [
					{ sectionKey: 'FirmAndProjectCategories', title: 'Firma Ve Proje Kategorileri', canRead: false, canWrite: false, canDelete: false, },
				]
			},	
			{
				sectionKey: 'UserManagementSection', title: 'Kullanıcı Yönetimi', canRead: false, canWrite: false, canDelete: false,
				children: [
					{ sectionKey: 'Role', title: 'Rol Tanımı', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'Employee', title: 'Çalışan Tanımı', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'Report', title: 'Rapor', canRead: false, canWrite: false, canDelete: false, },
					{ sectionKey: 'Application', title: 'Uygulama Ayarları', canRead: false, canWrite: false, canDelete: false, },
				]
			},
			{
				sectionKey: 'CarManagementSection', title: 'Araç Yönetimi', canRead: false, canWrite: false, canDelete: false,
				children: [
					{ sectionKey: 'CarService', title: 'Araç Servisi', canRead: false, canWrite: false, canDelete: false, },
				]
			},
		]
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
			// set default plant which belongs to new user
			const userSession = useUserSession();
			this.formData.plantId = userSession.user.plantId;

			const api = useApi();
			try {
				const getData = (await api.get('User/Role/' + this.formData.id)).data;
				if (getData && getData.id > 0) {
					this.formData = getData;

					// clear or assign visual auth section parameters
					for (let i = 0; i < this.sectionList.length; i++) {
						const section = this.sectionList[i];
						if (this.formData.sections.some(d => d.sectionKey == section.sectionKey)) {
							const dataSection = this.formData.sections.find(d => d.sectionKey == section.sectionKey);
							section.canRead = dataSection.canRead;
							section.canWrite = dataSection.canWrite;
							section.canDelete = dataSection.canDelete;
						}
						else {
							section.canRead = false;
							section.canWrite = false;
							section.canDelete = false;
						}
					}
					for (let i = 0; i < this.sectionList.length; i++) {
						const section = this.sectionList[i];
						if (section.children) {
							for (let j = 0; j < section.children.length; j++) {
								const child = section.children[j];
								if (this.formData.sections.some(d => d.sectionKey == child.sectionKey)) {
									const dataSection = this.formData.sections.find(d => d.sectionKey == child.sectionKey);
									child.canRead = dataSection.canRead;
									child.canWrite = dataSection.canWrite;
									child.canDelete = dataSection.canDelete;
								}
								else {
									child.canRead = false;
									child.canWrite = false;
									child.canDelete = false;
								}
							}
						}
					}
				}
				else {
					// if not found clear all auth sections
					for (let i = 0; i < this.sectionList.length; i++) {
						const section = this.sectionList[i];
						section.canRead = false;
						section.canWrite = false;
						section.canDelete = false;
					}
				}
			} catch (error) {

			}
		},
		async onSubmit() {
			try {
				/* this.formData.sections = this.sectionList.map((d) => {
					return {
						...d,
						id: 0,
					};
				}); */

				this.formData.sections = [];
				for (let i = 0; i < this.sectionList.length; i++) {
					const section = this.sectionList[i];
					this.formData.sections.push({
						...section,
						id: 0,
					});
				}

				for (let i = 0; i < this.sectionList.length; i++) {
					const section = this.sectionList[i];
					if (section.children) {
						for (let j = 0; j < section.children.length; j++) {
							const child = section.children[j];
							this.formData.sections.push({
								...child,
								id: 0,
							});
						}
					}
				}

				const api = useApi();
				const postResult = (await api.post('User/Role', this.formData)).data;
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
			this.$router.push('/user/role/list');
		},
		async onDelete() {

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