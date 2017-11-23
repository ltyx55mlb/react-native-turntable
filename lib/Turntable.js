import React, { Component, Children } from 'react';
import { View, Animated, PanResponder, Easing, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import TurntableItem from './TurntableItem';

class Turntable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _animatedValue: new Animated.Value(0),
      activeItem: 0,
      _interpolaredRota: 0,

    };
    this.circleOffset = {
      circledeg: 360,
      startX: 0,
      endX: 0,
      startY: 0,
      endY: 0,
      directionX: 'R'
    }

    this.step = (2 * Math.PI) / props.children.length;
    
    this.panResponder = props.enableUserRotate ? (
      PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: (evt) => {
          this.circleOffset.startX = evt.nativeEvent.pageX
          this.circleOffset.startY = evt.nativeEvent.pageY
        },
        onPanResponderRelease: (evt) => {
          this.circleOffset.endX = evt.nativeEvent.pageX
          this.circleOffset.endY = evt.nativeEvent.pageY
          this.locationx()
          const { handlerOfRotate } = this.props;
          const { children } = this.props;
          const { activeItem } = this.state;
          const nextItem = activeItem + 1;
          this.state._animatedValue.setValue(activeItem);
          Animated.timing(this.state._animatedValue, { toValue: nextItem, easing: Easing.linear }).start();

          const newActiveItem = nextItem > children.length ? 1 : nextItem;

          this.setState({ activeItem: newActiveItem }, () => handlerOfRotate(children[children.length - newActiveItem].props));
          this._itemTrans(children.length)
        }
      })
    ) : (
        {
          panHandlers: {}
        }
      )
  }

  _itemTrans(itemlength) {
    let trannum = 360 / itemlength
    let trannumState
    this.state._interpolaredRota > 0 ? this.state._interpolaredRota = -this.state._interpolaredRota : this.state._interpolaredRota = this.state._interpolaredRota
    this.circleOffset.circledeg > 0 ?
      trannumState = -(-this.state._interpolaredRota + trannum) :
      trannumState = -(this.state._interpolaredRota - trannum)
    this.setState({
      _interpolaredRota: trannumState
    })
  }

  locationx() {
    this.circleOffset.directionX = this.circleOffset.endX - this.circleOffset.startX > 0 && (this.circleOffset.endX - this.circleOffset.startX > 0 || this.circleOffset.endY - this.circleOffset.startY > 0) ? 'R' : 'L'
    this.circleOffset.directionX == 'R' ? this.circleOffset.circledeg = 360 : this.circleOffset.circledeg = -360
  }

  render() {
    const { children, radius, distance, renderCenter, customStyle, turntableRotate, iconitem } = this.props;
    const interpolatedRotateAnimation = this.state._animatedValue.interpolate({
      inputRange: [0, children.length],
      outputRange: [`${turntableRotate}deg`, `${this.circleOffset.circledeg + turntableRotate}deg`]
    })
      ;
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          styles.container,
          { width: radius, height: radius, borderRadius: radius / 2 },
          { transform: [{ rotate: interpolatedRotateAnimation }] },
          customStyle
        ]}
      >
        {
          Children.map(children, (child, index) =>
            <TurntableItem
              item={child}
              deg={this.state._interpolaredRota}
              index={index}
              radius={radius}
              step={this.step}
              distance={distance}
              turntableRotate={turntableRotate}
              ref={(mdroul) => this.mdroul = mdroul}
            />
          )}
      </Animated.View>
    );
  }
}

Turntable.propTypes = {
  radius: PropTypes.number,
  distance: PropTypes.number,
  turntableRotate: PropTypes.number,
  enableUserRotate: PropTypes.bool,
  children: PropTypes.array,
  handlerOfRotate: PropTypes.func,
  customStyle: PropTypes.any,
};

Turntable.defaultProps = {
  radius: 300,
  distance: 100,
  turntableRotate: 0,
  enableUserRotate: false,
  handlerOfRotate: () => { }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center'
  },
});


export default Turntable;