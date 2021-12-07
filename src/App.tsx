import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  useTheme,
  Box,
  Drawer,
  Toolbar,
  CssBaseline,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Main, AppBar, DrawerHeader } from "./utils/Appbar";

const drawerWidth = 240;

//lazy loading
const Starwars = React.lazy(() => import("./components/Starwars"));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Star Wars
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="starwars/:name"
              element={
                <React.Suspense fallback={<>Loading</>}>
                  <Starwars />
                </React.Suspense>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem button component={Link} to="/starwars/person">
            <ListItemText primary={"Person"} />
          </ListItem>
          <ListItem button component={Link} to="/starwars/planets">
            <ListItemText primary={"Planets"} />
          </ListItem>
          <ListItem button component={Link} to="/starwars/movies">
            <ListItemText primary={"Movies"} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

function Home() {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="/main.jpeg"
            alt="green iguana"
            height="400px"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Star Wars is an American epic space opera multimedia franchise
              created by George Lucas, which began with the eponymous 1977 film
              and quickly became a worldwide pop-culture phenomenon.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
