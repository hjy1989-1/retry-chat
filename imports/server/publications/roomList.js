import { Rooms } from "/imports/collections"

Meteor. publish('roomList',function(){
  return Rooms.find({

  })
})