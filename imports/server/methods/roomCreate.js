import { Rooms, Messages, Read} from "/imports/collections"

Meteor.methods({
  roomCreate() {
    const user = Meteor.user()
    const userId = user._id
    const nickName = user.username
    const avatarImg = user.avatarImg
    const message = nickName+`님이 생성하셨습니다`
    const time = new Date()
    const room_data = {
      lastUserId: userId,
      lastUserName: nickName,
      lastUserAvatar: avatarImg,
      lastMessage: message,
      updateAt : time,
      joiner: [userId]
    }
    const roomId = Rooms.insert(room_data)

    const messageData = {
      createAt: time,
      notice: true,
      message,
      userId,
      nickName,
      avatarImg,
      roomId
    }

    const readData = {
      readAt: time,
      roomId,
      userId
    }

    Messages.insert(messageData)
    Read.insert(readData)
    return roomId
  }
})