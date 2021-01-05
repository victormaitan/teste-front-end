<template>
  <q-page class="flex flex-start">
    <div class="row q-ma-sm q-my-md justify-center full-width">
      <q-card
        class="col-md-3 col-lg-4 q-ma-xs"
        v-for="(product, id) in burgers"
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
  name: 'Burgers',
  data () {
    return {
      burgers: []
    }
  },
  mounted () {
    this.getBurgers()
  },
  methods: {
    getBurgers () {
      this.burgers = JSON.parse(window.localStorage.getItem('burgers'))
    },

    updateRating () {
      window.localStorage.setItem('burgers', JSON.stringify(this.burgers))
    },

    removeProductsItem (id) {
      const index = id
      if (index > -1) {
        this.burgers.splice(index, 1)
        window.localStorage.setItem('burgers', JSON.stringify(this.burgers))
      }
    }
  }
}
</script>
