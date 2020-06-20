/* eslint-disable react/prop-types */
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Form, Field } from "react-final-form";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      The Farming App {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(1000);
  window.alert(JSON.stringify(values, 0, 2));
};

const required = (value) => (value ? undefined : "Required");

const Login = (props) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
      </div>
      <Form
        className={classes.form}
        onSubmit={onSubmit}
        render={({ handleSubmit, form, invalid }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Field name="firstName" validate={required}>
                {({ input, meta }) => (
                  <Grid item xs={12}>
                    <TextField
                      {...input}
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="Email Address"
                      error={meta.error && meta.touched}
                      helperText={
                        meta.error && meta.touched
                          ? "Please enter correct details"
                          : ""
                      }
                      autoFocus
                    />
                  </Grid>
                )}
              </Field>
              <Field name="password" validate={required}>
                {({ input, meta }) => (
                  <Grid item xs={12}>
                    <TextField
                      {...input}
                      variant="outlined"
                      fullWidth
                      label="Password"
                      type="password"
                      id="password"
                      error={meta.error && meta.touched}
                      helperText={
                        meta.error && meta.touched
                          ? "Please enter correct details"
                          : ""
                      }
                    />
                  </Grid>
                )}
              </Field>
            </Grid>
            <div className="buttons">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={invalid}
              >
                Login
              </Button>
            </div>
          </form>
        )}
      />

      <Grid container justify="flex-end">
        <Grid item>
          <Link
            color="inherit"
            onClick={() => {
              props.history.push("/signup");
            }}
          >
            Create an Account
          </Link>
        </Grid>
      </Grid>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default Login;
