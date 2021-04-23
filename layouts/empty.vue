<template lang="pug">
v-app
  v-main.dashboard
    nuxt
  vue-snotify
</template>

<style lang="stylus">
.dashboard
  background-image url('/img/background.jpg') !important
  background-size cover !important
</style>

<script>
export default {
  data () {
    return {
      miniLinks: [
        {title: 'Página principal', icon:'fas fa-home', to:'/'}
      ]
    }
  }
}
</script>
