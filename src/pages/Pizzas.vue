<template>
  <q-page class="flex flex-start">
    <div class="row q-ma-sm q-my-md justify-center full-width">
      <q-card
        class="col-md-3 col-lg-4 q-ma-xs"
        v-for="(product, id) in pizzas"
        :key="product"
        style="max-width: 300px;"
      >
        <q-img :src="product.picture" />
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ product.title }}
            </div>
          </div>

          <q-rating
            v-model="product.stars"
            @click="updateRating()"
            :max="5"
            size="32px"
          />
          <q-btn
            fab
            color="red-6"
            icon="delete"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
            @click="removeProductsItem(id)"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">${{ product.price }}</div>
          <div class="text-caption text-grey">
            {{ product.description }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Pizzas',
  data () {
    return {
      pizzas: []
    }
  },
  mounted () {
    this.getPizzas()
  },
  methods: {
    getPizzas () {
      this.pizzas = JSON.parse(window.localStorage.getItem('pizzas'))
    },

    updateRating () {
      window.localStorage.setItem('pizzas', JSON.stringify(this.pizzas))
    },

    removeProductsItem (id) {
      const index = id
      if (index > -1) {
        this.pizzas.splice(index, 1)
        window.localStorage.setItem('pizzas', JSON.stringify(this.pizzas))
      }
    }
  }
}
</script>
