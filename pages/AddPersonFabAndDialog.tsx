import * as React from "react";
import moment from "moment";
import Person from "../src/model/Person";
import DB from "../src/db/DB";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {Box, Checkbox, Fab, FormControlLabel, useMediaQuery, useTheme} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AddPersonFabAndDialog() {
  const [open, setOpen] = React.useState(false);

  const initialValues: { name: string; isNameValid: boolean; title: string; deathDate: string; isDeathDateValid: boolean; birthDate: string; isBirthDateValid: boolean; isBirthDateAccurate: boolean; } = {
    name: "",
    isNameValid: true,
    title: "",
    deathDate: "",
    isDeathDateValid: true,
    birthDate: "",
    isBirthDateValid: true,
    isBirthDateAccurate: false
  };
  const [
    {name, isNameValid, title, deathDate, isDeathDateValid, birthDate, isBirthDateValid, isBirthDateAccurate},
    setValues
  ] = React.useState<typeof initialValues>(initialValues);

  const validate = async () => {
    const isNameValid = name.length > 0;
    const isDeathDateValid = deathDate.length > 0;
    const isBirthDateValid = deathDate.length === 0 || birthDate.length === 0 || new Date(birthDate) <= new Date(deathDate);
    setValues(prevState => ({
      ...prevState,
      isNameValid,
      isDeathDateValid,
      isBirthDateValid
    }));
    if (isNameValid && isDeathDateValid && isBirthDateValid) {
      return Promise.resolve();
    } else {
      return Promise.reject({
        isNameValid,
        isDeathDateValid,
        isBirthDateValid
      });
    }
  };

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = event.target;

    // nameに応じてvalidフラグを更新
    // (onChangeでは、既にvalidなフィールドをinvalidにはしない (||=なのはそのため)
    // エラーのクリアのみを目的としており、バリデーションはvalidate関数で行う)
    const validProps = {
      isNameValid,
      isDeathDateValid,
      isBirthDateValid,
      isBirthDateAccurate
    };
    if (name === "name") {
      validProps.isNameValid ||= value.length > 0;
    } else if (name === "deathDate") {
      if (value.length > 0) {
        validProps.isDeathDateValid ||= true;
      } else {
        validProps.isBirthDateValid ||= true;
      }
    } else if (name === "birthDate") {
      validProps.isBirthDateValid ||= value.length === 0 || new Date(value) <= new Date(deathDate);
    }

    setValues(prevState => ({
      ...prevState,
      [name]: value,
      ...validProps
    }));
  };

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const checked = event.target.checked;

    setValues(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const addValuesToDB = async () => {
    const isAllValid = isNameValid && isDeathDateValid && isBirthDateValid;
    if (isAllValid) {
      const momentDeathDate = moment.tz(deathDate, "YYYY-MM-DD", true, "Asia/Tokyo");
      const momentBirthDate = birthDate !== "" ? moment.tz(birthDate, "YYYY-MM-DD", true, "Asia/Tokyo") : null;
      const actualIsBirthDateAccurate = momentBirthDate !== null ? isBirthDateAccurate : null;
      const person = new Person(null, name, title, momentDeathDate, momentBirthDate, actualIsBirthDateAccurate);
      return DB.instance.addPerson(person);
    } else {
      return Promise.reject({
        isNameValid,
        isDeathDateValid,
        isBirthDateValid
      });
    }
  };

  const handleCancelBtn = () => {
    setOpen(false);
  };

  const handleAddBtn = () => {
    validate()
      .then(addValuesToDB)
      .then(() => {
        setOpen(false);
        setValues(initialValues);
      })
      .catch((_error) => {
      });
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Fab size="medium" color="primary" onClick={() => setOpen(true)}>
        <AddIcon/>
      </Fab>
      <Dialog fullScreen={fullScreen} open={open}>
        <DialogTitle>人物の追加</DialogTitle>
        <DialogContent
          sx={{
            '& .MuiTextField-root': {m: 2},
          }}
        >
          <Box sx={{display: "flex"}}>
            <TextField
              autoFocus
              label="名前"
              name="name"
              value={name}
              error={!isNameValid}
              helperText={isNameValid ? null : "名前を入力して下さい"}
              onChange={onTextChange}
              variant="standard"
              inputProps={{size: 30}}
            />
            <TextField
              label="敬称"
              name="title"
              value={title}
              onChange={onTextChange}
              variant="standard"
              inputProps={{size: 8}}
            />
          </Box>
          <Box>
            <TextField
              label="命日"
              type="date"
              name="deathDate"
              value={deathDate}
              error={!isDeathDateValid}
              helperText={isDeathDateValid ? null : "命日を入力して下さい"}
              onChange={onTextChange}
              variant="standard"
              sx={{width: 220}}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box sx={{display: "flex"}}>
            <TextField
              label="生年月日"
              type="date"
              name="birthDate"
              value={birthDate}
              error={!isBirthDateValid}
              helperText={isBirthDateValid ? null : "命日より前の日付を入力して下さい"}
              onChange={onTextChange}
              variant="standard"
              sx={{width: 220}}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="isBirthDateAccurate"
                  defaultChecked={isBirthDateAccurate}
                  onChange={onCheckboxChange}
                  color="primary"
                />
              }
              label="生年月日は正確です"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon/>} onClick={handleCancelBtn}>キャンセル</Button>
          <Button variant="contained" endIcon={<AddIcon/>} onClick={handleAddBtn}>追加</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
