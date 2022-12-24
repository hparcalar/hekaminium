<template>
    <ScCard class="uk-margin-top">
        <ScCardHeader separator>
            <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
                <div class="uk-flex-1">
                    <ScCardTitle>
                        Depo Durumları
                    </ScCardTitle>
                </div>
                <div class="uk-width-auto@s">
                    <div id="sc-dt-buttons"></div>
                </div>
                <div class="uk-width-auto@s">
                    
                </div>
            </div>
        </ScCardHeader>
        <ScCardBody>
            <div class="uk-flex-center uk-grid" data-uk-grid>
                <div class="uk-width-3-3@l">
                    <div class="uk-margin-medium uk-margin-remove-left">
                        <client-only>
                            <Datatable
                                id="sc-dt-report-item-stocks-table"
                                ref="stocksTable"
                                :data="details"
                                :options="dtOptions"
                                :customColumns="dtDetailCols"
                                :buttons="true"
                                :customEvents="[{ name: 'select', function: clickDemandRow }, { name: 'deselect', function: deselectDemandRow }]"
                                @initComplete="dtButtonsInitialized"
                            ></Datatable>
                        </client-only>
                    </div>
                    <div v-show="isDialog == true" class="uk-margin-large-top">
                        <!-- <button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-large uk-margin-small-right">
                            <span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
                            Aktar
                        </button> -->
                        <button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-large uk-margin-small-right">
                            <span data-uk-icon="icon: arrow-left" class="uk-margin-small-right uk-icon"></span>
                            Kapat
                        </button>
                    </div>
                </div>
            </div>
        </ScCardBody>
    </ScCard>
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
	name: 'ReportItemStocks',
    emits: ['onCancel'],
    props: {
        isDialog: {
            type: Boolean,
            default: false,
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
        selectedDemandIndexes: [],
        dtOptions: {
			select: true,
			searching: true,
			paging: true,
            "order": [[1, 'asc']],
			pageLength: 25,
            buttons: [
					{
						extend: "excelHtml5",
						className: "sc-button",
						text: 'Excel '
					},
					{
						extend: "pdfHtml5",
						className: "sc-button sc-button-icon",
						text: '<i class="mdi mdi-file-pdf md-color-red-800"></i>'
					},
					{
						extend: "print",
						className: "sc-button sc-button-icon",
						text: '<i class="mdi mdi-printer"></i>',
						title: 'Yazdır',
						autoPrint: true
					}
				]
		},
		dtDetailCols: [
			{ data: "warehouseName", title: "Depo", visible: true, type:'date' },
			{ data: "itemCode", title: "Stok Kodu", visible: true, },
			{ data: "itemName", title: "Stok Adı", visible: true, },
            { data: "inQuantity", title: "Giriş", visible: true, render: function(data, ev, row){ return new Intl.NumberFormat("tr-TR").format(row.inQuantity); }  },
			{ data: "outQuantity", title: "Çıkış", visible: true, render: function(data, ev, row){ return new Intl.NumberFormat("tr-TR").format(row.outQuantity); }  },
			{ data: "totalQuantity", title: "Kalan", visible: true, render: function(data, ev, row){ return new Intl.NumberFormat("tr-TR").format(row.totalQuantity); }  },
		],
	}),
	computed: {
	},
	async mounted () {
		await this.bindModel();
	},
	methods: {
        dtButtonsInitialized () {
			// append buttons to custom container
			this.$refs.stocksTable.$dt.buttons().container().appendTo(document.getElementById('sc-dt-buttons'));
		},
        async bindModel(){
            const api = useApi();
            try {
                this.details = (await api.get('Warehouse/ItemStocks')).data
                    .map((d) => {
                        return {
                            ...d,
                        };
                    });
            } catch (error) {

            }
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
        clickDemandRow: function (e, dt, type, indexes){
            // const selIndex = indexes[0];
            // const rowId = this.details[selIndex].itemDemandId;
			// this.$router.push('/purchasing/item-demand?id=' + rowId);
        },
        deselectDemandRow: function(e, dt, type, indexes){
            
        }
	},
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
    @import "~scss/plugins/datatables";
</style>
