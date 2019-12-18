<template>
  <q-page class="flex flex-center q-pa-md bg-grey-10 text-white">
      <q-list dark bordered separator>
        <q-item clickable v-ripple to="/fortime">
          <q-item-section class="q-px-xl">For Time</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/amrap">
          <q-item-section class="q-px-xl">AMRAP</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/enom">
          <q-item-section class="q-px-xl">ENOM</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/tabata">
          <q-item-section class="q-px-xl">TABATA</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/custom">
          <q-item-section class="q-px-xl">Custom</q-item-section>
        </q-item>
      </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
