import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Typography/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Use this component for labeling form elements like inputs, selects, etc.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// Default label
export const Default: Story = {
  args: {
    children: 'This is a default label for a form element.',
  },
};

// Label with custom styling
export const CustomClass: Story = {
  args: {
    children: 'This is a custom styled label.',
    className: 'text-xl font-bold text-gray-800 dark:text-gray-200',
  },
};

// Label with htmlFor linked to a form element
export const WithHtmlFor: Story = {
  args: {
    children: 'Label for the input field',
    htmlFor: 'inputField',
  },
};
