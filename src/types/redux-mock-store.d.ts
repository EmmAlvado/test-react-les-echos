declare module 'redux-mock-store' {
    import { Store, AnyAction } from 'redux';
  
    export interface MockStoreCreator<S = any, A extends AnyAction = AnyAction> {
      <T extends A>(state?: S): MockStoreEnhanced<S, T>;
    }
  
    export interface MockStoreEnhanced<S = any, A extends AnyAction = AnyAction> extends Store<S, A> {
      getActions(): A[];
      clearActions(): void;
    }
  
    const configureMockStore: <S = any, A extends AnyAction = AnyAction>() => MockStoreCreator<S, A>;
    export default configureMockStore;
  }
  