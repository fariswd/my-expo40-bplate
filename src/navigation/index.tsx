import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionSpecs } from '@react-navigation/stack';

import { useSelector } from 'react-redux';

import MainNavigation from './MainNavigation';
import AuthNavigation from './AuthNavigation';
import { UserState } from '../reducer/user';

const Nav = () => {
  const isLoggedIn = useSelector(
    (state: UserState) => state.user.logged
  );
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Nav;
