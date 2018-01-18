import React, { Component } from 'react';
import {TouchableHighlight, Button, ScrollView, View, ListView, StyleSheet, Text } from 'react-native';
import Image from 'react-native-remote-svg'
import decks from './json/Decks.json';
import { StackNavigator,} from 'react-navigation';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements'
import t from 'tcomb-form-native';
import file from './json/Decks.json';

//form fill stuff
const Form = t.form.Form;

const Deck = t.struct({
  name: t.String,
  commander: t.maybe(t.String),
});

var options = {
};

export default class DeckAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      white_opacity: false,
      blue_opacity: false,
      black_opacity: false,
      red_opacity: false,
      green_opacity: false,
      value: null
    };
  }

  onChange= (value) => {
    this.setState({value});
  }

  handleSubmit = () => {
      console.log(this.state);
      const value = this._form.getValue(); // use that ref to get the form value
      if (value !== null){
        this.props.navigation.goBack();
      }
  }


  handleOpacity(active){
    if (active == false){
      return 0.2
    }
    else{
      return 1
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Form 
            ref={c => this._form = c} // assign a ref
            type={Deck} 
            options={options}
            value={this.state.value}
            onChange={this.onChange}
          />
        </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight 
              style={[styles.button, {opacity: this.handleOpacity(this.state.white_opacity)}]}
              underlayColor={'white'} 
              onPress={() => this.setState({white_opacity: !this.state.white_opacity})}>
              <View>
                <Image source={require("./Manasymbols/White.svg")} style={{ width: 25, height: 25}}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              style={[styles.button, {opacity: this.handleOpacity(this.state.blue_opacity)}]}
              underlayColor={'white'} 
              onPress={() => this.setState({blue_opacity: !this.state.blue_opacity})}>
              <View>
                <Image source={require("./Manasymbols/Blue.svg")} style={{ width: 25, height: 25}}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              style={[styles.button, {opacity: this.handleOpacity(this.state.black_opacity)}]}
              underlayColor={'white'} 
              onPress={() => this.setState({black_opacity: !this.state.black_opacity})}>
              <View>
                <Image source={require("./Manasymbols/Black.svg")} style={{ width: 25, height: 25}}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              style={[styles.button, {opacity: this.handleOpacity(this.state.red_opacity)}]}
              underlayColor={'white'} 
              onPress={() => this.setState({red_opacity: !this.state.red_opacity})}>
              <View>
                <Image source={require("./Manasymbols/Red.svg")} style={{ width: 25, height: 25}}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              style={[styles.button, {opacity: this.handleOpacity(this.state.green_opacity)}]}
              underlayColor={'white'} 
              onPress={() => this.setState({green_opacity: !this.state.green_opacity})}>
              <View>
                <Image source={require("./Manasymbols/Green.svg")} style={{ width: 25, height: 25}}/>
              </View>
            </TouchableHighlight>
          </View>
        <View style={styles.mainContainer}>
          <Button
            title="Submit"
            color = "#841584"
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    marginTop:80,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
    marginTop:20,
    backgroundColor: '#ffffff',
  },
  button: {
    flex :1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 0,
    padding: 20,
    marginBottom: 20,
  },
});
