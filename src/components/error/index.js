/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, keyframes } from '@emotion/react'
import ErrorGif from '../../assets/error.gif'

const fade = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`

const container = css`
    width: 100vw;
    height: 100vh;
    animation: ${fade} .5s;
    background: RGB(242, 243, 243);
    display: flex;
    justify-content: center;
    align-items: center;
`


const Error = () => {
    return (
        <div css={container}>
            <img width="300" src={ErrorGif} alt="error" />
        </div>
    )
}

export default Error