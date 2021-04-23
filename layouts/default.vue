<template lang="pug">
v-app
  v-main.dashboard
    nuxt
  v-footer(app color="one" height="30" padless style="z-index:2" light)
    v-tooltip(top color="#4E6E8E" v-for="(item, index) in miniLinks" :key="index")
      template(v-slot:activator="{ on }")
        v-btn.no-padding.no-margin(v-on="on" small color="transparent" depressed style="min-width:35px;width:35px;height:28px;" to="/" target="blank").rounded-0
          v-icon(color="#1D2935" small) fas fa-home
        v-divider(vertical)
      span Página principal
    v-spacer
    span.caption.font-weight-light(style="color:#1D2935") Sistema de tramites en planillas, version 1.0.1
    v-spacer
    v-divider(vertical)
    span.caption.font-weight-medium(style="color:#1D2935") &ensp;Copyright: Ministerio de Educación, UGPSEP 2019 ©️&ensp;
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
