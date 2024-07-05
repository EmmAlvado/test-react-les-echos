import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ChangeUserBanner from '../components/moleculs/banner-change-user';
import { setUserSubscription } from '../store/actions';

const mockStore = configureMockStore();
const initialState = { userSubscription: [] };
let store: any;

describe('ChangeUserBanner', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it('should render correctly with no subscriptions', () => {
    render(
      <Provider store={store}>
        <ChangeUserBanner userSubscription={[]} />
      </Provider>
    );

    expect(screen.getByLabelText('Aucun abonnement')).toBeChecked();
    expect(screen.getByLabelText('Abonnement RIGHT_1')).not.toBeChecked();
    expect(screen.getByLabelText('Abonnement RIGHT_1 et RIGHT_2')).not.toBeChecked();
  });

  it('should render correctly with one subscription', () => {
    render(
      <Provider store={store}>
        <ChangeUserBanner userSubscription={['RIGHT_1']} />
      </Provider>
    );

    expect(screen.getByLabelText('Aucun abonnement')).not.toBeChecked();
    expect(screen.getByLabelText('Abonnement RIGHT_1')).toBeChecked();
    expect(screen.getByLabelText('Abonnement RIGHT_1 et RIGHT_2')).not.toBeChecked();
  });

  it('should render correctly with multiple subscriptions', () => {
    render(
      <Provider store={store}>
        <ChangeUserBanner userSubscription={['RIGHT_1', 'RIGHT_2']} />
      </Provider>
    );

    expect(screen.getByLabelText('Aucun abonnement')).not.toBeChecked();
    expect(screen.getByLabelText('Abonnement RIGHT_1')).not.toBeChecked();
    expect(screen.getByLabelText('Abonnement RIGHT_1 et RIGHT_2')).toBeChecked();
  });

  it('should dispatch setUserSubscription action on radio button change', () => {
    render(
      <Provider store={store}>
        <ChangeUserBanner userSubscription={[]} />
      </Provider>
    );

    fireEvent.click(screen.getByLabelText('Abonnement RIGHT_1'));

    expect(store.dispatch).toHaveBeenCalledWith(setUserSubscription(['RIGHT_1']));

    fireEvent.click(screen.getByLabelText('Abonnement RIGHT_1 et RIGHT_2'));

    expect(store.dispatch).toHaveBeenCalledWith(setUserSubscription(['RIGHT_1', 'RIGHT_2']));
  });
});
