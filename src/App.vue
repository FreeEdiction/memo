<template>

  <router-view></router-view>
</template>

<script>
    //import VueRouter from './src/index'

    //Vue.use(VueRouter);
    //import signUp from './components/SignUp.vue';
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style>
  body {
    background: url("/src/assets/background.png") center no-repeat;
    font-family: 'Aqua Grotesque', regular;
  }

  .logo img {
    width: 100px;
    height: 100px;
  }
</style>
