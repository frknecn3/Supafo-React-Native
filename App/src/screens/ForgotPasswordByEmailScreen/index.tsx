import React from 'react';
import Screen from '../../components/Screen';
import {Image, StyleSheet, View} from 'react-native';
import {EmailIcon, ForgotPasswordLockImage} from '../../assets/images';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import routes, {RootStackParamList} from '../../navigation/routes';
import Header from '../../components/Header';
import Input from '../../components/Input';

function ForgotPasswordByEmailScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <Screen
      header={<Header title="Şifre Sıfırlama" />}
      className="items-center justify-start px-[40px] pt-[35px]">
      <Image
        source={ForgotPasswordLockImage}
        resizeMode="contain"
        className="h-[140px]"
      />
      <View className="mt-[34px] w-full" style={{rowGap: 20}}>
        <Input placeholder="example@gmail.com" icon={EmailIcon} heading={"Email"}/>
        <Button
          onPress={() => navigation.navigate(routes.SET_PASSWORD_SCREEN)}
          className="mt-[60px] rounded-[20px]">
          Kod Gönder
        </Button>
      </View>
    </Screen>
  );
}

export default ForgotPasswordByEmailScreen;
