<template>
  <div class="header w-full bg-white">
    <div
      class="md:container md:mx-auto w-full flex justify-between sm:justify-start items-center bg-white xs:h-7 sm:h-15 xs:px-4"
    >
      <!-- logo -->
      <div class="xs:w-8 xs:h-4 sm:w-20 sm:h-10">
        <img src="../../assets/icons/logo@2x.png" alt="Logo" class="w-full" />
      </div>
      <!-- 导航列表 -->
      <img
        src="../../assets/icons/list@2x.png"
        alt="list"
        class="sm:hidden xs:inline w-6 h-4 cursor-pointer"
        @click="handleShowList"
      />
      <nav
        class="xs:hidden sm:inline xl:pl-27.5 2xl:pl-27.5 lg:pl-8 md:pl-4 sm:pl-2 flex-1 h-full"
      >
        <ul class="flex items-center h-full">
          <li
            class="xl:mr-10 2xl:mr-19 lg:mr-8 md:mr-4 sm:mr-2 nav-item flex items-center h-full"
            :class="[currentPath === '/' && 'active']"
            @click="handleNavigateTo('/')"
          >
            首页
          </li>
          <li
            class="xl:mr-10 2xl:mr-19 lg:mr-8 md:mr-4 sm:mr-2 nav-item flex items-center h-full"
            :class="[currentPath === '/case' && 'active']"
            @click="handleNavigateTo('/case')"
          >
            设计服务
          </li>
          <li
            class="xl:mr-10 2xl:mr-19 lg:mr-8 md:mr-4 sm:mr-2 nav-item flex items-center h-full"
            :class="[currentPath === '/about-us' && 'active']"
            @click="handleNavigateTo('/about-us')"
          >
            关于我们
          </li>
          <li
            class="xl:mr-10 2xl:mr-19 lg:mr-8 md:mr-4 sm:mr-2 nav-item flex items-center h-full"
            :class="[currentPath === '/contract-us' && 'active']"
            @click="handleNavigateTo('/contract-us')"
          >
            联系我们
          </li>
        </ul>
      </nav>
      <!-- 联系方式 -->
      <div class="xs:hidden tel sm:flex sm:items-center">
        <img
          class="animated tada sm:hidden md:inline"
          src="../../assets/icons/tel@2x.png"
          alt="Tel"
          width="32"
          height="32"
        />
        <strong class="pl-8 lg:inline xl:inline 2xl:inline"
          >0512-68315960</strong
        >
      </div>
    </div>
    <!-- banner -->
    <div class="banner w-full xs:hidden md:block md:h-100">
      <img
        src="../../assets/icons/banner@2x.png"
        alt="banner"
        class="w-full md:h-100"
      />
    </div>

    <!-- mask -->
    <div
      v-show="show"
      class="mask md:hidden fixed left-0 bottom-0 right-0 top-0"
    >
      <ul class="mt-40 text-center text-7.5xl text-white">
        <li
          class="mb-8"
          :class="[currentPath === '/' && 'active']"
          @click="handleNavigateTo('/')"
        >
          <span>首页</span>
        </li>
        <li
          class="mb-8"
          :class="[currentPath === '/case' && 'active']"
          @click="handleNavigateTo('/case')"
        >
          <span>设计服务</span>
        </li>
        <li
          class="mb-8"
          :class="[currentPath === '/contract-us' && 'active']"
          @click="handleNavigateTo('/contract-us')"
        >
          <span>联系我们</span>
        </li>
        <li
          class="mb-8"
          :class="[currentPath === '/about-us' && 'active']"
          @click="handleNavigateTo('/about-us')"
        >
          <span>关于我们</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'YHeader',
  components: {},
  props: {},
  setup() {
    const route = useRoute()
    const router = useRouter()

    const hash = location.hash ? location.hash.slice(1) : route.path
    const currentPath = ref(hash)
    const show = ref(false)

    watch(
      () => route.path,
      (newValue) => {
        currentPath.value = newValue
      }
    )

    const handleNavigateTo = (path) => {
      router.push(path)

      currentPath.value = path

      if (show.value) {
        show.value = false
      }
    }

    const handleShowList = () => {
      show.value = true
    }
    return {
      show,
      currentPath,
      handleNavigateTo,
      handleShowList
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-family: PingFang, Microsoft YaHei;
  font-weight: 400;
  color: #282828;
  .logo {
    width: 80px;
    height: 40px;
    // @screen lg {
    //   width: 103px;
    //   height: 55px;
    //   img {
    //     width: 100%;
    //     height: 100%;
    //   }
    // }
  }
  nav li {
    font-size: 18px;
    cursor: pointer;
    @screen md {
      position: relative;
      &.active::after {
        position: absolute;
        width: 100%;
        content: '';
        height: 4px;
        background-color: rgba(239, 4, 4, 1);
        bottom: 4px;
      }
    }
    @screen lg {
      font-size: 22px;
    }
    @screen xl {
      font-size: 26px;
    }
    @screen 2xl {
      font-size: 28px;
    }
  }
  .tel {
    font-size: 18px;
    @screen lg {
      font-size: 22px;
    }
    @screen xl {
      font-size: 24px;
    }
    img {
      animation-duration: 2s;
      animation-delay: 1s;
      animation-iteration-count: infinite;
    }
  }

  .mask {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
    li {
      span {
        display: inline-block;
        cursor: pointer;
        position: relative;
        line-height: 38px;
      }
      &.active span::after {
        position: absolute;
        width: 100%;
        content: '';
        height: 4px;
        left: 0;
        background-color: rgba(239, 4, 4, 1);
        bottom: -8px;
      }
    }
  }
}
</style>
