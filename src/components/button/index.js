/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import Pokeball from '../../assets/pokeball5.svg'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`
const buttonStyle = css`
    
    border: none;
    padding: 0px 10px 10px 10px;
    ${'' /* border-radius:10px; */}
    width: 100vw;
    background: #fbdb5d;
    
    box-shadow: 0px -3px 4px rgba(164, 176, 190,.6);
    animation: ${bounce} 2s ease infinite;
    height: 15vh;
    position: absolute;
    bottom: -30px;
    left: 0;
    cursor:pointer;
`

const Button = () => {
    return (
        <button 
            css={buttonStyle}>
           <div css={{ "display":"flex", "justifyContent":"center","alignItems":"center" }}>
                <div>
                    <img width="40" src={Pokeball} alt="pokeball" css={{ "marginRight":"10px" }} />
                </div>
                <div>
                    <p css={{ "fontSize":"1.5em","fontWeight":"bold" }}>Catch Me</p>
                </div>
           </div>
        </button>
    )
}

export default Button