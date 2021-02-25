import React from 'react';
import PurePinkContainer from './components/PurePinkContainer';
import ReactPinkContainer from './components/ReactPinkContainer';

function Home() {
  return (
    <div>
      <PurePinkContainer>
        Teste de CSS
      </PurePinkContainer>
      <ReactPinkContainer>
        Teste de CSS
      </ReactPinkContainer>
    </div>
  );
}

Home.getInitialProps = async ({
  req,
  res,
  match,
  history,
  location,
  ...ctx
}) => {
  return { whatever: 'stuff' };
};

export default Home;
