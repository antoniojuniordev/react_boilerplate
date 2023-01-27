import { useForm } from 'react-hook-form'
import Form from 'core/components/form'
import Button from 'core/components/button'
import Input from 'core/components/form/input'
import { SignInProps } from 'views/auth/model/auth'
import z, { validateZod } from 'core/components/form/zod'

import * as Styled from './styles'
import apiFetch from 'core/services/api'

export default function Login() {
  const form = useForm<SignInProps>({
    defaultValues: {
      email: '',
      password: ''
    },
    ...validateZod({
      email: z.string().min(1, { message: 'Rec' }).email({ message: 'Email' }),
      password: z.string()
    })
  })

  async function onSubmit() {
    const response = await apiFetch({ method: 'get', url: 'user' })
    console.log(response)
  }

  return (
    <Styled.Container>
      <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
        <Styled.CardHeard className='mb-small'>
          <h1 className='text-large'>Sign in</h1>
          <p className=''>Your Social Campaigns</p>
        </Styled.CardHeard>

        <Input className='my-xxsmall' placeholder='Email' name='email' />
        <Input className='my-xxsmall' placeholder='Password' name='password' />

        <Button className='mt-small' color='primary' name='Sign in' block />

        <div>
          <p className='mr-1'>Not a Member yet?</p>
        </div>
      </Form>
      <Button
        className='mt-small'
        color='primary'
        name='Request'
        block
        onClick={() => onSubmit()}
      />
    </Styled.Container>
  )
}
