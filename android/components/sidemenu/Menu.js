import  React   from 'react-native';
import  Icon    from 'react-native-vector-icons/FontAwesome';

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
    color:'#F1F1F1',
    paddingLeft:10,
  },
  separator:{
    height:1,
    backgroundColor:'#0E0E0E',
  },
  menuBottom:{
    marginTop:50,
  },
  iconMenu:{
    marginRight:20,
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

        <Text style={styles.item}>
          <Icon
            name="search"
            size={20}
            color="#F1F1F1"
            style={styles.iconMenu}/>
          Nouvelle recherche
        </Text>
        <Text style={styles.separator}/>
        <Text style={styles.item}>
          <Icon
            name="search-plus"
            size={20}
            color="#F1F1F1"
            style={styles.iconMenu}/>
          Trouver un footing</Text>
        <Text style={styles.separator}/>
        <Text style={styles.item}>
          <Icon
            name="list"
            size={20}
            color="#F1F1F1"
            style={styles.iconMenu}/>
          Mes footing({this.state.nbFooting})</Text>
        <Text style={styles.separator}/>
        <Text style={styles.item}>
          <Icon
            name="users"
            size={20}
            color="#F1F1F1"
            style={styles.iconMenu}/>
          Mes joggeurs({this.state.nbFooter})</Text>
        <View style={styles.menuBottom}>
          <Text style={styles.separator}/>
          <Text style={styles.item}>
            <Icon
              name="phone"
              size={20}
              color="#F1F1F1"
              style={styles.iconMenu}/>
            Nous contacter</Text>
          <Text style={styles.separator}/>
          <Text style={styles.item}>
            <Icon
              name="info-circle"
              size={20}
              color="#F1F1F1"
              style={styles.iconMenu}/>
            A propos!</Text>
          <Text style={styles.separator}/>
        </View>
      </ScrollView>
    );
  }
};
