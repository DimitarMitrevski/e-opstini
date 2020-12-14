<template>
<div class="mapa-main">
  <h2><span class="text-info">Избрана општина:</span> {{ title }}</h2>
  <b-button v-b-toggle.sidebar-right>djsaiojdios</b-button>
  <div class="mapa-wrap">
      <svg baseprofile="tiny" fill="#7c7c7c" height="791" stroke="beige" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" version="1.2" viewbox="0 0 1000 791" width="1000" xmlns="http://www.w3.org/2000/svg">
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
</div>
  
</template>

<script>
export default {
  data () {
    return{
      title: 'nk',
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
          if(!this.sidebar) this.$root.$emit('bv::toggle::collapse', 'sidebar-right');
          var info = this.data.find(o => o.name === event.currentTarget.getAttribute('name').toString());
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
  height: 100%;
}
.mapa-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mapa-wrap path {
  fill: #17a2b8;
  cursor: pointer;
  transition: all .15s ease-in-out;
}
.mapa-wrap path:hover {
  fill: #20c9c9;
}
.active {
  fill: #20c997 !important;
}
</style>