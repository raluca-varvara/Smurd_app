import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterBox from './FilterBox';

describe('<FilterBox />', () => {
  test('it should mount', () => {
    render(<FilterBox />);
    
    const filterBox = screen.getByTestId('FilterBox');

    expect(filterBox).toBeInTheDocument();
  });
});