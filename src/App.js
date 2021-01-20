import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { Container } from 'reactstrap';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks"
import PokemonsContainer from './containers/PokemonsContainer';


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavbarComponent />
        <div>
          <PokemonsContainer />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
