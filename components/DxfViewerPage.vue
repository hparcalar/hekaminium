<template>
    <q-page class="row items-stretch root">
        <div class="col relative-position">
            <slot></slot>
            <DxfViewer ref="viewer" :dxfUrl="dxfUrl" 
                       @dxf-loaded="_OnLoaded" @dxf-cleared="_OnCleared" @dxf-message="_OnMessage" />
        </div>
        <!-- <div class="col-auto layersCol">
            <LayersList :layers="layers" @toggleLayer="_OnToggleLayer" @toggleAll="_OnToggleAll"/>
        </div> -->
    </q-page>
</template>

<script>
import DxfViewer from "@/components/DxfViewer"
import {DxfViewer as _DxfViewer} from "dxf-viewer"
// import Vue from "vue"
// import LayersList from "@/components/LayersList"

export default {
    name: "DxfViewerPage",
    components: {LayersList, DxfViewer},

    props: {
        dxfUrl: {
            type: String
        }
    },

    data() {
        return {
            layers: null
        }
    },

    methods: {
        _OnLoaded() {
            const layers = this.$refs.viewer.GetViewer().GetLayers()
            // layers.forEach(lyr => Vue.set(lyr, "isVisible", true))
            this.layers = layers
        },

        _OnCleared() {
            this.layers = null
        },

        _OnToggleLayer(layer, newState) {
            layer.isVisible = newState
            this.$refs.viewer.GetViewer().ShowLayer(layer.name, newState)
        },

        _OnToggleAll(newState) {
            if (this.layers) {
                for (const layer of this.layers) {
                    if (layer.isVisible !== newState) {
                        this._OnToggleLayer(layer, newState)
                    }
                }
            }
        },

        _OnMessage(e) {
            let type = "info"
            switch (e.detail.level) {
            case _DxfViewer.MessageLevel.WARN:
                type = "warning"
                break
            case _DxfViewer.MessageLevel.ERROR:
                type = "negative"
                break
            }
            this.$q.notify({ type, message: e.detail.message })
        }
    },

    created() {
        
    }
}
</script>

<style scoped lang="less">

.root {
    .layersCol {
        border-left: #DBDBDB solid 1px;
    }
}

</style>
