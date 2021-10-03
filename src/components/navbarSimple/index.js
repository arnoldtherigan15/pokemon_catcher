/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { css } from '@emotion/react'
import LeftArrow from '../../assets/left-arrow.svg'

const navStyle = css`
  background-color: #f9ce48;
  padding:10px;
  box-shadow: 1px 1px 4px gray;
  width:100vw;
  display:flex;
  align-items: center;
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