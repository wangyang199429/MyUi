<template>
  <div>
    <div @click="changeOn" :class="isOff?'isOff':'isOn'"></div>
    <audio id="audio">
       <source src="./bgm.mp3" type="audio/ogg">
    </audio>
  </div>
</template>
<script>
export default {
  name: "bgmusic",
  data() {
    return {
      isOff: true
    };
  },
  components: {},
  created() {},
  mounted() {
    // 自动播放音乐效果，解决微信自动播放问题
    document.addEventListener("touchstart", this.audioAutoPlay, false);
    document.addEventListener("WeixinJSBridgeReady", this.audioAutoPlay, false);
    let oAudio = document.querySelector("#audio");
    oAudio.onended = function() {
      //播放完毕，重新循环播放
      oAudio.load();
      oAudio.play();
    };
  },
  methods: {
    changeOn() {
      let oAudio = document.querySelector("#audio");
      if (this.isOff) {
        oAudio.play(); //开始播放
      } else {
        oAudio.pause(); //暂停播放
      }
      this.isOff = !this.isOff;
    },
    audioAutoPlay() {
      let audio = document.getElementById("audio");
      this.isOff = false;
      audio.play();
      document.removeEventListener("touchstart", this.audioAutoPlay);
    }
  }
};
</script>
 
<style scoped>
.isOn {
  width: 1.3rem;
  height: 1.3rem;
  position: fixed;
  z-index: 2000;
  top: 10px;
  right: 10px;
  -webkit-animation: rotating 1.2s linear infinite;
  animation: rotating 1.2s linear infinite;
  background: url("./1.png") no-repeat;
  background-size: 100%;
}
@keyframes rotating {
  from {
    -webkit-transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.isOff {
  width: 1.3rem;
  height: 1.3rem;
  position: fixed;
  z-index: 2000;
  top: 10px;
  right: 10px;
  background: url("./1.png") no-repeat;
  background-size: 100%;
}
</style>
