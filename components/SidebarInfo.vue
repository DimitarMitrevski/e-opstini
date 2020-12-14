<template>
  <div class="info-sidebar">
      <b-sidebar id="sidebar-right" :title="[content ? content.name : 'Sidebar']" right shadow z-index="1" @shown="sidebarVisible" @hidden="sidebarHidden">
        <div class="px-3 py-2">
          <p v-if="content">
            {{content.d}}
          </p>
          <p v-else>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
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
.info-sidebar .b-sidebar.b-sidebar-right { padding-top: 52px; }
</style>