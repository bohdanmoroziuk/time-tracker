import { FunctionComponent } from 'react';
import { View, Text} from 'react-native';

import styles from './Header.styles';

export interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
);

export default Header;
