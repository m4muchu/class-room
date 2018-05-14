import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { signUpChanged } from '../actions';


class SignUpPicker extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.picker}>
                <Picker 
                    prompt="SELECT THE DEPARTMENT"
                    onValueChange={(text) => this.props.signUpChanged({ prop: 'dep', value: text })}
                    selectedValue={this.props.dep}
                >  
                <Picker.Item label="IT" value="IT" />
                <Picker.Item label="CE" value="CE" />
                <Picker.Item label="CS" value="CS" />
                <Picker.Item label="SE" value="SE" />
                <Picker.Item label="EEE" value="EEE" />
                <Picker.Item label="ME" value="MECH" />
                <Picker.Item label="EC" value="EC" />
                </Picker>  
              </View>
           </View>
                   
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba( 255,255,255,0.5)',
        width: 300,
        borderRadius: 200,
        justifyContent: 'flex-start',
        marginVertical: 14,
        

    },
    picker: {
        paddingLeft: 10,
    
    }
});  

const mapStateToProps = state => {
    return {
        dep: state.auth.dep
    }
}

export default connect(mapStateToProps, { signUpChanged })(SignUpPicker);