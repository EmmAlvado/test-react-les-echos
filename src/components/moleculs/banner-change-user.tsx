import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setUserSubscription } from '../../store/actions';

interface ChangeUserBannerProps {
  userSubscription: string[];
}

const ChangeUserBanner: React.FC<ChangeUserBannerProps> = ({ userSubscription }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeSubscription = (subscriptions: string[]) => {
    dispatch(setUserSubscription(subscriptions));
  };

  return (
    <div className="change-user-banner">
      <label>
        <input
          type="radio"
          name="subscription"
          checked={userSubscription.length === 0}
          onChange={() => handleChangeSubscription([])}
        />
        Aucun abonnement
      </label>
      <label>
        <input
          type="radio"
          name="subscription"
          checked={userSubscription.includes('RIGHT_1') && !userSubscription.includes('RIGHT_2')}
          onChange={() => handleChangeSubscription(['RIGHT_1'])}
        />
        Abonnement RIGHT_1
      </label>
      <label>
        <input
          type="radio"
          name="subscription"
          checked={userSubscription.includes('RIGHT_1') && userSubscription.includes('RIGHT_2')}
          onChange={() => handleChangeSubscription(['RIGHT_1', 'RIGHT_2'])}
        />
        Abonnement RIGHT_1 et RIGHT_2
      </label>
    </div>
  );
};

export default ChangeUserBanner;
