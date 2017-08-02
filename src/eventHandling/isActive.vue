<template>

</template>

<script>
import Vue from 'vue'

Vue.component('isactive', {
  template: `
    <div class="block_item" v-on:click="changeDivColor" v-bind:style="{ 'background-color': isActiveColor }">
  </div>
  `,
  data () {
    return {
      isActiveColor: '#fff'
    }
  },
  methods: {
    changeDivColor: function() {
      if (this.isActiveColor === '#fff') {
        this.isActiveColor = '#ffffe0';
      } else {
        this.isActiveColor = '#fff';
        }
    }
  }
})

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
