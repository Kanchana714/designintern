import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;

type StoryType = Story<typeof Toast>;

export const Default: StoryType = {
  args: {
    message: 'This is a default toast message.',
    type: 'info',
  },
};

export const SuccessToast: StoryType = {
  args: {
    message: 'This is a success message!',
    type: 'success',
  },
};

export const ErrorToast: StoryType = {
  args: {
    message: 'This is an error message.',
    type: 'error',
  },
};

export const WarningToast: StoryType = {
  args: {
    message: 'This is a warning message.',
    type: 'warning',
  },
};

export const ToastWithDuration: StoryType = () => {
  const [showToast, setShowToast] = useState(true);

  return (
    <div>
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      {showToast && (
        <Toast message="This toast will disappear after 3 seconds." type="info" duration={3000} />
      )}
    </div>
  );
};
