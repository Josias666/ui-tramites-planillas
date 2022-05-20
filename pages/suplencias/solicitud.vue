<template lang="pug">
  v-sheet(color="transparent")
    v-card(color="transparent" flat light)
      v-card-text.noselect.pt-5.pb-3.pl-6.pr-6
        h1.font-weight-regular.black--text Registro Solicitud de Baja Temporal
      v-divider(color="primary")
    v-container(fluid)
      v-form(ref="form" v-model="valid" lazy-validation dense)
        v-card
          v-card-title.pt-0.pb-0
            strong.subheading Datos de la Solicitud de Baja
          v-card-text.pb-1
            v-row(dense)
              v-col(cols="12" sm="3")
                v-text-field(v-model="nro_solicitud" :rules="nameRules" label="Número de Solicitud" required)
              v-col(cols="12" sm="3")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Fecha de la Solicitud" required)
        v-card
          v-card-title.pt-0.pb-0
            strong.subheading Datos del Beneficiario de la Baja
          v-card-text.pb-1
            v-row(dense)
              v-col(cols="12" sm="3")
                v-text-field(v-model="nro_solicitud" :rules="nameRules" label="Departamento" required)
              v-col(cols="12" sm="3")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Distrito" required)
              v-col(cols="12" sm="3")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Programa" required)
            v-row(dense)
              v-col(cols="12" sm="2")
                v-text-field(v-model="nro_solicitud" :rules="nameRules" label="Carnet" required)
              v-col(cols="12" sm="2")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="RDA" required)
              v-col(cols="12" sm="2")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Paterno" required)
              v-col(cols="12" sm="2")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Materno" required)
              v-col(cols="12" sm="3")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Nombres" required)
        v-card
          v-card-title.pt-0.pb-0
            strong.subheading Registro de la Baja Temporal
          v-card-text.pb-1
            v-row(dense)
              v-col(cols="12" sm="4")
                v-text-field(v-model="nro_solicitud" :rules="nameRules" label="Tipo de Baja" required)
              v-col(cols="12" sm="1")
                v-text-field(v-model="nro_solicitud" :rules="nameRules" label="Gestión" required)
              v-col(cols="12" sm="1")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Mes" required)
              v-col(cols="12" sm="2")
                v-menu(v-model="menu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto")
                  template(v-slot:activator="{ on, attrs }")
                    v-text-field(
                      v-model="date"
                      label="Fecha Inicio"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on")
                  v-date-picker(v-model="date" @input="menu1 = false")
              v-col(cols="12" sm="2")
                v-menu(v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto")
                  template(v-slot:activator="{ on, attrs }")
                    v-text-field(
                      v-model="date"
                      label="Fecha Fin"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on")
                  v-date-picker(v-model="date" @input="menu2 = false")
            v-row(dense)
              v-col(cols="12" sm="3")
                v-text-field(v-model="nro_solicitud" :rules="nameRules" label="Teléfono" required)
              v-col(cols="12" sm="3")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Correo Electrónico" required)
            v-row(dense)
              v-col(cols="12" sm="3")
                v-text-field(v-model="nro_solicitud" :rules="nameRules" label="Seguro de Salud" required)
              v-col(cols="12" sm="3")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Regional" required)
              v-col(cols="12" sm="3")
                v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Código de Asegurado" required)
        //-v-text-field(v-model="email" :rules="emailRules" label="E-mail" required)
        //-v-select(v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required)
        //-v-checkbox(v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required)
        v-btn(:disabled="!valid" color="success" class="mr-4" @click="validate") Validate
        v-btn(color="error" class="mr-4" @click="reset") Reset Form
        v-btn(color="warning" @click="resetValidation") Reset Validation
      v-data-table(:headers="headers" :items="solicitudes" :items-per-page="5" class="elevation-1")

</template>
<script>
export default {
  layout: 'dashboard',
  data(){
    return {
      valid: true,
      name: '',
      nro_solicitud: '',
      fecha_solicitud: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      headers: [
        {
          text: 'Distrito',
          align: 'start',
          sortable: false,
          value: 'distrito',
        },
        { text: 'Gestión / Mes', value: 'gestion_mes' },
        { text: 'Nro. Solicitud', value: 'num_solicitud' },
        { text: 'Carnet', value: 'carnet' },
        { text: 'Rda', value: 'rda' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Tipo Baja', value: 'tipo_baja' },
        { text: 'Fecha Inicio', value: 'fecha_inicio' },
        { text: 'Fecha Fin', value: 'fecha_fin' },
        { text: 'Estado', value: 'estado_sol' },
      ],
      solicitudes: [
        {
          distrito: '(515) ACASIO',
          gestion_mes: '2021/5',
          nro_solicitud: 'FRB-PT-1664-2021',
          carnet: '06625771',
          rda: 7395625,
          nombre: 'ANTEZANA ROCHA SELMA',
          tipo_baja: 'Baja por Maternidad Prenatal',
          fecha_ini: '19/04/2021',
          fecha_fin: '02/06/2021',
          estado: 'DESIGNADO',
        },
      ],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }
  },
  mounted() {
    this.$snotify.success("Mounted!")
    //this.url = Vue.prototype.$url;
    this.cargaSolicitudes()
    //this.selectedUe = this.$store.getters.ue;
    //this.getEstadisticas();    
  },
  methods: {
    async cargaSolicitudes() {
      let filtro = {"carnet": "06625771"}
      let solicitudes = await this.$axios.$post("http://localhost:8085/api/v1/filtasolicituds", filtro)
      console.log(solicitudes)
      this.solicitudes = solicitudes.data
      //let res = await axios.post(this.url.urlApp  + "/api/v1/estadistica/filtrar", filtro)
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
