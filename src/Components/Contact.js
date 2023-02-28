import React from "react";
import {
  Container,
  Form,
  Header,
  TextArea,
  Button,
  Icon,
} from "semantic-ui-react";

export default function Contact() {
  return (
    <Container text>
      <Header as='h4'>Contact me</Header>
      <Form method='POST' action='https://formspree.io/f/xpzzzgnw'>
        <Form.Field>
          <Form.Input
            placeholder='Your email'
            type='email'
            style={{ width: "100%" }}
            name='email'
          />
        </Form.Field>
        <Form.Field
          control={TextArea}
          placeholder='Your message'
          name='message'
        />
        <Button icon='send' type='submit' content='Send'></Button>
      </Form>
    </Container>
  );
}
