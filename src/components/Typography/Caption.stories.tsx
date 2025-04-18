// src/components/Typography/Caption.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { Caption } from './Caption';

const meta: Meta<typeof Caption> = {
  title: 'Typography/Caption',
  component: Caption,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This component is used for short descriptions or captions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Caption>;

// Default caption
export const Default: Story = {
  args: {
    children: 'This is a caption under a heading or form element.',
  },
};

// Caption with custom styling
export const CustomClass: Story = {
  args: {
    children: 'This is a custom styled caption.',
    className: 'text-sm text-gray-700 dark:text-gray-100',
  },
};
