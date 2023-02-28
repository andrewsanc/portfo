import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import { resumeInfo } from "../resumeInfo";

export default function About() {
  const { about } = resumeInfo;
  return (
    <Container text>
      <Header as='h4'>About</Header>
      <p>{about}</p>
      <Divider />
    </Container>
  );
}
