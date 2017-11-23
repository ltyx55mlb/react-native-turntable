/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {Turntable} from 'react-native-turntable'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Turntable
          radius={200}
          distance={75}
          enableUserRotate
          turntableRotate={30}
          // handlerOfRotate={()=>alert('触发')}
          customStyle={{ backgroundColor: '#E14C46' }}
        >
          <TouchableOpacity>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>6</Text>
          </TouchableOpacity>
        </Turntable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
