import React from "react";
import {
  Container,
  Divider,
  Header,
  Item,
  Label,
  List,
  Segment,
} from "semantic-ui-react";
import { resumeInfo } from "../resumeInfo";

export default function Projects() {
  const { projects } = resumeInfo;

  return (
    <Container text>
      <Header as='h4'>Projects</Header>
      <Item.Group divided>
        {projects.map((project) => (
          <Item>
            <Item.Image src={project.projectImage} />
            <Item.Content>
              <Item.Header>{project.title}</Item.Header>
              <Item.Meta>
                <span>{project.description}</span>
              </Item.Meta>
              <Item.Meta>
                <List link>
                  {project.deployment && (
                    <List.Item
                      as='a'
                      href={project.deployment}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Live Deployment
                    </List.Item>
                  )}
                  {project.repository && (
                    <List.Item
                      as='a'
                      href={project.repository}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Repository
                    </List.Item>
                  )}
                </List>
              </Item.Meta>
              <Item.Extra>
                {project.tags.map((tag) => (
                  <Label>{tag}</Label>
                ))}
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
      <Divider />
    </Container>
  );
}
