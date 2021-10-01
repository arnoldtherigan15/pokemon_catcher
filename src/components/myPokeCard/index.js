/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Heading } from '../../components'

const container = css`
    margin: 20px 0;
    :nth-of-type(even) {
        float: right;
    }
    :nth-of-type(odd) {
        float: left;
        div.div:nth-of-type(2) { order: 1; }
    }
    
`

const cardBodyStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background:#f8e793;
    width:90vw;
    border-radius:20px;
`

const circle = css`
    ${'' /* border-radius: 100%; */}
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius:100%;
    top: 5px;
    right:-50px;
    z-index:1;
    background-color: rgba(255, 255, 255,.7);
`

const circleLeft = css`
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius:100%;
    top: 5px;
    left:-50px;
    z-index:1;
    background-color: rgba(255, 255, 255,.7);
`

const shadow = css`
    bottom: -10px;
    filter: blur(10px);/* this is the magic part */
    height: 100%;
    left: 0;
    position: absolute;
    transform: scale(0.95);
    width: 100%;
    z-index: 1;
`

const image = css`
    position: relative;
    z-index: 2;
`

const MyPokeCard = (props) => {
    return (
        <div css={container}>
            {/* <div css={cardBodyStyle}> */}
            {
                (props.idix % 2 !== 0) ? (
                    <div css={cardBodyStyle}>
                        <div css={{ "marginLeft":"20px" }}>
                            <Heading color="black" size="1.5em">{props.nickName}</Heading>
                            <Heading color="white" size="1em">{props.name}</Heading>
                        </div>
                        <button css={{ "position":"absolute","zIndex": "9999" }} onClick={()=> props.deletePokemon(props.name, props.nickName)}>Delete</button>
                        <div css={{ "position": "relative" }}>
                            <img css={image} width="150" src={props.image} alt="pokemon" />
                            <img css={shadow} width="150" src={props.image} alt="pokemon" />
                        </div>
                        <div css={circle}></div>
                    </div>
                ) : (
                    <div css={cardBodyStyle}>
                        <button css={{ "position":"absolute","zIndex": "9999" }} onClick={()=>props.deletePokemon(props.name, props.nickName)}>Delete</button>
                        <div css={{ "position": "relative" }}>
                            <img css={image} width="150" src={props.image} alt="pokemon" />
                            <img css={shadow} width="150" src={props.image} alt="pokemon" />
                        </div>
                        <div css={{ "marginRight":"20px", "textAlign": "right" }}>
                            <Heading color="black" size="1.5em">{props.nickName}</Heading>
                            <Heading color="white" size="1em">{props.name}</Heading>
                        </div>
                        <div css={circleLeft}></div>
                    </div>
                )
            }
        </div>
    )
}

export default MyPokeCard