import { Template } from "meteor/templating";

Template.signInPage.onRendered(function () {
  const userId = localStorage.getItem("userId")
  const userInput = this.find('#chat-user-id')
  const checkbox = this.find('#id-switch');

  userInput.value = userId
  checkbox.checked = Boolean(userId)
})

Template.signInPage.events({
  "click .login-btn": function (evt, ins) {
    login_info(evt, ins)
  },
  'keyup .login-info': function (evt, ins) {
    if (evt.keyCode === 13) {
      login_info(evt, ins);
    }
  }
})

function login_info(evt, ins) {

  const userId = ins.find('#chat-user-id').value
  const password = ins.find('#chat-user-password').value
  const checked = ins.find('#id-switch').checked;

  (!userId || !password) && alert("빠짐없이 입력해주세요")

  userId && password &&
  Meteor.loginWithPassword(userId, password, function (error) {

    if (!error) {
      Meteor.logoutOtherClients()
      alert("로그인 성공")
      if (checked) {
        localStorage.setItem("userId", userId)
      } else {
        localStorage.removeItem("userId")
      }
    } else {
      alert("아이디, 패스워드를 확인해주세요")
    }
  })
}