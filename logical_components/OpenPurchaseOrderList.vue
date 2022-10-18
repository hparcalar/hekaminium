<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <div class="uk-margin-medium uk-margin-remove-left">
                <table class="uk-table uk-table-striped uk-table-responsive uk-table-small" style="width:100%">
                    <thead>
                        <tr>
                            <th class="uk-text-nowrap">
                                #
                            </th>
                            <th class="uk-text-nowrap">
                                Tarih
                            </th>
                            <th class="uk-text-nowrap">
                                Termin
                            </th>
                            <th class="uk-text-nowrap">
                                Sipariş No
                            </th>
                            <th class="uk-text-nowrap">
                                Tedarikçi
                            </th>
                            <th class="uk-text-nowrap">
                                Stok / Açıklama
                            </th>
                            <th class="uk-text-nowrap">
                                Miktar
                            </th>
                        </tr>
                    </thead>
                    
                    <tr v-for="item in details" :key="item.id">
                        <td>
                            <button type="button" @click="expandOrderDetail(item)" class="sc-button sc-button-default sc-button-small uk-margin-small-right">
                                <span :data-uk-icon="'icon:'+ (item.expanded ? 'minus' : 'plus')" class="uk-icon"></span>
                            </button>
                        </td>
                        <td v-if="item.expanded" colspan="6">
                            <h6>{{ item.receiptNo }} : {{ item.firmName }}</h6>
                            <table class="uk-table uk-table-striped uk-table-responsive uk-table-small" style="width:100%">
                                <thead>
                                    <tr>
                                        <th class="uk-text-nowrap">
                                            SEÇ
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Stok Adı
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Parça Kodu
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Boyutlar
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Açıklama
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Talep Eden
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Talep Miktar
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Kalan Miktar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="demand in item.demandConsumes" :key="demand.id" :class="{'selected-detail': demand.isSelected}">
                                        <td>
                                            <PrettyCheck name="isSelected"
                                                v-model="demand.isSelected" class="p-icon">
                                                <i slot="extra" class="icon mdi mdi-check"></i>
                                            </PrettyCheck>
                                        </td>
                                        <td>{{ demand.itemName }}</td>
                                        <td>{{ demand.partNo }}</td>
                                        <td>{{ demand.partDimensions }}</td>
                                        <td>{{ demand.itemExplanation }}</td>
                                        <td>{{ demand.userName }}</td>
                                        <td>{{ demand.demandQuantity }}</td>
                                        <td>{{ demand.remainingQuantity }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td v-if="!item.expanded">{{ fDateToStr(item.receiptDate) }}</td>
                        <td v-if="!item.expanded">{{ fDateToStr(item.deadlineDate) }}</td>
                        <td v-if="!item.expanded">{{ item.receiptNo }}</td>
                        <td v-if="!item.expanded">{{ item.firmName }}</td>
                        <td v-if="!item.expanded">{{ item.itemName }}</td>
                        <td v-if="!item.expanded">{{ item.quantity }}</td>
                    </tr>
                </table>
                <!-- <client-only>
                    <Datatable
                        id="sc-dt-open-purchase-orders-table"
                        ref="buttonsTable"
                        :data="details"
                        :options="dtOptions"
                        :customColumns="dtDetailCols"
                        :buttons="true"
                        :customEvents="[{ name: 'select', function: clickOrderRow }, { name: 'deselect', function: deselectOrderRow }]"
                    ></Datatable>
                </client-only> -->
            </div>
            <div v-show="isDialog == true" class="uk-margin-large-top">
                <button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-large uk-margin-small-right">
                    <span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
                    Aktar
                </button>
                <button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-large uk-margin-small-right">
                    <span data-uk-icon="icon: arrow-left" class="uk-margin-small-right uk-icon"></span>
                    Kapat
                </button>
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
import ItemDemandDetail from './ItemDemandDetail.vue';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import { dateToStr } from '~/composable/useHelpers';

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'OpenPurchaseOrderList',
    emits: ['onOrdersSelected', 'onCancel'],
    props: {
        isDialog: {
            type: Boolean,
            default: false,
        },
        firmId: {
            type: Number,
            default: 0,
        },
    },
	components: {
        Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		Select2: process.client ? () => import('~/components/Select2') : null,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
        details: [],
        selectedOrderIndexes: [],
        dtOptions: {
			select: true,
			searching: true,
			paging: true,
		},
		dtDetailCols: [
			{ data: "receiptDate", title: "Tarih", visible: true, type:'date', render: function(data, ev,row) { return dateToStr(row.receiptDate); } },
            { data: "deadlineDate", title: "Termin", visible: true, type:'date', render: function(data, ev,row) { return dateToStr(row.deadlineDate); } },
			{ data: "receiptNo", title: "Sipariş No", visible: true, },
            { data: "firmName", title: "Tedarikçi", visible: true, },
			{ data: "itemName", title: "Stok Adı", visible: true, },
            { data: "itemExplanation", title: "Açıklama", visible: true, },
            { data: "partNo", title: "Parça Kodu", visible: true, },
			{ data: "partDimensions", title: "Boyutlar", visible: true, },
			{ data: "quantity", title: "Miktar", visible: true, },
		],
	}),
	computed: {
	},
	async mounted () {
		await this.bindModel();
	},
	methods: {
        async bindModel(){
            const api = useApi();
            try {
                const prmFirmId = this.firmId;
                this.details = (await api.get('ItemOrder/Purchase/OpenDetails')).data
                    .filter(d => d.firmId == prmFirmId)
                    .map((d) => {
                        return {
                            ...d,
                            expanded:false,
                            demandConsumes: d.demandConsumes.map(m => {
                                return {
                                    ...m,
                                    isSelected: false,
                                }
                            })
                        };
                    });
            } catch (error) {

            }
        },
        fDateToStr(dateObj){
            return dateToStr(dateObj);
        },
		onSubmit(){
            const submittedDetails = [];

            for (let i = 0; i < this.details.length; i++) {
                const orderDetail = this.details[i];
                if (orderDetail.demandConsumes && orderDetail.demandConsumes.some(m => m.isSelected == true)){
                    const selectedDetails = orderDetail.demandConsumes.filter(m => m.isSelected == true);
                    for (let j = 0; j < selectedDetails.length; j++) {
                        const consuming = selectedDetails[j];
                        submittedDetails.push({
                            ...consuming,
                            unitPrice: 0,
                            forexId: null,
                            taxRate: 0,
                            overallTotal: 0,
                            forexCode: '',
                            quantity: consuming.remainingQuantity,
                        });
                    }
                }
            }

            if (submittedDetails.length == 0){
                this.showNotification('Aktarmak için detay(lar) seçmelisiniz.', false, 'warning');
                return;
            }

            this.$emit('onOrdersSelected', submittedDetails);
        },
        onCancel(){
            if (this.isDialog)
                this.$emit('onCancel');
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
        clickOrderRow: function (e, dt, type, indexes){
            const selIndex = indexes[0];
			this.selectedOrderIndexes.push(selIndex);
        },
        deselectOrderRow: function(e, dt, type, indexes){
            const selIndex = indexes[0];
			this.selectedOrderIndexes = this.selectedOrderIndexes.filter(d => d != selIndex);
        },
        expandOrderDetail(item){
            if(!item.expanded)
				item.expanded = true;
			else
				item.expanded = !item.expanded;
        }
	},
    watch: {
        firmId: {
            handler: async function(o,n){
                await this.bindModel();
            }
        }
    }
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
    @import "~scss/plugins/datatables";
</style>
<style type="text/csss">
.selected-detail{
    background-color: rgba(17, 191, 72, 0.5) !important;
}
</style>
