<template>
  <div id="app">
    <router-view />
    <img :src="background" alt="" class="background" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { DEFAULT_BACKGROUND } from './const/index';

const appModule = namespace('app');

// @Component 修饰符注明此类为一个Vue组件
@Component
export default class GenalChat extends Vue {
  @appModule.Getter('background') background: string;

  @appModule.Mutation('set_mobile') setMobile: Function;
  @appModule.Mutation('set_background') set_background: Function;

  mounted() {
    this.setMobile(this.isMobile());
    if (!this.background || !this.background.trim()) {
      console.log(1);
      this.set_background(DEFAULT_BACKGROUND);
      console.log(this.background);
    }
    console.log(this.background);
  }

  isMobile() {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag && flag.length;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-color: #fff;
  .background {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
