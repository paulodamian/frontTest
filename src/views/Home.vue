<template>
  <div class="home">
    <Loader v-if="loading" />
    <GnomeList :list="gnomes" v-if="!loading"/>
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
      loading: true
    }
  },
  components: {
    GnomeList,
    Loader
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then((response) => {
        this.gnomes = response.data.Brastlewark;
        this.loading = false;
      });  
    }
  }
}
</script>
