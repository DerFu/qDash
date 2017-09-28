<template>
  <div id='app' v-if="demoMode">
    <div class="circle" :style="{'background': (demoMode.speed > 120) ? '#ff0000' : '#51bbb5'}">
      <svg width="125px" height="90px">
        <path d="m 15.5 66 a 4.5 4.5 0 0 0 9 0" fill="#ffffff" />
        <path d="m 100.5 66 a 4.5 4.5 0 0 0 9 0" fill="#ffffff" />
        <path d="m 20 66 a 42.5 42.5 0 0 1 85 0" fill="none" stroke="#ffffff" stroke-width="9" />
        <path :style="{'fill': (demoMode.speed > 120) ? '#ff0000' : '#ffffff', 'transform': 'rotate(' + (demoMode.speed - 90) + 'deg)'}" id="needle" d="m 50 60 a 13.5 17 0 1 0 27 0 l -13.5 -73 z" fill="#ffffff" stroke="#51bbb5" stroke-width="9" />
      </svg>
    </div>

    <div @click="send('Hi there')">click</div>
    <h1>{{demoMode.rpm}} // {{demoMode.speed}}</h1>
    <p>OUT {{demoMode2.tmpOut}}˚ IN {{demoMode2.tmpIn}}˚</p>
    <p>{{demoMode2.distance.fr}} {{demoMode2.distance.fl}}<br> {{demoMode2.distance.rr}} {{demoMode2.distance.rl}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      demoMode: null,
      randomMode: null,
    };
  },
  methods: {
    send(msg) {
      // Emit the server side
      this.$socket.emit('get', msg);
    },
  },
  socket: {
    // Prefix for event names
    // prefix: "/counter/",

    // If you set `namespace`, it will create a new socket connection to
    // the namespace instead of `/`
    // namespace: "/counter",

    events: {

      // Similar as this.$socket.on("changed", (msg) => { ... });
      // If you set `prefix` to `/counter/`, the event name will be `/counter/changed`
      //
      randomMode(data) {
        this.randomMode = data;
      },
      //
      demoMode(data) {
        this.demoMode = data;
      },
      demoMode2(data) {
        this.demoMode2 = data;
      },

      /* common socket.io events */
      connect() {
        console.log('Websocket connected to ', this.$socket.nsp);
      },

      disconnect() {
        console.log('Websocket disconnected from ', this.$socket.nsp);
      },

      error(err) {
        console.error('Websocket error!', err);
      },
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

body {
  background: #dcedfe;
}

.circle {
  width: 158px;
  height: 158px;
  margin: 50px auto;
  text-align: center;
  background: #51bbb5;
  overflow: hidden;

  border-radius: 50%;
  border: 5px solid #fff;
}

svg {
  margin: 20px 0 0 0;
  // background: #51bbb5;
}

#needle {
  position: relative;
  transform: rotate(40deg);
  transform-origin: 63px 66px;
}



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 42px;

  .wrapper {
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    grid-gap: 10px;
    background-color: #fff;
    color: #444;
  }

  .box {
    background-color: #444;
    color: #fff;
    padding: 20px;
    font-size: 150%;
    &.a {
      background: red;
    }
  }
}
</style>
