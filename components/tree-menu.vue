<template lang="pug">
v-list.custom-list.pa-0.ma-0
  template(v-for="node in items")
    V-list-group.custom-group(
      v-if="node.items && verificar(node.permiso)"
      :prepend-icon="node.icon"
      color="successLight"
      :group="node.path"
    )
      template(v-slot:activator)
        v-list-item-title.custom-text.font-weight-bold {{ node.title }}
      //-tree-menu( :class="{/"custom-depth/":depth === 1}" :items="node.items", :depth="1 + depth" style="border-style: solid; border: 0px; border-left: 15px !important")
      tree-menu(v-if="depth < 2" class="custom-depth" :items="node.items", :depth="1 + depth" style="border-style: solid; border: 0px; border-left: 15px !important")
      tree-menu(v-else :items="node.items", :depth="1 + depth" style="border-style: solid; border: 0px; border-left: 15px !important")
    v-list-item.custom-item.custom-select-text(
      v-else-if="typeof node.permiso == 'string' && verificar(node.permiso)",
      :prepend-icon="node.icon",
      :to="node.to",
      :href="node.href",
      target="blank",
      draggable="false"
    )
      v-list-item-icon.custom-action
        v-icon.custom-icon {{ node.icon }}
      v-list-item-title.custom-text.font-weight-regular {{ node.title }}
    v-list-item.custom-item.custom-select-text(
      v-else-if="typeof node.permiso != 'string' && verificar(node.permiso)",
      :prepend-icon="node.icon",
      :to="node.to",
      :href="node.href",
      target="blank",
      draggable="false"
    )
      v-list-item-icon.custom-action
        v-icon.custom-icon {{ node.icon }}
      v-list-item-title.custom-text.font-weight-regular {{ node.title }}
</template>
<style lang="stylus">
.custom-group
  div
    *
      .v-icon
        color var(--v-success-base) !important
  .v-list-item--active
    background-color #141D24 !important

// modifie to sub groups
.v-list-item--active * i
  color #42b983 !important

.custom-depth a
  background-color #141D24 !important
  //background-color rgba(0,0,0,0.3) !important

.custom-list
  padding 0px !important
  //background-color #00F !important

.custom-group .v-list__group__header .v-list__group__header__append-icon
  padding 0px 6px

.custom-text
  font-size 15px !important;
  white-space normal;
  height auto !important;
  line-height 130%

.custom-icon
  font-size 22px !important

.custom-select-text .primary--text
  /* background-color rgba(66, 185, 131, 0.07) !important
  color #42B983 !important */
  background-color var(--v-secondary-base) !important;
  color var(--v-success-base) !important

.custom-select-text .v-list__tile
  height auto !important;
  min-height 48px

.v-list__tile__action
  min-width 36px !important

.custom-tile .v-list__tile
  padding 8px 12px !important;
  height auto !important;
  min-height 48px

.theme--dark.v-list .v-list__tile--link:hover, .theme--dark.v-list .v-list__tile--highlighted, .theme--dark.v-list .v-list__group__header:hover
  background #4E6E8E;
  transition ease 0.5s !important

.v-list-item--link:before
  background-color #42b983 !important;
  transition ease 0s !important
</style>

<script>
export default {
  name: "tree-menu",
  props: ["items","depth"],
  methods: {
    /*verificar: function (permiso) {
      return this.$store.state.verificarPermiso(permiso);
    },*/
    verificar: persmiso => {
      return true
    }
  },
};
</script>
