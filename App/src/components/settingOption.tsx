import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {ISettingOption} from './components.type';

export const SettingOption: React.FC<ISettingOption> = ({
  left,
  right,
  title,
  onPress,
  style,
}) => {
  return (
    <Pressable style={[styles.root, style]} onPress={onPress}>
      <View style={styles.leftContainer}>
        {left}
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      <View style={styles.rightContainer}>{right}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    width: '100%',
    paddingVertical: 18,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333333',
  },
});
