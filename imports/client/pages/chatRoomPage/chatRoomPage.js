import {FlowRouter} from "meteor/ostrio:flow-router-extra";

Template.chatRoomPage.events({
  "click .chat-room-back":function(){
    FlowRouter.go("/roomList")
  }
})