/* eslint-disable react/prop-types */
import React from "react";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Form, Field } from "react-final-form";

import { validateSignup, signupSchema } from "./../../helpers/validations";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = () => {
  const classes = useStyles();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit = async (values) => {
    await sleep(1000);
    console.log(JSON.stringify(values, 0, 2));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      </div>
      <Form
        className={classes.form}
        onSubmit={onSubmit}
        validate={validateSignup(signupSchema)}
        render={({ handleSubmit, form, invalid }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Field name="firstName">
                {({ input, meta }) => (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...input}
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="First Name"
                      error={meta.error && meta.touched}
                    />
                  </Grid>
                )}
              </Field>
              <Field name="lastName">
                {({ input, meta }) => (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...input}
                      variant="outlined"
                      fullWidth
                      label="Last Name"
                      id="lastName"
                      error={meta.error && meta.touched}
                    />
                  </Grid>
                )}
              </Field>

              <Field name="email">
                {({ input, meta }) => (
                  <Grid item xs={12}>
                    <TextField
                      {...input}
                      variant="outlined"
                      fullWidth
                      id="email"
                      type="email"
                      label="Email Address"
                      error={meta.error && meta.touched}
                    />
                  </Grid>
                )}
              </Field>
              <Field name="password">
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
                    />
                  </Grid>
                )}
              </Field>
              <Field name="address">
                {({ input, meta }) => (
                  <Grid item xs={12}>
                    <TextField
                      {...input}
                      variant="outlined"
                      fullWidth
                      label="Address"
                      id="address"
                      error={meta.error && meta.touched}
                    />
                  </Grid>
                )}
              </Field>

              <Field name="state">
                {({ input, meta }) => (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...input}
                      variant="outlined"
                      fullWidth
                      id="state"
                      label="State"
                      error={meta.error && meta.touched}
                    />
                  </Grid>
                )}
              </Field>
              <Field name="city">
                {({ input, meta }) => (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...input}
                      variant="outlined"
                      fullWidth
                      label="City"
                      id="city"
                      error={meta.error && meta.touched}
                    />
                  </Grid>
                )}
              </Field>

              <Field name="phone">
                {({ input, meta }) => (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...input}
                      inputProps={{
                        maxLength: 10,
                      }}
                      variant="outlined"
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      error={meta.error && meta.touched}
                    />
                  </Grid>
                )}
              </Field>
              <Field name="pin">
                {({ input, meta }) => (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...input}
                      inputProps={{
                        maxLength: 6,
                      }}
                      variant="outlined"
                      fullWidth
                      label="Pin Code"
                      id="pin"
                      error={meta.error && meta.touched}
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
                Sign Up
              </Button>
            </div>
          </form>
        )}
      />
    </Container>
  );
};
export default Signup;
