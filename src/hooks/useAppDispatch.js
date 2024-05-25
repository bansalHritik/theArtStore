import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const STATUS = {
  Idle: 'idle',
  InProgress: 'inProgress',
  Failed: 'failed',
  Completed: 'completed',
};

const useAppDispatch = (action) => {
  const [status, setStatus] = useState(STATUS.Idle);
  const dispatch = useDispatch();

  const dispatchWithCallback = async (args, successCallback, failureCallback) => {
    try {
      setStatus(STATUS.InProgress);
      const result = await dispatch(action?.(args)).unwrap();
      setStatus(STATUS.Completed);
      successCallback?.(result);
    } catch (error) {
      console.warn('Error', error);
      setStatus(STATUS.Failed);
      failureCallback?.(error);
    }
  };
  return [status, dispatchWithCallback];
};

export default useAppDispatch;
