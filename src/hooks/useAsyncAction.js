import { useEffect, useState } from 'react';

export const useAsyncAction = (action) => {
  const [state, setState] = useState({
    result: null,
    completed: false,
    errors: null,
  });

  const executeAction = async (...args) => {
    // Make executeAction async
    try {
      const result = await action(...args);
      setState((prevState) => ({ ...prevState, result, errors: null })); // Update state using a callback
    } catch (ex) {
      setState((prevState) => ({ ...prevState, errors: ex }));
    } finally {
      setState((prevState) => ({ ...prevState, completed: true }));
    }
  };

  return { ...state, executeAction };
};
