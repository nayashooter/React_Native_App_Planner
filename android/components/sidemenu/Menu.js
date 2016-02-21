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
    backgroundColor: 'gray',
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
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
    borderBottomColor:'#000',
  },
});

module.exports = class Menu extends Component {
  constructor(props){
    super(props);
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

        <Text style={styles.item}>Footing plannifiés</Text>
        <Text style={styles.item}>Rechercher</Text>
        <Text style={styles.item}>Contacts</Text>
        <Text style={styles.item}>A propos</Text>
      </ScrollView>
    );
  }
};
