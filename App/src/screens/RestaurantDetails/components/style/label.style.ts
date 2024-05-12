import {StyleSheet} from 'react-native';
import {colors} from '../../../../theme/colors';

export const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    marginBottom: 10,
  },
  wrapper: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    backgroundColor: '#FF9200',
    color: 'white',
    fontSize: 12,
    borderRadius: 20,
    padding: 3,
    width: 100,
    textAlign: 'center',
    marginTop: 10,
    marginStart: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10,
    width: '65%',
  },
  row: {
    flexDirection: 'row',
    marginStart: 30,
    margin: 3,
    alignItems: 'center',
  },
  rateWrapper: {
    width: '40%',
  },
  txt: {
    backgroundColor: colors.greenColor,
    padding: 5,
    margin: 5,
    borderRadius: 20,
    color: 'white',
    fontSize: 11,
  },
  labelTitle: {
    fontSize: 15,
    padding: 10,
    fontWeight: '500',
    color: '#333333',
  },
  img: {
    width: 77,
    height: 83,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center',
  },
  line: {
    width: '100%',
    backgroundColor: colors.greenColor,
    height: 1.5,
    marginTop: 7,
  },
  wrapperTxt: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '600',
    padding: 3,
    marginStart: 5,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  modalTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    alignItems: 'flex-end',
    backgroundColor: colors.greenColor,
    padding: 5,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    padding: 10,
  },
  modalLine: {
    backgroundColor: '#D0D5DD',
    height: 0.6,
    width: '112%',
    padding: 1,
    marginTop: 20,
  },
  openButton: {
    paddingTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  confirmTxt: {
    color: colors.greenColor,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
  },
  description: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    padding: 10,
  },
});