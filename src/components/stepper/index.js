import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Stepper, makeStyles, Step, StepLabel, Grid } from '@material-ui/core'

import Button from 'components/form/button'
import StepperContext from 'components/stepper/context'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  containerStepper: {
    padding: '0px!important',
    margin: '0px!important'
  },
  containerRoot: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(0)
  }
}))

function StepperController ({ steps = [], children }) {
  const classes = useStyles()
  const {
    activeStep,
    isStepSkipped,
    setStep,
    setAction
  } = useContext(StepperContext)

  useEffect(() => {
    setStep(steps)
  }, [steps, setStep])

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map(({ label }, index) => {
          const stepProps = {}
          const labelProps = {}
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel className={classes.containerStepper} {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}

      </Stepper>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.containerRoot}>
          {children[activeStep]}
        </Grid>
        <Grid container item xs={12} justify='space-between'>
          <Grid item xl={2} md={2} sm={12} xs={12}>
            {
              steps[activeStep].prev !== false
                ? (
                  <Button
                    disabled={activeStep === 0}
                    name='Voltar'
                    type='submit'
                    onClick={() => setAction('prev')}
                    form={steps[activeStep].formAction}
                    id='actionStepperPrev'
                    className={classes.button}
                  />
                )
                : ''
            }
          </Grid>
          <Grid item xl={2} md={2} sm={12} xs={12}>
            {
              steps[activeStep].save !== false
                ? (
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    onClick={() => setAction('save')}
                    form={steps[activeStep].formAction}
                    id='actionStepperSave'
                    className={classes.button}
                    name='Salvar'
                  />
                )
                : ''
            }

          </Grid>
          <Grid item xl={2} md={2} sm={12} xs={12}>
            {
              steps[activeStep].next !== false
                ? (
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    onClick={() => setAction('next')}
                    form={steps[activeStep].formAction}
                    className={classes.button}
                    id='actionStepperNext'
                    name={activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                  />
                )
                : ''
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
StepperController.propTypes = {
  steps: PropTypes.array.isRequired,
  children: PropTypes.any.isRequired
}
export default StepperController
