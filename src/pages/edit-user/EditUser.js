import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { UserService } from "../../services/user-service";
import { editUserSuccess, selectUser } from "../../store/users/users.reducer";

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: "1em",
    textAlign: "center",
  },
}));

export function EditUser({ id }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => selectUser(state, +id));

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [desc, setDesc] = useState("");

  const editUser = async () => {
    const editUser = {
      id,
      name,
      surname,
      desc,
    };
    const userService = new UserService();
    const updatedUser = await userService.update(editUser);
    dispatch(editUserSuccess(updatedUser));
  };

  return (
    <Grid container justify="center">
      <form noValidate autoComplete="off">
        <div>EDIT USER</div>
        <div>
          <TextField
            id="standard-basic"
            label="Name"
            value={user.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="SecondName"
            value={user.surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Desc"
            value={user.desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={classes.submit}>
          <Button variant="contained" color="primary" onClick={editUser}>
            Primary
          </Button>
        </div>
      </form>
    </Grid>
  );
}
