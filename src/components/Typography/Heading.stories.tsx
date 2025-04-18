import React from 'react';
import Heading from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
};

export const H1 = () => <Heading level={1}>Heading 1</Heading>;
export const H2 = () => <Heading level={2}>Heading 2</Heading>;
export const H3 = () => <Heading level={3}>Heading 3</Heading>;
