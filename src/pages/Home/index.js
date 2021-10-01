/** @jsxImportSource @emotion/react */
import { css,keyframes } from '@emotion/react'
import React, {useState, useEffect} from 'react';
import { Heading, Navbar, PokeCard } from '../../components'
import pokeAppIcon from '../../assets/pokemonCatch.svg'
import { useQuery, gql } from '@apollo/client'

const mainContainer = css`
    min-height:100vh;
    padding: 0 20px;
    overflow-x: hidden;
`
const fade = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`

const GET_POKEMONS = gql`
    query Pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            results {
                id
                name
                image
                ownedCounter @client
            }
        }
    }  
`

// const GET_POKEMONS = gql`
//     query {
//         pokemons @client {
//             isOwned @client
//         }
//     }
// `

const Home = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isShowBottom, setShowBottom] = useState(false);
    // const [pokemons, setPokemons] = useState([])

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        if(scrollPosition > 80) {
            setShowBottom(true)
        } else {
            setShowBottom(false)
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    // const { loading, error, data } = useQuery(GET_POKEMONS, {
    //     variables: {
    //         limit: 20,
    //         offset: 0
    //     }
    // });
    const { loading, error, data } = useQuery(GET_POKEMONS);

    // const cache = new InMemoryCache({
    //     typePolicies: { // Type policy map
    //       Product: {
    //         fields: { // Field policy map for the Product type
    //           isOwned: { // Field policy for the isInCart field
    //             read(_, { variables }) { // The read function for the isInCart field
    //               return localStorage.getItem('CART').includes(
    //                 variables.productId
    //               );
    //             }
    //           }
    //         }
    //       }
    //     }
    //   });
      

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error,">>>>");
        return <p>Error :</p>;
    }
    // if(data) {
    //     setPokemons(data.pokemons.results)
    // }
    
    // console.log(data,">>>>dataa");
    // const myPokemons = JSON.parse(localStorage.getItem("myPokemons"));

    return (
        <>
            <Navbar/>
            <div css={{ marginTop:"100px" }}></div>
            <main 
                css={mainContainer} 
               >
                <div css={{ "display":"flex", "alignItems": "center", marginBottom: "20px" }}>
                    <img width={50} src={pokeAppIcon} alt="poke app icon" />
                    <Heading color="black" size="2em">Pokedex</Heading>
                </div>

                <div css={css`
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                `}>
                    {data.pokemons.results.map((pokemon,i) => {
                        return (
                            <PokeCard 
                                key={pokemon.id}
                                owned={pokemon.ownedCounter} 
                                color="#5cd0b1" 
                                {...pokemon}
                        />
                        )
                    })}
                {/* {
                    JSON.stringify(data)
                } */}
                </div>
                {
                    isShowBottom && (
                        <svg 
                            css={css`
                            position: fixed;
                            z-index: -1;
                            bottom: 0;
                            left:0;
                            height:50vh;
                            animation: ${fade} .5s;`}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 1440 320">
                            <path fill="#f9ce48" fillOpacity="0.8" d="M0,224L40,224C80,224,160,224,240,213.3C320,203,400,181,480,165.3C560,149,640,139,720,128C800,117,880,107,960,101.3C1040,96,1120,96,1200,117.3C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                        </svg>
                    )
                }
                {/* <Heading color="red">haiiii</Heading> */}
            </main>
        </>
    )
}

export default Home