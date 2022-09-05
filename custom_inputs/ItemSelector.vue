<template>
    <div class="uk-autocomplete uk-form" data-uk-autocomplete="{source:itemListForSelection}">
        <input type="text">
        <ul v-for="item in itemListForSelection" :key="item" class="uk-nav uk-nav-autocomplete uk-autocomplete-results">
            <li :value="item.id">
                <a>
                    {{ item.itemName }}
                    <div>{{ item.itemCode }}</div>
                </a>
            </li>
        </ul>
    </div>

</template>
<script>
import { useApi } from '~/composable/useApi';

export default {
    name: 'ItemSelector',
    props: {

    },
    data: () => ({
        itemListForSelection: [{id:0, itemCode: 'xx', itemName: 'xxx'}, { id:1, itemCode: 'yy', itemName: 'yyy' }],
    }),
    async mounted(){

    },
    methods: {

    }
}
</script>