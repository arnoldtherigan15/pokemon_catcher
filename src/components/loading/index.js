/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, keyframes } from '@emotion/react'
import LoadingGif from '../../assets/loading.gif'

const fade = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`

const container = css`
    width: 100vw;
    height: 100vh;
    animation: ${fade} .5s;
    background: #f3fbfe;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Loading = () => {
    return (
        <div css={container}>
            <img src={LoadingGif} alt="loading" />
        </div>
    )
}

export default Loading