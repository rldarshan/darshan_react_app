import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import {App} from '../components/App';

describe('App Component', () => {
  // test('renders form fields correctly', () => {
  //   render(<App />);

  //   expect(screen.getByLabelText(/image/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  // });

  test('updates form fields on change', () => {
    render(<App />);

    const imageUrlInput = screen.getByLabelText(/image/i);
    const cityInput = screen.getByLabelText(/city/i);
    const titleInput = screen.getByLabelText(/title/i);
    const nameInput = screen.getByLabelText(/name/i);

    fireEvent.change(imageUrlInput, { target: { value: 'http://example.com/image.jpg' } });
    fireEvent.change(cityInput, { target: { value: 'Bengaluru' } });
    fireEvent.change(titleInput, { target: { value: 'My Title' } });
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    expect(imageUrlInput.value).toBe('http://example.com/image.jpg');
    expect(cityInput.value).toBe('Bengaluru');
    expect(titleInput.value).toBe('My Title');
    expect(nameInput.value).toBe('John Doe');
  });

  // test('submits form with correct data', () => {
  //   render(<App />);

  //   const imageUrlInput = screen.getByLabelText(/image/i);
  //   const cityInput = screen.getByLabelText(/city/i);
  //   const titleInput = screen.getByLabelText(/title/i);
  //   const nameInput = screen.getByLabelText(/name/i);
  //   // const submitButton = screen.getByRole('button', { name: /submit/i });

  //   fireEvent.change(imageUrlInput, { target: { value: 'http://example.com/image.jpg' } });
  //   fireEvent.change(cityInput, { target: { value: 'Bengaluru' } });
  //   fireEvent.change(titleInput, { target: { value: 'My Title' } });
  //   fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  //   // fireEvent.click(submitButton);

  //   expect(imageUrlInput.value).toBe('http://example.com/image.jpg');
  //   expect(cityInput.value).toBe('Bengaluru');
  //   expect(titleInput.value).toBe('My Title');
  //   expect(nameInput.value).toBe('John Doe');

  //   // You can add more assertions to verify form submission behavior
  // });
});
