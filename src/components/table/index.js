import React from 'react'
import PropTypes from 'prop-types'
import { usePromiseTracker } from 'react-promise-tracker'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, Box, Grid
} from '@material-ui/core'

import Paginate from 'components/pagination'
import Load from 'components/load'

function TableSimple ({ id, children, loading, cols, pagination, getDataNextPage }) {
  const { promiseInProgress } = usePromiseTracker({ area: id })
  const generalProgress = usePromiseTracker()
  return (
    <TableContainer component={Paper}>
      {loading || promiseInProgress || (generalProgress.promiseInProgress && !id) ? (
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {cols.map((col, index) => (
                <TableCell align='center' key={index}>{col.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      ) : (
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {cols.map((col, index) => (
                <TableCell align='center' key={index}>{col.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {children}
          </TableBody>
        </Table>
      )}
      {loading ? (
        <Box m={2}>
          <Load />
        </Box>
      ) : (
        <Box m={2}>
          <Grid
            container
            direction='row'
            justify='center'
          >
            {getDataNextPage
              ? (
                <Grid item>
                  {pagination ? (
                    <Paginate
                      getDataNextPage={getDataNextPage}
                      pagination={pagination}
                    />
                  ) : ''}
                </Grid>
              ) : ''}
          </Grid>
        </Box>
      )}
    </TableContainer>
  )
}
TableSimple.propTypes = {
  id: PropTypes.string,
  cols: PropTypes.array,
  children: PropTypes.any,
  loading: PropTypes.bool,
  pagination: PropTypes.object,
  handlePaginate: PropTypes.func,
  getDataNextPage: PropTypes.func
}
export default TableSimple
