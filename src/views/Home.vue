<template>
  <div class="home">
    <GnomeList :list="gnomes" />
  </div>
</template>

<script>
// @ is an alias to /src
import GnomeList from '@/components/GnomeList.vue'
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      gnomes: []
    }
  },
  components: {
    GnomeList
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then((response) => {
        this.gnomes = response.data.Brastlewark;
      });  
    }
  }
}
</script>
