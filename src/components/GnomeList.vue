<template>
  <div class="gnomeList">
    <div class="gnomeSearch">
      <input type="text" v-model="search" placeholder="Search by name"/>
    </div>
    <GnomeCard v-for="gnome in filteredItems" :key="gnome.id" :gnome='gnome'></GnomeCard>
  </div>
</template>


<script>
import GnomeCard from '@/components/GnomeCard.vue'

export default {
  name: 'GnomeList',
  props: {
    list: Array
  },
  data() {
    return {
      search: ''
    }
  },
  components: {
    GnomeCard
  },
  computed: {
    filteredItems() {
      return this.list.filter(item => {
         return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .gnomeList {
    width: fit-content;
    max-width: 1500px;
    margin: 0 auto;
    overflow: hidden;

    .gnomeSearch {
    
      input[type=text] {
        font-size: 22px;
        padding: 3px 5px;
        width: 400px;
        max-width: 90%;
        margin: 20px auto;
        border-radius: 3px;
      }
    }
  }
</style>
