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
    filter: blur(10px);
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

const deleteBtnRight = css`
    padding: 5px 10px;
    position: absolute;
    top: 0;
    right: 0;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border: none;
    background: #ed5565;
    color: white;
    font-weight: bold;
    cursor: pointer;
`

const deleteBtnLeft = css`
    padding: 5px 10px;
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: none;
    background: #ed5565;
    color: white;
    font-weight: bold;
    cursor: pointer;
`

const textSecondaryRight = css`
    background: rgba(30, 39, 46,.2);
    padding: 5px;
    border-radius: 10px;
    margin-top: 5px;
    display: inline-block;
    float:right;
`

const textSecondaryLeft= css`
    background: rgba(30, 39, 46,.2);
    padding: 5px;
    border-radius: 10px;
    margin-top: 5px;
    display: inline-block;
`

const nickNameText = css`
    color: black;
    font-size: 1.5em;
    overflow:hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 160px;
`

const MyPokeCard = (props) => {
    return (
        <div css={container}>
            {
                (props.idx % 2 !== 0) ? (
                    <div css={cardBodyStyle}>
                        <button css={deleteBtnLeft} onClick={()=> props.deletePokemon(props.name, props.nickName)}>Remove</button>
                        <div css={{ "marginLeft":"20px"}}>
                            <h1 css={nickNameText}>{props.nickName}</h1>
                            <div css={textSecondaryLeft}>
                                <Heading color="white" size="1em">{props.name}</Heading>
                            </div>
                        </div>
                        <div css={{ "position": "relative" }}>
                            <img css={image} width="150" src={props.image} alt="pokemon" />
                            <img css={shadow} width="150" src={props.image} alt="pokemon" />
                        </div>
                        <div css={circle}></div>
                    </div>
                ) : (
                    <div css={cardBodyStyle}>
                        <button css={deleteBtnRight} onClick={()=>props.deletePokemon(props.name, props.nickName)}>Remove</button>
                        <div css={{ "position": "relative" }}>
                            <img css={image} width="150" src={props.image} alt="pokemon" />
                            <img css={shadow} width="150" src={props.image} alt="pokemon" />
                        </div>
                        <div css={{ "marginRight":"20px" }}>
                            <h1 css={nickNameText}>{props.nickName}</h1>
                            <div css={textSecondaryRight}>
                                <Heading color="white" size="1em">{props.name}</Heading>
                            </div>
                        </div>
                        <div css={circleLeft}></div>
                    </div>
                )
            }
        </div>
    )
}

export default MyPokeCard