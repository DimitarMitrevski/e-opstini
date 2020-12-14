<template>
    <div class="mun-list">
        <b-list-group>
            <b-list-group-item v-for="(i, k) in data" :key="k" @click="emitSelected(i.name)" button>{{i.name}}</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        emitSelected(i){
            var info = this.data.find(o => o.name === i.toString());
            this.$emit('chosen-mun', info);
        }
    }
}
</script>

<style>
.mun-list {
    max-height: calc(100vh - 58px);
    overflow-y: auto;
}
.mun-list .list-group { 
    border-radius: 0; 
}
</style>