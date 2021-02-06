import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../action/counterAction';
import { getUser } from '../action/userAction';
import { CounterState } from '../reducer/counter';
import { UserState } from '../reducer/user';
import { RequestState } from '../reducer/request';

const Home = () => {
  const dispatch = useDispatch();
  const selectCounter = useSelector(
    (state: CounterState) => state.counter
  );
  const selectUser = useSelector((state: UserState) => state.user);
  const loading = useSelector(
    (state: RequestState) => state.request.loading
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Count Value:</Text>
      <Text>{selectCounter.count}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button
          title="increment"
          onPress={() => dispatch(increment())}
        />
        <Button
          title="decrement"
          onPress={() => dispatch(decrement())}
        />
      </View>
      <View style={{ paddingTop: 20 }} />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text>{JSON.stringify(selectUser)}</Text>
      )}
      <Button title="get user" onPress={() => dispatch(getUser())} />
    </View>
  );
};

export default Home;
