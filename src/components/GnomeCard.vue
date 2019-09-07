<template>
    <div class="cardContainer">
      <div class="card">
        <h2>{{gnome.name}}</h2>
        <div v-if="gnome.professions.length">
          <h3>Professions</h3>
          <ol><li v-for="p in getProfesions(gnome)" :key="p">{{p}}</li></ol>
        </div>
        <a :href="'/#/detail/' + gnome.id">Gnome details</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'GnomeCard',
  props: {
    gnome: {}
  },
  methods: {
    getProfesions: (g) => {
      let professions = g.professions.slice(0, 3);
      if (g.professions.length > 3) {
        professions.push(" ...");
      }
      return professions;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cardContainer {
  width: 25%;
  float: left;

  .card {
    background-color: #ffffff;
    position: relative;
    margin: 5px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    border-radius: 5px;
    height: 155px;

    h3 {
      margin-top: 15px;
    }

    ol {
      width: fit-content;
      overflow: hidden;
      margin: 0 auto;

      li {
      float: left;

        &:before {
          content: "-";
          margin: 0 2px 0 8px;
        }
      }
    }

    a {
      position: absolute;
      width: 100%;
      bottom: 10px;
      left: 0;
    }
  }
}

@media (max-width:1365px) {
  .cardContainer {
    width: 33.33%;
  }
}

@media (max-width:1023px) {
  .cardContainer {
    width: 50%;
  }
}

@media (max-width:719px) {
  .cardContainer {
    width: 100%;
  }
}
</style>
