import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Navigation from '../navigations'

const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content: center;
    /* background-color: #ffffff; */
`
const StyledText = styled.Text`
    font-size: 30px;
    margin:10px;
`
const Chat = ({ navigation, route }) => {
    return (
        <Container>
            <StyledText>Chat</StyledText>
            <StyledText>{route.params.id}</StyledText>
            <StyledText>{route.params.name}</StyledText>
            <Button title="Home" onPress={() => navigation.reset({ routes: [{ name: "Home" }] })} />
        </Container>
    )
}

export default Chat
