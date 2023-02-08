<template>
  <div class="card">
    <template v-if="layout === 'text-image'">
      <div class="card-text is_left">
        <div class="card-number">
          <span class="active">{{ currentIndex }}</span>
          <span>/</span>
          <span>03</span>
        </div>
        <div class="card-image-box">
          <img
            src="../../assets/icons/card1@2x.png"
            alt="card1"
            :class="[current === 0 && 'active']"
          />
          <img src="../../assets/icons/card2@2x.png" alt="card1" />
          <img src="../../assets/icons/card3@2x.png" alt="card1" />
        </div>
        <p class="card-label">
          <slot name="label">工业 / 公共设备</slot>
        </p>
        <h3 class="card-title">
          <slot name="title">《机场闸机》</slot>
        </h3>
        <p class="card-desc">
          <slot name="content">
            以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
            品牌与文化等因素、创造出未来可以批量生产的产品。品牌与文化等
            因素、创造出未来可以批量生产的产品。
          </slot>
        </p>
        <div
          class="flex justify-between items-center xs:mt-3 mt-11 sm:mt-4 md:mt-6 lg:mt-11"
        >
          <y-button
            class="xs:w-full sm:w-auto cursor-pointer"
            @click="handleLink"
            >更多产品</y-button
          >
          <div class="control-btns xs:hidden sm:block">
            <span class="iconfont icon-houtui1" @click="handlePrev"></span>
            <span
              class="iconfont icon-qianjin2 ml-5"
              @click="handleNext"
            ></span>
          </div>
        </div>
      </div>
      <div class="card-image is_right">
        <y-slider
          ref="slider"
          v-model="current"
          class="card-slider"
          stop-on-hover
        >
          <y-slider-item>
            <img src="../../assets/icons/card1@2x.png" alt="card1" />
          </y-slider-item>
          <y-slider-item>
            <img src="../../assets/icons/card2@2x.png" alt="card1" />
          </y-slider-item>
          <y-slider-item>
            <img src="../../assets/icons/card3@2x.png" alt="card1" />
          </y-slider-item>
        </y-slider>
      </div>
    </template>
    <template v-else>
      <div class="card-image is_left">
        <y-slider
          ref="slider"
          v-model="current"
          class="card-slider"
          stop-on-hover
        >
          <y-slider-item>
            <img src="../../assets/icons/card1@2x.png" alt="card1" />
          </y-slider-item>
          <y-slider-item>
            <img src="../../assets/icons/card2@2x.png" alt="card1" />
          </y-slider-item>
          <y-slider-item>
            <img src="../../assets/icons/card3@2x.png" alt="card1" />
          </y-slider-item>
        </y-slider>
      </div>
      <div class="card-text is_right">
        <div class="card-number">
          <span class="active">{{ currentIndex }}</span>
          <span>/</span>
          <span>03</span>
        </div>
        <div class="card-image-box">
          <img
            src="../../assets/icons/card1@2x.png"
            alt="card1"
            :class="[current === 0 && 'active']"
          />
          <img src="../../assets/icons/card2@2x.png" alt="card1" />
          <img src="../../assets/icons/card3@2x.png" alt="card1" />
        </div>
        <p class="card-label">
          <slot name="label">工业 / 公共设备</slot>
        </p>
        <h3 class="card-title">
          <slot name="title">《机场闸机》</slot>
        </h3>
        <p class="card-desc">
          <slot name="content">
            以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
            品牌与文化等因素、创造出未来可以批量生产的产品。品牌与文化等
            因素、创造出未来可以批量生产的产品。
          </slot>
        </p>
        <div
          class="flex justify-between items-center xs:mt-3 mt-11 sm:mt-4 md:mt-6 lg:mt-11"
        >
          <y-button
            class="xs:w-full sm:w-auto cursor-pointer"
            @click="handleLink"
            >更多产品</y-button
          >
          <div class="control-btns xs:hidden sm:block">
            <span class="iconfont icon-houtui1" @click="handlePrev"></span>
            <span
              class="iconfont icon-qianjin2 ml-5"
              @click="handleNext"
            ></span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'YCard',
  props: {
    layout: {
      type: String,
      default: 'text-image' // 可选值: text-image, image-text
    }
  }
}
</script>
<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
const current = ref(0)
const slider = ref(null)

const currentIndex = computed(() => {
  return current.value >= 10 ? current.value + 1 : `0${current.value + 1}`
})

watch(current, (newVal, oldVal) => {
  // console.log('watch current', newVal, oldVal)
})

const router = useRouter()

const handleLink = () => {
  router.push({ path: '/case' })
}

const handlePrev = () => {
  slider.value && slider.value.prev()
}

const handleNext = () => {
  slider.value && slider.value.next()
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  @screen xs {
    margin-bottom: 24px;
  }
  @screen sm {
    margin-bottom: 130px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  .card-text {
    flex: 58;
    width: 550px;
    // height: 530px;
    border-top: 1px solid #282828;
    border-bottom: 1px solid #282828;
    &.is_left {
      .card-desc {
        @scrren xs {
          margin-right: 0;
        }
        @scrren sm {
          margin-right: 0;
        }
        @screen md {
          margin-right: 32px;
        }
        @screen xl {
          margin-right: 132px;
        }
      }
    }
    &.is_right {
      text-align: right;
      .card-image-box {
        justify-content: flex-end;
      }
      .card-title {
        margin-right: -14px;
      }
      .card-desc {
        @screen xs {
          margin-left: 0;
        }
        @screen md {
          margin-left: 32px;
        }
        @screen xl {
          margin-left: 132px;
        }
        text-align: left;
      }
      .card-control {
        flex-direction: row-reverse;
      }
    }
    .card-number {
      margin-top: 20px;
      font-size: 26px;
      font-family: PingFang, Microsoft YaHei Regular;
      font-weight: 400;
      line-height: 22px;
      color: #808080;
      @screen xs {
        display: none;
      }
      @screen sm {
        display: block;
      }
      .active {
        color: #282828;
      }
    }
    .card-image-box {
      margin-top: 18px;
      display: flex;
      font-size: 0;
      @screen xs {
        display: none;
      }
      img {
        position: relative;
        width: 60px;
        height: 60px;
        box-sizing: content-box;
        margin-right: 8px;
        object-fit: fill;
        &.active {
          box-shadow: 0 0 0 1px #ef0404;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .card-label {
      font-size: 18px;
      line-height: 18px;
      font-family: PingFang, Microsoft YaHei Regular;
      font-weight: 400;
      color: #282828;
      @apply sm:mt-8 md:mt-12;
      @screen xs {
        margin-top: 8px;
        font-size: 8px;
        font-family: PingFang, Microsoft YaHei Regular;
        font-weight: 400;
        color: #808080;
      }
      @screen sm {
        margin-top: 130px;
      }
      @screen lg {
        margin-top: 130px;
      }
    }
    .card-title {
      @screen xs {
        margin-left: -8px;
        margin-top: 5px;
        font-size: 16px;
        font-family: PingFang, Microsoft YaHei Regular;
        font-weight: 500;
        color: #282828;
      }
      @screen sm {
        margin-left: -14px;
        margin-top: 12px;
        font-size: 30px;
        font-family: PingFang, Microsoft YaHei Regular;
        font-weight: 500;
        color: #282828;
      }
    }
    .card-desc {
      @screen xs {
        margin-top: 18px;
        font-size: 8px;
        font-family: PingFang, Microsoft YaHei Regular;
        font-weight: 400;
        color: #808080;
        line-height: 11px;
      }
      @screen sm {
        margin-top: 32px;
        font-size: 14px;
        font-family: PingFang, Microsoft YaHei Regular;
        font-weight: 400;
        line-height: 20px;
        color: #808080;
      }
    }

    &.is_left {
      margin-right: 9%;
    }
    &.is_right {
      margin-left: 9%;
    }
  }
  .card-image {
    flex: 42;
    @screen xs {
      height: 160px;
    }
    @screen sm {
      height: 450px;
    }
    @screen md {
      height: 450px;
    }
    @screen lg {
      height: 500px;
    }
    .card-slider {
      height: 100%;
      ::v-deep(.slider-item) {
        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
  }
  .iconfont {
    padding: 0 8px;
    width: 14px;
    height: 24px;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
