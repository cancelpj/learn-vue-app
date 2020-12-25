<!--
 * @Author: 彭俊
 * @Date: 2019-12-22 19:52:16
 * @LastEditors: 彭俊
 * @LastEditTime: 2020-12-25 10:08:43
 * @FilePath: /SP_WEB_iview/Users/pengjun/vscode-workspace/vue/learn-vue-app/src/components/PdaPrinterDemo.vue
 * @Description: 优博讯打印测试
-->
<template>
  <div id="Demo">
    <mt-header title="打印测试">
      <router-link to="/" slot="left">
        <mt-button icon="back"> 返回 </mt-button>
      </router-link>
    </mt-header>
    <br />
    <mt-button type="primary" @click="onPrintBtnClick">
      优博讯打印测试
    </mt-button>
    <br /><br />
    <mt-field label="蓝牙打印机名称" v-model="bluetoothDeviceName" />
    <mt-button type="primary" @click="onPrintBtnClick1">
      zicox 蓝牙打印测试
    </mt-button>
    <br /><br />
    <mt-button type="primary" @click="onPrintBtnClick2">
      通用手机浏览器打印测试
    </mt-button>
    <br /><br />
    <mt-button type="danger" @click="onScanBtnClick"> 扫描测试 </mt-button>
    <br /><br />
    <mt-field
      label="扫描结果"
      placeholder=""
      type="textarea"
      rows="6"
      v-model="scanResult"
      @change="onScanResultChanged"
    />
  </div>
</template>

<script>
// import Vue from "vue";
import { Toast } from 'mint-ui';
// Vue.component(Button.name, Button);

export default {
  name: 'PdaPrinterDemo',
  data() {
    return {
      bluetoothDeviceName: 'CC3_4185',
      jsonContent:
        '{"PageSetup":{"page_width":576,"page_padding_bottom":80},"PageTitle":{"text_x":188,"text_y":0,"text":"配送出库","fontSize":4,"rotate":0,"bold":1,"reverse":false,"underline":false},"HeadSetup":{"start_x":0,"start_y":80,"title_width":130,"row_height":40,"font_size":2},"HeadTitle":[{"text":"收货门店","break_line":true,"data_bold":1,"data_font_size":3},{"text":"发货公司"},{"text":"发货仓库"},{"text":"发货人员"},{"text":"发货单号"},{"text":"发货时间"},{"text":"业务日期"},{"text":"配送秤号"},{"text":"物流公司"},{"text":"物流方式"},{"text":"物流计划"},{"text":"配送方式"}],"HeadData":["80028026-广州东山店","武汉仁川食品有限公司","7201-紫燕武汉配送中心","10985-王青华","DA72010520112507445237","2020-11-25 07:44:52","2020-11-26","05","武汉紫燕冷链物流有限公司","紫燕冷链","门店计划","正常配送"],"BodySetup":{"start_x":0,"row_height":40,"font_size":2,"box":true,"padding":10,"serial_no":true,"serial_no_row_width":64},"BodyTitle":[{"text":"商品编码","width":112},{"text":"商品名称","width":120},{"text":"净重","width":88},{"text":"毛重","width":88},{"text":"单位","width":80}],"BodyData":[["10048","霸王鸭脖","1.025","1.040","千克"],["10419","五香凤爪（短）","0.693","0.700","千克"],["10028","夫妻肺片（牛肉）","2.276","2.300","千克"],["10031","夫妻肺片（牛百叶）","1.464","1.480","千克"]],"FootSetup":{"start_x":0,"title_width":304,"data_width":0,"row_height":50,"font_size":2},"FootTitle":[{"text":"送货员","break_line":false},{"text":"签收人","break_line":true}],"FootData":["",""]}',
      scanResult: '',
    };
  },
  mounted() {
    window.sweepCall = this.sweepCall; // 提供给 android 调用
  },
  methods: {
    sweepCall(str) {
      // console.log(str);
      this.scanResult = str;
    },
    onScanResultChanged(str) {
      Toast('扫码结果：' + str);
    },

    onScanBtnClick() {
      window.android.doSweepCall('ICP191118106');
    },
    onPrintBtnClick() {
      // eslint-disable-next-line no-unused-vars
      let barcode = 'ICP191118106';
      // eslint-disable-next-line no-unused-vars
      let content =
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

      window.android.doPrintWork(barcode, content); // 调用优博讯PDA打印功能
      Toast({
        message: '已提交打印作业',
        iconClass: 'iconfont icon-successful',
        duration: 5,
      });
    },
    onPrintBtnClick1() {
      window.android.PrintJson(this.bluetoothDeviceName, this.jsonContent);
    },
    onPrintBtnClick2() {
      let content =
        '<html><body><h1>Test Content</h1><p>Testing, ' +
        'testing, testing...</p></body></html>';

      window.android.htmlPrint(content); // 通用手机浏览器打印
      Toast({
        message: '已提交打印作业',
        iconClass: 'iconfont icon-successful',
        duration: 5,
      });
    },
  },
};
</script>
