import React, { useState } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  DialogTitle,
  Dialog,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import { blue, red } from "@mui/material/colors";
import styles from "@/styles/components/AppHeader.module.css";

const UserDialog = ({ user, handlers }) => {
  const { onSignout, onUserChange } = handlers;
  const { isUsingAs, name, avatarUrl, currentGroup } = user;
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleListItemClick = ({ type, data }) => {
    onUserChange({ type, data });
    setOpen(false);
  };

  return (
    <div>
      <a onClick={handleClickOpen}>
        <div className={styles.userContainer}>
          <Typography
            sx={{
              color: "white",
              marginRight: 3,
              fontSize: 16,
            }}
            variant="p"
          >
            {isUsingAs === "user" ? name : currentGroup.name}
          </Typography>
          <Avatar
            alt="Femy Sharp"
            src={isUsingAs === "user" ? avatarUrl : currentGroup.avatarUrl}
          />
        </div>
      </a>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle color={"primary.main"}>Pubblica come:</DialogTitle>

        <List sx={{ pt: 0, minWidth: "20vw" }}>
          {isUsingAs === "group" && (
            <ListItem
              button
              onClick={() => handleListItemClick({ type: "user" })}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ bgcolor: blue[100], color: blue[600] }}
                  src={avatarUrl}
                >
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={name}
                color="secondary.main"
                sx={{ textTransform: "capitalize" }}
              />
            </ListItem>
          )}
          {user.groups
            .filter((group) => group.id !== currentGroup?.id)
            .map((group) => (
              <ListItem
                button
                onClick={() =>
                  handleListItemClick({ type: "group", data: group })
                }
                key={group.id}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{ bgcolor: blue[100], color: blue[600] }}
                    src={group.avatarUrl}
                  >
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={group.name}
                  color="secondary.main"
                  sx={{ textTransform: "capitalize" }}
                />
              </ListItem>
            ))}
          <ListItem button onClick={onSignout}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: red[100], color: red[600] }} src={null}>
                <Logout />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={"Log-out"}
              color="secondary.main"
              sx={{ textTransform: "capitalize" }}
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default UserDialog;
