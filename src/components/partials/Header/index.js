import React from "react";
import { PageContainer } from "../../MainComponents";
import { HeaderArea } from "./styled";

import logo from "./logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderArea>
      <PageContainer>
        <div className="area--logo">
          <Link to="/">
            <img src={logo} alt="LOGO" />
          </Link>
        </div>
      </PageContainer>
    </HeaderArea>
  );
};

export default Header;
