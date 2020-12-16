<template>
  <div class="info-sidebar">
      <b-sidebar id="sidebar-right" right shadow z-index="1" @shown="sidebarVisible" @hidden="sidebarHidden">
        <template #header>
          <b-icon-x></b-icon-x>
        </template>
        <div class="px-3 py-2">
          <h4>{{content ? content.name : 'Sidebar'}}</h4>
          <p v-if="content">
            <!-- {{content.d}} -->
          </p>
          <p v-else>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <img style="max-width: 100%" :src="content.grbUrl" alt="">
        </div>
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
</style>