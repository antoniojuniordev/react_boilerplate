import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink, useLocation } from 'react-router-dom'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: '#d1d5da'
  },
  basic: {
    backgroundColor: '#d1d5da'
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

function MenuMountList (props) {
  const { menu } = props
  const classes = useStyles()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  useEffect(() => {
    if (menu.subMenu) {
      const link = menu.subMenu.filter((item) => item.link === location.pathname)
      if (link.length === 1) { setOpen(true) }
      if (location.pathname === menu.subMenu.link) setOpen(true)
    }
  }, [location.pathname, menu.link, menu.subMenu])
  return (
    <>
      {menu.subMenu ? (
        <>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              {menu.icon}
            </ListItemIcon>
            <ListItemText primary={menu.name} />
            {open ? <FaAngleUp /> : <FaAngleDown />}
          </ListItem>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {menu.subMenu.map(({ link, name, icon }, index) => (
                <ListItem
                  key={index}
                  button
                  to={link}
                  component={NavLink}
                  className={`${classes.nested} ${location.pathname === link ? classes.active : classes.basic}`}
                >
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <ListItem
          button
          key={props.menu.name}
          component={NavLink}
          to={props.menu.link}
          className={location.pathname === props.menu.link ? classes.active : ''}
        >
          <ListItemIcon>
            {props.menu.icon}
          </ListItemIcon>
          <ListItemText primary={props.menu.name} />
        </ListItem>
      )}

    </>
  )
}

export default MenuMountList
