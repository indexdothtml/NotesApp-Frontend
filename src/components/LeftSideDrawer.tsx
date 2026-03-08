import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Book, Task, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router";

import useLeftDrawer from "../hooks/useLeftDrawer.ts";

function LeftSideDrawer() {
  const { isOpen, dispatchCloseDrawer } = useLeftDrawer();

  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={dispatchCloseDrawer}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/books")}>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary="Books" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/tasks")}>
            <ListItemIcon>
              <Task />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/settings")}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer open={isOpen} onClose={dispatchCloseDrawer}>
      {DrawerList}
    </Drawer>
  );
}

export default LeftSideDrawer;
