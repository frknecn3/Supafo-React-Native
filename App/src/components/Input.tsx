import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { InputType } from './components.type';
import IOSIcons from 'react-native-vector-icons/Ionicons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Input = ({ isPassword, ...props }: InputType) => {
  const [display, setDisplay] = useState(!isPassword);
  return (
    <View style={[styles.container, props.style]}>
      <Text style={[styles.heading, { fontSize: moderateScale(props.fontSize || 12) }]}>
        {props.heading || props.placeholder}
      </Text>
      <View style={styles.inputContainer}>
        {props.icon && (
          <Image source={props.icon} style={styles.icon} />
        )}
        <TextInput
          secureTextEntry={!display}
          {...props}
          style={[styles.textInput, { fontSize: moderateScale(14) }]}
          placeholderTextColor={'gray'}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setDisplay(!display)}
            style={styles.passwordToggle}>
            <IOSIcons
              name={display ? "eye-outline" : "eye-off-outline"}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:verticalScale(60),
    marginTop: moderateScale(5),
  },
  heading: {
    color: '#333333',
    paddingStart: moderateScale(4),
    fontSize: moderateScale(12), // Adjusted font size
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(16), // Adjusted border radius
    borderWidth: 1,
    borderColor: '#D0D5DD',
    paddingHorizontal: moderateScale(8), // Adjusted padding
    backgroundColor: 'white',
    width: '100%',
    marginTop: verticalScale(4), // Adjusted margin top
  },
  icon: {
    width: scale(18), // Adjusted width and height
    height: scale(18),
    marginRight: moderateScale(8), // Adjusted margin
  },
  textInput: {
    paddingVertical: moderateScale(6), // Adjusted padding
    paddingLeft: 0,
    flex: 1,
    color: '#333333',
    paddingStart: moderateScale(10), // Adjusted padding
    fontSize: moderateScale(12), // Adjusted font size
  },
  passwordToggle: {
    marginRight: moderateScale(12), // Adjusted margin
  },
  eyeIcon: {
    color: '#808080',
    fontSize: moderateScale(18), // Adjusted font size
  },
});

export default Input;
