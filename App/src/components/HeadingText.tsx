import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {HeadingTextType} from './components.type';
import {colors} from '../theme/colors';
import responsiveScale from '../utils/responsiveScale';

const {scale, verticalScale, moderateScale} = responsiveScale;
export default function HeadingText(props: HeadingTextType) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: verticalScale(0),
    marginLeft: moderateScale(20),
  },
  title: {
    fontWeight: '500',
    fontSize: moderateScale(15.5),
    color: colors.greenColor,
    alignItems: 'center',
  },
});
