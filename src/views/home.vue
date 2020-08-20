<template>
<div>
<div v-if="watchError">{{ watchError }}s</div>
<span>{{smsObj.date}} </span>
<span>{{ smsObj.address }}</span>
<span>{{ smsObj.body }}</span>
</div>
</template>

<script>
// import moment from "moment";
import { SMSReceive } from "cordova-plugin-sms-receive/www/SMSReceive.js"
export default {
  name: "Home",
  mounted() {
    // There must be a better way of adding this addEventListener
    document.addEventListener("deviceready", () => {
      this.startWatch();
    });
  },
  data() {
    return {
      smsObj: {}
    };
  },
  methods: {
    startWatch() {
      SMSReceive.startWatch(
        () => {
          document.addEventListener("onSMSArrive", e => {
            this.processSMS(e.data);
          });
        },
        () => {
          this.watchError = "Error: SMSReceive did not start"
        }
      );
    },
    processSMS(data) {
      // data.date = moment(data.date).format("MM-DD-YYYY HH:mm:ss");
      console.log("SMS Data:" + data);
      this.smsObj = data;
      // Here you can get the OTP and pass it to your endpoint
    }
  }
};
</script>
