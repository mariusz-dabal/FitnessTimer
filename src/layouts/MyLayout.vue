<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          <router-link to="/" class="titleLink">Fitness Timer</router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-10"
      class="bg-grey-10"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item
          clickable
          to="/fortime">
          <q-item-section>
            <q-item-label>FOR TIME</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          to="/amrap">
          <q-item-section>
            <q-item-label>AMRAP</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          to="/enom">
          <q-item-section>
            <q-item-label>ENOM</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          to="/tabata">
          <q-item-section>
            <q-item-label>TABATA</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          to="/custom">
          <q-item-section>
            <q-item-label>CUSTOM</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style scoped>
  .titleLink,
  :active,
  :visited {
    color: #fff;
    text-decoration: none;
  }
</style>
