<template>
  <div class="modal" :class="{'active': true }">>
    <div class="overlay" @click="$emit('close')"></div>
    <div class="modal-card">
      <h1>TODAY</h1>
        <p>{{ this.$store.state.Calendar.year }}.{{ this.$store.state.Calendar.month }}.{{ this.$store.state.Calendar.day }}</p>
        <input type="text" v-model="newTodo">
        <span class="addContainer" v-on:click="addTodo">
          <i class="far fa-plus-square add"></i>
        </span>
        <div class="todo">
          <ul>
          <li v-for="(todo, index) in todo" :key="index">
            <i class="far fa-calendar-check check"></i>
            {{todo.title}}
          </li>
        </ul>
        </div>
        
        <!-- <button  v-on:click="addTodo">등록</button> -->
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newTodo: '',
            todos: [],
            id: null
        }
    },
    created() {
        this.id = this.$route.params.id
        this.init();
    },
    computed: {
      todo() {
        return this.$store.getters.showTodo
      }
    },
    methods: {
        init() {
            this.$store.dispatch('getTodo', this.id)
        },
        addTodo() {
            const todoItem = this.newTodo;
            if (!todoItem) return;

            const newTodoItem = {
                title: todoItem,
                createdAt: this.$store.state.Calendar.year+"-"+this.$store.state.Calendar.month+"-"+this.$store.state.Calendar.day,
                calendarId: this.id
            };
            this.$store.dispatch("addTodo", newTodoItem);
            this.newTodo = "";
        },
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
h1 {
  margin: 0 auto;
  margin-top: 3vh;
  font-family: 'Gothic A1', sans-serif;
  font-size: 3em;
  font-weight: normal;

}
p {
  padding: 0 auto;
  margin: 0 auto;
  font-family: 'Gothic A1', sans-serif;
  font-size: 1.5em;
  margin-bottom: 3.2vh;
}
input {
  width: 70vw;
  height: 6.2vh;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 15px;
}
.addContainer {
  position: relative;
    /* float: right; */
     display: inline-block;
     
    /* left: 10vh; */
    /* width: 3rem; */
    /* border-radius: 0 5px 5px 0; */
}
.add {
  font-size: 1.9em;
  position: absolute;
  right: 5vw;
  bottom: -0.9vh;
  
  /* left:40vh;
  top: -4vh; */
}
.todo {
  
  margin: auto;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 15px;
  width: 70vw;
  height: 51vh;
  margin-top: 3vh;
  background-color: white;
  z-index: 10;
}
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    font-family: 'Gothic A1', sans-serif;
    display: flex;
    /* min-height: 1vh; */
    height: 5vh;
    
    /* line-height: 50px; */
    
    margin-left: 1.2em ;
    padding-top: 1.9vh;
    padding-bottom: 1.1vh;
    /* padding-left: 7vw; */
    /* text-decoration-color : red; */
    border-bottom: 1px solid black;
    width: 57vw;
    display: block;
    font-size: 1.9em;
}
.check {
  margin-right: 6px;
  /* font-size: 2em; */
}


/* Modal */
.modal,
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 88vw;
  margin: auto;
  margin-top: 8vh;
  padding-top: 2vh;
  /* padding: 20px; */
  background-color: rgb(254, 249, 239);
  border-radius: 15px;
  min-height: 80vh;
  z-index: 10;
  opacity: 1;
}
</style>