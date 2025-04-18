// components/Checkbox.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A reusable, accessible Checkbox component with theming, state handling, and ARIA support.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const Template = (args: any) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
  render: Template,
  args: {
    id: 'chk-default',
    label: 'Default Checkbox',
    checked: false,
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    id: 'chk-disabled',
    label: 'Disabled Checkbox',
    checked: false,
    disabled: true,
  },
};

export const ErrorState: Story = {
  render: Template,
  args: {
    id: 'chk-error',
    label: 'Checkbox with Error',
    checked: false,
    error: true,
  },
};

export const LargeSize: Story = {
  render: Template,
  args: {
    id: 'chk-large',
    label: 'Large Checkbox',
    checked: true,
    size: 'lg',
  },
};
