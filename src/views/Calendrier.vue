<template>
  <v-app id="dayspan" v-cloak>

    <ds-calendar-app ref="app"
    :calendar="calendar"
    :read-only="readOnly"
    @change="saveState">

    <template slot="title">
      DaySpan
    </template>

    <template slot="menuRight">
      <v-btn icon large >
        <!-- href="https://github.com/ahmadissa/dayspan-vuetify-2" target="_blank"-->
        <!-- <v-avatar size="32px" tile>
        <img src="https://simpleicons.org/icons/github.svg" alt="Github">
      </v-avatar> --> .
    </v-btn>
  </template>

  <template slot="eventPopover" slot-scope="slotData">
    <ds-calendar-event-popover
    v-bind="slotData"
    :read-only="readOnly"
    @finish="saveState"
    ></ds-calendar-event-popover>
  </template>

  <template slot="eventCreatePopover" slot-scope="{placeholder, calendar}">
    <ds-calendar-event-create-popover
    :calendar-event="placeholder"
    :calendar="calendar"
    :close="$refs.app.$refs.calendar.clearPlaceholder"
    @create-edit="$refs.app.editPlaceholder"
    @create-popover-closed="saveState"
    ></ds-calendar-event-create-popover>
  </template>

  <template slot="eventTimeTitle" slot-scope="{calendarEvent, details}">
    <div>
      <v-icon class="ds-ev-icon"
      v-if="details.icon"
      size="14"
      :style="{color: details.forecolor}">
      {{ details.icon }}
    </v-icon>
    <strong class="ds-ev-title">{{ details.title }}</strong>
  </div>
  <div class="ds-ev-description">{{ getCalendarTime( calendarEvent ) }}</div>
</template>

<template slot="drawerBottom">
  <div class="pa-3">
    <v-checkbox
    label="Read Only?"
    v-model="readOnly"
    ></v-checkbox>
  </div>
</template>

</ds-calendar-app>

</v-app>
</template>

<script>
import GroupMixin from '@/mixins/GroupMixin'
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc   = new FC( auth )

import { Calendar/*, Weekday, Month*/ } from 'dayspan';
import Vue from 'vue';
export default {
  name: 'app',
  mixins: [GroupMixin],
  async created(){
    if(this.$route.query.url != undefined){
      this.url = this.$route.hash != undefined? this.$route.query.url+this.$route.hash : this.$route.query
      this.update()
    }

  },
  data: () => ({
    storeKey: 'dayspanState',
    calendar: Calendar.months(),
    readOnly: false,
    // defaultEvents: [
    //   {
    //     data: {
    //       title: 'Weekly Meeting',
    //       color: '#3F51B5'
    //     },
    //     schedule: {
    //       dayOfWeek: [Weekday.MONDAY],
    //       times: [9],
    //       duration: 30,
    //       durationUnit: 'minutes'
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'First Weekend',
    //       color: '#4CAF50'
    //     },
    //     schedule: {
    //       weekspanOfMonth: [0],
    //       dayOfWeek: [Weekday.FRIDAY],
    //       duration: 3,
    //       durationUnit: 'days'
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'End of Month',
    //       color: '#000000'
    //     },
    //     schedule: {
    //       lastDayOfMonth: [1],
    //       duration: 1,
    //       durationUnit: 'hours'
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'Mother\'s Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.MAY],
    //       dayOfWeek: [Weekday.SUNDAY],
    //       weekspanOfMonth: [1]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'New Year\'s Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.JANUARY],
    //       dayOfMonth: [1]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'Inauguration Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.JANUARY],
    //       dayOfMonth: [20]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'Martin Luther King, Jr. Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.JANUARY],
    //       dayOfWeek: [Weekday.MONDAY],
    //       weekspanOfMonth: [2]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'George Washington\'s Birthday',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.FEBRUARY],
    //       dayOfWeek: [Weekday.MONDAY],
    //       weekspanOfMonth: [2]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'Memorial Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.MAY],
    //       dayOfWeek: [Weekday.MONDAY],
    //       lastWeekspanOfMonth: [0]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'Independence Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.JULY],
    //       dayOfMonth: [4]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'Labor Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.SEPTEMBER],
    //       dayOfWeek: [Weekday.MONDAY],
    //       lastWeekspanOfMonth: [0]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'Columbus Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.OCTOBER],
    //       dayOfWeek: [Weekday.MONDAY],
    //       weekspanOfMonth: [1]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'Veterans Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.NOVEMBER],
    //       dayOfMonth: [11]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'Thanksgiving Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.NOVEMBER],
    //       dayOfWeek: [Weekday.THURSDAY],
    //       weekspanOfMonth: [3]
    //     }
    //   },
    //   {
    //     data: {
    //       title: 'Christmas Day',
    //       color: '#2196F3',
    //       calendar: 'US Holidays'
    //     },
    //     schedule: {
    //       month: [Month.DECEMBER],
    //       dayOfMonth: [25]
    //     }
    //   }
    // ]
  }),
  mounted()
  {
    window.app = this.$refs.app;
    //this.loadState();
  },
  methods:
  {
    async update(){
      this.st = await this.getGroupStorage(this.url)
      //console.log(this.st)
      if (this.st != undefined){
        this.loadState();
      }
    },
    getCalendarTime(calendarEvent)
    {
      let sa = calendarEvent.start.format('a');
      let ea = calendarEvent.end.format('a');
      let sh = calendarEvent.start.format('h');
      let eh = calendarEvent.end.format('h');
      if (calendarEvent.start.minute !== 0)
      {
        sh += calendarEvent.start.format(':mm');
      }
      if (calendarEvent.end.minute !== 0)
      {
        eh += calendarEvent.end.format(':mm');
      }
      return (sa === ea) ? (sh + ' - ' + eh + ea) : (sh + sa + ' - ' + eh + ea);
    },
    async saveState()
    {
      let state = this.calendar.toInput(true);
      let json = JSON.stringify(state);
      //console.log('calendar',json)
      //  localStorage.setItem(this.storeKey, json);
      if (this.st != undefined){
        try{
          //  createFile( fileURL, content, contentType, options )
          await fc.createFile(this.st.url+'calendrier.json', json, 'text/x-json')
        }catch(e){
          alert("Désolé, Impossible d'enregitrer le calendrier à l'adresse "+ this.st)
        }
      }
    },
    async loadState()
    {
      let state = {};
      try
      {
        //console.log("READ",this.st.url)
        let json = await fc.readFile(this.st.url+'calendrier.json')
        let savedState = JSON.parse(json)
        //let savedState = JSON.parse(localStorage.getItem(this.storeKey));
        if (savedState)
        {
          state = savedState;
          state.preferToday = false;
        }
      }
      catch (e)
      {
        // eslint-disable-next-line
        console.log( e );
      }
      // if (!state.events || !state.events.length)
      // {
      //   state.events = this.defaultEvents;
      // }
      state.events.forEach(ev =>
        {
          let defaults = this.$dayspan.getDefaultEventDetails();
          ev.data = Vue.util.extend( defaults, ev.data );
        });
        this.$refs.app.setState( state );
      }
    }
  }
  </script>

  <style>
  body, html, #app, #dayspan {
    font-family: Roboto, sans-serif !important;
    width: 100%;
    height: 100%;
  }
  .v-btn--flat,
  .v-text-field--solo .v-input__slot {
    background-color: #f5f5f5 !important;
    margin-bottom: 8px !important;
  }
  </style>
