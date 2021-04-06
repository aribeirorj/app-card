import React from 'react';

import { Card } from '../../../components';

export default {
  title: 'app-Card/Components/Card',
  component: Card,
};

const Template = (args) => <Card dataCard={args} />;

export const CardView = Template.bind({});

CardView.args = {};
