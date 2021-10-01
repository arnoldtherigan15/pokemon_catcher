/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { css } from '@emotion/react'
import LeftArrow from '../../assets/left-arrow.svg'

const navStyle = css`
  background-color: #f9ce48;
  padding:10px;
  box-shadow: 1px 1px 4px gray;
  ${'' /* position:fixed; */}
  ${'' /* top:0; */}
  ${'' /* left:0; */}
  width:100vw;
  display:flex;
  align-items: center;
  ${'' /* z-index:9999; */}
`

const backArrowStyle = css`
    cursor: pointer;
`

const NavbarSimple = () => {
    return (
        <nav
          css={navStyle}
        >
            <Link to="/" css={backArrowStyle}>
                <img width="50" src={LeftArrow} alt="left arrow" />
            </Link>
        </nav>
    )
}

export default NavbarSimple