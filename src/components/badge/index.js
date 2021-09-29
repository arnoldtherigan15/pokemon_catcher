/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const Badge = (props) => {
    const badgeStyle = css`
      background-color: rgba(241, 242, 246,.4);
      padding:5px 10px;
      border-radius: 10px;
      text-align: center;
      margin-top: 5px;
    `
    return (
      <div
        css={badgeStyle}
      >
        <p css={{ "color":props.textColor,"fontWeight": "bold" }}>{props.text}</p>
      </div>
    )
}

export default Badge