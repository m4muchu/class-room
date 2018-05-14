import React from 'react';
import _ from 'lodash';
import { Text, View, StyleSheet, StatusBar,ListView,TouchableOpacity,Linking } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { fetchBooks } from '../actions';
import { Container, Content, Left, Right, Header, Button, Icon } from 'native-base';
import ListItem from './ListItem';

class Books extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         books:''
    //     }
    // }
    // componentWillMount() {
    //     console.log('enterd');
    //     const { currentUser } = firebase.auth();
    //     console.log(currentUser.uid);

    //     firebase.database().ref(`users/${currentUser.uid}`)
    //     .on('value', snapshot => console.log(snapshot.val()));
    // }

    // componentWillMount() {
    //     this.props.fetchBooks();

    // }
    // componentWillMount(){
    //     // var Storage=firebase.database();
    //     // Storage.ref('books').on('value',snapshot=>{
    //     // bookData=snapshot.val();
    //     // this.setState({books:bookData});
    //     // for(let book in bookData){
    //     //     console.log(bookData[book].file_url);
    //     // }
    // });
    // console.log("saufhi");
    //console.log(this.state.bookData);
    

    componentWillMount() {
        this.props.fetchBooks();   
        
     this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ books }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(books);

    }

    renderRow(books) {
        return <ListItem book={books} />;
    }


    render() {
        return (
        <Container>
            <StatusBar hidden />
            <Header style={styles.navBar}>

            <Left>
                <Button transparent>
                        <Icon size={30} name="menu" color="white" 
                          onPress={() => this.props.navigation.navigate('DrawerOpen')} 
                        />
                </Button>
            </Left>
            
            <Right />
            </Header>
            <Content style={styles.content}>
                {/* <ListItem /> */}
                <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow} 
                />
            </Content>
       </Container>
        );
    }
}  

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        height: 40,
        backgroundColor: '#000000',
        elevation: 5
    },
    content: {
        flex: 1,
        backgroundColor: '#202020'
    },
});

const mapStateToProps = state => {
    const books = _.map(state.prof, (val, uid) => {
        return { ...val, uid }
    });
    console.log(books);
    return { books };
};
    // console.log("Available books");
    // console.log(JSON.stringify(books));
    // return { books };
    // const { uri } = state.prof;
    // console.log(uri);
    // return { uri };


export default connect(mapStateToProps, { fetchBooks })(Books);
// export default Books;