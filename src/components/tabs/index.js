/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


function generateTab(moves,types) {
    const tabContentStyle = css`
        
        width: 100vw;
        padding: 10px 30px;
        height: 40vh;
        overflow-y: scroll;
    `

    const listNumber = css`
        width: 50px;
        height: 50px;
        background: #fbdb5d;
        border-radius: 100%;
        position: absolute;
        top:0;
        left:0;
        z-index:2;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const listNumberWhite = css`
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 100%;
        position: absolute;
        top:-5px;
        left:-4.5px;
        z-index:1;
    `

    const listBody = css`
        background: #fbdb5d;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        border-radius: 40px;
    `
    const tabContainer = css`
        width: 100%;
        display: flex;
        align-items: center; 
        position: relative; 
        margin: 10px 0 20px 0;
    `
    return [
        {
          name: 'Moves',
          label: 'Moves',
          content: (
            <div css={tabContentStyle}>
                {
                    moves.map((data,i) => {
                        return (
                            <div css={tabContainer} key={i}>
                                <div css={listNumber}>
                                    <p>{i+1}</p>
                                </div>
                                <div css={listNumberWhite}></div>
                                <div css={listBody}>
                                    <p css={{ "marginLeft": "50px" }}>{data.move.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          )
        },
        {
          name: 'Types',
          label: 'Types',
          content: (
            <div css={tabContentStyle}>
                {
                    types.map((data,i) => {
                        return (
                            <div css={{ "width": "100%", "display": "flex","alignItems":"center", "position": "relative", "margin": "20px 0 30px 0" }} key={i}>
                                <div css={listNumber}>
                                    <p>{i+1}</p>
                                </div>
                                <div css={listNumberWhite}></div>
                                <div css={listBody}>
                                    <p css={{ "marginLeft": "50px" }}>{data.type.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          )
        }
    ];

}

export default generateTab