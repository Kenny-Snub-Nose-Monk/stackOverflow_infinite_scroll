import React from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectTagged } from '../features/currentTagged';

const alanApiKey = process.env.REACT_APP_ALAN_KEY;

const useAlan = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    alanBtn({
        key: alanApiKey,
        onCommand: ({command, query}) => {
          if (command === 'search') {
            dispatch(selectTagged(query))
          }
        }
    });
  }, []);

}

export default useAlan