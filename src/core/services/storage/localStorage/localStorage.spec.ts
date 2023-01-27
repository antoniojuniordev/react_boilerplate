import typeStorage from './types'
import { getSession, destroySession } from './'

describe('local storage', () => {
  test('getSession is empty', () => {
    const session = getSession()
    expect(typeof session === 'object').toBeTruthy()
  })

  test('getSession is not empty', () => {
    window.localStorage.setItem(
      typeStorage.session,
      JSON.stringify({ test: true })
    )
    const session = getSession<{ test: boolean }>()
    expect(session?.test).toBeTruthy()
  })

  test('getSession catch', () => {
    window.localStorage.setItem(typeStorage.session, '[')
    const session = getSession<string>()
    expect(session).toBeTruthy()
  })

  test('destroySession clear storage', () => {
    destroySession()
    const session = window.localStorage.getItem(typeStorage.session)
    expect(session === null).toBeTruthy()
  })

  test('destroySession window redirect', () => {
    global.window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://test.com/test'
      }
    })
    destroySession()
    expect(window.location.href === '/').toBeTruthy()
  })
})
