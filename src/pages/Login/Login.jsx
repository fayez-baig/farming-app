import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Login = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h3" color="teal" textAlign="center">
        <Image src="/logo.png" /> Login
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input fluid placeholder="E-mail address" />
          <Form.Input fluid placeholder="Password" type="password" />

          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New user ? &nbsp; <Link to="/signup">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Login;
