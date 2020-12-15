<template>
    <div class="blog-list-wrap">
        <b-container>
            <h2>Објави од Општините</h2>
            <b-card 
                v-for="(blog, k) in currentBlogs" :key="k"
                :title="blog.title">
                <b-card-text>
                    {{blog.body}}
                </b-card-text>
                <b-button :to="'/municipalities/blog/view/'+blog.title" variant="info">Отворија објавата</b-button>
            </b-card>
            <div class="d-flex justify-content-center">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" @click.prevent="previous" href="#">Previous</a></li>
                    <li class="page-item" v-for="(i,k) in noPages" :key="k" @click="selectPage(i-1)" :class="{ active :  i === currentPage+1 }"><a class="page-link" href="#!">{{i}}</a></li>
                    <li class="page-item"><a class="page-link" @click.prevent="next" href="#">Next</a></li>
                </ul>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            allBlogs: [],
            currentBlogs: [],
            pageSize: 4,
            currentPage: 0,
            noPages: 0,
        }
    },
    async asyncData({store}){
        await store.dispatch('blogs/getAllBlogPosts');
        let arr = store.state.blogs.blogPosts;
        return { 
            allBlogs: arr,
            noPages: Math.ceil(arr.length/4)
        }
    },
    created() {
        this.currentBlogs=this.allBlogs.slice(0, this.pageSize);
    },
    methods: {
        next(){
            if(this.currentPage == this.noPages-1) return;
            this.currentPage++;
            this.currentBlogs=this.allBlogs.slice(this.pageSize*this.currentPage, (this.pageSize*this.currentPage+this.pageSize));
        },
        previous(){
            if(this.currentPage == 0) return;
            this.currentPage--;
            this.currentBlogs=this.allBlogs.slice(this.pageSize*this.currentPage, (this.pageSize*this.currentPage+this.pageSize));
        },
        selectPage(i){
            this.currentPage = i;
            this.currentBlogs=this.allBlogs.slice(this.pageSize*this.currentPage, (this.pageSize*this.currentPage+this.pageSize));
        }
    }
}
</script>

<style>
.blog-list-wrap{
    margin-top: 2rem;
}
.blog-list-wrap .container > * {
    margin-bottom: 2rem;
}
.blog-list-wrap .page-item .page-link{
    box-shadow: none !important;
}
.blog-list-wrap .page-item:not(.active) .page-link {
    color: #17a2b8 !important;
}
.blog-list-wrap .page-item.active .page-link {
    background: #17a2b8 !important;
    border-color: #17a2b8 !important;
}
</style>