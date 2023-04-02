import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BannerCrowdfunding from "../Map/BannerCrowfunding/BannerCrowdfunding";

const MapBar = ({ onProgramPress, onArtistPress, onMapPress }) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: 100 }}>
      <BannerCrowdfunding />
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Mappa"
          icon={<RestoreIcon />}
          onClick={onMapPress}
        />
        <BottomNavigationAction
          label="Programma"
          icon={<RestoreIcon />}
          onClick={onProgramPress}
        />
        <BottomNavigationAction
          label="Artisti"
          icon={<FavoriteIcon />}
          onClick={onArtistPress}
        />
        <BottomNavigationAction label="Bike Tour" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default MapBar;
