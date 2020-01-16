import React, { Component } from 'react';
import { Picker, Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component{
    state = {choosenLabel: '', choosenindex: ''}

    render() {

      return(

        <View style= {styles.container} >

          {/*  Text to show selected picker value */}
          <Text style = {styles.text} > {this.state.choosenLabel}</Text>
            {/*  Text to show selected index */}
            <Text style = {styles.text} > {this.state.choosenindex}</Text>

            { /* Picker with multiple chose to choose */}
            {/* selectedvalue to set the preselected value if any */}
            {/* onvaluechange will help to handle the changes  */}

            <Picker selectedValue={this.state.choosenLabel}
                onValueChange={

                  (itemValue,itemIndex) => this.setState({

                    choosenLabel: itemValue,
                    choosenindex: itemIndex })
                }>
                  <Picker.Item label = "Hello" value ="A1" />
                  <Picker.Item label = "React" value ="A2" />
                  <Picker.Item label = "Native" value ="A3" />
                  <Picker.Item label = "How" value ="A4" />
                  <Picker.Item label = "Are" value ="A5" />
                  <Picker.Item label = "you" value ="A6" />

                </Picker>
        </View>
      );
    }
}
const styles = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    fontSize: 20,
    alignSelf: 'center'
  }
});