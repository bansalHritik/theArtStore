import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const STATUS = {
  Idle: 'idle',
  InProgress: 'inProgress',
  Failed: 'failed',
  Completed: 'completed',
};

const useAppDispatch = () => {
  const [status, setStatus] = useState(STATUS.Idle);
  const dispatch = useDispatch();

  const dispatchWithCallback = async (action, successCallback, failureCallback) => {
    try {
      setStatus(STATUS.InProgress);
      const result = await dispatch(action).unwrap();
      setStatus(STATUS.Completed);
      successCallback?.(result);
    } catch (error) {
      setStatus(STATUS.Failed);
      failureCallback?.(error);
    }
  };
  return [status, dispatchWithCallback];
};

export default useAppDispatch;
