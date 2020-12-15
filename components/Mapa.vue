<template>
<div class="mapa-main">
  <div class="mapa-wrap">
      <svg class="map-svg"  fill="#7c7c7c" stroke="beige" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 1000 791" xmlns="http://www.w3.org/2000/svg">
        <path 
            v-for="(opstina, idx) in data" :key="idx" 
            v-b-tooltip.hover :title="'Општина ' + opstina.name" 
            :d="opstina.d" :name="opstina.name" 
            :class="{ active : opstina.name == selected || opstina.name == selectedpath }"
            @click.prevent="select($event); selected = opstina.name;"
        />
        <circle cx="276" cy="388.2" id="0">
        </circle>
        <circle cx="488.6" cy="319.5" id="1">
        </circle>
        <circle cx="804.3" cy="256.9" id="2">
        </circle>
      </svg>
  </div>
  <h4 class="text-center"><span class="text-info">Избрана општина:</span> {{ title }}</h4>
</div>
  
</template>

<script>
export default {
  data () {
    return{
      title: 'немате избрано општина',
      selected: null,
    }
  },
  props: {
    sidebar: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      required: true
    },
    selectedpath: {
      type: String
    }
  },
  watch: {
    selectedpath(oldVal, newVal) {
      this.selected = null;
    }
  },
  methods: {
      select: function(event) {
          this.selectedpath = null;
          this.title = event.currentTarget.getAttribute('name');
          event.target.classList.toggle('active');
          if(!this.sidebar || event.target.getAttribute('class') !== 'active') 
            this.$root.$emit('bv::toggle::collapse', 'sidebar-right');
          var info = this.data.find(o => o.name === this.title);
          this.$emit('selected-municipality', info);
      }
  }
}
</script>

<style>
.mapa-main {
  background: beige;
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 58px);
  position: absolute;
  top: 0;
}
.mapa-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.map-svg {
  width: 60%;
  height: auto;
}
.mapa-wrap path {
  fill: #f9ae5e;
  cursor: pointer;
  transition: all .15s ease-in-out;
}
.mapa-wrap path:hover {
  fill: #c96f20;
}
.active {
  fill: #17a2b8 !important;
}
</style>