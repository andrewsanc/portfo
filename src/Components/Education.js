import React from "react";
import { Container, Divider, Header, Segment, Image } from "semantic-ui-react";
import { resumeInfo } from "../resumeInfo";

export default function Education() {
  const { educations } = resumeInfo;
  return (
    <Container text>
      <Header as='h4'>Education</Header>
      {educations.map((education, i) => (
        <Segment key={i}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ alignItems: "center" }}>
              <Header as='h4' style={{ padding: "0px", margin: "2px" }}>
                {education.schoolName}
              </Header>
              <p style={{ margin: "0px" }}>
                {education.degree} in {education.major}
              </p>
              <p style={{ margin: "0px" }}>
                {education.dateStart} - {education.dateEnd}
              </p>
            </div>
            <div>
              <Image size='tiny' src={education.logo} />
            </div>
          </div>
        </Segment>
      ))}
      <Divider />
    </Container>
  );
}
