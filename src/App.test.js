import React from 'react';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const app = mount(<App />);
  expect(app).toBePresent();
});
