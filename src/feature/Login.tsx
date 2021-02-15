import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../action/userAction';

type Props = {
  navigation: NavigationProp<any>;
};

export default function Login(props: Props) {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          dispatch(login());
        }}
      >
        <Text>{`>>>>To main nav<<<<<`}</Text>
      </TouchableOpacity>
    </View>
  );
}
