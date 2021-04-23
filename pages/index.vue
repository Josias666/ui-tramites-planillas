<template lang="pug">
v-sheet.transparent(style="overflow:hidden;")
  v-img(src="/img/LogoDark.png" width="320" height="300").mt-15.center-item
  v-divider.successLight.mt-7
  v-container.text-center
    h1.display-2.mt-4.font-weight-thin.titleText--text Sistema de trámites en planillas
    h1.headline.mt-10.font-weight-light.primary--text Módulos:
  v-row.justify-space-around.pb-10
    v-col(md="4" v-for="(item, index) in modules" :key="index")
      v-list-item(style="max-width:280px;border-radius:10px;border:#42B983 solid 1px" href="#").center-item.pt-2.pb-2
        v-list-item-avatar(size="62")
          v-icon.successLight(size="30") {{ item.icon }}
        v-list-item-content
          v-list-item-title {{ item.title }}
</template>

<script>
export default {
  layout: 'dashboard',
  data(){
    return {
      modules: [
        {title:'RC-IVA',icon:'fas fa-file-invoice-dollar'},
        {title:'Reposición de boletas',icon:'fas fa-money-check-alt'},
        {title:'Suplencias',icon:'fas fa-user-clock'},
        {title:'Subsidios por maternidad',icon:'fas fa-baby-carriage'},
        {title:'Descuentos por faltas y sanciones', icon:'fas fa-hand-holding-usd'}
      ]
    }
  },
}
</script>
