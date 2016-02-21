'use strict';
import ToolbarAndroid       from 'ToolbarAndroid';
import React , {Component,Alert}  from 'react-native';

let styles = {
  toolbar :{
    height : 56,
    backgroundColor :'#F1F1F1',
  }
}

class Toolbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
    };
  }

  onActionSelected() {
    Alert.alert("click");
  }

  render(){
    return (
      <ToolbarAndroid
        logo={require('../../images/icon_settings.png')}
        title="Footing Planner 1.0"
        style={styles.toolbar}
        titleColor='#FFF'
        actions={[{title: 'Settings', icon: require('../../images/icon_settings.png'), show: 'always'}]}
        onActionSelected={this.onActionSelected.bind(this)}/>
    )
  }
}

export default Toolbar;
