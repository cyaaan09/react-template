import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

//import { logoutUser } from "../../store/actions";
import { logoutUser } from "../../features/user/userSlice";



//redux
import { useSelector, useDispatch } from "react-redux"

const Logout = props => {
  const dispatch = useDispatch()
  const pusher = useSelector((state) => state.pusher.pusherData)
  useEffect(() => {
    if (pusher) {
      pusher.allChannels().map((channel) => {
        pusher.unsubscribe(channel.name)
      })
    }
    dispatch(logoutUser({ 'history': props.history }))
  }, [dispatch])

  return <></>
}

Logout.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Logout)
