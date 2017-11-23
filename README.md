# React Native TurnTable
Easy-to-use roulette buttons for React Native App

## Installation
```
npm i react-native-turntable --save
```

## Usage

###Basic Example
[see full basic example](https://github.com/thegamenicorus/react-native-flexi-radio-button/blob/master/examples/BasicExample/app.js)

|![basic_example_ios](http://images.cnblogs.com/cnblogs_com/syfnx/1016118/o_giffff.gif)|![basic_example_android](http://images.cnblogs.com/cnblogs_com/syfnx/1016118/o_androidgif.gif)|

|---------------|----------|
```jsx

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
          handlerOfRotate={()=>alert('触发')}
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
```

### Configuration
| Property | Type | Default | Description |
|---------------|----------|-------------|----------------------------------------------------------------|
| radius | number | 300 | radius of the turntable |
| distance | number |100 | The distance from the center of each button |
| turntableRotate | number | 0 |turntable button offset|
| enableUserRotate | bool | false |Whether to open the disc rotation |
| children | array | null | children  |
| handlerOfRotate | func | null | Function Callback triggered when the disc is rotated |
| customStyle | any | null | turntable style |
