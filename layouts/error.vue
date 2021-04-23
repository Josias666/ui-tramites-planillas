<template lang="pug">
v-container.text-center.d-flex(style="height:100%")
  v-card.align-self-center.txt-center(style="width:100%" outlined).transparent
    v-card-text
      h1(v-if="error.statusCode === 404" style="font-size:42px;line-height:42px;").font-weight-thin
        span(style="font-size:62px;font-weight:normal").successLight--text 404
        | <br> Página no encontrada
      h1(v-else style="font-size:42px;line-height:60px;").font-weight-thin
        span(style="font-size:62px;font-weight:normal").successLight--text :(
        | <br> {{ otherError }}
    v-card-text
      v-btn(dark color="successLight" to="/")
        |Página principal
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404<br>Página no encontrada',
      otherError: 'Ha ocurrido un error'
    }
  },
  head () {
    return {
      title: this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    }
  }
}
</script>
