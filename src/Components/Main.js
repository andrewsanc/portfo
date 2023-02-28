import React from "react";
import {
  Container,
  Header,
  Image,
  Label,
  Icon,
  Divider,
} from "semantic-ui-react";
import { resumeInfo } from "../resumeInfo";
import me from "../static/me.jpg";

export default function Main() {
  const {
    me: { name, title, yoe },
  } = resumeInfo;

  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5%",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <Image src={me} size='small' circular />
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Header as='h2' style={{ padding: "0px", margin: "2px" }}>
            {name}
          </Header>
          <Header as='h3' style={{ padding: "0px", margin: "0px" }}>
            {title}
          </Header>
          <div style={{ margin: "4px" }}>
            <Label as='a'>
              <Icon name='github' />
              Github
            </Label>
            <Label as='a'>
              <Icon name='linkedin' />
              Linkedin
            </Label>
          </div>
        </div>
      </div>
      <Divider />
    </Container>
  );
}
