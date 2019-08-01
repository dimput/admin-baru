import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme'
import Promo from './Promo';


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Promo match={{params: {id: "1"}, isExact: true, path: "/Promos/:id", name: "Promo details"}}/>
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Samppa Nori</strong>)).toEqual(true)
  wrapper.unmount()
});
