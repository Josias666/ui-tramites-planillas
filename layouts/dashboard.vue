<template lang="pug">
v-app.dashboard
  //-v-navigation-drawer(fixed, stateless, :mini-variant="$vuetify.breakpoint.smAndDown", v-model='toggler' app, width="250", floating, dark color="menu")
  v-navigation-drawer(fixed, v-model='toggler' app, width="250", floating, dark color="menu")
    v-sheet.transparent.text-center.pt-4.pb-2
      v-img(src="/svg/hiring.svg" width="80" style="margin:0px auto;").mt-5
      h3.pb-8.pt-2.white--text.font-weight-thin(style="font-size:20px") Administración de<br>Tramites en planillas
    tree-menu(:items="menu" :depth="1")
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
  data() {
    return {
      toggler: true,
      show: false,
      miniLinks: [
        {title: 'Página principal', icon:'fas fa-home', to:'/'}
      ],
      menu: [
        { title: 'Inicio', icon: 'fas fa-home', to: '/' },
        { title: 'RC-IVA', icon: 'fas fa-file-invoice-dollar',
          path:'/rc-iva',items: [
            { title: 'Configuracion', to: '/rc-iva/configuracion' },
            { title: 'Registros', to: '/rc-iva/registros' },
            { title: 'Test', to: '/registros' },
            { title: 'ArchivosDec', to: '/rc-iva/archivos-dec' },
          ],
        },
        { title: 'Reposición de boletas', icon: 'fas fa-money-check-alt',
          path:'/rc-ivas',items:[
            { title: 'Registros', to: '/reposicion-de-boletas/registros'},
            { title: 'Reportes', to: '/reposicion-de-boletas/reportes'},
          ],
        },
        { title: 'Subsidios por maternidad', icon: 'fas fa-baby-carriage',
          path:'/rc-ivas',items:[
            {title: 'Configuración', to: '/subsidios/configuracion'},
            {title: 'Registros', to: '/subsidios/registros'},
            {title: 'Reportes', to: '/subsidios/reportes'},
          ],
        },
        { title: 'Suplencias', icon: 'fas fa-user-clock',
          path:'/rc-ivas',items:[
            {title: 'Configuración', to: '/suplencias/configuracion'},
            {title: 'Registros', to: '/suplencias/registros'},
            {title: 'Reportes', to: '/suplencias/reportes'},
          ],
        },
        { title: 'Descuentos por faltas y sanciones', icon: 'fas fa-hand-holding-usd',
          path:'/rc-ivas',items:[
            {title: 'Control de personal', to: '/descuentos/control-de-personal'},
            {title: 'Histórico', to: '/descuentos/historico'},
            {title: 'Estadísticas / Reportes', to: '/descuentos/estadisticas'},

            /*{title: 'Registro de lotes', to: '/descuentos/estadisticas'},
            {title: 'Control de personal', to: '/descuentos/estadisticas'},
            {title: 'Histórico', to: '/descuentos/historico'},
            {title: 'Estadísticas / Reportes', to: '/descuentos/estadisticas'},

            {title: 'Registro de lotes', to: '/descuentos/estadisticas'},
            {title: 'Control de personal', to: '/descuentos/estadisticas'},
            {title: 'Histórico', to: '/descuentos/historico'},
            {title: 'Estadísticas / Reportes', to: '/descuentos/estadisticas'},

            {title: 'Registro de lotes', to: '/descuentos/estadisticas'},
            {title: 'Histórico', to: '/descuentos/historico'},
            {title: 'Estadísticas / Reportes', to: '/descuentos/estadisticas'},*/
          ],
        },
      ]
    }
  }
}
</script>
