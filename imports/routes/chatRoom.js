import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { notUserRedirect } from '/imports/util/routeEnter'

FlowRouter.route('/chatRoom/:roomId', {
  name: 'chatRoom',
  triggersEnter: [notUserRedirect],
  async action() {
    await import('/imports/client/pages/chatRoomPage')
    this.render('baseLayout', 'chatRoomPage')
  },
})

// test pr