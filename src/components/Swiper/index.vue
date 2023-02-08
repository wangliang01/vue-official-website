<template>
  <div class="relative overflow-hidden">
    <div ref="swiper" class="swiper xs:hidden md:flex px-2.5">
      <div ref="swiper-item" class="swiper-item">
        <img
          src="../../assets/icons/slider_1@2x.png"
          alt=""
          @click="handleDetail"
        />
      </div>
      <div class="swiper-item">
        <img
          src="../../assets/icons/slider_2@2x.png"
          alt=""
          @click="handleDetail"
        />
      </div>
      <div class="swiper-item">
        <img
          src="../../assets/icons/slider_3@2x.png"
          alt=""
          @click="handleDetail"
        />
      </div>
      <div class="swiper-item">
        <img
          src="../../assets/icons/slider_4@2x.png"
          alt=""
          @click="handleDetail"
        />
      </div>
      <div class="swiper-item">
        <img
          src="../../assets/icons/slider_4@2x.png"
          alt=""
          @click="handleDetail"
        />
      </div>
      <div class="swiper-item">
        <img
          src="../../assets/icons/slider_5@2x.png"
          alt=""
          @click="handleDetail"
        />
      </div>
      <div class="swiper-item">
        <img
          src="../../assets/icons/slider_6@2x.png"
          alt=""
          @click="handleDetail"
        />
      </div>
    </div>
    <div class="btn btn-prev" @click="handlePrev">
      <img src="../../assets/icons/icon_arrow_left@2x.png" alt="" />
    </div>
    <div class="btn btn-next" @click="handleNext">
      <img src="../../assets/icons/icon_arrow_right@2x.png" alt="" />
    </div>
    <div class="float-right mt-10 mr-12 cursor-pointer" @click="handleLink">
      查看更多产品
    </div>
  </div>
</template>

<script>
export default {
  name: 'YSwiper',
  data() {
    return {
      current: 0
    }
  },
  methods: {
    handleDetail() {
      this.$router.push({
        path: '/case/detail'
      })
    },
    handleLink() {
      this.$router.push({
        path: '/case'
      })
    },
    handlePrev() {
      if (this.current < 1) return
      this.current--
      const swiper = this.$refs.swiper
      const swiperItem = this.$refs['swiper-item']
      const swiperWidth = swiperItem.offsetWidth + 12
      this.transition(swiper, -swiperWidth * this.current)
    },
    handleNext() {
      const swiper = this.$refs.swiper
      const swiperItem = this.$refs['swiper-item']
      const swiperWidth = swiperItem.offsetWidth + 12
      const swiperItems = document.querySelectorAll('.swiper-item')
      const totalWidth = swiperWidth * swiperItems.length - 12

      const total = Math.ceil((totalWidth - swiper.offsetWidth) / swiperWidth)

      console.log(total)

      if (this.current >= total) return
      this.current++
      this.transition(swiper, -swiperWidth * this.current)
    },
    transition(swiper, swiperWidth) {
      swiper.style.transition = 'all 0.3s'
      swiper.style.transform = `translateX(${swiperWidth}px)`
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  display: flex;
  height: 242px;
  .swiper-item {
    flex: 0 0 232px;
    width: 232px;
    height: 242px;
    margin-right: 12px;
    background-color: #eee;
    &:last-child {
      margin-right: 0;
    }
  }
}

.btn {
  position: absolute;
  width: 48px;
  height: 48px;
  top: calc(121px - 24px);
  cursor: pointer;
  &.btn-prev {
    left: 16px;
  }
  &.btn-next {
    right: 16px;
  }
}
</style>
