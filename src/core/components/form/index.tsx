import React from 'react'
import { FormProvider, FormProviderProps } from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormProps extends FormProviderProps<any, any> {
  children: React.ReactNode
  onSubmit: () => void
}

function Form({ children, onSubmit, ...methods }: FormProps) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  )
}

export default Form
