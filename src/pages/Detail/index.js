/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useParams, Link } from "react-router-dom";
import { Button } from '../../components'
import LeftArrow from '../../assets/left-arrow.svg'

const detailPageStyle = css`
    background-color: #fbdb5d;
    height: 100vh;
    overflow: hidden;
    position: relative;
`
const floatingContainerStyle = css`
    background-color: white;
    height: 80vh;
    position: absolute;
    left: 0;
    top : 35%;
    width: 100vw;
    overflow-y: hidden;
    border-top-left-radius:28px;
    border-top-right-radius:28px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const pokemonImageStyle = css`
    position: absolute;
    top : 110px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index:2;
`

const circleStyle = css`
    position: absolute;
    top : 110px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index:1;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255,.4);
    border-radius:100%;
`

const backArrowStyle = css`
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    cursor: pointer;
`
const Detail = () => {
    let { id } = useParams();
    return (
        <>
            <Link to="/" css={backArrowStyle}>
                <img width="50" src={LeftArrow} alt="left arrow" />
            </Link>
            <div css={detailPageStyle}>
                <div css={circleStyle}></div>
                <div css={pokemonImageStyle}>
                    <img height="200" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" alt="pokemon" />
                </div>
                <div css={floatingContainerStyle}>
                    <h1 css={{ "textAlign": "center", "margin": "10px 0;" }}>Pikachu</h1>
                    <p>Lorem lorem lorem lorem lorem lrem lorem lorem lorem lorem lrem lorem lorem lorem lorem lrem lorem lorem lorem lorem lrem lorem lorem lorem lorem lorem</p>
                    
                </div>
            </div>
            {/* <div css={{ "position":"absolute", "bottom":0, "left":0 }}> */}
                <Button /> 
            {/* </div> */}
        </>
    )
}

export default Detail