<template>
  <v-app id="dayspan">
    <ds-calendar-app :calendar="calendar" @change="saveState" v-model="status"></ds-calendar-app>
  </v-app>
</template>

<script>
import { Calendar } from 'dayspan';

export default {
  name: 'Calendrier',
  data: () => ({
    calendar: Calendar.months()
  }),
  methods:{
    saveState(st){
      console.log(st.calendar.events)
      console.log("ST", status)
      st.calendar.events.forEach((e) => {
        console.log(e.data)
      });

    }
  }
}
</script>

<style>

body, html, #app, #dayspan {
  font-family: Roboto, sans-serif;
  width: 100%;
  height: 100%;
}
</style>
