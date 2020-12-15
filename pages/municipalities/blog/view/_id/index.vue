<template>
  <b-container>
    <article class="blog">
        <header class="header">
            <h2>{{post.title}}</h2>
            <div class="author">
                <a href="#!" class="mun">Општина Битола</a>
                <img src="https://placekitten.com/50/50" alt="">
            </div>
        </header>
        <body>
            <p class="blog-post">
                {{post.body}}
            </p>
            <p class="text-right text-secondary">Oбјавено на 11 март 2020.</p>
        </body>
        <footer class="documents">
            <h4>Документи на предлогот</h4>
            <b-list-group horizontal="md">
                <b-list-group-item
                 v-for="(i,k) in 6" :key="k"
                 href="#" class="flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <p>{{filetype}}</p>
                        <small class="text-secondary">12/03/2021</small>
                    </div>
                    <p class="text-center">
                        <b-icon icon="file-earmark-spreadsheet-fill"></b-icon>
                    </p>
                </b-list-group-item>
            </b-list-group>
        </footer>
    </article>
    <!-- <blog-comments /> -->
  </b-container>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
    data() {
        return {
            post: {},
            filetype: ''
        }
    },
    mounted() {
        console.log(this.post);
        firebase.storage().refFromURL(this.post.files[0]).getMetadata()
        .then(function(metadata) {
            console.log(metadata)
        })
        .catch(e => { console.error(e) })
    },
    async asyncData({ params, store }){
        await store.dispatch('blogs/getSinglePost', params.id);
        let arr = store.state.blogs.blogPost;
        return { 
            post: arr
        }
    },
}
</script>

<style>
.blog h2, .blog h4 { margin: 0 }
.blog .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
}
.blog .author{
    display: flex;
    align-items: center;
}
.blog .author a {
    text-align: right;
    font-size: 18px;
    color: #343a40;
}
.blog .author img {
    border-radius: 100%;
    margin-left: 1rem;
}
.blog body {
    font-size: 1.25rem;
    text-align: justify;
}
.blog .text-right {
    font-size: 1.1rem;
}
.blog  body > *, .blog footer > * {
    margin-bottom: 2rem;
}
.blog .img-holder {
    width: 100%;
    /* background: #303030 */
}
.blog .b-icon {
    font-size: 2rem;
}
</style>