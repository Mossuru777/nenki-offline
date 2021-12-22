import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import {AppBar, Grid} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import {useLiveQuery} from "dexie-react-hooks";
import DB from "../src/db/DB";
import Title from "./Title";
import NenkiTable from "./NenkiTable";
import PersonEditDialog from "./PersonEditDialog";
import Person from "../src/model/Person";
import generate_ics_blob_url from "../src/util/generate_ics_blob_url";

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

export default function MainPage() {
  // personsが変更されたときにコンポーネントは自動的に再レンダリングされます
  const persons = useLiveQuery(() => DB.instance.getAllPersons());

  const [editPerson, setEditPerson] = React.useState<Person | null | undefined>(undefined);
  const closePersonEditDialog = () => setEditPerson(undefined);

  const [downloading, setDownloading] = React.useState(false);
  const handleDownloadButton = () => {
    if (downloading || !persons) {
      return;
    }
    setDownloading(true);
    const [url, createDate] = generate_ics_blob_url(persons);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nenki_${createDate.format("YYYY-MM-DD_HH-mm-ss")}.ics`;
    a.click();
    a.remove();
    setDownloading(false);
  }

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
            <NenkiTable persons={persons} setEditPerson={setEditPerson}/>
            <Box mt={2}>
              <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                <Grid item>
                  <LoadingButton variant="contained"
                                 color="secondary"
                                 loading={downloading}
                                 disabled={!persons || persons.length === 0}
                                 startIcon={<DownloadForOfflineIcon/>}
                                 loadingPosition="start"
                                 onClick={handleDownloadButton}
                  >
                    ダウンロード
                  </LoadingButton>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" startIcon={<AddIcon/>} onClick={() => setEditPerson(null)}>
                    人物の追加
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <PersonEditDialog editPerson={editPerson} closeDialog={closePersonEditDialog}/>
            <Copyright sx={{pt: 4}}/>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
