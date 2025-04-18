<<<<<<< HEAD



# designintern
Design System - Internship Assignment
This repository contains the Design System built using React, TypeScript, TailwindCSS, and Storybook. It includes reusable components like Modals, Buttons, Toasts, and more, providing a scalable, consistent UI design pattern for future use.

Table of Contents
Project Overview

Installation

Usage

Components

Modal Component

Other Components

Storybook


Project Overview
--------------------------------
This Design System serves as a foundation for building consistent and reusable components for React applications. The components are created with accessibility, responsiveness, and theming support in mind, using the following technologies:

React for component-based architecture

TypeScript for type safety

TailwindCSS for responsive, utility-first styling

Storybook for interactive component documentation

The goal is to ensure that developers can easily pick up and reuse UI components without having to worry about design consistency.

Installation
--------------------------------------------------------
To get started, clone the repository and install dependencies:

Step 1: Clone the repository
bash
Copy code
git clone https://github.com/Kanchana714/designintern.git
Step 2: Install dependencies
Once you've cloned the repository, navigate to the project folder and install dependencies using npm or yarn:

bash
Copy code
cd designintern
npm install
Alternatively, if you're using yarn:

bash
Copy code
yarn install
Step 3: Run Storybook
For development and interactive component previews, you can run Storybook:

bash
Copy code
npm run storybook
Or, if you're using yarn:

bash
Copy code
yarn storybook
Storybook will open in your browser, and you can view the components live.

Step 4: Start the project
To run the project and see changes in your application:

bash
Copy code
npm start
Or with yarn:

bash
Copy code
yarn start
Usage
Once the design system is installed, you can import and use the components in your React projects. For example:

Example usage of the Modal component:
-----------------------------------------------------------
javascript
Copy code
import React, { useState } from 'react';
import { Modal } from 'designsystem';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <Modal title="Confirmation" onClose={toggleModal} type="confirmation">
          <p>Are you sure you want to continue?</p>
          <button onClick={toggleModal}>Yes</button>
          <button onClick={toggleModal}>No</button>
        </Modal>
      )}
    </div>
  );
};

export default App;
Example usage of the Toast component:
javascript
Copy code
import React, { useState } from 'react';
import { Toast } from 'designsystem';

const App = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      {showToast && (
        <Toast message="Action successful!" type="success" duration={3000} />
      )}
    </div>
  );
};

export default App;

Components
Modal Component
The Modal component is a reusable dialog box that can be used for confirmations, error messages, success alerts, etc. It is customizable and supports different types of modals.

Props
Prop	Type	Description
title	string	The title of the modal.
onClose	function	A callback function to close the modal.
type	string	Type of the modal (e.g., confirmation, info, error).
children	ReactNode	The content displayed inside the modal.
isOpen	boolean	Controls whether the modal is visible or not.
Usage
javascript
Copy code
<Modal title="Confirmation" onClose={toggleModal} type="confirmation">
  <p>Are you sure you want to proceed?</p>
  <button onClick={toggleModal}>Yes</button>
  <button onClick={toggleModal}>No</button>
</Modal>
Available Types:
confirmation: For confirmation dialogs (e.g., Yes/No buttons).

info: For informational messages.

error: For error messages.

success: For success notifications.

Storybook
------------------------------------------
Storybook serves as an interactive documentation tool for the design system. It allows you to see live previews of components with different props, states, and types.

To view the component library and interact with components, open Storybook by running:

bash
Copy code
npm run storybook
>>>>>>> 9591787 (Create README.md)
