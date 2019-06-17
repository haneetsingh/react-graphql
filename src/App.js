import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8888/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <Nav />
        <div className="container">
          <Homepage />
        </div>
        <Footer />
      </React.Fragment>
    </ApolloProvider>
  );
}

export default App;
