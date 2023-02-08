<template>
  <div class="md:container mx-auto xs:w-full">
    <div class="home flex-1 shadow-xl">
      <div class="xs:block md:hidden">
        <img
          src="../../assets/icons/home-banner@2x.png"
          alt="banner"
          height="168"
        />
      </div>
      <ul class="feature-list">
        <li class="feature-item">
          <div class="feature-title">
            <span class="enName">UI</span>
            <span class="cnName">软件界面</span>
          </div>
          <div class="feature-desc sm:block xs:hidden">
            以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
            品牌与文化等因素、创造出未来可以批量生产的产品。
          </div>
        </li>
        <li class="feature-item">
          <div class="feature-title">
            <span class="enName">ID</span>
            <span class="cnName">工业设计</span>
          </div>
          <div class="feature-desc sm:block xs:hidden">
            以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
            品牌与文化等因素、创造出未来可以批量生产的产品。
          </div>
        </li>
        <li class="feature-item">
          <div class="feature-title">
            <span class="enName">SC</span>
            <span class="cnName">供应链</span>
          </div>
          <div class="feature-desc sm:block xs:hidden">
            以极致精简的美学，结合科技与艺术、材料与工艺、色彩与流行趋势、
            品牌与文化等因素、创造出未来可以批量生产的产品。
          </div>
        </li>
      </ul>
      <!-- 标题 -->
      <div class="title md:block xs:hidden">
        <img
          src="../../assets/icons/title@2x.png"
          alt="Design Service"
          width="316"
          height="40"
        />
        <p class="slogan">
          <span>邦为设计</span>
          <span class="ml-10">一个致力于成为国内顶的设计服务团队</span>
        </p>
      </div>

      <!-- banner -->
      <div class="banner xs:hidden sm:block">
        <img
          src="../../assets/icons/home-banner@2x.png"
          alt="banner"
          height="665"
        />
      </div>

      <!-- 展示区 -->
      <div class="card-container">
        <y-card layout="text-image">
          <template #label>工业/公共设备</template>
          <template #title> 《机场闸机》 </template>
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
        <y-card layout="image-text">
          <template #label>医疗设备</template>
          <template #title> 《浦菲凯尔—手术床》</template>
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
        <y-card layout="text-image">
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
        <y-card layout="image-text">
          <template #label>医疗设备</template>
          <template #title> 《浦菲凯尔—手术床》</template>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  props: {},
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.home {
  @screen sm {
    margin-top: -200px;
  }
  background-color: #fff;
  .feature-list {
    box-sizing: border-box;
    height: 64px;
    @screen xs {
      @apply items-center;
    }
    @screen sm {
      border-bottom: 1px dashed #999;
      height: 200px;
    }
    @apply flex xl:px-8 xl:pt-12 2xl:px-15 2xl:pt-17 md:px-6 md:pt-8 sm:px-4;
    .feature-item {
      @apply flex-1  text-center pr-4 2xl:pr-8;
      font-size: 0;
      &:last-child {
        @apply pr-0;
      }

      .feature-title {
        font-size: 0;
        display: inline-block;
        @screen xs {
          .enName,
          .cnName {
            font-size: 16px;
            font-family: PingFang, Microsoft YaHei Regular;
            font-weight: 400;
            line-height: 16px;
            color: #282828;
          }
          .enName:after {
            content: '';
            position: relative;
            top: 2px;
            display: inline-block;
            width: 2px;
            height: 15px;
            margin: 0 5px 0 5px;
            background: #b4b4b4;
          }
        }
        @screen sm {
          .enName,
          .cnName {
            font-size: 30px;
            font-family: PingFang, Microsoft YaHei Regular;
            font-weight: 400;
            line-height: 30px;
            color: #282828;
          }
          &:after {
            content: '';
            display: inline-block;
            width: 100%;
            height: 6px;
            background: #ef0404;
            @apply mt-3;
          }
          .enName:after {
            content: '';
            position: relative;
            top: 1px;
            display: inline-block;
            width: 2px;
            height: 23px;
            margin: 0 5px 0 5px;
            background: #b4b4b4;
          }
        }
      }
      .feature-desc {
        font-size: 14px;
        font-family: PingFang, Microsoft YaHei Regular;
        line-height: 20px;
        font-weight: 400;
        color: #282828;
        @apply md:mt-6 mt-8;
      }
    }
  }
  .title {
    font-size: 0;
    margin-top: 106px;
    text-align: center;
    img {
      margin: 0 auto;
    }
    .slogan {
      margin-top: 48px;
      font-size: 30px;
      font-family: PingFang, Microsoft YaHei Regular;
      font-weight: 400;
      color: #292929;
      line-height: 32px;
    }
  }
  .banner {
    margin-top: 56px;
  }
  .card-container {
    @screen xs {
      padding: 24px;
    }
    @screen md {
      padding: 174px;
      @apply md:px-20 md:py-20;
    }
  }
}
</style>
