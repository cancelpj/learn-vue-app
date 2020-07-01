<!--
 * @Author: 彭俊
 * @Date: 2020-06-12 16:43:50
 * @LastEditors: 彭俊
 * @LastEditTime: 2020-07-01 16:30:27
 * @FilePath: /SP_WEB_iview/Users/pengjun/vscode-workspace/vue/learn-vue-app/src/components/CameraDemo.vue
 * @Description: 调用安卓的拍照、录像、录音、相册、文件管理器，返回文件对象和文件路径
--> 
<template>
  <div id="Demo">
    <mt-header title="拍照测试">
      <router-link to="/" slot="left">
        <mt-button icon="back">
          返回
        </mt-button>
      </router-link>
    </mt-header>
    <br />
    <p>
      方式一（推荐）：使用"input"标签获取文件对象（安卓 4.4.0-4.4.2 版本不支持，只能用方式二替换）：
    </p>
    <p>
      上传文件：<input type="file" name="uploadFile" @change="tirggerFile($event)" />
    </p>
    <!-- <p>
      选择照片上传：<input type="file" capture="camera" accept="image/*" name="image" />
    </p> -->
    <!-- <p>
      选择视频上传：<input type="file" capture="camera" accept="video/*" name="video" />
    </p> -->
    <!-- <p>
      选择音频上传：<input type="file" capture="microphone" accept="audio/*" name="audio" />
    </p> -->
    <p>
      方式二：点击下面的按钮，分别开启对应功能，获取文件对象：
    </p>
    <p>
      <input type="text" id="barcode" v-model="barcode" value="扫码结果" style="width:80%" readonly="true" />
    </p>
    <p>
      <input type="text" id="filePath" v-model="filePath" value="文件路径" style="width:80%" readonly="true" />
    </p>
    <p>
      <input type="button" id="clearBtn" value="清空" @click="Clear" />
    </p>
    <p>
      <input type="button" id="takeBarcode" value="打开相机扫码" onclick="window.location.href = ('js://openScan?');" />
    </p>
    <p>
      <input type="button" id="takePicture" value="打开相机拍照" onclick="window.androidMethod.openCamera('picture');" />
    </p>
    <p>
      <input type="button" id="takeVideo" value="打开相机录像" onclick="window.androidMethod.openCamera('video');" />
    </p>
    <p>
      <input type="button" id="takeRecord" value="打开录音" onclick="window.androidMethod.openRecord();" />
    </p>
    <p>
      <input type="button" id="choosePic" value="打开本地相册" onclick="window.androidMethod.choosePic();" />
    </p>
    <p>
      <input type="button" id="chooseFile" value="打开文件管理器" onclick="window.androidMethod.chooseFile();" />
    </p>
    <p>
      <a href="tel:10000">拨打电话：10000</a>
    </p>
  </div>
</template>

<script>
// import Vue from "vue";
// import { Toast } from 'mint-ui';
// Vue.component(Button.name, Button);

export default {
  name: 'CameraDemo',
  data() {
    return {
      barcode: '',
      filePath: ''
    };
  },
  mounted() {
    window.sweepCall = this.sweepCall; // 提供给 android 调用，返回扫描结果
    window.returnFilePath = this.returnFilePath; // 提供给 android 调用，返回文件路径
  },
  methods: {
    // 打开扫码，返回扫码结果
    sweepCall(barcode) {
      //Toast("相机扫码返回值："+ barcode);
      //空值不操作
      // if (barcode == '' || barcode.trim() == '') {
      //   return;
      // }
      this.barcode = barcode;
      // this.getSweepRequest(str);  // 调用业务逻辑方法处理获得的条码
    },
    // 打开录音、打开相机、打开本地相册，选择文件后返回的路径，此方法名不能改
    returnFilePath(urlPath) {
      this.filePath = urlPath;
    },
    Clear() {
      this.filePath = '';
      this.barcode = '';
    },
    // 处理 input 标签返回的文件对象
    tirggerFile: function(event) {
      let file = event.target.files; // (利用console.log输出看结构就知道如何处理档案资料)
      // do something...
    }
  }
};
</script>
