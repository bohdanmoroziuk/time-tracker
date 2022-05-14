import { FunctionComponent } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, ColorValue } from 'react-native';

import styles from './TimerButton.styles';

export interface TimerButtonProps {
  color: ColorValue;
  title: string;
  small?: boolean;
  onPress: TouchableOpacityProps['onPress'];
}

const TimerButton: FunctionComponent<TimerButtonProps> = ({
  color,
  title,
  small = false,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.container, { borderColor: color }]}
    onPress={onPress}
  >
    <Text
      style={[
        styles.text,
        small ? styles.small : styles.large,
        { color }
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default TimerButton;
