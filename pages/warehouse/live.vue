<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<ReportItemStocks 
                    :is-dialog="false"
                />
		</div>
	</div>
</template>

<script>
export default {
	name: 'MyDemandsContainerForm',
	components: {
		ReportItemStocks: process.client ? () => import('~/logical_components/ReportItemStocks') : null,
	},
	data: () => ({
		demandId: 0,
	}),
	computed: {
		
	},
	beforeDestroy(){
		if (UIkit.modal('.uk-modal'))
			UIkit.modal('.uk-modal').$destroy(true);
	},
	mounted () {
	},
	methods: {
        
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
