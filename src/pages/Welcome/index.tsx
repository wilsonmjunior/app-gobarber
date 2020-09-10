import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavBar from 'app/components/NavBar';
import { sendMessage } from 'app/service/messageService';
import style from './style';
import InputText from './inputText';
import ModalForm from './modalForm';
import ModalBen from './modalBen';

export const TYPE_FIELD = {
  DROP_DOWN: 'DROP_DOWN',
  REGULAR: 'REGULAR',
  TEXT_AREA: 'TEXT_AREA',
};

export default class HRMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionValue: 'Selecione',
      titleValue: '',
      bodyValue: '',
      showModal: false,
      showModalBen: false,
    };
  }

  handleOpenModal = value => {};

  handleTitle = value => {
    this.setState({
      titleValue: value,
    });
  };

  handleBody = value => {
    this.setState({
      bodyValue: value,
    });
  };

  handleCancelButton = () => {
    const { navigation } = this.props;
    navigation.pop();
  };

  hanldeSendMessage = async () => {
    const { optionValue, titleValue, bodyValue } = this.state;
    const req = await sendMessage(titleValue, bodyValue, optionValue);

    if (req) {
      this.setState({
        showModalBen: true,
      });
    }
  };

  back = () => {
    const { navigation } = this.props;
    navigation.pop();
  };

  onOpenOptions = () => {
    Keyboard.dismiss();
    this.setState({
      showModal: true,
    });
  };

  onRequestClose = () => {
    this.setState({
      showModal: false,
    });
  };

  onSelectedOption = opt => {
    this.setState({
      optionValue: opt,
      showModal: false,
    });
  };

  closeModalBen = () => {
    this.setState({
      showModalBen: false,
    });
    const { navigation } = this.props;
    navigation.pop();
  };

  render() {
    const {
      optionValue,
      titleValue,
      bodyValue,
      showModal,
      showModalBen,
    } = this.state;
    const { navigation } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <>
            <View
              style={{
                position: 'absolute',
                marginTop: getStatusBarHeight() + 25,
                marginLeft: 25,
              }}
            >
              <TouchableOpacity style={style.backButton} onPress={this.back}>
                <Image
                  source={require('app-assets/images/icons/icon-back.png')}
                  style={styles.backButtonImage}
                />
              </TouchableOpacity>
            </View>
            <Text style={style.title}>Escreva sua mensagem</Text>
            <InputText
              value={optionValue}
              handleInput={this.handleOpenModal}
              headerText="Selecione o tipo"
              placeholder={optionValue}
              t
              ype={TYPE_FIELD.DROP_DOWN}
              onOpenOptions={this.onOpenOptions}
            />
            <InputText
              value={titleValue}
              handleInput={this.handleTitle}
              headerText="Título"
              placeholder=""
              type={TYPE_FIELD.REGULAR}
            />
            <InputText
              value={bodyValue}
              handleInput={this.handleBody}
              headerText="Corpo"
              placeholder=""
              type={TYPE_FIELD.TEXT_AREA}
            />
            <View
              style={{
                height: 20,
              }}
            />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                onPress={this.handleCancelButton}
                style={styles.buttonCancelStyle}
              >
                <Text style={styles.knowMore}>Cancelar</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 10,
                }}
              />
              <TouchableOpacity
                onPress={this.hanldeSendMessage}
                style={styles.buttonSendStyle}
              >
                <Text style={styles.knowMore}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
        <NavBar navigation={navigation} />
        <ModalForm
          showModal={showModal}
          onRequestClose={this.onRequestClose}
          onSelectedOption={this.onSelectedOption}
        />
        <ModalBen
          showModal={showModalBen}
          messageTitle="Mensagem enviada com sucesso!"
          textButton="Fechar"
          onCloseModal={this.closeModalBen}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerGeral: {
    backgroundColor: '#25376C',
  },
  container: {
    flex: 1,
    backgroundColor: '#25376C',
    height: Dimensions.get('screen').height + 150,
  },
  knowMore: {
    padding: 20,
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  buttonCancelStyle: {
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    width: wp(40),
    height: hp(8),
  },
  buttonSendStyle: {
    borderRadius: 50,
    backgroundColor: '#45c6d6',
    borderColor: '#45c6d6',
    borderWidth: 1,
    width: wp(40),
    height: hp(8),
  },
  buttonsContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
