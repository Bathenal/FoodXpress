import {createContext, useState} from 'react';

export const StateContext = createContext();

function State({children}) {
  const [currentUserId, setCurrentUserId] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [loggedInUser, setLoggedInUser] = useState('');
  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardExpiry, setCreditCardExpiry] = useState('');
  const [creditCardCVC, setCreditCardCVC] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [mobileMoneyNumber, setMobileMoneyNumber] = useState('');

  return (
    <StateContext.Provider
      value={{
        currentUserId,
        setCurrentUserId,
        currentUser,
        setCurrentUser,
        loggedInUser,
        setLoggedInUser,
        cart,
        setCart,
        name,
        setName,
        address,
        setAddress,
        phone,
        setPhone,
        selectedPaymentMethod,
        setSelectedPaymentMethod,
        creditCardNumber,
        setCreditCardNumber,
        creditCardExpiry,
        setCreditCardExpiry,
        creditCardCVC,
        setCreditCardCVC,
        paypalEmail,
        setPaypalEmail,
        mobileMoneyNumber,
        setMobileMoneyNumber,
      }}>
      {children}
    </StateContext.Provider>
  );
}
export default State;
