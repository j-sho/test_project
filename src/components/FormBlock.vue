<template lang="html">
  <div class="block-item" @click="toggleActive" :class="{ active: active }">
    <slot name="block-body">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'block-item',

  methods: {
    toggleActive () {
      this.active = !this.active
    }
  },

  data () {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .block-item {
    padding: 12px 20px;

    &.active {
      background: #ffffe0;
    }
  }
</style>
