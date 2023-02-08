<template>
  <div class="footer xs:h-48 md:h-75 w-full">
    <div class="footer-content__mobile xs:block md:hidden">
      <div class="footer-content-list">
        <div class="footer-content-list__left flex-1">
          <div class="footer-content-item">
            <div class="label">电话</div>
            <div class="value">0512-68315960</div>
          </div>
          <div class="footer-content-item">
            <div class="label">邮箱</div>
            <div class="value">bw_idea@163.com</div>
          </div>
          <div class="footer-content-item">
            <div class="label">业务QQ</div>
            <div class="value">553766909</div>
          </div>
        </div>
        <div class="footer-content-list__right flex-2 pl-8">
          <div class="footer-content-item">
            <div class="label">地址</div>
            <div class="value">
              中国，苏州，高新区，竹园路209号，创业产业园一号楼C5045
            </div>
          </div>
          <div class="footer-content-item">
            <div class="logo flex items-center">
              <img
                src="../../assets/icons/logo_white@2x.png"
                alt="logo"
                width="30"
                height="16"
              />
              <span class="title ml-7">邦为设计</span>
            </div>
          </div>
          <div class="footer-content-item">
            <div class="label">联系人</div>
            <div class="value">郑乃强 158 5080 7351 (微信同号)</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-content xs:hidden md:block">
      <div class="footer-content-list xl:flex">
        <div
          class="footer-content-item xl:flex-1 md:flex md:items-center xl:block"
        >
          <div class="label">电话</div>
          <div class="value xl:mt-2 md:ml-4 xl:ml-0">0512-68315960</div>
        </div>
        <div
          class="footer-content-item xl:flex-1 md:flex md:items-center xl:block"
        >
          <div class="label">邮箱</div>
          <div class="value xl:mt-2 md:ml-4 xl:ml-0">bw_idea@163.com</div>
        </div>
        <div
          class="footer-content-item xl:flex-1 md:flex md:items-center xl:block"
        >
          <div class="label">业务QQ</div>
          <div class="value xl:mt-2 md:ml-4 xl:ml-0">553766909</div>
        </div>
        <div
          class="footer-content-item xl:flex-1.5 md:flex md:items-center xl:block"
        >
          <div class="label">地址</div>
          <div class="value xl:mt-2 md:ml-4 xl:ml-0">
            中国，苏州，高新区，竹园路209号，创业产业园一号楼C5045
          </div>
        </div>
        <div class="footer-content-item xl:flex-1.5 xs:flex sm:hidden">
          <div class="logo flex items-center">
            <img
              src="../../assets/icons/logo@2x.png"
              alt="logo"
              width="86"
              height="48"
            />
            <span class="title ml-7">邦为设计</span>
          </div>
        </div>
        <div class="footer-content-item xl:flex-1.5 xs:flex sm:hidden">
          <div class="contract flex items-center ml-27">
            <span class="label xl:mr-7 md:mr-5">联系人</span>
            <span class="name xl:mr-5 md:mr-3">郑乃强</span>
            <span class="tel">158 5080 7351 (微信同号)</span>
          </div>
        </div>
      </div>
      <div class="divider mt-15 xs:hidden sm:block md:mt-8"></div>
      <div class="footer-other mt-8 flex xs:hidden sm:flex">
        <div class="logo flex items-center">
          <img
            src="../../assets/icons/logo_white@2x.png"
            alt="logo"
            width="86"
            height="48"
          />
          <span class="title ml-7">邦为设计</span>
        </div>
        <div class="contract flex items-center ml-27">
          <span class="label xl:mr-7 md:mr-5">联系人</span>
          <span class="name xl:mr-5 md:mr-3">郑乃强</span>
          <span class="tel">158 5080 7351 (微信同号)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YFooter',
  components: {},
  props: {},
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-image: url('../../assets/icons/footer-bg@2x.png');
  background-repeat: no-repeat;
  overflow: hidden;
  .footer-content {
    @screen xs {
      padding: 12px 16px;
    }
    @screen md {
      padding: 28px 34px;
    }
    @screen xl {
      padding: 54px 68px 60px 102px;
    }
    box-sizing: border-box;
    .footer-content-list {
      @screen xs {
        padding: 0;
      }
      @screen md {
        padding: 0 90px 0 10px;
      }
    }
    .footer-content-item {
      @screen xs {
        margin-bottom: 20px;
        font-size: 10px;
        font-family: PingFang, Microsoft YaHei Regular;
        font-weight: 400;
        color: #ffffff;
        line-height: 14px;
        flex: 1;
      }
      @screen sm {
        font-size: 18px;
        line-height: 24px;
        font-family: PingFang, Microsoft YaHei Regular;
        font-weight: 400;
        color: #ffffff;
      }

      .value {
        color: #eeeeee;
      }
    }
    .divider {
      height: 1px;
      border: 1px solid #ffffff;
    }
    .footer-other {
      padding: 0 10px;
      .title {
        font-size: 40px;
        font-family: PingFang, Microsoft YaHei Regular;
        font-weight: 400;
        color: #ffffff;
        @screen md {
          font-size: 32px;
        }
        @screen xl {
          font-size: 40px;
        }
      }
      .contract {
        font-size: 26px;
        font-family: PingFang, Microsoft YaHei Regular;
        font-weight: 400;
        color: #ffffff;
        @screen md {
          font-size: 20px;
        }
        @screen xl {
          font-size: 26px;
        }
      }
    }
  }

  .footer-content__mobile {
    .footer-content-list {
      padding: 12px 16px;
      display: flex;
      .footer-content-item {
        margin-bottom: 20px;
        font-size: 10px;
        font-family: PingFang, Microsoft YaHei Regular;
        font-weight: 400;
        color: #ffffff;
        line-height: 14px;
        .label {
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
