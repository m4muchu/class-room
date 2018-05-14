import React from 'react';
import { Picker, View, StyleSheet } from 'react-native';
import { signUpChanged } from '../actions';
import { connect } from 'react-redux';


class SignUpPickerSem extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.picker}>
                <Picker 
                    prompt="SELECT THE CURRENT SEMESTER"
                    onValueChange={(text) => this.props.signUpChanged({ prop: 'sem', value: text })}
                    selectedValue={this.props.sem}
                >  
                <Picker.Item label="S1" value="S1" />
                <Picker.Item label="S2" value="S2" />
                <Picker.Item label="S3" value="S3" />
                <Picker.Item label="S4" value="S4" />
                <Picker.Item label="S5" value="S5" />
                <Picker.Item label="S6" value="S6" />
                <Picker.Item label="S7" value="S7" />
                <Picker.Item label="S8" value="S8" />
                </Picker>  
              </View>
           </View>
                   
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: 'rgba( 255,255,255,0.5)',
        marginVertical: 14,
        borderRadius: 200,
        width: 300
    },
    picker: {
        paddingLeft: 10
    
    }
});  

const mapStateToProps = state => {
    return {
        sem: state.auth.sem
    }
}

export default connect(mapStateToProps, { signUpChanged })(SignUpPickerSem);