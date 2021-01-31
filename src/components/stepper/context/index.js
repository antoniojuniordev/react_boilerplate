import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
const StepperContext = createContext(null)

export function StepperProvider ({ children }) {
  const STEP_INTERVAL = 1
  const [action, setAction] = useState('')
  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set())
  const [step, setStep] = useState(0)

  function isStepSkipped (stepSkipped) {
    return skipped.has(stepSkipped)
  }

  function isLastStep (currentStep) {
    return currentStep === step.length - STEP_INTERVAL
  }

  function handleNext () {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }
    setActiveStep((prevActiveStep) => {
      if (isLastStep(prevActiveStep)) return prevActiveStep
      return prevActiveStep + STEP_INTERVAL
    })
    setSkipped(newSkipped)
  }

  function handleBack () {
    setActiveStep((prevActiveStep) => prevActiveStep - STEP_INTERVAL)
  }

  function resetStepper () {
    setActiveStep(0)
  }

  function handleSwitchPageStepper () {
    switch (action) {
      case 'prev':
        handleBack()
        break
      case 'next':
        handleNext()
        break
      default:
        break
    }
  }

  return (
    <StepperContext.Provider
      value={{
        activeStep,
        isStepSkipped,
        setActiveStep,
        handleNext,
        handleBack,
        step,
        setStep,
        resetStepper,
        action,
        setAction,
        handleSwitchPageStepper
      }}
    >
      {children}
    </StepperContext.Provider>
  )
}
StepperProvider.propTypes = {
  children: PropTypes.any.isRequired
}
export default StepperContext
