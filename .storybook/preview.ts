import type { Preview } from "@storybook/react";
import "../src/index.css"; // Import your Tailwind or global CSS

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' }, // Tailwind dark background (gray-900)
      ],
    },
  },
};

export default preview;
