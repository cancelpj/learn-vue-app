<template>
  <div class="templateWorkTable">
    <mt-header title="SPMES DEMO"></mt-header>

    <div class="container">
      <div v-if="EventType1.length!=0">
        <!-- <div class="anyTable">{{EventType1[0].EventTypeName}}</div> -->
        <ul>
          <li v-for="(item, index) in EventType1"
              :key="index"
          >
            <img @click="chooseEvent(item)"
                 class="eventLogo"
                 :src="item.img"
            /> {{ item.Name }}
          </li>
        </ul>
        <div class="clear"></div>
      </div>

      <div v-if="EventType2.length!=0">
        <!-- <div class="anyTable">{{EventType2[0].EventTypeName}}</div> -->
        <ul>
          <li v-for="(item, index) in EventType2"
              :key="index"
          >
            <img @click="chooseEvent(item)"
                 class="eventLogo"
                 :src="item.img"
            /> {{ item.EventName }}
          </li>
        </ul>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button, Field, Popup, Picker } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
Vue.component(Field.name, Field);
export default {
  name: 'Worktable',
  data() {
    return {
      EventType1: [
        {
          name: 'PdaPrinterDemo',
          img: require('../assets/img/Print.png')
        },
        {
          name: 'CameraDemo',
          img: require('../assets/img/Camera.png')
        }
      ],
      EventType2: [],
      USEREVENT: ''
    };
  },
  methods: {
    chooseEvent(c) {
      window.localStorage.setItem('EVENTS', JSON.stringify(c));
      this.$router.push({
        name: c.name
      });
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.anyTable {
  text-align: initial;
  font-weight: bold;
  height: 0.8rem;
  margin-top: 10px;
  margin-left: 1rem;
}
.container {
  height: calc(100% - 60px);
  overflow-y: scroll;
}
.eventLogo {
  width: 54%;
  display: inherit;
  padding: 5px 0 5px 23%;
}

.clear {
  clear: both;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 0.8rem;
  position: relative;
  float: left;
  width: 33%;
  box-sizing: border-box;
  margin-top: 10px;
}

a {
  color: #a3a3a3;
}
</style>
