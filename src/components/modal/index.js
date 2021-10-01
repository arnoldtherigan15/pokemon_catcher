/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { Heading } from '../'
import { css, keyframes } from '@emotion/react'
import pokeBall from '../../assets/pokeball4.svg'

const fade = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`

const modal = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    z-index: 9999;
    animation: ${fade} .5s;
    justify-content: center;
`

const modalContent = css`
    width: 500px;
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

const inputStyle = css`
    width: 100%;
    height: 30px;
    padding: 10px;
`

const btnSubmit = css`
    width: 100%;
    padding: 5px;
    background-color: #fbdb5d;
    margin-top: 10px;
    border: 1px solid #fbdb5d;
    border-radius: 10px;
`

const Modal = (props) => {
    const [change,setChange] = useState('')

    if(!props.show) return null
    return (
        <div css={modal}>
            <div css={modalContent}>
                <div css={modalHeader}>
                    <div css={{ "display":"flex", "alignItems": "center", "justifyContent": "center" }}>
                        <div css={{ "marginRight":"10px" }}>
                            <img width={50} src={pokeBall} alt="poke app icon" />
                        </div>
                        <div>
                            <Heading color="black" size="2em">Name Your Pokemon</Heading>
                        </div>
                    </div>
                </div>
                <div css={modalBody}>
                    <form onSubmit={(e) => props.onSubmit(e, change)}>
                        <input 
                            css={inputStyle} 
                            placeholder="ex: pikaImoet" 
                            onChange={(e) => setChange(e.target.value)}
                        />
                        <button css={btnSubmit} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal