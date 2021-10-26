import React from 'react'
import styled from 'styled-components'

const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content: center;
    /* background-color: #ffffff; */
`
const StyledText = styled.Text`
    font-size: 30px;
`

export const Mail = () => {
    return (
        <Container>
            <StyledText>Mail</StyledText>
        </Container>
    )
}

export const Profile = () => {
    return (
        <Container>
            <StyledText>Profile</StyledText>
        </Container>
    )
}

export const Settings = () => {
    return (
        <Container>
            <StyledText>Settings</StyledText>
        </Container>
    )
}