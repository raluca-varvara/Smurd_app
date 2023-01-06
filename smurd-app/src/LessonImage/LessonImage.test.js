import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LessonImage from './LessonImage';

describe('<LessonImage />', () => {
  test('it should mount', () => {
    render(<LessonImage />);
    
    const lessonImage = screen.getByTestId('LessonImage');

    expect(lessonImage).toBeInTheDocument();
  });
});