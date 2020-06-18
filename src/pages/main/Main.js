import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  getUsersSuccess,
  selectUsers,
  deleteUserSuccess,
} from "../../store/users/users.reducer";

import { UserService } from "../../services/user-service";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));

export function Main() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector(selectUsers);

  useEffect(() => {
    async function fetchData() {
      const userService = new UserService();
      const users = await userService.getUsers();
      dispatch(getUsersSuccess(users));
    }
    fetchData();
  }, [dispatch]);

  const deleteUser = async (id) => {
    const userService = new UserService();
    const deletedUser = await userService.delete(id);
    dispatch(deleteUserSuccess(deletedUser));
  };

  const editUser = (id) => {
    history.push(`/edit-user/${id}`);
  };

  return (
    <Grid container justify="center">
      <Container maxWidth="md">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">SURNAME</TableCell>
                <TableCell align="center">DESC</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="center">{user.surname}</TableCell>
                  <TableCell align="center">{user.desc}</TableCell>
                  <TableCell align="center">
                    {" "}
                    <Button onClick={() => editUser(user.id)}>
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Button onClick={() => deleteUser(user.id)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Grid>
  );
}
