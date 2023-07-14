<template lang="html">
  <div class="container border rounded-4 pt-4 px-1 pb-5 mt-5" id="green-banner">
    <div class="mx-0 mb-5 mt-5 pt-2" style="color: white">
      <FullCalendar :options="calendarOptions" />
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
// import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data: function () {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,dayGridWeek",
        },
        navLinks: true,
        weekends: true,
        events: [{ title: "", start: new Date("July 17, 2023 03:24:00") }],
      },
    };
  },
};
</script>
<style lang="css">
.fc-daygrid-day-number {
  color: white;
}
.fc-col-header-cell-cushion {
  color: white;
}

.fc-event-time {
  color: white;
}

.fc-event-title {
  color: white;
}
</style>
