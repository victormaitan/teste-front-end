<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-red-8">
        <q-toolbar-title class="q-ml-sm flex">
          Frontend Test/Anota AI
        </q-toolbar-title>
        <div>
          <q-btn
            standout
            label="Adicionar"
            class="bg-warning text-red-8 q-mr-md"
            icon-right="add"
            @click="$router.push({ name: 'Adicionar' })"
          />
        </div>
        <div>
          <q-btn
            flat
            label="Exit"
            icon-right="exit_to_app"
            @click="$router.push({ name: 'Login' })"
          />
        </div>
      </q-toolbar>
      <q-toolbar class="bg-warning text-white shadow-2" style="height: 80px">
        <div class="col-4 flex justify-center">
          <q-btn
            :class="classProducts"
            flat
            no-caps
            label="Todos"
            style="width: 300px"
            @click="menu('todos')"
          />
        </div>
        <div class="col-4 flex justify-center">
          <q-btn
            :class="classBurgers"
            flat
            no-caps
            label="Burgers"
            style="width: 300px"
            @click="menu('burgers')"
          />
        </div>
        <div class="btn col-4 flex justify-center">
          <q-btn
            :class="classPizzas"
            flat
            no-caps
            label="Pizzas"
            style="width: 300px"
            @click="menu('pizzas')"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      classProducts: 'bg-grey-3 text-black',
      classBurgers: 'bg-red-8 text-white',
      classPizzas: 'bg-red-8 text-white'
    }
  },
  methods: {
    menu (id) {
      switch (id) {
        case 'todos': {
          this.classProducts = 'bg-grey-3 text-black'
          this.classBurgers = 'bg-red-8 text-white'
          this.classPizzas = 'bg-red-8 text-white'
          this.$router.push({ name: 'Index' })
          break
        }
        case 'burgers': {
          this.classProducts = 'bg-red-8 text-white'
          this.classBurgers = 'bg-grey-3 text-black'
          this.classPizzas = 'bg-red-8 text-white'
          this.$router.push({ name: 'Burgers' })
          break
        }
        case 'pizzas': {
          this.classProducts = 'bg-red-8 text-white'
          this.classBurgers = 'bg-red-8 text-white'
          this.classPizzas = 'bg-grey-3 text-black'
          this.$router.push({ name: 'Pizzas' })
          break
        }
      }
    }
  }
}
</script>

<style scoped>
.active,
.btn:hover {
  color: white;
}
</style>
