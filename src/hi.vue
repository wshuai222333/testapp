<template>
  <div class="wrapper">
      <text class="greeting">好嗨哦!</text>
  
      <div @click="tocenter()" class="bt row">
          <text style="font-size:32px;color:#333333;line-height:105px;">个人中心</text>
      </div>

      <div @click="toback()" class="bt row">
          <text style="font-size:32px;color:#333333;line-height:105px;">返回</text>
      </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import {Util} from '@/util';
const navigator = weex.requireModule('navigator');
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      	logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  methods: {
    tocenter(){
        navigator.push({
          	url: Util.getJumpBaseUrl('center')
        })
    },
    toback(){
        navigator.pop()
    },
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
  
  .bt{
    width: 580px;
	height: 105px;
	background-color: #9898e4;
    margin-top: 130px;
    margin-right: 85px;
    margin-left: 85px;
    align-items: center;
  }
</style>
