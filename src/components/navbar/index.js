/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import pokeball from '../../assets/pokeball5.svg'
import { useHistory } from 'react-router-dom';

const navStyle = css`
  background-color: #f9ce48;
  padding:10px;
  box-shadow: 1px 1px 4px gray;
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  z-index:9999;
`

const pokeballStyle = css`
  width: 50px;
  cursor: pointer;
`

const navBrandStyle = css`
  display: flex;
  align-items:center;
  justify-content:center;
`

const Navbar = () => {
  const history = useHistory();
    function handleClick() {
        history.push("/myPokemon");
    }
    return (
      <nav
        css={navStyle}
      >
        <div css={navBrandStyle}>
          <img onClick={handleClick} src={pokeball} alt="pokeball" css={pokeballStyle} />
        </div>
      </nav>
    )
}

export default Navbar
