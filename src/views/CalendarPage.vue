<template>
  <div>
    <room-header></room-header>
    <calendar-form></calendar-form>
  </div>
</template>

<script>
import RoomHeader from '@/components/common/RoomHeader.vue';
import CalendarForm from '@/components/CalendarForm.vue';
export default {
  components: {
    CalendarForm,
    RoomHeader,
  },
};
</script>

<style></style>
