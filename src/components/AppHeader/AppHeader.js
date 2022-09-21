import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  AppBar,
  Toolbar,
  Tooltip,
  Container,
  Menu,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { UserDialog, MenuLink } from "..";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentGroup } from "../../store/userSlice";

const LOGO = require("@/images/seetizen-logo.png");

const routes = [
  {
    name: "Crea Evento",
    path: "/create/event",
  },
  {
    name: "Crea Articolo",
    path: "/create/article",
  },
  {
    name: "Risorse",
    path: "/resources",
  },
];
const settings = ["Logout"];

const AppHeader = () => {
  const { hasPermission } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const onSignout = async () => {
    try {
      await Auth.signOut();
      router.back();
    } catch (err) {
      console.log(err);
    }
  };

  const onUserChange = ({ type, data }) => {
    if (type === "group") {
      dispatch(setCurrentGroup({ currentGroup: data, usingAs: "group" }));
    } else {
      dispatch(setCurrentGroup({ currentGroup: null, usingAs: "user" }));
    }
  };

  return (
    <AppBar position="relative">
      <Container
        maxWidth={false}
        sx={{
          width: "88%",
          // backgroundColor: "white",
        }}
      >
        <Toolbar disableGutters>
          <Link href="/dashboard">
            <Box
              sx={{
                width: "10vw",
                // height: "2.5vw",
                position: "relative",
                overFlow: "hidden",
                // display: { xs: "none", md: "flex" },
                cursor: "pointer",
              }}
            >
              <Image src={LOGO} layout="responsive" />
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.slice(0, 2).map((route) => (
                <MenuLink
                  route={route}
                  key={route.name}
                  disabled={!hasPermission}
                />
              ))}
              <MenuLink route={routes[2]} disabled={false} />
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routes.slice(0, 2).map((route) => (
              <MenuLink
                route={route}
                key={route.name}
                disabled={!hasPermission}
              />
            ))}
            <MenuLink route={routes[2]} disabled={true} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <UserDialog user={user} handlers={{ onSignout, onUserChange }} />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
