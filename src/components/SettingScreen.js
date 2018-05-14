import React from 'react';
import { Text } from 'react-native';
import { Container, Content, Header, Icon, Left, Right, Button } from 'native-base';

class SettingScreen extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                        <Icon name="menu" color="white" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
                        </Button>
                    </Left>
                    <Right />
                </Header>

                <Content>
                <Text>settings</Text>
                </Content>
            </Container>
        );
    }

}

export default SettingScreen;