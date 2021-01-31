import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import PropTypes from 'prop-types'

function Paginate ({ pagination, getDataNextPage }) {
  function handlePaginate (event, value) {
    getDataNextPage(value)
  }
  return <Pagination count={pagination.totalPages} page={pagination.current_page} onChange={handlePaginate} />
}

Paginate.propTypes = {
  pagination: PropTypes.object.isRequired
}

export default Paginate
