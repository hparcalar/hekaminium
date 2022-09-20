<template>
    <div id="sc-page-wrapper">
        <div id="sc-page-content">
            <ScCard class="uk-margin-top">
				<ScCardHeader separator>
					<div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
						<div class="uk-flex-1">
							<ScCardTitle>
								Satın Alma Talepleri
                                <button type="button" @click="newRecord" class="sc-button sc-button-small uk-margin-small-left">
									<span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
									Yeni
								</button>
							</ScCardTitle>
						</div>
						<div class="uk-width-auto@s">
							<div id="sc-dt-buttons"></div>
						</div>
                        <div class="uk-width-auto@s">
							<!-- <button class="sc-button sc-button-primary sc-button-flex" type="button">
								Sütun Seç <i class="mdi mdi-chevron-down uk-margin-small-left"></i>
							</button> -->
							<div class="uk-dropdown uk-width-small" data-uk-drop="mode: click">
								<div class="sc-padding-small">
									<div v-for="(checkbox, index) in dtDHeaders" :key="index" class="uk-margin-small">
										<PrettyCheck
											class="p-icon"
											:value="index"
											:checked="checkbox.checked"
											:disabled="checkbox.disabled"
											@change="toggleCol($event, index)"
										>
											<i slot="extra" class="icon mdi mdi-check"></i>
											{{ checkbox.name }}
										</PrettyCheck>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ScCardHeader>
				<ScCardBody>
					<client-only>
						<Datatable
							id="sc-dt-demands-list-table"
							ref="buttonsTable"
							:data="visualData"
							:options="dtDOptions"
                            :customColumns="dtColumns"
							:buttons="true"
                            :customEvents="[{ name: 'select', function: clickDetail }]"
							@initComplete="dtButtonsInitialized"
						></Datatable>
					</client-only>
				</ScCardBody>
			</ScCard>
        </div>
    </div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { dateToStr } from '~/composable/useHelpers';

export default {
    name: 'DemandList',
    components: {
        Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		PrettyCheck
    },
    data: () => {
		return {
			visualData: [],
			dtColumns: [
				{ data: "receiptDate", title: "Tarih", type:'date', visible: true, },
				{ data: "receiptNo", title: "Talep No", visible: true, },
                { data: "projectName", title: "Proje", visible: true, },
                { data: "explanation", title: "Açıklama", visible: true, },
				{ data: "isContracted", title: "Türü", visible: true, render: function(data, ev, row){ return row && row.isContracted ? 'Fason' : '-'; } },
                { data: "statusText", title: "Durum", visible: true, },
			],
			dtDHeaders: [],
			dtDOptions: {
				select: true,
				"stateSave": false,
				rowCallback: function(row, data, index) {
					if (data.isContracted == true) {
						$('td',row).addClass("bg-warning");
					}
				},
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
			}
		}
	},
    async mounted (){
        const api = useApi();
        const rawData = (await api.get('ItemDemand')).data;

        this.visualData = rawData.map((d) => {
			return {
				...d,
				receiptDate: dateToStr(d.receiptDate),
			};
		});

		if (this.$refs.buttonsTable){
			// this.$refs.buttonsTable.$dt.state().clear()
			// console.log(this.$refs.buttonsTable);
			// console.log(this.$refs.buttonsTable.$dt.state().clear());
		}
		
    },
    methods: {
        dtButtonsInitialized () {
			// append buttons to custom container
			this.$refs.buttonsTable.$dt.buttons().container().appendTo(document.getElementById('sc-dt-buttons'));

            const ls = JSON.parse( localStorage.getItem( 'demandListTableView' ) );
			this.$refs.buttonsTable.headers.forEach( (value, i) => {
				this.dtDHeaders.push({
					'name': value,
					checked: ls.columns[i].visible,
					disabled: i === 0
				})
			});
		},
		toggleCol (e, col) {
			var column = this.$refs.buttonsTable.$dt.column(col);
			column.visible(e).draw('page');
		},
        clickDetail: function (e, dt, type, indexes){
			this.$router.push('/purchasing/item-demand?id=' + this.visualData[indexes[0]].id);
        },
        newRecord(){
            this.$router.push('/purchasing/item-demand');
        }
    }
}
</script>
<style lang="scss">
	@import "~scss/common/md_colors";
	@import "~scss/common/variables_mixins";
	@import "~scss/plugins/datatables";
	@import '~scss/vue/_pretty_checkboxes';
</style>
<style type="text/css">
.bg-warning{
	background-color: #ebd810;
}
</style>