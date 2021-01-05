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
            @click="dialogAdd = true"
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

    <q-dialog v-model="dialogAdd" persistent>
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Adicionar</div>
        </q-card-section>

        <q-card-section class="q-gutter-sm">
          <div class="q-gutter-sm">
            <q-radio
              color="red-8"
              v-model="typeAdd"
              val="burgers"
              label="Burgers"
            />
            <q-radio
              color="red-8"
              v-model="typeAdd"
              val="pizzas"
              label="Pizzas"
            />
          </div>
          <q-input filled v-model="product.title" label="Nome" />
          <q-input filled v-model="product.description" label="Descrição" />
          <q-input filled v-model="product.picture" label="Link da imagem" />
          <q-input filled type="number" v-model="product.price" label="Preço" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn class="text-red-8" flat label="Cancelar" v-close-popup />
          <q-btn
            class="text-green-6"
            flat
            label="Adicionar"
            @click="add()"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      classProducts: 'bg-grey-3 text-black',
      classBurgers: 'bg-red-8 text-white',
      classPizzas: 'bg-red-8 text-white',

      dialogAdd: false,
      product: {
        id: '',
        picture: '',
        title: '',
        stars: 0,
        price: 0,
        description: ''
      },

      typeAdd: ''
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
    },

    add () {
      const arrayBurgers = JSON.parse(window.localStorage.getItem('burgers'))
      const arrayPizzas = JSON.parse(window.localStorage.getItem('pizzas'))

      if (this.typeAdd === 'burgers') {
        this.product.id = arrayBurgers.length
        arrayBurgers.push(this.product)
        window.localStorage.setItem('burgers', JSON.stringify(arrayBurgers))
        this.concatProducts()
      } else if (this.typeAdd === 'pizzas') {
        this.product.id = arrayPizzas.length
        arrayPizzas.push(this.product)
        window.localStorage.setItem('pizzas', JSON.stringify(arrayPizzas))
        this.concatProducts()
      }
    },

    concatProducts () {
      function randOrd () {
        return Math.round(Math.random()) - 0.5
      }
      const array = JSON.parse(window.localStorage.getItem('burgers')).concat(
        JSON.parse(window.localStorage.getItem('pizzas'))
      )
      array.sort(randOrd)
      this.products = array
      window.localStorage.setItem('products', JSON.stringify(this.products))
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
