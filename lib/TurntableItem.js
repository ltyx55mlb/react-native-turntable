import React, { Component } from 'react';
import { View, PanResponder } from 'react-native';

class TurntableItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coordX: props.radius,
      coordY: props.radius
    };
  }

  getCoordinates({ width, height }) {
    const { radius, index, step, distance } = this.props;
    const coordX = Math.round(radius / 2 + distance * Math.cos((index) * step) - width / 2);
    const coordY = Math.round(radius / 2 + distance * Math.sin((index) * step) - height / 2);
    this.setState({ coordX, coordY });
  }

  render() {
    const { item, turntableRotate ,deg} = this.props;
    const { coordX, coordY } = this.state;
    return (
      <View
        style={{ position: 'absolute', left: coordX, top: coordY, transform: [{ rotate: `${-turntableRotate}deg` }] }}
        onLayout={(event) => this.getCoordinates(event.nativeEvent.layout)}
      >
        <View style={{ transform: [{ rotate: `${deg}deg` }] }}>
          {item}
        </View>
      </View>
    );
  }
}

export default TurntableItem;