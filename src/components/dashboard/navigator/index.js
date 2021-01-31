import React from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import menuDirector from 'components/dashboard/navigator/menuDirector'
import MenuMountList from 'components/dashboard/navigator/menuMountList'

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  itemCategory: {
    backgroundColor: theme.palette.CustomPrimary.dark,
    boxShadow: `0 -1px 0 ${theme.palette.CustomPrimary.dark} inset`,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  firebase: {
    fontSize: 23,
    color: theme.palette.common.white
  },
  itemPrimary: {
    fontSize: 'inherit'
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(2)
  }
})
function Navigator (props) {
  const { classes, ...other } = props
  const drawer = (
    <div>
      <List>
        {menuDirector.map((menu, index) => (
          <MenuMountList menu={menu} key={index} />
        ))}
      </List>
    </div>
  )

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.itemCategory)}>
          GenericForms
        </ListItem>
        {drawer}
      </List>
    </Drawer>
  )
}

export default withStyles(styles)(Navigator)
