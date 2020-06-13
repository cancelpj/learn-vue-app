<template>
  <div id="Demo">
    <mt-header title="打印测试">
      <router-link to="/" slot="left">
        <mt-button icon="back">
          返回
        </mt-button>
      </router-link>
    </mt-header>
    <br />
    <mt-button type="primary" @click="onPrintBtnClick">
      打印测试
    </mt-button><br /><br />
    <mt-button type="danger" @click="onScanBtnClick">
      扫描测试
    </mt-button><br /><br />
    <mt-field label="扫描结果" placeholder="" type="textarea" rows="6" v-model="scanResult"></mt-field>
  </div>
</template>

<script>
// import Vue from "vue";
import { Toast } from 'mint-ui';
// Vue.component(Button.name, Button);

export default {
  name: 'PdaPrinterDemo',
  data() {
    return { scanResult: '' };
  },
  mounted() {
    window.sweepCall = this.sweepCall; // 提供给 android 调用
  },
  methods: {
    sweepCall(str) {
      console.log(str);
      this.scanResult = str;
    },
    onScanBtnClick() {
      window.android.doSweepCall('ICP191118106');
    },
    onPrintBtnClick() {
      // eslint-disable-next-line no-unused-vars
      var barcode = 'ICP191118106';
      // eslint-disable-next-line no-unused-vars
      var content =
        '入库单号 ICP191118106\r\n' +
        '打印人 张春霞\r\n' +
        '打印时间 2019-11-18 18:26:50\r\n' +
        '入库时间 2019-11-18 18:24:27\r\n' +
        '工程名 宜昌中建之星（墙块）3号楼幕墙及公区精装修\r\n' +
        '清单号 1911103\r\n' +
        '批次 2批\r\n' +
        '件数 27\r\n' +
        '条码\r\n' +
        '  19111030018 101 2批\r\n' +
        '  19111030018 102 2批\r\n' +
        '  19111030018 103 2批\r\n';

      // window.android.doPrintWork(barcode, content); // 调用优博讯PDA打印功能
      Toast({
        message: '已提交打印作业',
        iconClass: 'iconfont icon-successful'
        // duration: 5
      });
    }
  }
};
</script>
