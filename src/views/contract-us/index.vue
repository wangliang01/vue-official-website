<template>
  <div class="contract-us">
    <img
      src="../../assets/icons/map1@2x.png"
      alt=""
      class="w-full md:h-100 md:-mt-100"
    />
    <div class="md:container md:mx-auto md:shadow-xl overflow-hidden">
      <div class="mt-6 text-center md:mt-22">
        <img
          src="../../assets/icons/contact_us@2x.png"
          alt=""
          class="mx-auto"
        />
        <p class="desc mt-0.5 md:mt-8">Hi,我们在这里</p>
      </div>

      <div class="content mt-4 px-5 py-6 xs:block md:hidden">
        <p>苏州，高新区，竹园路，209号一号楼C5045</p>
        <p class="mt-2.5">电话 0512-68315960</p>
        <p>网址 www.bw-idea.com</p>
        <p>邮箱 bw_idea@163.com</p>
        <p>QQ 553766909</p>
        <p>联系人 郑乃强 158 5080 7351（微信同号）</p>
      </div>

      <div class="xm:hidden md:flex md:mt-24">
        <div class="flex-1">
          <img
            src="../../assets/icons/contract-us_1@2x.png"
            alt=""
            class="flex-1"
          />
        </div>
        <div class="flex-1 content flex items-center">
          <div class="px-6">
            <p>苏州，高新区，竹园路，209号一号楼C5045</p>
            <p><span class="mr-8">电话</span> 0512-68315960</p>
            <p><span class="mr-8">网址</span> www.bw-idea.com</p>
            <p><span class="mr-8">邮箱</span> bw_idea@163.com</p>
            <p><span class="mr-8">QQ</span> 553766909</p>
            <p>
              <span class="mr-8">联系人</span> 郑乃强 158 5080 7351（微信同号）
            </p>
          </div>
        </div>
      </div>

      <div class="slogan my-24 text-center md:my-46">
        制造助力中国制造助力中国制造
      </div>

      <y-swiper class="mb-22 xs:hidden md:block"></y-swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.desc {
  font-size: 12px;
  font-family: PingFang, Microsoft YaHei;
  font-weight: 400;
  color: #808080;
  line-height: 24px;
  letter-spacing: 8px;
}

.content {
  background-color: #424242;
  font-size: 12px;
  font-family: PingFang, Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  letter-spacing: 4px;

  @screen md {
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    line-height: 2;
    color: #ffffff;
  }
}

.slogan {
  font-size: 18px;
  font-family: PingFang, Microsoft YaHei;
  font-weight: 500;
  color: #808080;
  line-height: 24px;
  @screen md {
    font-size: 60px;
    font-family: PingFang, Microsoft YaHei;
    font-weight: bold;
    color: #808080;
    line-height: 1.5;
  }
}
</style>
