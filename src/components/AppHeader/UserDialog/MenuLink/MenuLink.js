import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { colors } from "@/src/utils/colors";

const MenuLink = ({ route, disabled }) => {
  return (
    <Link href={route.path} key={route.path}>
      <Button
        disabled={disabled}
        variant="outlined"
        key={route.path}
        sx={{
          my: 2,
          mx: 4,
          color: "white",
          display: "block",
          backgroundColor: colors.darkGray,
          "&:disabled": {
            backgroundColor: colors.darkGray,
            color: colors.gray500,
          },
        }}
      >
        {route.name}
      </Button>
    </Link>
  );
};

export default MenuLink;
