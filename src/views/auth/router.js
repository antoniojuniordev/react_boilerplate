import { lazy, Suspense } from 'react'

import { BaseAuthLayout } from 'core/layouts/BaseAuth'

const Login = lazy(() => import('./pages/login'))
// const NewUser = lazy(() => import('./pages/new-user'))
// const ResetPassword = lazy(() => import('./pages/reset-password'))
// const NewPassword = lazy(() => import('./pages/new-password'))

export default [
  {
    path: '/',
    element: <BaseAuthLayout />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<>...</>}>
            <Login />
          </Suspense>
        )
      }
      // {
      //   path: 'new',
      //   element: (
      //     <Suspense fallback={<>...</>}>
      //       <NewUser />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: 'reset-password',
      //   element: (
      //     <Suspense fallback={<>...</>}>
      //       <ResetPassword />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: 'new-password',
      //   element: (
      //     <Suspense fallback={<>...</>}>
      //       <NewPassword />
      //     </Suspense>
      //   )
      // }
    ]
  }
]
