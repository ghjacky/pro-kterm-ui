<template>
  <div id="podlog">
    <div class="container">
      <div class="log-bar"></div>
      <div class="log-pane">
        <p v-html="plog.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PodLog",
  props: {},
  data() {
    return {
      plog: {
        content: "",
      },
      wsConn: null,
    };
  },
  created() {
    this.connection = new WebSocket("ws://127.0.0.1:61611/ws/podlog/logapp-deployment-65bd79bdb9-nlm9g?namespace=default&container=logapp");

    this.connection.onmessage = (ev) => {
      console.log(ev.data);
      this.plog.content += ev.data.replace(/(\r\n|\n|\r)/gm, "<br />");
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#podlog {
  margin: 0 auto;
  text-align: center;
  background-color: #30363b;
  position: relative;
  height: 100%;
  .container {
    position: relative;
    display: inline-block;
    overflow: hidden;
    height: 80%;
    width: 60%;
    margin-top: 30px;
    .log-bar {
      background-color: #3d444c;
      width: 100%;
      height: 30px;
    }
    .log-pane {
      position: relative;
      background-color: #151515;
      color: #c9c9c9;
      width: 100%;
      height: calc(100% - 30px);
      overflow-y: scroll;
      text-align: left;
      font-size: 14px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      p {
        margin: 10px 15px;
      }
    }
  }
}
</style>
