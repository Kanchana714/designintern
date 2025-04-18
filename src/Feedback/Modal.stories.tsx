import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

type StoryType = Story<typeof Modal>;

export const Default: StoryType = {
  args: {
    isOpen: true,
    title: 'Default Modal',
    children: <p>This is a simple modal.</p>,
    onClose: () => {},
  },
};

export const ModalWithContent: StoryType = {
  args: {
    isOpen: true,
    title: 'Modal with Content',
    children: (
      <div>
        <p>This modal has more complex content.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    ),
    onClose: () => {},
  },
};

export const ModalWithDynamicVisibility: StoryType = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Dynamic Modal">
        <p>This modal's visibility is controlled by a button.</p>
      </Modal>
    </div>
  );
};
