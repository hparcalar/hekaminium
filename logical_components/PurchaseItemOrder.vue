<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <div v-if="isDialog == false" class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                    sc-round sc-border md-bg-grey-100
            ">
                <span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
                <h4 class="md-color-gray-600 uk-margin-remove">
                    Satın Alma Siparişi
                </h4>
            </div>
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                    <!-- <legend class="uk-legend">
                        Talep Bilgileri
                    </legend> -->
                    <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
                        <div>
                            <ScInput v-model="formData.receiptNo">
                                <label>Sipariş No</label>
                            </ScInput>
                        </div>
                        <div>
                            <ScInput v-model="formData.receiptDate" 
                                :config="{wrap:true, dateFormat: 'Y-m-d'}" v-flatpickr placeholder="Tarih" mode="outline"></ScInput>
                        </div>
                        <div>
                            <client-only>
                                <Select2
                                    v-model="formData.firmId"
                                    :options="firms"
                                    :settings="{ 'width': '100%', 'placeholder': 'Firma', 'allowClear': true }"
                                ></Select2>
                            </client-only>
                        </div>
                        <div>
                            <button type="button" @click="showApprovedDemands" class="sc-button sc-button-primary sc-button-large uk-margin-small-right">
                                <span data-uk-icon="icon: list" class="uk-margin-small-right uk-icon"></span>
                                Onaylı Talepler
                            </button>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium sc-padding-remove-top">
                    <legend>
                        Malzeme Bilgileri
                    </legend>
                    <div class="uk-margin-medium uk-margin-remove-left">
                        <div class="uk-grid">
                            <div class="uk-width-1-4@l">
                                <div class="uk-button-group sc-padding-remove-left" style="height:34px;">
                                    <button type="button" @click="showNewOrderDetail" class="sc-button sc-button-default sc-button-small uk-width-expand" style="height:34px;">
                                        <span data-uk-icon="icon: plus" class="uk-icon"></span>
                                    </button>
                                    <button v-show="selectedOrderDetail && selectedOrderDetail.id > 0" type="button" @click="showOrderDetail" class="sc-button sc-button-default sc-button-small uk-width-expand" style="height:34px;">
                                        <span data-uk-icon="icon: pencil" class="uk-icon"></span>
                                    </button>
                                    <button v-show="selectedOrderDetail && selectedOrderDetail.id > 0" type="button" @click="removeOrderDetail" class="sc-button sc-button-danger sc-button-small uk-width-expand" style="height:34px;">
                                        <span data-uk-icon="icon: trash" class="uk-icon"></span>
                                    </button>
                                    <button v-show="selectedOrderDetail && selectedOrderDetail.itemDemandDetailId > 0" 
                                        uk-tooltip="Talep Bağlantısı"
                                        type="button" @click="openDemandForm" class="sc-button sc-button-default sc-button-small uk-width-expand" style="height:34px;">
                                        <span data-uk-icon="icon: link" class="uk-icon"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="uk-width-2-3@l">
                                
                            </div>
                        </div>
                        
                        <client-only>
                            <Datatable
                                id="sc-dt-purchase-order-details-table"
                                ref="purchaseOrderDetailsTable"
                                :data="details"
                                :options="dtOptions"
                                :customColumns="dtDetailCols"
                                :buttons="true"
                                :customEvents="[{ name: 'select', function: clickDetail }, { name:'deselect', function: deselectDetail }]"
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

        <div id="dlgOrderDetail" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
                    <PurchaseItemOrderDetail
                        v-if="refreshDetailForm == true"
                        :detail-object="selectedOrderDetail"
                        :total-detail-count="details.length"
                        :is-dialog="true"
                        @onDetailSubmit="onDetailSaved"
                        @onCancel="closeDetailDialog"
                    />
				</div>
			</div>
		</div>

        <div id="dlgApprovedDemands" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
                    <ApprovedDemandList
                        v-if="refreshDemandList == true"
                        :is-dialog="true"
                        @onDemandsSelected="onDemandsSelected"
                        @onCancel="onDemandsClosed"
                    />
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
import PurchaseItemOrderDetail from '~/logical_components/PurchaseItemOrderDetail.vue';
import ApprovedDemandList from '~/logical_components/ApprovedDemandList.vue';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import moment from '~/plugins/moment'

if(process.client) {
	require('~/plugins/inputmask');	
    require('~/plugins/flatpickr');
}

export default {
	name: 'PurchaseItemOrder',
    emits: ['onOrderSaved', 'onCancel'],
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
	components: {
        Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		Select2: process.client ? () => import('~/components/Select2') : null,
        PurchaseItemOrderDetail,
        ApprovedDemandList,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
		formData: {
            id: 0,
			receiptNo: '',
            receiptDate: null,
			firmId: null,
            plantId: null,
            receiptType: 1,
			receiptStatus: 0,
		},
        isMounting: false,
        refreshDetailForm: false,
        refreshDemandList: false,
        details: [],
        firms: [],
        dtOptions: {
			select: {
                style: 'single'
            },
			searching: false,
			paging: false,
		},
		dtDetailCols: [
			{ data: "lineNumber", title: "Satır No", visible: true, },
			{ data: "itemName", title: "Stok Adı", visible: true, },
			{ data: "quantity", title: "Miktar", visible: true, },
            { data: "projectName", title: "Proje", visible: true, },
            { data: "forexCode", title: "Döviz", visible: true, },
            { data: "unitPrice", title: "Birim Fiyat", visible: true, },
            { data: "taxRate", title: "Kdv %", visible: true, },
            { data: "overallTotal", title: "Tutar", visible: true, },
			{ data: "statusText", title: "Durum", visible: true, },
		],
        selectedOrderDetail: {
            id: 0,
        }
	}),
	computed: {
		
	},
    beforeDestroy(){
		UIkit.modal('.uk-modal').$destroy(true);
	},
	async mounted () {
        this.isMounting = true;
        this.formData.id = this.recordId;

        if (this.projectId && this.projectId > 0)
            this.formData.projectId = this.projectId;

		await this.bindModel();
        this.isMounting = false;
	},
	methods: {
        async bindModel(){
            const self = this;
            const api = useApi();
            try {
                const firmData = (await api.get('Firm')).data;
                if (firmData)
                    this.firms = firmData.map((d) => {
                        return {
                            ...d,
                            text: d.firmName,
                        };
                    })

                const getData = (await api.get('ItemOrder/' + this.formData.id)).data;

                if (getData.receiptDate && getData.receiptDate.length > 0){
                    getData.receiptDate = self.$moment(getData.receiptDate).format('YYYY-MM-DD');
                }

                if (getData && getData.id > 0){
                    getData.firmId = getData.firmId ? getData.firmId.toString() : null;
                    this.formData = getData;
                    this.details = this.formData.details;
                }
                else{
                    this.formData.receiptNo = getData.receiptNo;
                    this.formData.receiptDate = self.$moment().format('YYYY-MM-DD');
                    this.details.splice(0, this.details.length);
                }

            } catch (error) {
                
            }
        },
        onDetailSaved(detailParam){
            const detailRow = detailParam.data;
            if (detailParam.action == 'save'){
                if (detailRow.id == 0){
                    detailRow.newDetail = true;
                    detailRow.id = detailRow.lineNumber;
                    this.details.push(detailRow);
                    this.showNewOrderDetail();
                }
                else {
                    const existingDetail = this.details.find(d => d.id == detailRow.id);
                    if (existingDetail){
                        detailRow.newDetail = false;

                        existingDetail.lineNumber = detailRow.lineNumber;
                        existingDetail.itemId = detailRow.itemId;
                        existingDetail.quantity = detailRow.quantity;
                        existingDetail.projectId = detailRow.projectId;
                        existingDetail.forexId = detailRow.forexId;
                        existingDetail.forexRate = detailRow.forexRate;
                        existingDetail.taxIncluded = detailRow.taxIncluded;
                        existingDetail.taxRate = detailRow.taxRate;
                        existingDetail.explanation = detailRow.explanation;
                        existingDetail.unitId = detailRow.unitId;
                        existingDetail.unitPrice = detailRow.unitPrice;
                        existingDetail.receiptStatus = detailRow.receiptStatus;
                        existingDetail.overallTotal = detailRow.overallTotal;
                        existingDetail.forexCode = detailRow.forexCode;
                        existingDetail.projectName = detailRow.projectName;
                        existingDetail.newDetail = detailRow.newDetail;
                    }
                }

                this.closeDetailDialog();
            }
        },
		async onSubmit(){
            try {
                if (!this.formData.receiptDate){
                    this.showNotification('Tarih seçmelisiniz.', false, 'error');
                    return;
                }

                // is same forex type check
                let forexOk = true;
                const forexData = this.details.map(d => d.forexId);
                let lastForexOption = forexData[0];
                for (let i = 0; i < forexData.length; i++) {
                    const forexOption = forexData[i];
                    if (forexOption != lastForexOption)
                    {
                        forexOk = false;
                        break;
                    }

                    lastForexOption = forexOption;
                }

                if (!forexOk){
                    this.showNotification('Sipariş fişi farklı döviz cinsleri içeremez.', false, 'error');
                    return;
                }

                this.formData.details = this.details;

                const session = useUserSession();
                this.formData.plantId = session.user.plantId;

                const api = useApi();
                const postResult = (await api.post('ItemOrder', this.formData)).data;
                if (postResult.result){
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;
                    this.$emit('onOrderSaved');

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
                this.$emit('onCancel');
            else
                this.$router.push('/purchasing/item-order/list');
        },
        async onDelete(){

        },
        removeOrderDetail(){
            const self = this;
            UIkit.modal.confirm('Seçilen sipariş kalemini silmek istediğinizden emin misiniz?').then(
				function () {
					if (self.selectedOrderDetail){
                        const foundElement = self.details.find(d => d.id == self.selectedOrderDetail.id);
                        const orderIndex = self.details.indexOf(foundElement);
                        if (orderIndex > -1){
                            self.details.splice(orderIndex, 1);

                            let lineNumber = 1;
                            for (let i = 0; i < self.details.length; i++) {
                                const row = self.details[i];
                                row.lineNumber = lineNumber;
                                lineNumber++;
                            }
                        }

                        self.selectedOrderDetail = { id:0 };
                    }
			});
            
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
        showNewOrderDetail(){
            this.selectedOrderDetail = { id:0 };
            this.showOrderDetail();
        },
        showOrderDetail(){
            try {
                this.refreshDetailForm = false;
                setTimeout(() => { this.refreshDetailForm = true; }, 100);

                const modalElement = document.getElementById('dlgOrderDetail');
                modalElement.width = window.innerWidth * 0.7;
                modalElement.height = window.innerHeight * 0.8;
                UIkit.modal(modalElement).show();
            } catch (error) {
                
            }
        },
        closeDetailDialog(){
			const modalElement = document.getElementById('dlgOrderDetail');
			UIkit.modal(modalElement).hide();
		},
        clickDetail: function (e, dt, type, indexes){
            try {
                this.selectedOrderDetail = { ...this.details[indexes[0]]  };
            } catch (error) {
                
            }
        },
        deselectDetail: function(){
            this.selectedOrderDetail = { id:0 };
        },
        showApprovedDemands(){
            this.refreshDemandList = false;
			setTimeout(() => { this.refreshDemandList = true; }, 100);

			const modalElement = document.getElementById('dlgApprovedDemands');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
        },
        onDemandsSelected(selectedDemands){
            const self = this;

            if (selectedDemands && selectedDemands.length > 0){
                for (let i = 0; i < selectedDemands.length; i++) {
                    const demandDetail = selectedDemands[i];
                    
                    if (!self.details.some(d => d.itemDemandDetailId == demandDetail.id)){
                        var newRow = {};
                        newRow.newDetail = true;
                        newRow.itemDemandDetailId = demandDetail.id;

                        // assign new line number
                        const totalCount = self.details.length;

                        newRow.lineNumber = totalCount + 1;
                        newRow.id = newRow.lineNumber;

                        newRow.itemId = demandDetail.itemId;
                        newRow.itemName = demandDetail.itemName;
                        newRow.quantity = demandDetail.quantity;
                        newRow.projectId = demandDetail.projectId;
                        newRow.forexId = null;
                        newRow.forexRate = null;
                        newRow.taxIncluded = false;
                        newRow.taxRate = 18;
                        newRow.explanation = demandDetail.explanation;
                        newRow.unitPrice = 0;
                        newRow.receiptStatus = 0;
                        newRow.statusText = 'Sipariş oluşturuldu';
                        newRow.overallTotal = 0;
                        newRow.forexCode = '';
                        newRow.projectName = demandDetail.projectName;

                        self.details.push(newRow);
                    }
                }
            }

            this.onDemandsClosed();
        },
        onDemandsClosed(){
            const modalElement = document.getElementById('dlgApprovedDemands');
			UIkit.modal(modalElement).hide();
        },
        async openDemandForm(){
            try {
                const api = useApi();
                const demandDetail = (await api.get('ItemDemand/Detail/' + this.selectedOrderDetail.itemDemandDetailId)).data;
                if (demandDetail){
                    window.open('/purchasing/item-demand?id=' + demandDetail.itemDemandId, '_blank');
                }
            } catch (error) {
                
            }
        }
	},
    watch: {
        recordId: async function(newVal, oldVal) {
            this.formData.id = this.recordId;
            await this.bindModel();
        },
    }
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
    @import "~scss/plugins/datatables";
</style>
