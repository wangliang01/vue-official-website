<template>
  <div class="case-detail">
    <img
      src="../../assets/icons/home-banner@2x.png"
      class="w-full md:h-100 object-cover"
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
      <y-card
        layout="text-image"
        class="px-40 pt-19"
        style="margin-bottom: 76px"
      >
        <template #label>UI/软件界面</template>
        <template #title> 《艾尔克—新风系统》</template>
        <template #content>
          <div class="xs:hidden sm:block">
            以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
            品牌与文化等因素、创造出未来可以批量生产的产品。品牌与文化等
            因素、创造出未来可以批量生产的产品。
          </div>

          <div class="xs:block sm:hidden">
            以极致精简的美学，结合科技与艺术、材 料与工艺、色彩与流行趋势、
            品牌与文化 等因素
          </div>
        </template>
      </y-card>
      <img
        src="../../assets/icons/case_2@2x.png"
        class="w-full mt-6 object-cover"
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
.case-detail {
  @screen md {
    position: relative;
    @apply -mt-100;
  }
}
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
</style>
