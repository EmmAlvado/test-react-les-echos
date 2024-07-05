import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { NEWSLETTER_ITEMS } from './mocks/newsletters';
import NewsletterCard from './components/moleculs/newsletter-card';
import HeaderInsert from './components/moleculs/header-insert';
import SectionTitle from './components/moleculs/section-title';
import GridComponent from './components/atoms/grid';
import ChangeUserBanner from './components/moleculs/banner-change-user';

const Page: React.FC = () => {
  const userSubscription = useSelector((state: RootState) => state.userSubscription.userSubscription);

  const cards = NEWSLETTER_ITEMS.map(item => {
    const hasSubscribed = item.subscriptions.some(subscription => userSubscription.includes(subscription));
    return (
      <NewsletterCard
        key={item.id}
        imageUrl={item.image}
        title={item.title}
        description={item.description}
        hasSubscribed={hasSubscribed}
      />
    );
  });

  return (
    <main>
      <section className="container">
        <HeaderInsert title="Newsletters">
          Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters.
        </HeaderInsert>
        <SectionTitle title="Les Echos" />
        <GridComponent items={cards} />
      </section>
      <ChangeUserBanner userSubscription={userSubscription} />
    </main>
  );
};

export default Page;
