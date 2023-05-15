<template>
  <div class="case md:container md:mx-auto">
    <img
      src="../../assets/icons/design@2x.png"
      alt=""
      class="h-30 md:block xs:hidden md:px-4"
      style="margin-top: -310px"
    />
    <div class="mt-7 px-4 xs:block md:hidden">
      <div class="flex justify-between">
        <div
          class="nav-item mr-18"
          :class="[currentNav === 'all' && 'active']"
          @click="handleNavigateTo('all')"
        >
          全部
        </div>
        <div
          class="nav-item w-20 text-left"
          :class="[currentNav === 'product' && 'active']"
          @click="handleNavigateTo('product')"
        >
          工业制造
        </div>
        <div
          class="nav-item w-20 text-right"
          :class="[currentNav === 'medical' && 'active']"
          @click="handleNavigateTo('medical')"
        >
          医疗健康
        </div>
      </div>
      <div class="flex mt-8">
        <div
          class="nav-item w-20 mr-9"
          :class="[currentNav === 'furniture' && 'active']"
          @click="handleNavigateTo('furniture')"
        >
          家具家电
        </div>
        <div
          class="nav-item w-20"
          :class="[currentNav === 'software' && 'active']"
          @click="handleNavigateTo('software')"
        >
          软件界面
        </div>
      </div>
    </div>

    <div
      class="xs:hidden md:mt-20 md:flex nav md:mx-4 md:h-21.5 md:items-center md:px-27 md:justify-between"
    >
      <div
        class="w-35 text-center nav-item"
        :class="[currentNav === 'all' && 'active']"
        @click="handleNavigateTo('all')"
      >
        全部
      </div>
      <div
        class="w-35 text-center nav-item"
        :class="[currentNav === 'product' && 'active']"
        @click="handleNavigateTo('product')"
      >
        工业制造
      </div>
      <div
        class="w-35 text-center nav-item"
        :class="[currentNav === 'medical' && 'active']"
        @click="handleNavigateTo('medical')"
      >
        医疗健康
      </div>
      <div
        class="w-35 text-center nav-item"
        :class="[currentNav === 'furniture' && 'active']"
        @click="handleNavigateTo('furniture')"
      >
        家具家电
      </div>
      <div
        class="w-35 text-center nav-item"
        :class="[currentNav === 'software' && 'active']"
        @click="handleNavigateTo('software')"
      >
        软件界面
      </div>
    </div>

    <div
      class="px-4 grid gap-x-2 gap-y-4 grid-cols-2 my-6 md:bg-white md:gap-x-4 md:grid-cols-3 lg:grid-cols-4 md:py-4 md:px-3 md:mx-4"
    >
      <div class="case-item" @click="handleDetail">
        <img
          src="../../assets/icons/case_1@2x.png"
          alt=""
          class="w-full h-full"
        />
        <div class="description">
          <span class="name">LYCN-302设备</span>
          <p class="label xs:hidden md:inline-block">工业制造</p>
          <i class="more md:hidden"></i>
        </div>
      </div>
      <div class="case-item" @click="handleDetail">
        <img
          src="../../assets/icons/case_1@2x.png"
          alt=""
          class="w-full h-full"
        />
        <div class="description">
          <span class="name">LYCN-302设备</span>
          <p class="label xs:hidden md:inline-block">工业制造</p>
          <i class="more md:hidden"></i>
        </div>
      </div>
      <div class="case-item" @click="handleDetail">
        <img
          src="../../assets/icons/case_1@2x.png"
          alt=""
          class="w-full h-full"
        />
        <div class="description">
          <span class="name">LYCN-302设备</span>
          <p class="label xs:hidden md:inline-block">工业制造</p>
          <i class="more md:hidden"></i>
        </div>
      </div>
      <div class="case-item" @click="handleDetail">
        <img
          src="../../assets/icons/case_1@2x.png"
          alt=""
          class="w-full h-full"
        />
        <div class="description">
          <span class="name">LYCN-302设备</span>
          <p class="label xs:hidden md:inline-block">工业制造</p>
          <i class="more md:hidden"></i>
        </div>
      </div>
      <div class="case-item" @click="handleDetail">
        <img
          src="../../assets/icons/case_1@2x.png"
          alt=""
          class="w-full h-full"
        />
        <div class="description">
          <span class="name">LYCN-302设备</span>
          <p class="label xs:hidden md:inline-block">工业制造</p>
          <i class="more md:hidden"></i>
        </div>
      </div>
      <div class="case-item" @click="handleDetail">
        <img
          src="../../assets/icons/case_1@2x.png"
          alt=""
          class="w-full h-full"
        />
        <div class="description">
          <span class="name">LYCN-302设备</span>
          <p class="label xs:hidden md:inline-block">工业制造</p>
          <i class="more md:hidden"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Case',
  components: {},
  props: {},
  setup() {
    const currentNav = ref('all')

    const router = useRouter()
    const handleNavigateTo = (nav) => {
      currentNav.value = nav
    }

    const handleDetail = () => {
      router.push({
        path: '/case/detail'
      })
    }
    return {
      currentNav,
      handleNavigateTo,
      handleDetail
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  @screen md {
    background-image: url('../../assets/icons/bg-mask.png');
  }
}
.nav-item {
  position: relative;
  font-size: 20px;
  font-family: PingFang, PingFang, Microsoft YaHei Regular;
  font-weight: 400;
  color: #282828;
  line-height: 24px;
  cursor: pointer;
  &.active::after {
    content: '';
    height: 4px;
    background: #ef0404;
    width: 100%;
    position: absolute;
    bottom: -6px;
    left: 0;
  }

  @screen md {
    width: 140px;
    font-size: 22px;
    font-family: PingFang, Microsoft YaHei Regular;
    font-weight: bold;
    color: #282828;
    color: #fff;

    &.active {
      line-height: 36px;
      background: #ef0404;
      color: #fff;
      border-radius: 8px;

      &:after {
        content: '';
        display: none;
      }
    }
  }

  @screen lg {
    font-size: 26px;
  }
}

.case-item {
  position: relative;
  height: 210px;
  // background-color: #000;
  box-sizing: border-box;
  @screen md {
    height: 368px;
  }
  .description {
    position: absolute;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    bottom: 0;
    background-color: #d55151;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    cursor: pointer;
    @screen md {
      height: 100%;
      flex-direction: column;
      justify-content: center;
      background-color: transparent;
      .name,
      .label {
        font-size: 0;
      }
      &:hover {
        background-color: rgba(239, 4, 4, 0.5);
        .name {
          width: 100%;
          text-align: center;
          font-size: 36px;
          font-family: PingFang, Microsoft YaHei Regular;
          font-weight: bold;
          color: #ffffff;
        }

        .label {
          margin-top: 32px;
          width: 100%;
          text-align: center;
          font-size: 16px;
          font-family: PingFang, Microsoft YaHei Regular;
          color: #ffffff;
        }
      }
      &.active {
        background-color: rgba(239, 4, 4, 0.5);
      }
    }
    .more {
      width: 16px;
      height: 16px;
      background-image: url('../../assets/icons/arrow-right@2x.png');
      background-size: 100%;
    }
  }
}
</style>
