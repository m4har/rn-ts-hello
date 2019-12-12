import React from 'react';
import {Text} from 'react-native';
interface Obj {
  text: string;
}
const obj: Obj = {text: 'hello World'};

const Hellow = () => <Text>{obj.text}</Text>;

export default Hellow;
