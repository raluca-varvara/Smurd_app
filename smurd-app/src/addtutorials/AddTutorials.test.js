import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddTutorials from './AddTutorials';

describe('<AddTutorials />', () => {
  test('it should mount', () => {
    render(<AddTutorials />);
    
    const addTutorials = screen.getByTestId('AddTutorials');

    expect(addTutorials).toBeInTheDocument();
  });
});