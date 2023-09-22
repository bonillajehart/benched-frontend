import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { App, WrappedApp } from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('renders home as the default landing page', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT

    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home');
  });

  it('renders not found on bad route', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Not found.'
    );
  });
});
