<template>
  <q-page class="flex flex-center column full-width bg-grey-10 text-white">
    <div class="text-h1">{{ timeCap }}</div>
    <q-input dark standout v-model="text" label="Time Cap" :readonly="readonly" :disable="disable">
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <q-btn
      color="black"
      class="full-width"
      label="count"
    @click="countTime"/>
  </q-page>
</template>

<script>
export default {
  name: 'Timer',
  data () {
    return {
      timeCap: 10
    }
  },
  methods: {
    countTime () {
      setInterval(() => {
        if (this.timeCap > 0) {
          this.timeCap--
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
