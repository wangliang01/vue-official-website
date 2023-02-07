<template>
  <div class="case-detail">
    <img
      src="../../assets/icons/home-banner@2x.png"
      class="w-full object-cover"
      alt=""
    />

    <!-- 描述 -->
    <div class="px-8 mt-4 md:hidden">
      <div class="h-0.5 w-full" style="background: #d8d8d8"></div>
      <div class="mt-1.5 desc">工业/公共设备</div>
      <h3 class="mt-1.5 title">《机场设备》</h3>
      <p class="content mt-5">
        以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
        品牌与文化等因 素
        以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
      </p>
      <p class="content mt-2">
        以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
        品牌与文化等因 素
        以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
      </p>
      <div class="h-0.5 w-full mt-6" style="background: #d8d8d8"></div>
    </div>

    <div class="xs:hidden md:block md:container md:mx-auto shadow-xl">
      <div class="px-40 pt-19 flex justify-between">
        <div
          class="left border-t border-b border-solid border-black sm:mr-10 lg:mr-30 sm:pb-12 lg:pb-25"
        >
          <p class="card-label mt-6">
            <slot name="label">工业 / 公共设备</slot>
          </p>
          <h3 class="card-title">
            <slot name="title">《机场闸机》</slot>
          </h3>
          <p class="card-desc">
            以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
            品牌与文化等因素、创造出未来可以批量生产的产品。品牌与文化等
            因素、创造出未来可以批量生产的产品。
          </p>
          <p class="card-tips">
            以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
            品牌与文化等因素、创造出未来可以批量生产的产品。品牌与文化等
            因素、创造出未来可以批量生产的产品。
          </p>
        </div>
        <div class="right card-image">
          <img
            src="../../assets/icons/card1@2x.png"
            alt="card1"
            class="w-full h-full"
          />
        </div>
      </div>
      <img
        src="../../assets/icons/case_2@2x.png"
        class="w-full mt-6 md:mt-20 object-cover"
        alt=""
      />
      <div class="overflow-hidden">
        <y-swiper class="mb-22 mt-50"></y-swiper>
      </div>
    </div>

    <img
      src="../../assets/icons/case_2@2x.png"
      class="w-full mt-6 md:hidden object-cover"
      alt=""
    />

    <div class="px-4 grid gap-x-2 gap-y-4 grid-cols-2 my-10 md:hidden">
      <div class="case-item">
        <img
          src="../../assets/icons/case_1@2x.png"
          alt=""
          class="w-full h-full"
        />
        <div class="description">
          <span class="name">LYCN-302设备</span>
          <i class="more"></i>
        </div>
      </div>
      <div class="case-item">
        <img
          src="../../assets/icons/case_1@2x.png"
          alt=""
          class="w-full h-full"
        />
        <div class="description">
          <span class="name">LYCN-302设备</span>
          <i class="more"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseDetail',
  components: {},
  props: {},
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.desc {
  font-size: 8px;
  font-family: PingFang, Microsoft YaHei;
  font-weight: 400;
  color: #808080;
  line-height: 11px;
}

.title {
  font-size: 16px;
  font-family: PingFang, Microsoft YaHei;
  font-weight: 400;
  color: #282828;
  line-height: 22px;
  position: relative;
  left: -10px;
}

.content {
  font-size: 8px;
  font-family: PingFang, Microsoft YaHei;
  font-weight: 400;
  color: #808080;
  line-height: 11px;
}

.case-item {
  position: relative;
  height: 210px;
  // background-color: #000;
  box-sizing: border-box;
  .description {
    position: absolute;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    bottom: 0;
    background-color: #ef0404;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    cursor: pointer;
    .more {
      width: 16px;
      height: 16px;
      background-image: url('../../assets/icons/arrow-right@2x.png');
      background-size: 100%;
    }
  }
}

.left {
  flex: 3;
}
.right {
  max-width: 470px;
  flex: 2;
}

.card-title {
  position: relative;
  left: -14px;
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #282828;
  @screen md {
    margin-top: 48px;
    font-size: 24px;
  }
  @screen xl {
    margin-top: 132px;
  }
}
.card-desc {
  font-size: 14px;
  font-family: Microsoft YaHei;
  @screen md {
    margin-top: 12px;
  }
  @screen xl {
    margin-top: 32px;
  }
}
.card-tips {
  font-size: 12px;
  font-family: Microsoft YaHei;
  @screen md {
    margin-top: 12px;
  }
  @screen xl {
    margin-top: 32px;
  }
}

.card-image {
  width: 470px;
}
</style>
