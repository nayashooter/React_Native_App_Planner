/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Image
} from 'react-native';

import Toolbar  from './android/components/toolbar/toolbar';
import SideMenu from 'react-native-side-menu';
import Menu     from './android/components/sidemenu/Menu';

let STORAGE_KEY = "infoFacebook";
let infoFacebook = "LUCENAY Yannick";
let stylesApp = {
  container :{
      flex:1,
      alignItems:'stretch',
      backgroundColor:'#FFF'
  }
}

class Dictionary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginInfo:'',
      messages:''
    };

    //Initialise App
    this.initSave();
    //Load information
    this.initLoad();
  }

  async initSave(){
    //Save information received by facebook
    try {
      await AsyncStorage.setItem(STORAGE_KEY, infoFacebook);
      this._appendMessage('Saved selection to disk: ' + infoFacebook);
    } catch (error) {
      this._appendMessage('AsyncStorage error: ' + error.message);
    }
  }

  async initLoad(){
    try {
     let value = await AsyncStorage.getItem(STORAGE_KEY);
     if (value !== null){
       this.setState({loginInfo: value});
       this._appendMessage('Recovered selection from disk: ' + value);
     } else {
       this._appendMessage('Initialized with no selection on disk.');
     }
   } catch (error) {
     this._appendMessage('AsyncStorage error: ' + error.message);
   }
  }

  _appendMessage(message) {
    this.setState({messages: this.state.messages.concat(message)});
  }

  render() {
     let menu = <Menu login={this.state.loginInfo}/>;

    return (
      <SideMenu menu={menu} >
        <View style={stylesApp.container}>
          <Toolbar/>
            <Image
              source={require('./android/images/bckg.png')}
              style={styles.image} />
          <Text style={styles.welcome}>
            Welcome to React Native {this.state.loginInfo}
          </Text>
          <Text style={styles.instructions}>
            {this.state.loginInfo.name}
          </Text>
          <Text style={styles.instructions}>
            {this.state.messages}
          </Text>
        </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    flex: 1,
      resizeMode: 'stretch',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Dictionary', () => Dictionary);
