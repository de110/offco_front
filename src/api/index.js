import axios from 'axios';

const config = {
  baseUrl: 'http://localhost:8080',
};

function signUp(payload) {
  return axios.post(`${config.baseUrl}/api/signup`, payload);
}
function newRoom(payload) {
  return axios.post(`${config.baseUrl}/api/room`, payload);
}
function addTodo(payload) {
  return axios.post(`${config.baseUrl}/api/todolist`, {
    title: payload.title,
    createdAt: payload.createdAt,
    calendarId: payload.calendarId,
  });
}
function inviteToken(payload) {
  return axios.patch(`${config.baseUrl}/api/rooms/${payload.id}`, {
    inviteUrl: payload.token,
  });
}
export { signUp, newRoom, addTodo, inviteToken };
