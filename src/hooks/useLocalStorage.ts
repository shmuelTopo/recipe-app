
// const useLocalStorage = <T>(name: string, initialState: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
//   const [state, setState] = useState<T>(() => {
//     const storedValue = localStorage.getItem(name);
//     return storedValue ? JSON.parse(storedValue) : initialState;
//   });

//   useEffect(() => {
//     localStorage.setItem(name, JSON.stringify(state));
//   }, [name, state]);

//   return [state, setState];
// };

// export default useLocalStorage;


import { useState, useEffect } from "react";

const useLocalStorage = (
  name: string,
  initialState: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(
    () => localStorage.getItem(name) || initialState
  );

  useEffect(() => {
    localStorage.setItem(name, state);
  }, [name, state]);

  return [state, setState];
};

export default useLocalStorage;