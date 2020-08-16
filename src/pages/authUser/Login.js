import React from 'react'

export default function Login () {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full'>
        <div>
          <img className='mx-auto h-12 w-auto' src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg' alt='Workflow' />
          <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
          Login no sistema
          </h2>
        </div>

        <form className='mt-8' action='#' method='POST'>

          <div className='rounded-md shadow-sm'>
            <div>
              <input aria-label='Email' name='email' type='email' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5' placeholder='Email' />
            </div>
            <div className='-mt-px pt-5'>
              <input aria-label='Senha' name='password' type='password' className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5' placeholder='Senha' />
            </div>
          </div>

          <div className='mt-6 flex items-right justify-end'>
            <div className='text-sm leading-5'>
              <a href='/#' className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'>
                Esqueceu sua Senha?
              </a>
            </div>
          </div>

          <div className='mt-6'>
            <button type='submit' className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
