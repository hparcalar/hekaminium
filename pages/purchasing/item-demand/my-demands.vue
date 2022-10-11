<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<ScCard class="uk-margin-top">
				<ScCardHeader separator>
					<div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
						<div class="uk-flex-1">
							<ScCardTitle>
								Taleplerim
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
					<MyDemandList 
						:is-dialog="false"
					/>
				</ScCardBody>
			</ScCard>
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'MyDemandsContainerForm',
	components: {
		MyDemandList: process.client ? () => import('~/logical_components/MyDemandList') : null,
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
