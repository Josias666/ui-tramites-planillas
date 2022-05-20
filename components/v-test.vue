<template lang="pug">
v-card(color="orange lighten-4")
  v-card-text
    v-btn(@click="showNewInfo") Click me
</template>

<script>
export default {
  props:['callback'],
  methods:{
    showNewInfo(){
      //this.$parent.$parent.showAlert()
      this.callback();
    }
  }
}
</script>
