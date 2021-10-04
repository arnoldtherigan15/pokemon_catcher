/** @jsxImportSource @emotion/react */
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
    display: flex;
    justify-content: space-between;
`

const cancelBtn = css`
    padding: 10px;
    border-radius: 10px;
    border: none;
`
const deleteBtn = css`
    padding: 10px;
    border-radius: 10px;
    border: none;
    background: #ed5565;
`

// const textContainer = css`
//     overflow:hidden; 
//     white-space: nowrap;
//     text-overflow: ellipsis;
// `


const DeleteModal = (props) => {

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
                            <Heading color="black" size="1.5em">Are you  sure want to remove this pokemon ?</Heading>
                        </div>
                    </div>
                </div>
                <div css={modalBody}>
                    <button onClick={() => {
                        props.onClick(false)
                    }} css={cancelBtn}>cancel</button>
                    <button onClick={() => {
                        props.onClick(true)
                    }} css={deleteBtn}>remove</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal