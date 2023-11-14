import React from "react";

import { Avatar, Button, Box, Nav, Stack, Text } from "grommet";

import {
  Analytics,
  Chat,
  Clock,
  Configure,
  Help,
  Projects,
  Split,
  StatusInfoSmall,
} from "grommet-icons";

const SidebarButton = ({ icon, label, ...rest }) => {
  return (
    <>
      <Box pad="small">
        <Button
          gap="medium"
          alignSelf="start"
          plain
          icon={icon}
          label={label}
          {...rest}
        />
      </Box>
    </>
  );
};

export default SidebarButton;
