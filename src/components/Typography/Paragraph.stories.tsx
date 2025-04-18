// import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This component is used for paragraphs and body text. It supports responsive behavior and dark mode.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

// Default paragraph
export const Default: Story = {
  args: {
    children: 'This is a default paragraph with body text.',
  },
};

// Paragraph with custom styling
export const CustomClass: Story = {
  args: {
    children: 'This is a paragraph with custom styling.',
    className: 'text-lg font-bold text-blue-900 dark:text-red-900',
  },
};

// Responsive paragraph (sm: for small screen, md: for medium, etc.)
export const Responsive: Story = {
  args: {
    children: 'This paragraph adjusts based on screen size.',
    className: 'text-sm sm:text-base md:text-lg',
  },
};

// 👇 Add this line to fix the isolatedModules error
export {};
