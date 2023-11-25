import React from "react";

import { Button, Box } from "grommet";

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
