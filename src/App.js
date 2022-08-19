import React, { createRef } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import resources from './fixtures/resources.json'
import events from './fixtures/events.json'


export default class DemoApp extends React.Component {
  render() {

  const calendarRef = createRef()

    return (
     
      <FullCalendar
        ref={calendarRef}
        schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
        plugins={[ dayGridPlugin, timeGridPlugin, resourceTimelinePlugin ]}
        initialView="dayGridMonth"
        events="https://fullcalendar.io/demo-events.json?single-day&with-nesting&for-resource-timeline"
        resources="https://fullcalendar.io/demo-resources.json?with-nesting&with-colors"
        customButtons={{
          myTimeDayBtn: {
            text: "timeDay",
            click() {
              const calendar = calendarRef.current;
              if (calendar) {
                const calendarApi = calendar.getApi();
                calendarApi.changeView('timeGridDay')
              }
            },
          },
          myTimeWeekBtn: {
            text: "timeWeek",
            click() {
              const calendar = calendarRef.current;
              if (calendar) {
                const calendarApi = calendar.getApi();
                calendarApi.changeView('timeGridWeek')
              }
            },
          },
          myTimelineDayBtn: {
            text: "timelineDay",
            click() {
              const calendar = calendarRef.current;
              if (calendar) {
                const calendarApi = calendar.getApi();
                calendarApi.changeView('resourceTimelineDay')
              }
            },
          },
          myTimelineWeekBtn: {
            text: "timelineWeek",
            click() {
              const calendar = calendarRef.current;
              if (calendar) {
                const calendarApi = calendar.getApi();
                calendarApi.changeView('resourceTimelineWeek')
              }
            },
          },
        }}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today,dayGridDay,dayGridWeek,dayGridMonth,myTimeDayBtn,myTimeWeekBtn,myTimelineDayBtn,myTimelineWeekBtn",
        }}
      />
   
  )
}}