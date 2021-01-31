import React from 'react'
import Body from 'components/dashboard/body'
import PropTypes from 'prop-types'
function Home ({ title, history }) {
  return (

    <Body history={history} title={title}>
      <h3>Home</h3>
    </Body>
  )
}
Home.propTypes = {
  title: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}
export default Home
