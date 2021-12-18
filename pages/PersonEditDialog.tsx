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
import {Box, Checkbox, FormControlLabel, useMediaQuery, useTheme} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PersonEditDialog(props: { editPerson: Person | null | undefined, closeDialog: () => void }) {
  type PersonEditFormValues = {
    currentPerson: Person | null | undefined
    name: string;
    isNameValid: boolean;
    title: string;
    deathDate: string;
    isDeathDateValid: boolean;
    birthDate: string;
    isBirthDateValid: boolean;
    isBirthDateAccurate: boolean;
  };

  const getFormInitialValues = (person: Person | null | undefined): PersonEditFormValues => {
    const common_values = {
      currentPerson: person,
      isNameValid: true,
      isDeathDateValid: true,
      isBirthDateValid: true
    };
    const case_values =
      person
        ? {
          name: person.name,
          title: person.title,
          deathDate: moment(person.death_date).format("YYYY-MM-DD"),
          birthDate: person.birth_date ? moment(person.birth_date).format("YYYY-MM-DD") : "",
          isBirthDateAccurate: person.is_birth_date_accurate ?? false
        }
        : {
          name: "",
          title: "",
          deathDate: "",
          birthDate: "",
          isBirthDateAccurate: false
        };
    return {...common_values, ...case_values};
  }

  const [
    {currentPerson, name, isNameValid, title, deathDate, isDeathDateValid, birthDate, isBirthDateValid, isBirthDateAccurate},
    setFormValues
  ] = React.useState<PersonEditFormValues>(() => getFormInitialValues(null));

  const validate = async () => {
    const isNameValid = name.length > 0;
    const isDeathDateValid = deathDate.length > 0;
    const isBirthDateValid = deathDate.length === 0 || birthDate.length === 0 || new Date(birthDate) <= new Date(deathDate);
    setFormValues(prevState => ({
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

    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
      ...validProps
    }));
  };

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const new_checked = event.target.checked; // 反転したcheckedの値が入る

    setFormValues(prevState => ({
      ...prevState,
      [name]: new_checked
    }));
  };

  const addOrUpdateDB = async () => {
    const isAllValid = isNameValid && isDeathDateValid && isBirthDateValid;
    if (isAllValid) {
      const momentDeathDate = moment.tz(deathDate, "YYYY-MM-DD", true, "Asia/Tokyo");
      const momentBirthDate = birthDate !== "" ? moment.tz(birthDate, "YYYY-MM-DD", true, "Asia/Tokyo") : null;
      const actualIsBirthDateAccurate = momentBirthDate !== null ? isBirthDateAccurate : null;
      if (props.editPerson) {
        props.editPerson.name = name;
        props.editPerson.title = title;
        props.editPerson.death_date = momentDeathDate;
        props.editPerson.birth_date = momentBirthDate;
        props.editPerson.is_birth_date_accurate = actualIsBirthDateAccurate;
        return DB.instance.updatePerson(props.editPerson)
      } else {
        const add_person = new Person(null, name, title, momentDeathDate, momentBirthDate, actualIsBirthDateAccurate);
        return DB.instance.addPerson(add_person);
      }
    } else {
      return Promise.reject({
        isNameValid,
        isDeathDateValid,
        isBirthDateValid
      });
    }
  };

  const handleAddOrUpdateBtn = () => {
    validate()
      .then(addOrUpdateDB)
      .then(props.closeDialog)
      .catch((_error) => {
      });
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const open = currentPerson !== undefined;

  if (currentPerson !== props.editPerson) {
    setFormValues(() => getFormInitialValues(props.editPerson));
  }

  return (
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
                checked={isBirthDateAccurate}
                onChange={onCheckboxChange}
                color="primary"
              />
            }
            label="生年月日は正確です"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon/>} onClick={props.closeDialog}>キャンセル</Button>
        {
          props.editPerson
            ? <Button variant="contained" endIcon={<DoneIcon/>} onClick={handleAddOrUpdateBtn}>更新</Button>
            : <Button variant="contained" endIcon={<AddIcon/>} onClick={handleAddOrUpdateBtn}>追加</Button>
        }
      </DialogActions>
    </Dialog>
  );
}
