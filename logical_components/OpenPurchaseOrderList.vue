<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <div class="uk-margin-medium uk-margin-remove-left">
                <client-only>
                    <Datatable
                        id="sc-dt-open-purchase-orders-table"
                        ref="buttonsTable"
                        :data="details"
                        :options="dtOptions"
                        :customColumns="dtDetailCols"
                        :buttons="true"
                        :customEvents="[{ name: 'select', function: clickOrderRow }, { name: 'deselect', function: deselectOrderRow }]"
                    ></Datatable>
                </client-only>
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
			{ data: "receiptDate", title: "Tarih", visible: true, type:'date' },
            { data: "deadlineDate", title: "Termin", visible: true, type:'date' },
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
                            receiptDate: dateToStr(d.receiptDate),
                            deadlineDate: dateToStr(d.deadlineDate),
                        };
                    });
            } catch (error) {

            }
        },
		onSubmit(){
            const submittedDetails = [];
            for (let i = 0; i < this.selectedOrderIndexes.length; i++) {
                const rowIndex = this.selectedOrderIndexes[i];
                const rowData = this.details[rowIndex];
                submittedDetails.push(rowData);
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
