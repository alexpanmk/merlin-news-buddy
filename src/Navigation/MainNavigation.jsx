import React from "react";
import SidebarButton from "./SidebarButton";

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
  return (
    <>
      <SidebarButton icon={<Projects />} label="Dashboard" />
      <SidebarButton icon={<Archive />} label="Library" />
      <SidebarButton icon={<Nodes />} label="News Lab" />
    </>
  );
};

export default MainNavigation;
