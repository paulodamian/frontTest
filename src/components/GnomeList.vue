<template>
  <div class="gnomeList">
    <input type="text" v-model="search" />
    <GnomeCard v-for="gnome in filteredItems" :gnome='gnome' :key="gnome.id"></GnomeCard>
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
         return item.name.indexOf(this.search) > -1
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
