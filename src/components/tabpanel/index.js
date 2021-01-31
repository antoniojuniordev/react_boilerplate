import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'

function TabPanel ({ children, value, index, ...other }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      <Box style={{ minHeight: '30vw' }} p={1} pt={3}>
        {children}
      </Box>
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.any,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  other: PropTypes.any
}
export default TabPanel
