<<<<<<< HEAD


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
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
