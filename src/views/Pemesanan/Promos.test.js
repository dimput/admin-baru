import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Promos from './Promos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Promos /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
