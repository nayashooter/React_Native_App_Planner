const React = require('react-native');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Component,
} = React;

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#0B1D21',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
    color:'#FFFFFF',
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
    margin:5,
    color:'#FFFFFF',
  },
  separator:{
    height:1,
    backgroundColor:'#0E0E0E',
  },
  menuBottom:{
    marginTop:50,
  }
});

module.exports = class Menu extends Component {
  constructor(props){
    super(props);

    this.state = {
      nbFooting:0,
      nbFooter:0,
    }
  }

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>{this.props.login}</Text>
        </View>
        <Text style={styles.item}>Nouvelle recherche</Text>
        <Text style={styles.separator}/>
        <Text style={styles.item}>Trouver un footing</Text>
        <Text style={styles.separator}/>
        <Text style={styles.item}>Mes footing({this.state.nbFooting})</Text>
        <Text style={styles.separator}/>
        <Text style={styles.item}>Mes joggeurs({this.state.nbFooter})</Text>
        <View style={styles.menuBottom}>
          <Text style={styles.separator}/>
          <Text style={styles.item}>Nous contacter</Text>
          <Text style={styles.separator}/>
          <Text style={styles.item}>A propos!</Text>
        </View>
      </ScrollView>
    );
  }
};
