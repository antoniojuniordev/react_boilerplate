import { Story, ComponentMeta } from '@storybook/react'
import Button, { PropsButton } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    name: 'title default'
  }
} as ComponentMeta<typeof Button>

export const Basic: Story<PropsButton> = (args) => <Button {...args} />
Basic.args = {
  name: 'title default'
}

export const Default: Story<PropsButton> = (args) => <Button {...args} />
