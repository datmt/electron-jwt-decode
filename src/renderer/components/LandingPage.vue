<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
          <h3>Token</h3>
          <textarea name="" v-model="jwtToken" id="token-container"></textarea>
      </div>

      <div class="right-side">
          <!-- Or manually control the data synchronization -->
          <h3>Header</h3>
          <codemirror id="header-container" v-model="decodedHeader" :options="cmOptions"></codemirror>
          <hr>
          <h3>Body</h3>
          <codemirror id="code-container" v-model="decodedJson" :options="cmOptions"></codemirror>

          

      </div>
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import jwt_decode from 'jwt-decode'
  // import '../../../node_modules/codemirror/lib/codemirror.css'
  // import '../../../node_modules/codemirror/mode/javascript/javascript'
  // import '../../../node_modules/codemirror/theme/eclipse.css'


  export default {
    name: 'landing-page',
    data: () => {
      return {
        jwtToken: '',
        decodedJson: '',
        decodedHeader: '',
        cmOptions: {
    theme: "eclipse",
    // theme: "base16-dark",
    height: "auto",
    // viewportMargin: Infinity,
    mode: "javascript",
    // mode: {
    //   name: "javascript",
    //   json: true,
    //   statementIndent: 2
    // },
    lineNumbers: true,
    lineWrapping: true,
    // indentWithTabs: false,
    tabSize: 2,
    line: true
  }
      }
      
    },
    mounted() {

    },
    watch: {
      jwtToken: function(nv, ov) {
        this.decodedHeader = JSON.stringify(jwt_decode(nv, { header: true }), null, 2);
        this.decodedJson =  JSON.stringify(jwt_decode(nv), null, 2);
      }
    },
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }


  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  main {
    max-width: 100%;
  }


  


  main, .left-side, .right-side, #code-container > .CodeMirror, #header-container > .CodeMirror {
    height: 100%;
  }

  #header-container {
    height: 15%;
  }
  #code-container {
    height: 75%;
  }
  #token-container {
    height: 100%;
  }
</style>
