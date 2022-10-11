<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <div v-show="isDialog == false" class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                    sc-round sc-border md-bg-grey-100
            ">
                <span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
                <h4 class="md-color-gray-600 uk-margin-remove">
                    İrsaliye
                </h4>
            </div>
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                    <!-- <legend class="uk-legend">
                        Talep Bilgileri
                    </legend> -->
                    <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
                        <div class="uk-child-width-1-2@m uk-grid">
                            <div>
                                <client-only>
                                    <Select2
                                        v-model="selectedReceiptType"
                                        :options="receiptTypeList"
                                        @change="onReceiptTypeChanged"
                                        :settings="{ 'width': '100%', 'allowClear': false }"
                                    >
                                    <label>Hareket Türü</label>
                                </Select2>
                                </client-only>
                            </div>
                            <div>
                                <ScInput v-model="formData.receiptNo" :read-only="true">
                                    <label>İrsaliye No</label>
                                </ScInput>
                            </div>
                        </div>
                        <div class="uk-child-width-1-2@m uk-margin-remove-top uk-grid">
                            <div>
                                <ScInput v-model="formData.documentNo">
                                    <label>Belge No</label>
                                </ScInput>
                            </div>
                            <div class="sc-padding-small-top">
                                <ScInput v-model="formData.receiptDate" 
                                    :config="{wrap:true, dateFormat: 'Y-m-d'}" v-flatpickr mode="outline">
                                    <label>Tarih</label>
                                </ScInput>
                            </div>
                        </div>
                        <div class="uk-child-width-1-2@m uk-grid">
                            <div>
                                <client-only>
                                    <Select2
                                        v-model="formData.firmId"
                                        :options="firms"
                                        :settings="{ 'width': '100%', 'placeholder': 'Firma', 'allowClear': true }"
                                    >
                                    <label>Firma</label>
                                </Select2>
                                </client-only>
                            </div>
                            <div>
                                <client-only>
                                    <Select2
                                        v-model="formData.inWarehouseId"
                                        :options="warehouseList"
                                        :settings="{ 'width': '100%', 'placeholder': 'Depo', 'allowClear': true }"
                                    >
                                    <label>Depo</label>
                                </Select2>
                                </client-only>
                            </div>
                        </div>
                        <div class="uk-child-width-1-1@m uk-grid">
                            <div>
                                <ScInput v-model="formData.explanation">
                                    <label>Genel Açıklama</label>
                                </ScInput>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium sc-padding-remove-top">
                    <legend>
                        Kalem Bilgileri
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
                                id="sc-dt-item-receipt-details-table"
                                ref="itemReceiptDetailsTable"
                                :data="details"
                                :options="dtOptions"
                                :customColumns="dtDetailCols"
                                :buttons="true"
                                :customEvents="[{ name: 'select', function: clickDetail }, { name:'deselect', function: deselectDetail }]"
                            ></Datatable>
                        </client-only>

                        <div class="uk-child-width-1-2@m uk-grid">
                            <div v-show="hasViewAuth('ProjectBudgetView')">
                                <ScInput v-model="fTotalForexPrice" :read-only="true">
                                    <label>Döviz Tutarı</label>
                                </ScInput>
                            </div>
                            <div v-show="hasViewAuth('ProjectBudgetView')">
                                <ScInput v-model="fTotalPrice" :read-only="true">
                                    <label>TL Tutarı</label>
                                </ScInput>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div class="uk-margin-large-top">
                    <button type="button" @click="showOpenOrders" class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                        <span data-uk-icon="icon: list" class="uk-margin-small-right uk-icon"></span>
                        Açık Siparişler
                    </button>
                    <button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                        <span data-uk-icon="icon: check" class="uk-icon"></span>
                    </button>
                    <button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                        <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
                    </button>
                    <button type="button" @click="onDelete" class="sc-button sc-button-danger sc-button-medium">
                        <span data-uk-icon="icon: trash" class="uk-icon"></span>
                    </button>
                </div>
            </form>
        </div>

        <div id="dlgOrderDetail" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
                    <ItemReceiptDetail
                        v-show="refreshDetailForm == true"
                        :detail-object="selectedOrderDetail"
                        :total-detail-count="details.length"
                        :is-dialog="true"
                        @onDetailSubmit="onDetailSaved"
                        @onCancel="closeDetailDialog"
                    />
				</div>
			</div>
		</div>

        <div id="dlgOpenOrders" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
                    <OpenPurchaseOrderList
                        v-show="refreshOrderList == true"
                        :is-dialog="true"
                        :firm-id="fFirmId"
                        @onOrdersSelected="onOrdersSelected"
                        @onCancel="onOrdersClosed"
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
import ItemReceiptDetail from '~/logical_components/ItemReceiptDetail.vue';
import OpenPurchaseOrderList from '~/logical_components/OpenPurchaseOrderList.vue';
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
        section: {
            required: true,
            type: String,
            default: 'purchasing', // purchasing, sales
        },
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
        ItemReceiptDetail,
        OpenPurchaseOrderList,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
		formData: {
            id: 0,
			receiptNo: '',
            documentNo: '',
            receiptDate: null,
            deadlineDate: null,
			firmId: null,
            plantId: null,
            isContracted: false,
            receiptType: 0,
			receiptStatus: 0,
            inWarehouseId: null,
		},
        selectedReceiptType: '0',
        isMounting: false,
        refreshDetailForm: false,
        refreshOrderList: false,
        details: [],
        firms: [],
        receiptTypeList: [],
        warehouseList: [],
        dtOptions: {
			select: {
                style: 'single'
            },
            rowCallback: function(row, data, index) {
                if (data.receiptStatus == 2) {
                    $('td',row).addClass("bg-success");
                }
            },
			searching: false,
			paging: false,
		},
		dtDetailCols: [
			{ data: "lineNumber", title: "Satır No", visible: true, },
			{ data: "itemName", title: "Stok Adı", visible: true, render: function(data,ev,row){ return row.itemId && row.itemId > 0 ? row.itemName : row.itemExplanation; } },
            { data: "partNo", title: "Parça Kodu", visible: true, },
			{ data: "partDimensions", title: "Boyutlar", visible: true, },
			{ data: "quantity", title: "Miktar", visible: true, },
            { data: "projectName", title: "Proje", visible: true, },
            { data: "forexCode", title: "Döviz", visible: true, },
            { data: "unitPrice", title: "Birim Fiyat", visible: true, render: function(data, ev, row){ return new Intl.NumberFormat("tr-TR").format(data); } },
            { data: "taxRate", title: "Kdv %", visible: true, },
            { data: "overallTotal", title: "Tutar", visible: true, render: function(data, ev, row){ return new Intl.NumberFormat("tr-TR").format(data); } },
		],
        selectedOrderDetail: {
            id: 0,
        }
	}),
	computed: {
		fTotalPrice:{
            get: function(){
                if (this.details && this.details.length > 0){
                    const subTotal = this.details.map(d => 
                    (d.forexId && d.forexId > 0 ? (d.forexRate * d.unitPrice) : d.unitPrice)
                    + (d.taxIncluded == true ? 0 : (d.forexId && d.forexId > 0 ? (d.forexRate * d.unitPrice) : d.unitPrice) * (d.taxRate / 100.0)))
                    .reduce((a,b) => a + b);

                    return new Intl.NumberFormat("tr-TR").format(subTotal);
                }
                
                return "0";
            }
        },
        fTotalForexPrice: {
            get: function(){
                if (this.details && this.details.length > 0){
                    const subTotal = this.details.map(d => 
                        (d.forexId && d.forexId > 0 ? d.unitPrice : 0)
                        + (d.taxIncluded == true ? d.unitPrice : (d.unitPrice * (d.taxRate / 100.0)))
                    ).reduce((a,b) => a + b);

                    return new Intl.NumberFormat("tr-TR").format(subTotal);
                }
                
                return "0";
            }
        },
        receiptCategory(){
            if (this.section){
                return this.section == 'purchasing' ? 1 :
                    this.section == 'sales' ? 105 : 1;
            }

            return 1;
        },
        fFirmId() {
            return parseInt(this.formData.firmId ?? '0');
        }
	},
    beforeDestroy(){
        try {
            UIkit.modal('.uk-modal').$destroy(true);
        } catch (error) {
            
        }
	},
	async mounted () {
        this.isMounting = true;
        this.formData.id = this.recordId;
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

                const wrData = (await api.get('Warehouse')).data;
                if (wrData)
                    this.warehouseList = wrData.map((d) => {
                        return {
                            ...d,
                            text: d.warehouseName,
                        };
                    })

                const getData = (await api.get('ItemReceipt/' + this.formData.id + '/' 
                    + (this.selectedReceiptType > 0 ? this.selectedReceiptType : this.receiptCategory))).data;

                if (getData && getData.receiptTypeList)
                    this.receiptTypeList = getData.receiptTypeList.map((d) => {
                        return {
                            id: d.typeNo,
                            text: d.typeText,
                        };
                    });
                else this.receiptTypeList = [];

                if (getData.receiptDate && getData.receiptDate.length > 0){
                    getData.receiptDate = self.$moment(getData.receiptDate).format('YYYY-MM-DD');
                }

                if (getData && getData.id > 0){
                    getData.firmId = getData.firmId ? getData.firmId.toString() : null;
                    getData.inWarehouseId = getData.inWarehouseId ? getData.inWarehouseId.toString() : null;
                    this.formData = getData;
                    this.selectedReceiptType = getData.receiptType;
                    this.details = this.formData.details.map((d) => {
                        return {
                            ...d,
                            newRecord: false,
                        };
                    });
                }
                else{
                    this.formData = {
                        id: 0,
                        receiptNo: '',
                        documentNo: '',
                        receiptDate: null,
                        deadlineDate: null,
                        firmId: null,
                        plantId: null,
                        isContracted: false,
                        receiptType: 0,
                        receiptStatus: 0,
                        inWarehouseId: null,
                    };
                    this.details = [];

                    this.formData.receiptNo = getData.receiptNo;
                    this.formData.receiptDate = self.$moment().format('YYYY-MM-DD');
                    this.formData.receiptType = getData.receiptType;
                    this.selectedReceiptType = getData.receiptType;
                    this.details.splice(0, this.details.length);
                }

                this.selectedReceiptType = this.selectedReceiptType ? this.selectedReceiptType.toString() : null;

            } catch (error) {
                
            }
        },
        async onReceiptTypeChanged(val){
            this.formData.id = 0;
            this.selectedReceiptType = val;
            await this.bindModel();
        },
        onDetailSaved(detailParam){
            const detailRow = detailParam.data;
            if (detailParam.action == 'save'){
                if (detailRow.id == 0){
                    detailRow.newRecord = true;
                    detailRow.id = detailRow.lineNumber;
                    this.details.push(detailRow);
                    this.showNewOrderDetail();
                }
                else {
                    const existingDetail = this.details.find(d => d.id == detailRow.id);
                    if (existingDetail){
                        // detailRow.newDetail = false;

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
                        existingDetail.partNo = detailRow.partNo;
                        existingDetail.partDimensions = detailRow.partDimensions;
                        existingDetail.itemExplanation = detailRow.itemExplanation;
                        // existingDetail.newDetail = detailRow.newDetail;
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

                if (parseInt(this.formData.inWarehouseId ?? '0') <= 0){
                    this.showNotification('Depo seçmelisiniz.', false, 'error');
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
                    this.showNotification('İrsaliye farklı döviz cinsleri içeremez.', false, 'error');
                    return;
                }

                this.formData.details = this.details.map((d) => {
                    return {
                        ...d,
                        id: d.newRecord == true ? 0 : d.id
                    };
                });

                const session = useUserSession();
                this.formData.plantId = session.user.plantId;

                const api = useApi();
                const postResult = (await api.post('ItemReceipt', this.formData)).data;
                if (postResult.result){
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;
                    this.$emit('onReceiptSaved');

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
        onCancel(){
            if (this.isDialog)
                this.$emit('onCancel');
            else
                this.$router.push('/purchasing/item-receipt/list');
        },
        async onDelete(){
            const self = this;
            UIkit.modal.confirm('Bu irsaliyeyi silmek istediğinizden emin misiniz?').then(
				async function () {
					try {
                        const api = useApi();
                        const delResult = (await api.delete('ItemReceipt/' + self.formData.id)).data;
                        if (delResult.result){
                            self.showNotification('Silme işlemi başarılı', false, 'success');
                            this.$emit('onReceiptSaved');

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
        removeOrderDetail(){
            const self = this;
            UIkit.modal.confirm('Seçilen irsaliye kalemini silmek istediğinizden emin misiniz?').then(
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
        },
        hasViewAuth(sectionKey){
			if (process.client){
				const session = useUserSession();
				if (session && session.checkAuthSection)
					return session.checkAuthSection(sectionKey);
			}
			return false;
		},
        showOpenOrders(){
            if (this.fFirmId <= 0){
                this.showNotification('Açık siparişleri görüntülemek için önce firma seçmelisiniz.', false, 'error');
                return;
            }

            this.refreshOrderList = false;
			setTimeout(() => { this.refreshOrderList = true; }, 100);

			const modalElement = document.getElementById('dlgOpenOrders');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
        },
        onOrdersSelected(selectedOrders){
            const self = this;

            if (selectedOrders && selectedOrders.length > 0){
                for (let i = 0; i < selectedOrders.length; i++) {
                    const orderDetail = selectedOrders[i];
                    
                    if (!self.details.some(d => d.itemOrderDetailId == orderDetail.id)){
                        var newRow = {};
                        newRow.newRecord = true;
                        newRow.orderConsumes = [
                            {
                                itemOrderDetailId: orderDetail.id,
                                consumeNetQuantity: orderDetail.quantity,
                            }
                        ]
                        // newRow.itemDemandDetailId = demandDetail.id; -- old algorithm

                        // assign new line number
                        const totalCount = self.details.length;

                        newRow.lineNumber = totalCount + 1;
                        newRow.id = newRow.lineNumber;

                        newRow.itemId = orderDetail.itemId;
                        newRow.itemName = orderDetail.itemName;
                        newRow.quantity = orderDetail.quantity;
                        newRow.projectId = orderDetail.projectId;
                        newRow.forexId = orderDetail.forexId;
                        newRow.forexRate = orderDetail.forexRate;
                        newRow.taxIncluded = orderDetail.taxIncluded;
                        newRow.taxRate = orderDetail.taxRate;
                        newRow.explanation = orderDetail.explanation;
                        newRow.unitId = orderDetail.unitId;
                        newRow.unitPrice = orderDetail.unitPrice;
                        newRow.receiptStatus = 0;
                        newRow.overallTotal = orderDetail.overallTotal;
                        newRow.forexCode = orderDetail.forexCode;
                        newRow.partNo = orderDetail.partNo;
                        newRow.partDimensions = orderDetail.partDimensions;
                        newRow.projectName = orderDetail.projectName;
                        newRow.itemExplanation = orderDetail.itemExplanation;

                        self.details.push(newRow);
                    }
                }
            }

            this.onOrdersClosed();
        },
        onOrdersClosed(){
            const modalElement = document.getElementById('dlgOpenOrders');
			UIkit.modal(modalElement).hide();
        },
	},
    watch: {
        recordId: async function(newVal, oldVal) {
            this.formData.id = this.recordId;
            await this.bindModel();
        },
        receiptCategory: async function(n, o){
            await this.bindModel();
        }
    }
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
    @import "~scss/plugins/datatables";
</style>
<style type="text/css">
.bg-success{
    background-color: #11bf48;
}
</style>