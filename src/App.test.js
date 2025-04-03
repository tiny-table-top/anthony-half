import { render, screen } from '@testing-library/react';
import App from './App';

test('first paragraph contains my name', () => {
    render(<App />);
    
    const paragraphs = screen.getAllByRole('paragraph');
    expect(paragraphs[0]).toHaveTextContent('Anthony Half');
  });