import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OrderDetailsContainer from './OrderDetailsContainer';

const OrderCompleted = () => {
  return (
    <View style={styles.main}>
      <View style={styles.qrWrapper}>
        <Text style={styles.qrTitle}>Sipariş Kodu</Text>
        <Image
          source={require('../../../../../assets/images/qr-code-sample.png')}
          style={styles.qrImage}
        />
        <Text style={styles.qrLabelTxt}>
          Kodu{' '}
          {<Text style={{color: '#FF9200'}}>“siparişiniz tamamlandı”</Text>}{' '}
          bildirimi gelince sürpriz paketinizi alırken okutunuz.
        </Text>
      </View>
      <OrderDetailsContainer />
    </View>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  main: {},
  qrWrapper: {
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 10,
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: '#66AE7B',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
  },
  qrTitle: {
    fontSize: 16,
    color: '#FF9200',
  },
  qrImage: {
    width: 170,
    height: 170,
  },
  qrLabelTxt: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333333',
    padding: 5,
  },
});