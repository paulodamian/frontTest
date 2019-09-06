<template>
  <div class="gnomeDetail">
    {{gnome}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'gnomeDetail',
  data() {
    return {
      gnome: {}
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      //This request is just to emulate a real application fetching the endpoint to retrive a particular instance of an object
      axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then((response) => {
        this.gnome = response.data.Brastlewark.find(item => {
          return item.id == this.$route.params.id
        })
      });  
    }
  }
}
</script>
