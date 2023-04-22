import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao: {
        width: 250,
        height: 50,
        borderWidth: 4,
        borderColor: props.color,
        backgroundColor: 'black',
        opacity: 0.8,
        borderRadius: 25,
      },
      btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnText: {
        color: props.color,
        fontSize: 17,
        fontWeight: 'bold',
      },
    })
  }
  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.aoClicar}>
        <View style={this.styles.btnArea}>
          <Text style={this.styles.btnText}> {this.props.text}</Text>
        </View>
      </TouchableOpacity>

    )
  }
}

export default class BiscoitoDaSorte extends Component {
  constructor(props){
    super(props);
    this.state = {texto:'...'};
    
    this.frases = ['A vida trará coisas boas se tiveres paciência.', 'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.', 'Gente todo dia arruma os cabelos, por que não o coração?'];

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

  }
  quebrarBiscoito() {
    let s =this.state;
    let r = Math.floor(Math.random() * this.frases.length);
    s.texto = this.frases[r] ;
    this.setState(s);
  }
  render() {
    return (
      <ImageBackground source={require('./images/bg.jpg')} style={styles.container}>
        <Image source={require('./images/cookie.png')} />
        <Text style={styles.texto}> " {this.state.texto} " </Text>
        <Botao color="#B59619" text="Quebrar biscoito" aoClicar={this.quebrarBiscoito} />
        
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    
  },
  texto: {
    textAlign:'center',
    fontSize: 22,
    color: 'white',
    fontWeight:'bold',
    fontStyle:'italic',
    margin: 30,
  },
});

