<template lang="pug">
  v-sheet(color="transparent")
    v-card(color="transparent" flat light)
      v-card-text.noselect.pt-5.pb-3.pl-6.pr-6
        h1.font-weight-regular.black--text Designación de Suplente
      v-divider(color="primary")
    v-container(fluid)
      v-form(ref="form" v-model="valid" lazy-validation dense)
        v-tabs(v-model="tab" align-with-title)
          v-tabs-slider(color="yellow")
          v-tab(key="tab1") Designación
          v-tab(key="tab2") Solicitudes
          v-tab(key="tab3") Designaciones
          v-tab(key="tab4") Reportes
          v-tab(key="tab5") Suplente
        v-tabs-items(v-model="tab")
          v-tab-item(key="tab1")
            v-card-text.pb-1
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="searchS" label="Número de Solicitud" class="mr-2" :rules="[v => !!v || 'Requerido']" v-on:keyup="buscarSolicitud")
                v-col(cols="12" sm="2")
                  v-btn(color="indigo" class="white--text mr-2" small @click="search()")
                    v-icon(small) fas fa-search
                    | &ensp;Buscar
              v-row(dense)
                v-card
                  v-card-title.pt-0.pb-0
                    strong.subheading Datos de Registro
              v-row(dense)
                v-col(cols="12" sm="3")
                  v-text-field.field1(v-model="usuario" :rules="nameRules" label="Funcionario" required)
                v-col(cols="12" sm="3")
                  v-text-field(v-model="cargo" :rules="nameRules" label="Cargo" required)
                v-col(cols="12" sm="3")
                  v-text-field(v-model="distrito" :rules="nameRules" label="Distrito" required)
              v-row(dense)
                v-card
                  v-card-title.pt-0.pb-0
                    strong.subheading Datos de la Baja Temporal (Titular)
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="nro_solicitud" :rules="nameRules" label="Num. Solicitud" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="fecha_solicitud" :rules="nameRules" label="Fecha de la Solicitud" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="depto" :rules="nameRules" label="Departamento" required)
                v-col(cols="12" sm="3")
                  v-text-field(v-model="distrito" :rules="nameRules" label="Distrito" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="programa" :rules="nameRules" label="Programa" required)
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="carnet" :rules="nameRules" label="Carnet" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="rda" :rules="nameRules" label="Rda" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="paterno" :rules="nameRules" label="Paterno" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="materno" :rules="nameRules" label="Materno" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="nombres" :rules="nameRules" label="Nombres" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="tipo_baja" :rules="nameRules" label="Tipo de Baja" required)
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="fecha_inicio" :rules="nameRules" label="Fecha Inicio" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="fecha_final" :rules="nameRules" label="Fecha Final" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="seguro" :rules="nameRules" label="Seguro" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="codigo_asegurado" :rules="nameRules" label="Código de Asegurado" required)
              v-row(dense)
                v-col(cols="12" sm="3")
                  v-textarea(v-model="fundoc" rows="2" :rules="nameRules" label="Función Docente" required)
                v-col(cols="12" sm="3")
                  v-textarea(v-model="item_docente" rows="2" :rules="nameRules" label="Ítems Docente" required)
              v-row(dense)
                v-col(cols="12" sm="4")
                  v-btn(color="indigo" class="white--text mr-2" small @click="search()")
                    v-icon(small) fas fa-edit
                    | &ensp;Editar
                  v-btn(color="indigo" class="white--text mr-2" small @click="search()")
                    v-icon(small) fas fa-save
                    | &ensp;Registrar
                  v-btn(color="indigo" class="white--text mr-2" small @click="search()")
                    v-icon(small) fas fa-print
                    | &ensp;Imprimir
              v-row.mt-5(dense)
                v-card
                  v-card-title.pt-0.pb-0
                    strong.subheading Designación del Suplente
              v-row(dense)
                v-col(cols="12" sm="1")
                  b Proceso de Registro
                v-col(cols="12" sm="1")
                  v-select(v-model="sup_gestion_registro" :items="item_sup_gestion" label="Gestión")
                v-col(cols="12" sm="1")
                  v-select(v-model="sup_mes_registro" :items="item_sup_mes" label="Mes")
                //-v-col(cols="12" sm="1")
                  v-btn(color="indigo" class="white--text mr-2" small @click="search()")
                    v-icon(small) fas fa-print
                    | &ensp;Imprimir
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="searchS" label="Carnet Suplente" class="mr-2" :rules="[v => !!v || 'Requerido']" v-on:keyup="buscarSolicitud")
                v-col(cols="12" sm="1")
                  v-btn(color="indigo" class="white--text mr-2" small @click="search()")
                    v-icon(small) fas fa-search
                    | &ensp;Buscar
                v-col(cols="12" sm="2")
                  span Número de carnet del personal suplente, el mismo debe tener RDA
                v-col(cols="12" sm="2")
                  v-checkbox(v-model="sin_rda" color="red" label="No tiene RDA" class="mr-2")
              v-row(dense)
                v-col(cols="12" sm="1")
                  v-text-field(v-model="sup_carnet" :rules="nameRules" label="Carnet" required)
                v-col(cols="12" sm="1")
                  v-text-field(v-model="sup_rda" :rules="nameRules" label="Rda" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_fecha_nacimiento" :rules="nameRules" label="Fecha de Nacimiento" required)
                v-col(cols="12" sm="1")
                  v-text-field(v-model="sup_sexo" :rules="nameRules" label="Sexo" required)
                v-col(cols="12" sm="1")
                  v-text-field(v-model="sup_horas" :rules="nameRules" label="Horas" required)
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_paterno" :rules="nameRules" label="Paterno" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_materno" :rules="nameRules" label="Materno" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_nombre1" :rules="nameRules" label="Nombre1" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_nombre2" :rules="nameRules" label="Nombre2" required)
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_afp" :rules="nameRules" label="AFP" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_nua" :rules="nameRules" label="NUA/CUA" required)
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-select(v-model="sup_formacion" :items="item_sup_formacion" label="Formación Profesional")
                v-col(cols="12" sm="2")
                  v-select(v-model="sup_especialidad" :items="item_sup_especialidad" label="Especialidad")
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_nivel_formacion" :rules="nameRules" label="Nivel Formación" required)
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_fecha_inicio_actividades" :rules="nameRules" label="Fecha de Inicio" required)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_fecha_final_actividades" :rules="nameRules" label="Fecha Final" required)
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-text-field(v-model="sup_observacion_estado" :rules="nameRules" label="Observaciones" required)

          v-tab-item(key="tab2")
            v-card-text.pb-1
              v-row(dense)
                v-col(cols="12" sm="2")
                  p Planilla/Gestión/Mes
                v-col(cols="12" sm="1")
                  v-text-field(v-model="gestion" :rules="nameRules" label="Gestión" required)
                v-col(cols="12" sm="1")
                  v-text-field(v-model="gestion" :rules="nameRules" label="Mes" required)
                v-col(cols="12" sm="1")
                  v-btn(color="indigo" class="white--text mr-2" small @click="search()")
                    v-icon(small) fas fa-sync
                    | &ensp;Cargar
                v-col(cols="12" sm="1")
                  v-btn(color="indigo" class="white--text mr-2" small @click="search()")
                    v-icon(small) fas fa-trash
                    | &ensp;Eliminar
              p Lista de las Solicitudes de Baja Temporal del Departamento de (POTOSI), se encontraron 10 registros
              v-data-table(:headers="headers" :items="solicitudes" :items-per-page="5" class="elevation-1")
          v-tab-item(key="tab3")
            v-card-text.pb-1
              v-row(dense)
                v-col(cols="12" sm="2")
                  p Planilla/Gestión/Mes
                v-col(cols="12" sm="1")
                  v-select(v-model="sup_gestion_registro" :items="item_sup_gestion" label="Gestión")
                v-col(cols="12" sm="1")
                  v-select(v-model="sup_mes_registro" :items="item_sup_mes" label="Mes")
                v-col(cols="12" sm="1")
                  v-select(v-model="sup_etado_planilla" :items="item_sup_estado" label="Estado")
                v-col(cols="12" sm="1")
                  v-btn(color="indigo" class="white--text mr-2" small @click="search()")
                    v-icon(small) fas fa-sync
                    | &ensp;Cargar
                v-col(cols="12" sm="1")
                  v-btn(color="indigo" class="white--text mr-2" small @click="search()")
                    v-icon(small) fas fa-trash
                    | &ensp;Eliminar
            v-card(flat)
              //Planilla Gestión/Mes:				2022  Mayo  Estado  TODOS Cargar Designaciones  Eliminar Designaciones
              v-data-table(:headers="headersD" :items="designaciones" :items-per-page="5" class="elevation-1")
          v-tab-item(key="tab4")
            v-card-text.pb-1
              v-row(dense)
                v-col(cols="12" sm="2")
                  v-checkbox(v-model="sin_rda" color="red" label="Todos los distritos" class="mr-2")
                v-col(cols="12" sm="3")
                  v-select(v-model="coddis" :items="item_coddis" label="Distrito")
                v-col(cols="12" sm="1")
                  v-select(v-model="sup_gestion_registro" :items="item_sup_gestion" label="Gestión")
                v-col(cols="12" sm="1")
                  v-select(v-model="sup_mes_registro" :items="item_sup_mes" label="Mes")
              v-row(dense)   
                v-col(cols="12" sm="12")
                  v-btn(color="indigo" class="white--text mr-2 mt-1" small @click="search()") Designaciones             
                  v-btn(color="indigo" class="white--text mr-2 mt-1" small @click="search()") Observados
                  v-btn(color="indigo" class="white--text mr-2 mt-1" small @click="search()") Observados Sep
                  v-btn(color="indigo" class="white--text mr-2 mt-1" small @click="search()") Eliminados
                  v-btn(color="indigo" class="white--text mr-2 mt-1" small @click="search()") Eliminados-Sep
                  v-btn(color="indigo" class="white--text mr-2 mt-1" small @click="search()") Conclusiones Anticipadas
                  v-btn(color="indigo" class="white--text mr-2 mt-1" small @click="search()") Planilla de Seguimiento
                  v-btn(color="indigo" class="white--text mr-2 mt-1" small @click="search()") Solicitudes
              v-row(dense)
                v-col(cols="12" sm="12")
                  //v-card-text(style="position: relative;padding-bottom: 56.25%;height: 100%;overflow-y: hidden;")
                  v-card-text(style="position: relative;padding-bottom: 56.25%;height: 100%;overflow-y: hidden;")
                    iframe(:src="urlData",style="position: absolute;top:0;left: 0;width: 100%;height: 80%;",allowfullscreen)

          v-tab-item(key="tab5")
            v-card(flat)
              v-card-text(v-text="text")
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
      headers: [
        {
          text: 'Distrito',
          align: 'start',
          sortable: false,
          value: 'distrito',
        },
        { text: 'Periodo', value: 'num_solicitud' },
        { text: 'Form. Solicitud', value: 'carnet' },
        { text: 'Carnet', value: 'rda' },
        { text: 'Rda', value: 'nombre' },
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
