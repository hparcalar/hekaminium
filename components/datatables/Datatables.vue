<template>
	<div>
		<table :id="id" class="uk-table uk-table-striped uk-table-responsive uk-table-small" :class="[tableClass]" style="width:100%">
			<thead>
				<tr>
					<th v-for="header in headers" :key="header" class="uk-text-nowrap">
						{{ header }}
					</th>
				</tr>
			</thead>
			<slot name="footer"></slot>
			<tfoot v-if="showSummary">
				<tr>
					<td v-for="column in customColumns" :key="column">
						<span v-if="isSummaryItem(column.data)">
							{{ summaryItemResult(column.data) }}
						</span>
					</td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { scMq } from '~/assets/js/utils'

require('~/plugins/jquery');

require('datatables.net/js/jquery.dataTables');
require('datatables.net-responsive');
require('datatables.net-select');
require('./dataTables.uikit');
require('./dataTables.responsive.uikit');

export default {
	name: 'Datatable',
	props: {
		data: {
			type: Array,
			default: () => [],
			required: false
		},
		customColumns: {
			type: Array,
			default: () => [],
			required: false,
		},
		options: {
			type: Object,
			default: () => {}
		},
		id: {
			type: String,
			required: true
		},
		buttons: {
			type: Boolean,
			default: false
		},
		autoWidth: Boolean,
		tableClass: {
			type: String,
			default: ''
		},
		customEvents: {
			type: Array,
			default: () => []
		},
		showSummary: {
			type: Boolean,
			required: false,
			default: false,
		},
		summaryItems: {
			type: Array,
			required: false,
			default: () => [],
		}
	},
	data: () => ({
		$dt: null,
		summaryResultList: [],
	}),
	computed: {
		dtData () {
			return JSON.parse(JSON.stringify(this.data))
		},
		headers () {
			let names = [];

			if (this.customColumns && this.customColumns.length > 0)
				names = this.customColumns.map(d => d.title);
			else
				Object.keys(this.data[0]).map(k => {
					let name = k.replace(/_/g, ' ');
					names.push(name.charAt(0).toUpperCase() + name.slice(1))
				});

			return names
		},
		columns () {
			let columns = [];

			if (this.customColumns && this.customColumns.length > 0)
				columns = [...this.customColumns];
			else
				Object.keys(this.data[0]).map(k => {
					columns.push({
						data: k
					})
				});
				
			return columns;
		},
		...mapState([
			'vxSidebarMainExpanded'
		])
	},
	watch: {
		dtData (newVal, oldVal) {
			if (this.$dt){
				this.$dt.clear().rows.add(newVal).draw();
				this.updateSummaries();
			}

			// const newLength = newVal.length;
			// const oldLength = oldVal.length;
			// const newIds = newVal.map(k => {
			// 	return k.id
			// });
			// const oldIds = oldVal.map(k => {
			// 	return k.id
			// });
			// if(newLength > oldLength) {
			// 	let uniq = newIds.filter(k => {
			// 		return !oldIds.includes(k)
			// 	});
			// 	if (uniq.length && oldLength > 0) {
			// 		const newEl = newVal.filter(obj => {
			// 			return obj.id === uniq[0]
			// 		});
			// 		this.$dt.row.add(newEl[0]).draw('full-hold');
			// 	}
			// 	else if (uniq.length && oldLength == 0){
			// 		for (let i = 0; i < newVal.length; i++) {
			// 			const element = newVal[i];
			// 			this.$dt.row.add(element).draw('full-hold');;
			// 		}
			// 	}
			// } else {
			// 	let uniq = oldIds.filter(k => {
			// 		return !newIds.includes(k)
			// 	});
				
			// 	if (uniq.length) {
			// 		this.$dt.row(':eq('+ uniq[0] +')').remove().draw('full-hold')
			// 	}
			// }
		},
		vxSidebarMainExpanded () {
			if(scMq.mediumMin()) {
				setTimeout(() => {
					$('#' + this.id).resize()
				}, 300);
			}
		}
	},
	beforeDestroy(){
		if ( $.fn.dataTable.isDataTable( '#' + this.id ) ) {
			const existingTable = $('#' + this.id).DataTable();
			existingTable.destroy();
		}
	},
	mounted () {
		const self = this;

		if(self.buttons) {
			const pdfMake = require('~/assets/js/vendor/pdfmake/pdfmake');
			const pdfFonts =require('~/assets/js/vendor/pdfmake/vfs_fonts');
			pdfMake.vfs = pdfFonts.pdfMake.vfs;
			window.JSZip = require("~/assets/js/vendor/jszip");
			require('datatables.net-buttons');
			require('datatables.net-buttons/js/buttons.html5');
			require('datatables.net-buttons/js/buttons.print');
		}
		let _options = {
			data: self.data,
			columns: self.columns,
			responsive: true,
			"initComplete" (settings, json) {
				self.$dt = this.api();
				self.$emit('initComplete');
			}
		};
		const options = $.extend(_options, self.options);
		if(options.responsive === 'responsiveModal') {
			_options.responsive = {
				details:  {
					display: $.fn.dataTable.Responsive.display.modal({
						header (row) {
							return 'Details for row ' + (parseInt(row[0]) + 1);
						}
					}),
					renderer: $.fn.dataTable.Responsive.renderer.tableAll({
						tableClass: 'table'
					})
				}
			}
		}

		$('#' + this.id).DataTable(options);

		// if (! $.fn.dataTable.isDataTable( '#' + this.id ) ) {
		// 	$('#' + this.id).DataTable(options);
		// }
		// else{
		// 	self.$dt = $('#' + this.id).DataTable();
		// 	self.$dt.clear().rows.add(self.dtData).draw();
		// }

		try {
			// const self = this;
			this.$dt.on('search', this.updateSummaries);

			if(this.customEvents.length) {
				this.customEvents.forEach(event => {
					this.$dt.on(event.name, event.function)
				})
			}	
		} catch (error) {
			
		}

		this.updateSummaries();
	},
	methods: {
		updateSummaries(){
			if (this.showSummary && this.$dt){
				try {
					for (let i = 0; i < this.summaryItems.length; i++) {
						const element = this.summaryItems[i];
						
						let sumItem = null;

						if (!this.summaryResultList.some(d => d.data == element)){
							sumItem = {
								data: element,
								result: 0,
							};
							this.summaryResultList.push(sumItem);
						}
						else{
							sumItem = this.summaryResultList.find(d => d.data == element);
						}
						
						const filteredData = this.$dt.rows({search:'applied'}).data().toArray();
						sumItem.result = filteredData.map(d => d[sumItem.data]).reduce((a,b) => a + b);
					}
				} catch (error) {
					
				}
			}
		},
		summaryItemResult(itemName){
			try {
				const sumItem = this.summaryResultList.find(d => d.data == itemName);
				return sumItem ? (new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 }).format(sumItem.result))  : null;
			} catch (error) {
				
			}
		},
		isSummaryItem(itemName){
			return this.summaryItems.some(d => d == itemName);
		},
	}
}
</script>
