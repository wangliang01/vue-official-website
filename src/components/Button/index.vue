<template>
  <div class="button justify-center" :class="[type && `${type}-btn`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YButton',
  components: {},
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  padding: 7px 32px 8px;
  font-size: 18px;
  line-height: 18px;
  font-family: PingFang, Microsoft YaHei Regular;
  font-weight: 400;
  color: #ffffff;
  border-radius: 30px;
  &.primary-btn {
    background-color: #ef0404;
    color: #fff;
  }
}
</style>
