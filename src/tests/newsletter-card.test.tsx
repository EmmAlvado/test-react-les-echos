import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsletterCard from '../components/moleculs/newsletter-card';

describe('NewsletterCard', () => {
  it('should render correctly with an image', () => {
    render(
      <NewsletterCard
        imageUrl="https://via.placeholder.com/150"
        title="Test Title"
        description="Test Description"
        hasSubscribed={false}
      />
    );

    expect(screen.getByAltText('Test Title')).toBeInTheDocument();
    expect(screen.getByTestId('card-title')).toBeInTheDocument();
    expect(screen.getByTestId('card-description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: "S'abonner" })).toBeInTheDocument();
  });

  it('should render correctly without an image', () => {
    render(
      <NewsletterCard
        title="Test Title"
        description="Test Description"
        hasSubscribed={false}
      />
    );

    expect(screen.getByTestId('placeholder')).toBeInTheDocument();
    expect(screen.getByTestId('card-title')).toBeInTheDocument();
    expect(screen.getByTestId('card-description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: "S'abonner" })).toBeInTheDocument();
  });

  it('should display subscription button when not subscribed', () => {
    render(
      <NewsletterCard
        title="Test Title"
        description="Test Description"
        hasSubscribed={false}
      />
    );

    expect(screen.getByRole('button', { name: "S'abonner" })).toBeInTheDocument();
  });

  it('should display inscription button when subscribed', () => {
    render(
      <NewsletterCard
        title="Test Title"
        description="Test Description"
        hasSubscribed={true}
      />
    );

    expect(screen.getByRole('button', { name: "S'inscrire" })).toBeInTheDocument();
  });
});