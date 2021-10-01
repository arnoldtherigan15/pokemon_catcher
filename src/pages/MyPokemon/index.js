/** @jsxImportSource @emotion/react */
import { Heading, NavbarSimple, MyPokeCard } from '../../components'
import pokemonTrainer from '../../assets/pokeTrainer.svg'
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { myPokemonsVar } from '../../config'
import { useQuery, gql } from '@apollo/client'

const mainContainer = css`
    min-height:100vh;
    padding: 0 20px;
    overflow-x: hidden;
`
const GET_MY_POKEMONS = gql`
     query getMyPokemon {
        myPokemons @client
    }
`;

const MyPokemon = () => {
    const { data } = useQuery(GET_MY_POKEMONS);
    // console.log(myPokemons,">>>>>AAAA");
    // console.log(datas(),">>>DATASS");
    // const [myPokemons, setMyPokemons] = useState([]); // Task State
    // const getData = JSON.parse(localStorage.getItem("myPokemons"));
    const getData = [...data.myPokemons];
    const deletePokemon = (name, nickName) => {
        // let isExists = getData.filter((poke) => poke.name === name && poke.nickName === nickName).length > 0
        let indexPoke = getData.findIndex(function(poke) {
            return poke.name === name && poke.nickName === nickName;
        });
        getData.splice(indexPoke, 1)
        localStorage.setItem("myPokemons", JSON.stringify(getData));
        // console.log(myPokemons(),"<<<<< BEFOREEE");
        myPokemonsVar(getData)
        // console.log(myPokemons(),"<<<<< AFTER");
    }

    // useEffect(() => {
    //     if (!getData) {
    //         setMyPokemons([])
    //     } else {
    //         setMyPokemons(getData)
    //     }
    // }, [])
    return (
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
        </>
    )
}   

export default MyPokemon