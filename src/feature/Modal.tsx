import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type Props = {
  navigation: NavigationProp<any>;
};

export default function Modal(props: Props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 4,
          backgroundColor: 'white',
        }}
      >
        <Text> this is modal</Text>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text> back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
