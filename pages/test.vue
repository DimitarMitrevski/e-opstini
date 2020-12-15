<template>
  <h1>{{post.body}}</h1>
</template>

<script>
export default {
    data() {
        return {
            post: {}
        }
    },
    async asyncData({store}){
        await store.dispatch('blogs/getSinglePost', 'Kosn');
        let arr = store.state.blogs.blogPost;
        return { 
            post: arr
        }
    },
}
</script>

<style>

</style>