import React from 'react';
import {ScrollView, View, ListView, StyleSheet, Text } from 'react-native';
import Row from './Row';
import Header from './Header';
import decks from './json/Decks.json';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements'
import { StackNavigator,} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(decks),
    };
  }

    render() {
      const { navigate } = this.props.navigation
      return (
        <View style = {styles.container}>
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderHeader={() => <Header />}
            renderRow={(data) => <Row {...data} />}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          />
          <ActionButton 
            bgColor="rgba(23, 9, 107, 0.75)" 
            buttonColor="rgba(63,159,107,1)" 
            onPress={() => this.props.navigation.navigate('AddDeck')}>
          </ActionButton>
        </View>
        );
    }
}

//export HomeScreen;
