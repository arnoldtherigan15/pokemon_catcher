/** @jsxImportSource @emotion/react */
import { Heading, NavbarSimple, MyPokeCard, DeleteModal } from '../../components'
import pokemonTrainer from '../../assets/pokeTrainer.svg'
import emptyGif from '../../assets/empty.gif'
import { css } from '@emotion/react'
import { useState } from 'react'
import { myPokemonsVar } from '../../config'
import { useQuery, gql } from '@apollo/client'

const mainContainer = css`
    min-height:100vh;
    padding: 0 20px;
    overflow-x: hidden;
`

const emptyContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const GET_MY_POKEMONS = gql`
     query getMyPokemon {
        myPokemons @client
    }
`;

const MyPokemon = () => {
    const { data } = useQuery(GET_MY_POKEMONS);
    const [isShowModal,setIsShowModal] = useState(false)
    const [name,setName] = useState("")
    const [nickname,setNickname] = useState("")
    
    const getData = [...data.myPokemons];

    const clickRemoveModal = (isDelete) => {
        if(isDelete) {
            let indexPoke = getData.findIndex(function(poke) {
                return poke.name === name && poke.nickName === nickname;
            });
            getData.splice(indexPoke, 1)
            localStorage.setItem("myPokemons", JSON.stringify(getData));
            myPokemonsVar(getData)
            setIsShowModal(false)
        } else {
            setIsShowModal(false)
        }
    }
    const deletePokemon = (name, nickName) => {
        setIsShowModal(true)
        setName(name)
        setNickname(nickName)
    }
    
    return (
        data.myPokemons.length ? (
        <>
            <NavbarSimple/>
            <div css={mainContainer}>
                <div css={{ "display":"flex", "alignItems": "center", margin: "20px 0 20px 0" }}>
                    <img width={50} src={pokemonTrainer} alt="poke app icon" css={{ "marginRight":"10px" }} />
                    <Heading color="black" size="2em">My Pokemon</Heading>
                </div>
                <div css={{ "display":"flex", "flexWrap": "wrap", "justifyContent": "center" }}>
                    {
                        data.myPokemons.map((pokemon,i) => {
                            return <MyPokeCard 
                                idx={i} 
                                key={i} 
                                {...pokemon}
                                deletePokemon={deletePokemon}/>       
                        })  
                    }
                </div>
            </div>
            <DeleteModal show={isShowModal} onClick={clickRemoveModal} nickname={nickname}/>
        </>
        ) : (
            <>
                <NavbarSimple/>
                <div css={mainContainer}>
                    <div css={emptyContainer}>
                        <img src={emptyGif} alt="empty"/>
                    </div>
                </div>
            </>
        )
    )
}   

export default MyPokemon