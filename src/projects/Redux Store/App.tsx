import { Fragment, useEffect } from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { Provider } from 'react-redux';
import { store } from './App/store';
import './index.css';
import { useAppDispatch, useAppSelector } from './App/hook';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal';

let Store = (): React.JSX.Element => {
  const {cartItems, isLoading} = useAppSelector((store) => store.cart);
  const {isOpen} = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])
  
  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Is Loading...</h1>
      </div>
    )
  }

  return (
      <main>
        {isOpen && <Modal/>}
        <Navbar />
        <CartContainer></CartContainer>
      </main>
  );
}

let ReduxStore : React.FC = () => {
  return (
    <Provider store={store}>
      <Store/>
    </Provider>
  )
}

export default ReduxStore;
