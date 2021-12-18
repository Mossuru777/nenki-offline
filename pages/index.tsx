import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import {AppBar, Fab} from "@mui/material";
import Title from "./Title";
import AddIcon from "@mui/icons-material/Add";
import NenkiTable from "./NenkiTable";
import PersonEditDialog from "./PersonEditDialog";
import Person from "../src/model/Person";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Mossuru777/">
        Mossuru777
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const mdTheme = createTheme();

export default function DashboardContent() {
  const [editPerson, setEditPerson] = React.useState<Person | null | undefined>(undefined);
  const closePersonEditDialog = () => setEditPerson(undefined);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{display: 'flex'}}>
        <CssBaseline/>
        <AppBar position="absolute">
          <Toolbar>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{flexGrow: 1}}
            >
              Nenki Offline
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar/>
          <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Title>一覧</Title>
            <NenkiTable setEditPerson={setEditPerson}/>
            <Box mt={2} sx={{display: "flex", justifyContent: "flex-end"}}>
              <Box>
                <Fab size="medium" color="primary" onClick={() => setEditPerson(null)}>
                  <AddIcon/>
                </Fab>
                <PersonEditDialog editPerson={editPerson} closeDialog={closePersonEditDialog}/>
              </Box>
            </Box>
            <Copyright sx={{pt: 4}}/>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
