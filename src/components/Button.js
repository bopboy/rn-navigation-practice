import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
    background-color: #777bdd;
    padding:10px;
    margin:10px;
`
const Title = styled.Text`
    font-size: 24px;
    color:#fff;
`
const Buttton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Container>
                <Title>{title}</Title>
            </Container>
        </TouchableOpacity>
    )
}

export default Buttton
