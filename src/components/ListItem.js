import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback , TouchableOpacity ,ScrollView,ListView, Linking} from 'react-native';
import firebase from 'firebase';
import _ from 'lodash';
import {CardSection} from './common';

class ListItem extends Component {


//     componentWillMount(){
//         var Storage=firebase.database();
//         // Storage.ref('books').on('value',snapshot=>{
//         // bookData=snapshot.val();
//         // this.setState({books:bookData});
//         // // for(let book in bookData){
//         // //     console.log(bookData[book].file_url);
//         // // }
//         // }
//         Storage.ref('books').on('value',function(snapshot){
//             const bookData = snapshot.val();
//             this.setState({books:bookData});
            
//             console.log(bookData);
//             // this.setState({books:bookData[0]});

//         }.bind(this));
        
//     }

//     constructor(props){
//         super(props);
//         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.state={
//             books: '',
//             dataSource: ds.cloneWithRows(this.state.books)
//         }
//     }

//     renderRow(rowData,sectionID,rowID){
//         return(
//             <View style={styles.container}>
//                 <Text>{rowData}</Text>
//             </View>
//         );
//     }


//     render() {
//         // const { uri } = this.props.book;
//         // console.log('enter the list item');
//         // console.log(uri);
//         //console.log(this.state.books);
//         return (
//         <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     nameStyle: {
//         fontSize: 18,
//         paddingLeft: 20
//     },
//     container: {
//         padding: 10,
//         marginTop: 3,
//         backgroundColor: '#d9f9b1',
//         alignItems: 'center',
//      },
//      text: {
//         color: '#ffffff'
//      }
// });

// export default ListItem;  

render() {
    const { file_name, file_url } = this.props.book;

    return (
        <TouchableWithoutFeedback onPress={() => Linking.openURL(file_url)}>
            <View>
        <CardSection style={styles.card}>
            <Text style={styles.nameStyle}>
                { file_name }
            </Text>
        </CardSection>
            </View>
        </TouchableWithoutFeedback>
    );
}
}

const styles = StyleSheet.create({
nameStyle: {
    fontSize: 18,
    paddingLeft: 20
},
card: {
    height: 45,
    marginTop: 5
}
});


export default ListItem;  
