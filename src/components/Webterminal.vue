<template>
  <div id="webterminal">
    <div id="xterm" class="xterm" style="min-width: 850px; min-height: 900px"></div>
  </div>
</template>
<script>
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { AttachAddon } from "xterm-addon-attach";

export default {
  name: "Webterminal",
  mounted() {
    this.initSocket();
  },
  beforeUnmount() {
    this.socket.close();
    this.term.dispose();
  },
  data() {
    return {
      socket: null,
      socketURI: "ws://127.0.0.1:55190/ws/podexec/logapp-deployment-65bd79bdb9-nlm9g?namespace=default&container=logapp",
    };
  },
  methods: {
    initTerm() {
      const term = new Terminal({
        fontSize: 14,
        cursorBlink: true,
      });
      const attachAddon = new AttachAddon(this.socket);
      const fitAddon = new FitAddon();
      term.loadAddon(attachAddon);
      term.loadAddon(fitAddon);
      const elXterm = document.getElementById("xterm");
      term.open(elXterm);
      fitAddon.fit();
      term.focus();
      this.term = term;
      new ResizeObserver(() => {
        fitAddon.fit();
        this.socket.send("4" + JSON.stringify({ Height: elXterm.clientHeight, Width: elXterm.clientWidth }));
      }).observe(document.getElementById("webterminal"));
    },
    initSocket() {
      this.socket = new WebSocket(this.socketURI);
      this.socketOnClose();
      this.socketOnOpen();
      this.socketOnError();
    },
    socketOnOpen() {
      this.socket.onopen = () => {
        this.initTerm();
      };
    },
    socketOnClose() {
      this.socket.onclose = () => {
        this.term.write("\r\nConnection Closed ! ");
      };
    },
    socketOnError() {
      this.socket.onerror = () => {
        this.term.write("\r\nConnection Error ! ");
      };
    },
  },
};
</script>
<style lang="scss" scoped>
#webterminal {
  position: relative;
  margin: 0 auto;
  height: 100%;
  #xterm {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>