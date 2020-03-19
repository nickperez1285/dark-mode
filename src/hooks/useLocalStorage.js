import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
  // Save state
  setStoredValue(value);
  // Save to local storage
  window.localStorage.setItem(key, JSON.stringify(value));
};

  return [storedValue, setValue];
};


// import { useState } from "react";

// export function useLocalStorage(key, initialValue) {
//   if (window.localStorage && window.localStorage.getItem(key)) {
//     initialValue = JSON.parse(window.localStorage.getItem(key));
//   }
//   const [storedValue, setStoredValue] = useState(initialValue);

//   const setValue = value => {
//     setStoredValue(storedValue);
//     window.localStorage.setItem(key, JSON.stringify(storedValue));
//   };

//   return [storedValue, setValue];
// }
