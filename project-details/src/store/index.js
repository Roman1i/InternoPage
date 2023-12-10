import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    project: {
      header: 'Minimal Look Bedrooms',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
      bannerImage: './banner.png',
      images: [
        './image1.png',
        'https://forgeinteriors.co.uk/wp-content/uploads/elementor/thumbs/72-pixel-images-1200-x-800-Tom-Howsam-living-room-light-green-background-phbeaf7vwec927uqu288mu8hbqv9x6csftc6mfwg00.png',
        'https://forgeinteriors.co.uk/wp-content/uploads/elementor/thumbs/Cundells-linen-curtains-2-72-pixel-images-1200-x-800-pq5vfgxyzz70oon5ndo0u2bvpb2amvl2a4lj0d5p34.png'],
      currentImage: 0
    }
  },
  getters: {
    getImage (state) {
      return state.project.images[state.project.currentImage]
    },
    getData (state) {
      return {
        head: state.project.header,
        text: state.project.text,
        banner: state.project.bannerImage
      }
    }
  },
  mutations: {
    NEXT_IMAGE (state) {
      if (state.project.currentImage < state.project.images.length - 1) {
        state.project.currentImage++
      } else {
        state.project.currentImage = 0
      }
    },
    PREVIOS_IMAGE (state) {
      if (state.project.currentImage > 0) {
        state.project.currentImage--
      } else {
        state.project.currentImage = state.project.images.length - 1
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
