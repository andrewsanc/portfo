import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { resumeInfo } from "../resumeInfo";

export default function About() {
  const { about } = resumeInfo;
  return (
    <Container text>
      <h4>About</h4>
      <p>{about}</p>
      <Divider />
    </Container>
  );
}
