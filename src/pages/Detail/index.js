/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useParams, Link, useHistory } from "react-router-dom";
import { Button, Modal, generateTab, FailedNotification, SuccessNotification, IsExistsNotif, Loading, Error } from '../../components'
import LeftArrow from '../../assets/left-arrow.svg'
import { useQuery, gql } from '@apollo/client'
import { myPokemonsVar } from '../../config'

const detailPageStyle = css`
    background-color: #fbdb5d;
    height: 100vh;
    overflow: hidden;
    position: relative;
`
const floatingContainerStyle = css`
    background-color: white;
    height: 80vh;
    position: absolute;
    left: 0;
    top : 35%;
    width: 100vw;
    overflow-y: hidden;
    border-top-left-radius:28px;
    border-top-right-radius:28px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const pokemonImageStyle = css`
    position: absolute;
    top : 140px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index:2;
`

const circleStyle = css`
    position: absolute;
    top : 160px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index:0;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255,.4);
    border-radius:100%;
`

const backArrowStyle = css`
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    cursor: pointer;
`

const tabContainerStyle = css`
    display: flex;
    width: 100%;
`
const tabStyle = css`
    border: none;
    padding: 10px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    background:#fbdb5d;
    margin-right: 5px;
    cursor: pointer;
`
const activeStyle = css`
    background:#fbdb5d;
    border: none;
    border-right: 2px solid gray;
    padding: 10px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    margin-right: 5px;
    cursor: pointer;
    box-shadow: 1px 1px 5px black;
`

const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            sprites {
                front_default
            }
            moves {
                move {
                    name
                }
            }
            types {
                type {
                    name
                    url
                }
            }
            message
        }
    }
`

const Detail = () => {
    let { name } = useParams();
    const history = useHistory();
    const [isShowForm,setIsShowForm] = useState(false)
    const [isShowSuccess,setIsShowSuccess] = useState(false)
    const [isShowFailed,setIsShowFailed] = useState(false)
    const [isShowExistsNotif,setIsShowExistsNotif] = useState(false)

    const clickModal = () =>  {
        if(Math.random() < 0.5) { //50% probability of getting true
            setIsShowSuccess(true)
            setTimeout(() => {
                setIsShowSuccess(false)
                setIsShowForm(true)
            }, 2000);
        } else {
            setIsShowFailed(true)
            setTimeout(() => {
                setIsShowFailed(false)
            }, 2000);
        }
    }

    const [currentTab, setCurrentTab] = useState('tab1');

    const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
        variables: {
            name
        }
    })

    
    
    if(loading) return <Loading/>;
    if (error) return <Error/>
    
    let { sprites, name: pokeName, moves, types  } = data.pokemon
    const submitName = (e, nickName) => {
        e.preventDefault()
        setIsShowForm(false)
        const previousData = JSON.parse(localStorage.getItem("myPokemons")) || [];
        let isExists = previousData.filter((poke) => poke.name === name && poke.nickName === nickName).length > 0
        if(isExists) {// pokemon is Exists
            setIsShowExistsNotif(true)
            setTimeout(() => {
                setIsShowExistsNotif(false)
            }, 2000);
            setIsShowForm(true)
        } else {
            const newData = {
                name,
                nickName,
                image: sprites.front_default
            }
            localStorage.setItem("myPokemons", JSON.stringify([...previousData, newData]));
            myPokemonsVar([...previousData, newData])
            history.push(`/myPokemon`);
        }
    }

    return (
        <>
            <Link to="/" css={backArrowStyle}>
                <img width="50" src={LeftArrow} alt="left arrow" />
            </Link>
            <div css={detailPageStyle}>
                <div css={circleStyle}></div>
                <div css={pokemonImageStyle}>
                    <img height="200" width="200" src={sprites.front_default} alt="pokemon" />
                </div>
                <div css={floatingContainerStyle}>
                    <h1 css={{ "textAlign": "center", "margin": "10px 0;" }}>{pokeName}</h1>
                    <div css={tabContainerStyle}>
                        {
                            generateTab(moves, types).map((tab, i) => (
                                <button 
                                    key={i}
                                    onClick={() => setCurrentTab(tab.name)} 
                                    css={(tab.name === currentTab) ? activeStyle : tabStyle}>
                                    {tab.label}
                                </button>
                            ))
                        }
                    </div>
                    {
                        generateTab(moves, types).map((tab, i) => {
                        if(tab.name === currentTab) {
                            return <div key={i}>{tab.content}</div>;
                        } else {
                            return null;
                        }
                        })
                    }
                </div>
            </div>
            <Button onClick={clickModal} /> 
            <Modal show={isShowForm} onSubmit={submitName}/>
            <FailedNotification show={isShowFailed} />
            <IsExistsNotif show={isShowExistsNotif} />
            <SuccessNotification pokeName={pokeName} show={isShowSuccess}/>
        </>
    )
}

export default Detail