<template>
  <div class="info-sidebar">
      <b-sidebar id="sidebar-right" right shadow z-index="1" @shown="sidebarVisible" @hidden="sidebarHidden" no-header>
        <!-- <template #header>
          <b-icon-x></b-icon-x>
        </template> -->
        <div class="d-flex flex-column justify-content-center align-items-center h-100 p-3 wrap-side">
          <div class="infwrapper">
            <h4 class="text-center">Општина {{content ? content.name : 'Sidebar'}}</h4>
            <img class="grb" :src="content.grbUrl" alt="">
            <div class="table-wrap">
              <b-table striped hover :items="[
                { Број_на_жители: 11890, Регион: 'Југоисточен' }
              ]"></b-table>
            </div>
            <div class="chart-wrap" v-if="content.prihodi && content.rashodi">
              <column-chart width="200px" height="150px" :colors="['#74dace']" :data="[[`Приходи:`, content.prihodi], [`Расходи:`, content.rashodi]]"></column-chart>
            </div>
            <b-button class="d-block mt-4 mx-auto btn-info" size="lg" to="/municipality">Повеќе...</b-button>
          </div>
        </div>
        <template #footer="{ hide }">
          <div class="d-flex bg-info text-light align-items-center justify-content-center py-2">
            <b-button variant="warning" size="sm" @click="hide"><b-icon-x></b-icon-x></b-button>
          </div>
        </template>
      </b-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    sidebarVisible(){
      this.$emit('sidebar-shown', true)
    },
    sidebarHidden(){
      this.$emit('sidebar-hidden', true)
    }
  }
}
</script>

<style>
.info-sidebar .b-sidebar.b-sidebar-right { 
  z-index: 1; 
  padding-top: 52px; 
}
.b-sidebar-body {
  overflow: hidden;
}
@media only screen and (max-height: 768px) {
  .infwrapper { height: 100%; }
  .info-sidebar .grb { width: 95px !important; }
  .info-sidebar table { font-size: .8rem; }
  .info-sidebar .b-sidebar-body { overflow-y: hidden; }
  .wrap-side { padding-top: 0 !important; }
  .infwrapper h4 { font-size: 1.1rem; }
}

.info-sidebar .grb {
  width: 140px;
  display: block;
  margin: auto;
  height: auto;
}

.info-sidebar .chart-wrap > *, .info-sidebar .table-wrap > * {
  margin: 2rem auto 0
}
</style>