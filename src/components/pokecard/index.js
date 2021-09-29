/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Heading, Badge } from '../'
import PokeBallBG from '../../assets/pokeballCircle.svg'
import PokeBall from '../../assets/pokeball2.svg'


const pokeImg = css`
    height: 60%;
    position: absolute;
    right: 10px;
    bottom: 15px;
    z-index:2;
`

const PokeBallBGStyle = css`
    width: 40%;
    position: absolute;
    right: -20px;
    top: -40px;
    z-index:1;
    opacity: 0.5;
    transform: rotate(30deg);
`
const ownedIndicator = css`
    background-color: #fbdb5d;
    position: absolute;
    top: 0px;
    left: 0;
    box-shadow: 1px 1px 3px #57606f;
    ${'' /* border: 2px solid #57606f; */}
    z-index: 2;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    font-size: 1em;
`

const pokeBallStyle = css`
    width: 15px;
    margin-right: 5px;
`

const PokeCard = (props) => {
    const cardStyle = css`
        background-color: ${props.color || "#fbd76e"};
        padding:10px;
        box-shadow: 1px 1px 3px gray;
        border-radius: 10px;
        display: flex;
        height: 15vh;
        margin: 15px 10px;
        width: 300px;
        position: relative;
        overflow: hidden;
    `
    return (
      <div css={{ "position":"relative" }}>
      {
          props.owned > 0 && (
            <div css={ownedIndicator}>
                <div css={{ "display": "flex", "alignItems": "center" }}>
                    <img css={pokeBallStyle} src={PokeBall} alt="poke ball" />
                    <p>{props.owned}</p>
                </div>
            </div>
          ) 
      }
        <div className="pokecard" css={cardStyle}>
            <div css={{ "display": "flex", "justifyContent": "center", "flexDirection": "column", "marginLeft": "20px" }}>
                <Heading size="1.5em" color="white">Pikachu</Heading>
                <div>
                    <Badge text="Grass" textColor="white" />
                </div>
            </div>
            <div>
                <img css={pokeImg} src={props.img} alt="pokemon" />
                <img css={PokeBallBGStyle} src={PokeBallBG} alt="pokeball background" />
                {/* <img css={PokeBall2BGStyle} src={PokeBallBG} alt="pokeball background" /> */}
            </div>
        </div>
      </div>
    )
}

export default PokeCard