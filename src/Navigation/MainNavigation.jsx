import React from "react";
import SidebarButton from "./SidebarButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Sidebar, Box, Image, Avatar, Text } from "grommet";

import {
  SettingsOption,
  Chat,
  Help,
  Projects,
  Archive,
  Nodes,
} from "grommet-icons";

const MainNavigation = () => {
  const StyledLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    /* Other styles */
  `;

  return (
    <>
      <Sidebar gridArea="sidebar" background="brand" pad="medium">
        <Box pad="medium" gap="small">
          <Image
            maxWidth="50px"
            fit="contain"
            src="src/assets/merlin-icon.png"
          />
        </Box>
        <StyledLink to="/">
          <SidebarButton icon={<Projects />} label="Dashboard" />
        </StyledLink>
        <StyledLink to="/news-library">
          <SidebarButton icon={<Archive />} label="News Library" />
        </StyledLink>
        <StyledLink to="/news-lab">
          <SidebarButton icon={<Nodes />} label="News Lab" />
        </StyledLink>
        <StyledLink to="/chat">
          <SidebarButton icon={<Chat />} label="Chat" />
        </StyledLink>

        <StyledLink to="/setting">
          <SidebarButton icon={<SettingsOption />} label="Settings" />
        </StyledLink>
      </Sidebar>
    </>
  );
};

export default MainNavigation;
