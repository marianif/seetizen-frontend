import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import RoofingIcon from "@mui/icons-material/Roofing";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BannerCrowdfunding from "../Map/BannerCrowfunding/BannerCrowdfunding";
import MapIcon from "@mui/icons-material/Map";

const MapBar = ({ onProgramPress, onHousePress, onMapPress }) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: 100 }}>
      {/* <BannerCrowdfunding /> */}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Mappa"
          icon={<MapIcon />}
          onClick={onMapPress}
        />
        <BottomNavigationAction
          label="Programma"
          icon={<RestoreIcon />}
          onClick={onProgramPress}
        />
        <BottomNavigationAction
          label="Case"
          icon={<RoofingIcon />}
          onClick={onHousePress}
        />
        <BottomNavigationAction label="Bike Tour" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default MapBar;
