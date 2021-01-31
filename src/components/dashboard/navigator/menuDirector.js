import React from 'react'

import { FaHome, FaProjectDiagram, FaClipboardList, FaCode, FaCodeBranch } from 'react-icons/fa'

const sideMenu = [
  {
    name: 'Home',
    icon: <FaHome />,
    link: '/dashboard'
  },
  {
    name: 'Simples',
    icon: <FaProjectDiagram />,
    link: '/simples'
  },
  {
    name: 'Test',
    icon: <FaClipboardList />,
    subMenu: [
      {
        name: 'Test 1',
        icon: <FaCode />,
        link: '/test1'
      },
      {
        name: 'Test 2',
        icon: <FaCodeBranch />,
        link: '/test2'
      }
    ]
  }
]

export default sideMenu
