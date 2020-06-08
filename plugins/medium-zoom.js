import Vue from 'vue'
import zoom from 'medium-zoom'

const initZoom = () => {
  zoom('img.zoom:not(.medium-zoom-image)')
}

Vue.mixin({
  mounted() {
    initZoom()
  },
  updated() {
    initZoom()
  },
})
