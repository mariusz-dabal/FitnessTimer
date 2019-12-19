<template>
  <q-page class="flex flex-center">
    <h1>For Time</h1>
    <Timer></Timer>
  </q-page>
</template>

<script>
import Timer from '../components/Timer'

export default {
  name: 'ForTime',
  components: { Timer }
}
</script>
