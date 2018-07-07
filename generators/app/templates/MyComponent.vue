<template>
  <div class='<%= name %>'>
    <%= name %>
  </div>
</template>

<script>
export default {
  name: '<%= name %>',
  props: {
  }
};
</script>

<style scoped>
.<%= name %> {
}
</style>
