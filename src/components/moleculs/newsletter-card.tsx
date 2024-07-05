import React from 'react';
import Button from '../atoms/button';

interface NewsletterCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  hasSubscribed: boolean;
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({ imageUrl, title, description, hasSubscribed }) => {
  const buttonType = hasSubscribed ? 'inscription' : 'subscription';

  return (
    <div className="newsletter-card" data-testid="newsletter-card">
      <div className="newsletter-card__image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="newsletter-card__image" />
        ) : (
          <div className="newsletter-card__placeholder" data-testid="placeholder">
            <span className="newsletter-card__placeholder-text">{title}</span>
          </div>
        )}
        {!imageUrl && (
          <span className="newsletter-card__title-overlay">{title}</span>
        )}
      </div>
      <div className="newsletter-card__title" data-testid="card-title">{title}</div>
      <p className="newsletter-card__description" data-testid="card-description">{description}</p>
      <Button type={buttonType}>
        {hasSubscribed ? "S'inscrire" : "S'abonner"}
      </Button>
    </div>
  );
};

export default NewsletterCard;
