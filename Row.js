import React from 'react';
import {Button, View, ScrollView, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    //alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});


const Row = (props) => (
    <Button style={styles.text}
      onPress={() => console.log("go to deck")}
      title = {`${props.name}`}
    />
);

export default Row;
