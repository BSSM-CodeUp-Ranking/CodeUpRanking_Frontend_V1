import React from 'react';
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderIn>

      </HeaderIn>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.header `
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: end;
`
const HeaderIn = styled.div `
  border-radius: 8px;
  background: #2A2A2C;
  width: 95%;
  height: 50px
`

export default Header;