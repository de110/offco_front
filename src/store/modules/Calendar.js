//Calendar.vue, TodoList.vue vuex
import axios from 'axios'

const Calendar = {
      state: {
        year: '',
        month: '',
        day: '',
        todos: [],
        showtodos: []

    },
    mutations: {
        initTodo(state) {
            state.todos = []
        },
        clickDate(state, payload) {
            state.year = payload.year;
            state.month = payload.month;
            state.day = payload.day;
        },
        addNewTodo(state, todoItem) {
            state.todos.push(todoItem);
            localStorage.setItem("userTodos", JSON.stringify(state.todos));
        },
        clearAll(state) {
            localStorage.clear();
            state.todos = [];
            }


    },
    actions: {
        addTodo({ commit }, payload) {
            //title: 할일, createdAt: 날짜, caleendarId: 방별ID
            axios.post(`${'http://localhost:8000'}/todolist`, {
                title: payload.title,
                createdAt: payload.createdAt,
                calendarId: payload.calendarId

            }).then((res) => {
                commit('addNewTodo', res.data);
            })
        },
        getTodo({ commit }, payload) {
            //해당방ID를 payload로 받음
             axios.get(`${'http://localhost:8000'}/todolist?calendarId=${payload}`)
            .then((res) => {
                let i;
                for(i=0; i<res.data.length; i++) {
                    commit('addNewTodo', res.data[i])
                }
            })
        }


    }, 
    getters: {
        showTodo: state => {
            return state.todos.filter(todo => todo.createdAt == state.year+"-"+state.month+"-"+state.day)
        }

    }
   
}
export default Calendar