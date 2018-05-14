import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { DocumentPicker } from 'expo';
import Firebase from 'firebase';
import { fileNameChanged } from '../actions';


class Uploads extends React.Component {

  constructor() {
    super();
    this.state = {
      imageName: '',
      imageUri: '',
      file_name: ''
    };
  }

  // onFileNameChanged(text) {
  //   console.log('enter the onFilenameChanged')
  //   console.log(text);
  //   this.props.fileNameChanged({text});
  // }
  

  openPicker=async()=>{
    const value = await DocumentPicker.getDocumentAsync();
    console.log(value);
    this.setState({ imageName: value.name });
    this.setState({ imageUri: value.uri });
  }

  upload = async() => {
    const name = this.state.imageName;
    const body = new FormData();

    body.append('picture', {
      uri: this.state.imageUri,
      name: name,
      type: 'image/jpg'
    });
    const res = await fetch('https://us-central1-class-room-91bd5.cloudfunctions.net/api/picture', {
      method: 'POST',
      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    });
    // .then(res=>res.json())
    // .then(res=>console.log(res));
    //const storageRef=await Firebase.storage.ref();
    const url = await Firebase.storage().ref(name).getDownloadURL();
    console.log('url is');
    console.log(url);
    //const { currentUser } = Firebase.auth();
    const data={
      file_url:url,
      file_name: this.props.name
    };
    Firebase.database().ref('books').push(data);

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.inputStyle}
        onChangeText={text => this.props.fileNameChanged({ prop: 'name', value: text })}
        value={this.props.name}
        placeholderTextColor="black"
        placeholder="Enter Subject Name"
        />
        <View style={styles.button}> 
        <Button style={styles.button} title="select" onPress={this.openPicker}/>
        </View>
        <View style={styles.button}>
        <Button style={styles.button} title="Upload" onPress={this.upload}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    width: 300,
    lineHeight: 23,
    backgroundColor: 'rgba( 255,255,255,0.5)',
    borderRadius: 200,
    paddingRight: 5,
    paddingLeft: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: 'black',
    marginVertical: 14,
},
button: {
  paddingVertical: 10
}
});

const mapStateToProps = state => {
  const { name } = state.file;

  console.log(name);

  return { name };
}

export default connect(mapStateToProps, { fileNameChanged })(Uploads);