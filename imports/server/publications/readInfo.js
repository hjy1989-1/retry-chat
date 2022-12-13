import { Read } from "/imports/collections"

Meteor.publish('readInfo',function(){
  return Read.find({

  })
})