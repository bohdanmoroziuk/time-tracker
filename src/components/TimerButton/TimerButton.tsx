import { FunctionComponent } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import styles from './TimerButton.styles';

export interface TimerButtonProps {
  color: string;
  title: string;
  small: boolean;
  onPress: TouchableOpacityProps['onPress'];
}

const TimerButton: FunctionComponent<TimerButtonProps> = ({
  color,
  title,
  small,
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
