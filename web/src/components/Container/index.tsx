import React from 'react';


import { GlobalContainer } from './styles';

const Container: React.FC = ({ children }) => {
  return (
    <GlobalContainer>
      {children}
    </GlobalContainer>
  );
}

export default Container;