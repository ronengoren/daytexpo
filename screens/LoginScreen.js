import React from 'react';
import { Text, View, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native';
import * as FirebaseAPI from '../modules/firebaseAPI';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
     constructor(props) {
    super(props);
  }
      state = {
        email: "Enter email",
        password: "Enter password"
  };
  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }
  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user)
      
      if (user) {
        navigation.navigate('Main');
      }
    });
  }
  createUser() {
    FirebaseAPI.createUser(this.state.email, this.state.password)
  }
  signIn() {
    FirebaseAPI.signInUser(this.state.email, this.state.password)
  }
      render() {
          return (
          <View style={styles.container}>
                  <View style={styles.textContainer}>

          <Text style={styles.text}>Create an account below</Text>
            <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
                      </View>
                        <TouchableOpacity
            style={{marginTop: '5%'}}
            onPress={() => this.signIn()}
          >
            <View>
              <Text>Log In Existing</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={{marginTop: '5%'}}
            onPress={() => this.createUser()}
          >
            <View>
              <Text>Create New User</Text>
            </View>
          </TouchableOpacity>

          </View>
  );
}
}

LoginScreen.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 155,

  },
    text: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    width: '75%',
    marginBottom: '10%',
    textAlign: 'center',
  },
    textInput: {
    fontSize: 17,
    lineHeight: 24,
    width: '75%',
  },
  textContainer: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
