<template lang="pug">
  v-sheet(color="transparent")
    v-card(color="transparent" flat light)
      v-card-text.noselect.pt-5.pb-3.pl-6.pr-6
        h1.font-weight-regular.black--text Formulario de Registro
      v-divider(color="primary")
    v-container(fluid)
      v-form(ref="form" v-model="valid" lazy-validation dense)
        v-card
          v-card-text.pb-1
            v-card
              v-card-title.pt-0.pb-0
                strong.subheading Registrar Baja por Incapacidad Temporal
            v-row(dense)
              v-col(cols="12" sm="3")
                v-text-field.field1(v-model="usuario" :rules="nameRules" label="Cargo de usuario" readonly)
            v-row(dense)
              v-col(cols="12" sm="2")
                v-text-field(v-model="cargo" :rules="nameRules" label="Introducir el Nro. de carnet" required)
              v-col(cols="12" sm="1")
                v-btn(color="indigo" class="white--text mt-3 mr-2" small @click="search()")
                  v-icon(small) fas fa-search
                  | &ensp;Buscar
            v-row(dense)
              v-col(cols="12" sm="3")
                v-text-field(v-model="distrito" :rules="nameRules" label="Gestión/Mes planilla activa" required)
            v-row(dense)
              v-col(cols="12" sm="3")
                v-text-field(v-model="distrito" :rules="nameRules" label="Nro. de Carnet" required)
              v-col(cols="12" sm="3")
                v-text-field(v-model="distrito" :rules="nameRules" label="Titular" required)
            v-row(dense)
              v-col(cols="12" sm="2" md="2")
                v-menu(
                  ref="menu"
                  v-model="menu1"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                )
                  template(v-slot:activator="{ on, attrs }")
                    v-text-field(
                      v-model="sup_fecha_inicio_actividades"
                      label="Fecha de Inicio de la Baja"
                      prepend-icon="fas fa-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    )
                  v-date-picker(
                    v-model="date"
                    no-title
                    scrollable
                  )
                    v-spacer
                    v-btn(
                      text
                      color="primary"
                      @click="menu = false"
                    ) Cancel
                    v-btn(
                      text
                      color="primary"
                      @click="$refs.menu.save(date)"
                    ) OK
              v-col(cols="12" sm="2" md="2")
                v-menu(
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                )
                  template(v-slot:activator="{ on, attrs }")
                    v-text-field(
                      v-model="sup_fecha_final_actividades"
                      label="Fecha final de la Baja"
                      prepend-icon="fas fa-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    )
                  v-date-picker(
                    v-model="date"
                    no-title
                    scrollable
                  )
                    v-spacer
                    v-btn(
                      text
                      color="primary"
                      @click="menu = false"
                    ) Cancel
                    v-btn(
                      text
                      color="primary"
                      @click="$refs.menu.save(date)"
                    ) OK
              v-col(cols="12" sm="3")
                v-select(v-model="tipo_baja" :items="item_tipo_baja" label="Tipo de Baja")
            v-row(dense)
              v-col(cols="12" sm="2")
                v-text-field(v-model="codigo_caja"  label="Código de asegurado")
              v-col(cols="12" sm="2")
                v-select(v-model="seguro" :items="item_seguro" label="Seguro")
              v-col(cols="12" sm="2")
                v-select(v-model="regional" :items="item_regional" label="Regional")
            v-row(dense)
              v-col(cols="12" sm="5")
                v-textarea(v-model="registro_observacion" rows="2" label="Observación")
            v-card
              v-card-title.pt-0.pb-0
                strong.subheading Cite de Reembolso
            v-row(dense)
              v-col(cols="12" sm="2")
                v-text-field(v-model="codigo_caja"  label="Número de Cite")
              v-col(cols="12" sm="2")
                v-btn(color="indigo" class="white--text mt-3 mr-2" small @click="search()")
                  v-icon(small) fas fa-sync
                  | &ensp;Actualizar
            v-row(dense)
              v-col(cols="12" sm="12")
                h3 Listado de bajas temporales
                p Una vez presentado el trámite para la migración de la información de las bajas temporales, no se debe modificar ni eliminar las bajas temporales
            v-data-table(:headers="headerb" :items="bajas_temp" :items-per-page="5" class="elevation-1")
              
</template>
<script>
export default {
  layout: 'dashboard',
  data(){
    return {
      tab: null,
      items: [
        'web', 'shopping', 'videos', 'images', 'news',
      ],
      item_sup_gestion:[
        2018,2019,2020,2021,2022
      ],
      item_sup_mes:[
        'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
      ],
      item_sup_estado:[
        'TODOS','DESIGNADO','OBSERVADO','OBSERVADO-SEP','ELIMINADO','EN PROCESO'
      ],
      item_coddis:[

      ],
      item_tipo_baja:[
        'Maternidad pre-natal','Maternidad post-natal','Enfermedad','Accidente'
      ],
      item_seguro:[
        'Caja Nacional de Salud(C.N.S.)','Caja Petrolera de Salud(C.P.S.)','Caja de Salud CORDES',
        'Caja de Salud de la Banca Privada','Caja de Salud de Caminos',
        'Caja Bancaria Estatal de Salud (C.B.E.S.)','Seguro Social Universitario (S.I.S.S.U.B)',
        'Coorporacion del Seguro Social Militar (COSSMIL)','Ninguno'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      urlData: 'http://sisep.minedu.gob.bo:8083/pdf/MANUAL_SICH_v1.0.pdf',
      searchS: '',
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
      headerb: [//Gestión Mes Carnet  Datos titular Fecha inicio  Fecha final días  Tipo Baja Seguro  Observación Cite
        {
          text: 'Gestión',
          align: 'start',
          sortable: false,
          value: 'gestion',
        },
        { text: 'Mes', value: 'mes' },
        { text: 'Carnet', value: 'carnet' },
        { text: 'Datos Titular', value: 'datos_titular' },
        { text: 'Fecha Inicio', value: 'fecha_inicio' },
        { text: 'Fecha Final', value: 'fecha_final' },
        { text: 'Días', value: 'dias' },
        { text: 'Tipo de Baja', value: 'tipo_baja' },
        { text: 'Seguro', value: 'seguro' },
        { text: 'Observación', value: 'observacion' },
        { text: 'Cite', value: 'cite' },
      ],
      solicitudes: [
        {
          gestion: '(515) ACASIO',
          mes: '2021/5',
          carnet: 'FRB-PT-1664-2021',
          datos_titular: '06625771',
          fecha_inicio: 7395625,
          fecha_final: 'ANTEZANA ROCHA SELMA',
          dias: 'Baja por Maternidad Prenatal',
          tipo_baja: '19/04/2021',
          seguro: '02/06/2021',
          observacion: 'DESIGNADO',
          cite: ''
        },
      ],
      //Distrito  Num Form. Desig Carnet  Rda Nombres Fec. Ini. Act.  Fec. Fin. Act.  Estado  Observaciones
      headersD: [
        {
          text: 'Distrito',
          align: 'start',
          sortable: false,
          value: 'distrito',
        },
        { text: 'Num Form. Desig', value: 'num_solicitud' },
        { text: 'Carnet', value: 'sup_carnet' },
        { text: 'Rda', value: 'nombre' },
        { text: 'Nombres', value: 'tipo_baja' },
        { text: 'Fecha Inicio', value: 'sup_fecha_inicio_actividades' },
        { text: 'Fecha Fin', value: 'fecha_final_actividades' },
        { text: 'Estado', value: 'estado_sol' },
        { text: 'Observaciones', value: 'sup_observacion_estado' },
      ],
      designaciones: [
        {
          distrito: '(515) ACASIO',
          gestion_mes: '2021/5',
          nro_solicitud: 'FRB-PT-1664-2021',
          carnet: '06625771',
          rda: 7395625,
          nombre: 'ANTEZANA ROCHA SELMA',
          tipo_baja: 'Baja por Maternidad Prenatal',
          sup_fecha_inicio_actividades: '19/04/2021',
          fecha_final_actividades: '02/06/2021',
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
    buscarSolicitud(){

    }
  },
}
</script>
<style>
.field1{
  color:red
}
</style>
