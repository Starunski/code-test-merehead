import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { UserService } from "../../services/user-service";
import { addUserSuccess } from "../../store/users/users.reducer";

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: "1em",
    textAlign: "center"
  },
}));

export function AddUser() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [desc, setDesc] = useState("");

  const CreateUser = async () => {
    const user = {
      name,
      surname,
      desc,
    };
    const userService = new UserService();
    const newUser = await userService.create(user);
    dispatch(addUserSuccess(newUser));
  };

  return (
    <Grid container justify="center">
      <form noValidate autoComplete="off">
        <div>ADD USER</div>
        <div>
          <TextField
            id="standard-basic"
            label="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="SecondName"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Desc"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={classes.submit}>
          <Button variant="contained" color="primary" onClick={CreateUser}>
            Primary
          </Button>
        </div>
      </form>
    </Grid>
  );
}
