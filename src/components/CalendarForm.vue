<template>
  <div>
    <div class="border">
      <div class="header">
        <i
          class="fas fa-angle-left arrowLeft"
          @click="controlMonth('prev')"
        ></i>
        <h2>{{ year }}.{{ month }}</h2>
        <i
          class="fas fa-angle-right arrowRight"
          @click="controlMonth('next')"
        ></i>
      </div>

      <table>
        <thead>
          <th v-for="day in days" :key="day">{{ day }}</th>
        </thead>
        <tbody>
          <tr v-for="(date, idx) in dates" :key="idx">
            <td
              v-for="(day, index) in date"
              :key="index"
              :class="{}"
              @click="clickDate(day)"
              class="pointer"
            >
              {{ day }}
              <div
                v-if="getMatchedTodos(day).length > 0 && !isPrevDates(day, idx)"
              >
                <div v-for="(todo, idx) in getMatchedTodos(day)" :key="idx">
                  {{ todo.title }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <modal v-show="showModal" :open="showModal" @close="showModal = false">
      <todo-list></todo-list>
    </modal>
  </div>
</template>

<script>
import TodoList from './TodoList.vue';
import Modal from './common/Modal.vue';
export default {
  components: {
    TodoList,
    Modal,
  },
  data() {
    return {
      days: ['일', '월', '화', '수', '목', '금', '토'],
      dates: [],
      year: 0,
      month: 0,
      currentDate: new Date().getDate(),
      currentYear: 0,
      currentMonth: 0,
      clickDay: 0,
      prevDate: [],
      previewDate: [],
      showModal: false,
      id: null,
    };
  },
  computed: {
    isCurrentDate() {
      let status = false;
      if (this.currentYear === 0 && this.currentMonth === 0) {
        status = true;
      } else {
        status =
          this.currentYear === new Date().getFullYear() &&
          this.currentMonth === new Date().getMonth() + 1;
      }
      return status;
    },
  },
  created() {
    this.init();
    this.$store.commit('initTodo');
    // this.id = this.$route.params.id;
  },
  methods: {
    init(param) {
      if (param) {
        this.year = param[0];
        this.month = param[1];
        this.calendarDate();
      } else {
        const date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.calendarDate();
      }
    },
    calendarDate() {
      const [
        monthFirstDay,
        monthLastDate,
        prevMonthLastDate,
      ] = this.getFirstDayLastDate(this.year, this.month);
      this.dates = this.getDaysOfMonth(
        monthFirstDay,
        monthLastDate,
        prevMonthLastDate,
      );
    },
    getFirstDayLastDate(year, month) {
      const firstDay = new Date(year, month - 1, 1).getDay();
      const lastDate = new Date(year, month, 0).getDate();
      let lastMonth = month - 1;
      if (month === 1) {
        lastMonth = 12;
        year -= 1;
      }
      const prevLastDate = new Date(year, lastMonth, 0).getDate();
      return [firstDay, lastDate, prevLastDate];
    },
    getDaysOfMonth(monthFirstDay, monthLastDate, prevMonthLastDate) {
      let day = 1;
      let prevDay = prevMonthLastDate - monthFirstDay + 1;
      let dates = [];
      let daysOfWeek = [];
      while (day <= monthLastDate) {
        if (day === 1) {
          this.getPrevDates(monthFirstDay, daysOfWeek, prevDay);
          this.padDates(daysOfWeek);
        }
        if (daysOfWeek.length === 7) {
          dates.push(daysOfWeek);
          day = daysOfWeek[daysOfWeek.length - 1];
          daysOfWeek = [];
        } else if (
          daysOfWeek.length < 7 &&
          daysOfWeek.indexOf(monthLastDate) > -1
        ) {
          this.padDates(daysOfWeek);
          dates.push(daysOfWeek);
          break;
        }
        day++;
        if (daysOfWeek.length <= 7) {
          daysOfWeek.push(day);
        }
      }
      return dates;
    },
    getPrevDates(monthFirstDay, daysOfWeek, prevDay) {
      for (let j = 0; j < monthFirstDay; j++) {
        daysOfWeek.push(prevDay);
        this.prevDate.push(prevDay);
        prevDay += 1;
      }
    },
    padDates(daysOfWeek) {
      const len = daysOfWeek.length;
      const leftDays = 7 - len;
      if (len >= 0 && len < 7) {
        for (let i = 1; i <= leftDays; i++) {
          daysOfWeek.push(i);
          if (this.previewDate.length < leftDays) this.previewDate.push(i);
        }
      }
    },
    controlMonth(p) {
      if (p === 'prev') {
        this.currentMonth = this.month - 1;
        this.currentYear = this.year;
        if (this.month === 1) {
          this.currentMonth = 12;
          this.currentYear = this.year -= 1;
        }
      } else {
        this.currentMonth = this.month + 1;
        this.currentYear = this.year;
        if (this.month === 12) {
          this.currentMonth = 1;
          this.currentYear = this.year += 1;
        }
      }
      const param = [this.currentYear, this.currentMonth];
      this.init(param);
    },
    getMatchedTodos(day) {
      return this.$store.state.Calendar.todos.filter(todo => {
        const todoDate = new Date(todo.createdAt);
        const isDateMatched = todoDate.getDate() === day;
        const isMonthMatched = todoDate.getMonth() === this.month - 1;
        const isYearMathced = todoDate.getFullYear() === this.year;
        return isDateMatched && isMonthMatched && isYearMathced;
      });
    },
    isPrevDates(day, idx) {
      return (
        (this.prevDate.indexOf(day) > -1 && idx < 1) ||
        (this.previewDate.indexOf(day) > -1 && idx > 1)
      );
    },
    clickDate(day) {
      this.showModal = !this.showModal;
      this.$store.commit('clickDate', {
        year: this.year,
        month: this.month,
        day: day,
      });
    },
    // clearAll() {
    //   this.$store.commit('clearAll');
    // },
    // back() {
    //   this.$router.push('/roomhome/' + this.id);
    // },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kite+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
div {
  font-size: 10px;
  text-align: center;
  /* position: relative; */
  margin: 0 auto;
}
.top {
  /* width: 100vw; */
  height: 9vh;
  background-color: rgb(255, 134, 94);
  font-size: 5.3vh;
  color: white;
  font-family: 'Kite One', sans-serif;
  text-align: center;
  padding-left: 3vw;
  /* margin-bottom: 1.6vh; */
  /* position: relative;
    display: inline-block; */
}
.left {
  left: 4vw;
  top: 2vh;
  position: absolute;
}
/* h1 {
    display: inline-block;
    font-family: 'Kite One', sans-serif;
    font-weight: lighter;
    background-color: rgb(255, 134, 94);
    color: white;
    font-size: 3em;
    width: 100vw;
    height: 9vh;
    margin: 0 auto;
    padding-top: 0.1em;

  } */
h2 {
  justify-content: center;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  font-size: 3em;
  margin-top: 0.3em;
  color: rgb(28, 31, 34);
}
.border {
  border: 1px solid rgb(162, 210, 255);
  border-radius: 15px;
  margin-top: 0.8em;
  width: 93vw;
  height: 87vh;
  background-color: white;
}
.header {
  position: relative;
  justify-content: center;
  text-align: center;
  /* padding: 0 auto; */
}
.arrowLeft {
  position: absolute;
  justify-content: center;
  left: 10vw;
  top: -0.4vh;
  font-size: 4em;
  color: rgb(28, 31, 34);
}
.arrowRight {
  position: absolute;
  justify-content: center;
  right: 10vw;
  bottom: -0.5vh;
  font-size: 4em;
  color: rgb(28, 31, 34);
}
.back {
  left: 6vw;
  top: 2.5vh;
  position: absolute;
}
table {
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;
  width: 90vw;
  height: 73.5vh;
  font-family: 'Gothic A1', sans-serif;
  font-size: 1.25em;
  table-layout: fixed;
  /* border-bottom: 1px solid rgba(28, 31, 34, 0.5); */
  /* border-spacing: 20px 30px; */
}
th {
  border-bottom: 0.5px solid rgba(86, 112, 138, 0.5);
}

td {
  border-bottom: 0.5px solid rgba(28, 31, 34, 0.5);
  /* padding: 20px;
  font-size: 20px; */
  vertical-align: top;
}
th:nth-child(1) {
  color: rgb(255, 36, 66);
}
th:nth-child(7) {
  color: rgb(61, 178, 255);
}
.pointer {
  cursor: pointer;
}
</style>
