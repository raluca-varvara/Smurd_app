import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FirstAidLessons from './FirstAidLessons';

describe('<FirstAidLessons />', () => {
  test('it should mount', () => {
    render(<FirstAidLessons />);
    
    const firstAidLessons = screen.getByTestId('FirstAidLessons');

    expect(firstAidLessons).toBeInTheDocument();
  });
});