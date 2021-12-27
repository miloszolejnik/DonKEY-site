import React from 'react'
import styled from 'styled-components'

function TextError(props) {
    return (
        <ErrorMsg>
            {props.children}
        </ErrorMsg>
    )
}

const ErrorMsg = styled.div`
    align-self: center;
    color: red;
    font-style: italic;
    font-size:1rem;
`

export default TextError