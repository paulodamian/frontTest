<template>
  <div class="gnomeDetail">
    <Loader v-if="loading" />
    <div v-if="!loading" class="container">
      <div class="header">
        <img :src="gnome.thumbnail" />
        <!-- I am using a table just because the data that I have to show has a table structure -->
        <table>
          <tr v-for="(f, index) in fields" :key="index">
            <td>{{f}}</td>
            <td>{{gnome[f]}}</td>
          </tr>
          <tr v-if="gnome.professions.length">
            <td>Professions</td>
            <td><span class="profession" v-for="(prof, index) in gnome.professions" :key="index">{{prof}}</span></td>
          </tr>
          <tr v-if="gnome.friends.length">
            <td>Friends</td>
            <td><span class="friends" v-for="(friend, index) in gnome.friends" :key="index">{{friend}}</span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Loader.vue'

export default {
  name: 'gnomeDetail',
  data() {
    return {
      gnome: {},
      fields: ['name', 'age', 'weight', 'height', 'hair_color'],
      loading: true
    }
  },
  components: {
    Loader
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      //This request is just to emulate a real application fetching the endpoint to retrive a particular instance of an object
      axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then((response) => {
        this.gnome = response.data.Brastlewark.find(item => {
          this.loading = false;
          return item.id == this.$route.params.id
        })
      });  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 33%;
  min-width: 310px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  overflow: hidden;
  margin: 0 auto 30px;

  .header {
    img {
      width: 100%;
      display: block;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 18px;

    tr {
      td {
        border: 1px solid;
        padding: 5px;

        .profession, .friends {
          &:after {
            content: ", ";
          }
          &:last-child {
            &:after {
              content: "";
            }
          }
        }

        &:first-child {
          font-weight: bold;
        }
      }
    }
  }
}
</style>

