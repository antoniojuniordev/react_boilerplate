import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { destroySession, getSession } from 'api/helpers/storage/localStorage'
const lightColor = 'rgba(255, 255, 255, 0.7)'

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing(1)
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  },
  avatar: {
    backgroundColor: '#9DA0A6'
  }
})

function Header ({ classes, onDrawerToggle, title, history }) {
  const [anchorEl, setAnchorEl] = useState(false)
  const open = Boolean(anchorEl)
  const user = getSession()
  const name = user.sessionPayload.name ? user.sessionPayload.name.split(' ') : ''

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  function logout () {
    destroySession()
    history.push('/')
  }

  return (
    <>
      <AppBar color='secondary' position='sticky' elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems='center'>
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item>
              {title}
            </Grid>
            <Grid item xs />
            <Grid item>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                className={classes.iconButtonAvatar}
              >
                <Avatar color='text.disabled' className={classes.avatar}>{name.length > 0 ? name[0].slice(0, 2) : name}</Avatar>
              </IconButton>
              <Menu id='menu-appbar' anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} className={classes.menu}>
                <MenuItem onClick={logout}>Sair</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
  title: PropTypes.string,
  history: PropTypes.any.isRequired
}

export default withStyles(styles)(Header)
