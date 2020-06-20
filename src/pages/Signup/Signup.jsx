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

const Signup = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h3" color="teal" textAlign="center">
        <Image src="/logo.png" /> Signup
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input fluid placeholder="E-mail address" />
          <Form.Input fluid placeholder="Password" type="password" />

          <Button color="teal" fluid size="large">
            Signup
          </Button>
        </Segment>
      </Form>
      <Message>
        Already a user ? &nbsp; <Link to="/login">Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Signup;
