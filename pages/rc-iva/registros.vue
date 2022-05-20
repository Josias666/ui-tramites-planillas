<template lang="pug">
v-sheet(color="transparent")
  v-card(color="transparent" flat light)
    v-card-text.noselect.pa-6.pt-10.pb-8
      h1.font-weight-regular.black--text RC-IVA
      h2.font-weight-thin.mt-1 Pago por el regimen complementario al impuesto al valor agregado
    v-divider(color="primary")
  v-container
    v-row
      v-col(cols="12").text-center
        h2.font-weight-regular.titleText--text.pt-2.pb-2 Registro de Formularios 110
    v-row
      p {{ salida }}
    v-row
      v-btn(@click="iraModificaciones") ir a modificaciones
    v-row
      v-col(cols="12")
        v-test(:callback="showAlert")
    v-row
      v-col(cols="12" md="6" v-for="(item, index) in 36" :key="index")
        v-card
          v-card-text
            h3 Registros {{ index + 1 }}
</template>

<script>
export default {
  layout: 'dashboard',
  data(){
    return {
      salida:'null'
    }
  },
  mounted(){
    //this.$snotify.success("Correct :)");
  },
  methods: {
    showAlert(){
      this.$snotify.info("This is a info 2 :)");
    },
    iraModificaciones(){
      this.salida = this.$router.options.routes
      //this.$router.push("/rc-iva/actualizaciones");
    }
  }
}
</script>
