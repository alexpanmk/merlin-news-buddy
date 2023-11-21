import React from "react";
import SidebarButton from "./SidebarButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Avatar, Button, Box, Nav, Stack, Text } from "grommet";

import {
  Analytics,
  Chat,
  Clock,
  Configure,
  Help,
  Projects,
  Archive,
  Nodes,
  Split,
  StatusInfoSmall,
} from "grommet-icons";

const MainNavigation = () => {
  const StyledLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    /* Other styles */
  `;

  return (
    <>
      <StyledLink to="/">
        <SidebarButton icon={<Projects />} label="Dashboard" />
      </StyledLink>
      <StyledLink to="/news-library">
        <SidebarButton icon={<Archive />} label="News Library" />
      </StyledLink>
      <StyledLink to="/news-lab">
        <SidebarButton icon={<Nodes />} label="News Lab" />
      </StyledLink>
      <StyledLink to="/toggle-chat">
        <SidebarButton icon={<Chat />} label="Toggle Chat" />
      </StyledLink>
    </>
  );
};

export default MainNavigation;
