import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MockUpApplicationVerification from './MockUpApplicationVerification';

describe('<MockUpApplicationVerification />', () => {
  test('it should mount', () => {
    render(<MockUpApplicationVerification />);
    
    const mockUpApplicationVerification = screen.getByTestId('MockUpApplicationVerification');

    expect(mockUpApplicationVerification).toBeInTheDocument();
  });
});