// 1명 이상 참여중인 방 리스트 노출
// 읽음/안읽음/참여/미참여 표시
//방누르면 그방으로

import {Rooms, Read} from "/imports/collections"
import {FlowRouter} from "meteor/ostrio:flow-router-extra";


Template.roomListPage.onCreated(function () {
  this.subscribe("roomList")
  this.subscribe("readInfo")
})

Template.roomListPage.helpers({
  room_list() {
    return Rooms.find({})
  },
  listDate(date){
    return date.toLocaleString()
  },
  // readInfo(){
  //
  // }
})

Template.roomListPage.events({
  "click .making-room-btn": function () {
    Meteor.call('roomCreate',(error, roomId)=>{
      FlowRouter.go('/chatRoom/' + roomId)
    })
  },
  "click .logout-btn":function(){
    Meteor.logout()
    FlowRouter.go('/signIn')
  }
})
