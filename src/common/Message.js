import React from 'react';
import { Alert } from 'react-native';

class Message extends React.Component {
  static info({ title, text }) {
    Alert.alert(
      title,
      text,
      [{ text: 'Tamam' }],
      { cancelable: false }
    );
  }

}

export default Message;
