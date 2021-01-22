import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Modal
} from 'react-native';
import ImageElement from './components/ImageElement';

export default class App extends Component {
  state = {
    modalVisible: false,
    modalImage: require('./img/native_01.jpg'),
    images: [
      require('./img/native_01.jpg'),
      require('./img/native_02.jpg'),
      require('./img/native_03.jpg'),
      require('./img/native_04.jpg'),
      require('./img/native_05.jpg'),
      require('./img/native_06.jpg'),
      require('./img/native_07.jpg'),
      require('./img/native_08.jpg'),
      require('./img/native_09.jpg'),
      require('./img/native_10.jpg'),
      require('./img/native_11.jpg'),
      require('./img/native_12.jpg'),
      require('./img/native_13.jpg'),
      require('./img/native_14.jpg'),
      require('./img/native_15.jpg'),
      require('./img/native_16.jpg'),
      require('./img/native_17.jpg'),
      require('./img/native_18.jpg'),
      require('./img/native_19.jpg'),
      require('./img/native_20.jpg')
    ]
  }

  setModalVisible(visible, imageKey) {
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });
  }

  getImage() {
    return this.state.modalImage;
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return (
        <TouchableWithoutFeedback key={key} onPress={() => { this.setModalVisible(true, key) }}>
          <View style={styles.imageWrap}>
            <ImageElement imgSource={val}></ImageElement>
          </View>
        </TouchableWithoutFeedback>
      );
    });
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Dolce Vita</Text>
        {images}
        <Text style={styles.footerText}>We'll call you back!</Text>
        <Text style={styles.contactsText}>
          +38 (099) 123-45-67
          instagram/dolce-vita.com
          facebook/dolce-vita.com
          dolce-vita@gmail.com
          dolce-vita.com
        </Text>
        <Text style={styles.copyText}>
          All rights reserved.{'\n'}
          Copyright &copy; 2021 by Vitalii Butovych
        </Text>
        {/* <Modal style={styles.modal} animationType={'fade'} transparent={true} 
                visible={this.state.modalVisible} onRequestClose={() => {}}>
          <View style={styles.modal}>
            <Text style={styles.text} onPress={() => {this.setModalVisible(false)}}>
              Close
            </Text>
            <ImageElement imgSource={this.state.modalImage}></ImageElement>
          </View>
        </Modal> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#000'
  },
  imageWrap: {
    margin: 2,
    padding: 2,
    height: 200,
    width: 200,
    // height: (Dimensions.get('window').height/3) - 12,
    // width: (Dimensions.get('window').width/2) - 4,
    backgroundColor: '#000'
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  },
  text: {
    color: '#fff'
  },
  headerText: {
    margin: 20,
    fontSize: 60,
    color: 'pink',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  footerText: {
    margin: 20,
    fontSize: 40,
    color: 'pink',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contactsText: {
    margin: 10,
    fontSize: 30,
    color: 'pink',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  copyText: {
    margin: 10,
    fontSize: 20,
    color: 'pink',
    textAlign: 'center',
    marginBottom: 40
  }
});

AppRegistry.registerComponent('App', () => App);