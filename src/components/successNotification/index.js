/** @jsxImportSource @emotion/react */
import { Heading } from '../'
import { css, keyframes } from '@emotion/react'

const fade = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`

const modal = css`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    z-index: 9999;
    animation: ${fade} .5s;
`

const modalContent = css`
    width: 100vw;
    background-color: #fff;
`

const modalHeader = css`
    padding: 10px;
`
const modalBody = css`
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`

const SuccessNotification = (props) => {
    if(!props.show) return null
    return (
        <div css={modal}>
            <div css={modalContent}>
                <div css={modalHeader}>
                    <Heading size="1.5em" color="black">Success</Heading>
                </div>
                <div css={modalBody}>
                    {props.pokeName} has been caught.
                </div>
            </div>
        </div>
    )
}

export default SuccessNotification