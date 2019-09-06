<template>
    <div class="cardContainer">
      <div class="card">
        <h2>{{gnome.name}}</h2>
        <h3>Professions</h3>
        <ol><li v-for="p in gnome.professions" :key="p">{{p}}</li></ol>
        <a :href="'/detail/' + gnome.id">Gnome details</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'GnomeCard',
  props: {
    gnome: {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cardContainer {
  width: 25%;
  float: left;

  .card {
    margin: 10px 5px;
    padding: 10px;
    border: 1px solid;
  }
}
</style>
