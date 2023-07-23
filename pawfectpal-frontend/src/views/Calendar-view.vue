<template lang="html">
  <div class="container rounded-4 pt-4 px-1 pb-3 mt-5" >
    <div class="mx-3 m-auto pt-5" style="color:black" >
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
  color: black;
}
.fc-col-header-cell-cushion {
  color: black;
  
}
.fc-event-time {
  color: #8B9D83;
}

.fc-event-title {
  color: black;
 
}
.fc-dayGridWeek-button.fc-button.fc-button-primary.fc-button-active {
  background-color:#8B9D83;
  border-color:#8B9D83; 
}
.fc-dayGridWeek-button.fc-button.fc-button-primary {
  background-color:#515751;
  border-color:#515751;
}
.fc-dayGridMonth-button.fc-button.fc-button-primary.fc-button-active {
  background-color:#8B9D83;
  border-color:#8B9D83 ;

}
.fc-dayGridMonth-button.fc-button.fc-button-primary {
  background-color:#515751;
  border-color:#515751 ;

}
.fc-prev-button.fc-button.fc-button-primary{
  background-color:#8B9D83;
  border-color:#8B9D83 ;
}
.fc-next-button.fc-button.fc-button-primary{
  background-color:#515751;
  border-color:#515751 ;
}
.fc-toolbar-title{
  padding: auto;
  text-align: center;
}


</style>
