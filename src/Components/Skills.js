import React from "react";
import { Container, Divider, Header, Image, Label } from "semantic-ui-react";
import { resumeInfo } from "../resumeInfo";

export default function Skills() {
  const { skills } = resumeInfo;
  return (
    <Container text>
      <Header as='h4'>Skills</Header>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {skills.map((skill, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", margin: "4px" }}
          >
            <Label image>
              <Image src={skill.imageUrl} />
              {skill.title}
            </Label>
          </div>
        ))}
      </div>
      <Divider />
    </Container>
  );
}
