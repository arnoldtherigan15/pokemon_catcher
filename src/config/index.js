import {
    ApolloClient,
    InMemoryCache,
    makeVar
} from "@apollo/client";


export const myPokemonsVar = makeVar(JSON.parse(localStorage.getItem("myPokemons")) || [])


const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache({
        typePolicies: {
            PokemonItem: {
                fields: {
                    ownedCounter: {
                        read(_, {readField}) {
                            let counter = 0;
                            myPokemonsVar().forEach(poke => {
                                if(poke.name === readField('name')) counter += 1
                            });
                            return counter
                        }
                    }
                }
            },
            Query: {
                fields: {
                    myPokemons: {
                        read() {
                            return myPokemonsVar()
                        }
                    }
                }
            }
        }
    }),
      
});


export default client
  