<template>
  <div class="home">
    <Loader />
    <GnomeList :list="gnomes" v-if="!this.$store.state.loading"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GnomeList from '@/components/GnomeList.vue'
import Loader from '@/components/Loader.vue'
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      gnomes: [],
    }
  },
  components: {
    GnomeList,
    Loader
  },
  created () {
    this.$store.commit('isLoading');
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then((response) => {
        this.gnomes = response.data.Brastlewark;
        this.$store.commit('loaded');
      });  
    }
  }
}
</script>
