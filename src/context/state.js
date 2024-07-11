import {createContext, useState} from 'react';

export const StateContext = createContext();

function State({children}) {
  const [currentUserId, setCurrentUserId] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [loggedInUser, setLoggedInUser] = useState('');
  const [cart, setCart] = useState([]);

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
      }}>
      {children}
    </StateContext.Provider>
  );
}
export default State;
