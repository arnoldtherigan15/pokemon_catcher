/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function generateTab(moves,types) {
    return [
        {
          name: 'Moves',
          label: 'Moves',
          content: (
            <div className="tab-content">
                {
                    moves.map((data,i) => {
                        return (
                            <h2 key={i}>{data.move.name}</h2>
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
            <div className="tab-content">
                {
                    types.map((data,i) => {
                        return (
                            <h2 key={i}>{data.type.name}</h2>
                        )
                    })
                }
            </div>
          )
        }
    ];

}

export default generateTab