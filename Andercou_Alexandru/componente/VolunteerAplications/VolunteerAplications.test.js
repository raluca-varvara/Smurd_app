import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VolunteerAplications from './VolunteerAplications';

describe('<VolunteerAplications />', () => {
  test('it should mount', () => {
    render(<VolunteerAplications />);
    
    const volunteerAplications = screen.getByTestId('VolunteerAplications');

    expect(volunteerAplications).toBeInTheDocument();
  });
});