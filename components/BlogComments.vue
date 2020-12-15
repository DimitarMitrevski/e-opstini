<template>
    <div class="blog-comments-wrap">
        <h4>Коментари</h4>
        <ul class="blog-comments list-unstyled">
            <b-media 
                class="mb-3"
                tag="li"
                v-for="(i,k) in 5" :key="k">
                <template #aside>
                <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                </template>
                <div class="header d-flex justify-content-between align-items-center w-100">
                <a href="#!" class="mt-1 mb-1">List-based media object</a>    
                <small class="float-right">14/03/2021</small>
                </div>
                
                <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                </p>
            </b-media>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.blog-comments-wrap h4 { margin-bottom: 2rem; }
.blog-comments { 
    font-size: 1.15rem; 
    margin-bottom: 2rem; 
}
.blog-comments .media-body {
    background: #eee;
    padding: 1rem;
    border-radius: 1rem;
}
.blog-comments .float-right {
    color: gray
}
.blog-comments a {
    color: #17a2b8
}
</style>