import axios from 'axios';

const config = {
  baseUrl: 'http://localhost:8081',
};

function signUp(payload) {
  return axios.post(`${config.baseUrl}/signup`, payload);
}
function newRoom(payload) {
  return axios.post(`${config.baseUrl}/room`, payload);
}
function addTodo(payload) {
  return axios.post(`${config.baseUrl}/todolist`, {
    title: payload.title,
    createdAt: payload.createdAt,
    calendarId: payload.calendarId,
  });
}
function inviteToken(payload) {
  return axios.patch(`${config.baseUrl}/rooms/invite`, {
    inviteUrl: payload.token,
  });
}
export { signUp, newRoom, addTodo, inviteToken };
