<template lang="html">
  <div class="block-item" @mouseover="toggleActive" @mouseleave="toggleNotActive" :class="{ active: active }">
    <slot name="block-body">
    </slot>
    <slot name="description-item" v-if="active">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'block-item',

  methods: {
    toggleActive () {
      this.active = true
    },
    toggleNotActive() {
      this.active = false
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
    padding: 12px 20px 20px;

    &.active {
      background: #ffffe0;
    }

  }


</style>
