import React, { useState } from "react";
import * as _ from "lodash";
import { create } from "./../../services/bots";
import { Link } from "react-router-dom";
import { obamaPictures } from "./../../utils";
import {
  Container,
  Form,
  Title,
  Input,
  TextArea,
  Button,
  Label,
  Image,
  Avatar,
  Row,
} from "./styles";
import back from "./../../assets/back.png";

export default ({ history }) => {
  const [name, setName] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [description, setDescription] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const form = {
      shortName: _.camelCase(name),
      name: name,
      description: description,
      image: obamaPictures[activeIndex],
      template: "master",
      created: new Date(),
      updated: new Date(),
      plan: "standard",
      culture: navigator.language || navigator.userLanguage,
      favorite: false,
      analytics: {
        user: {
          total: _.random(0, 100),
          actived: _.random(0, 100),
        },
        message: {
          received: _.random(0, 2000),
          sent: _.random(0, 2000),
        },
      },
    };
    await create(form);
    history.push(await `/`);
  };
  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Title>
          <Image type="icon">
            <Link to="/">
              <img src={back} alt="back" width="20" />
            </Link>
          </Image>
          New Bot{" "}
        </Title>
        <Label>Nome</Label>
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Descrição</Label>
        <TextArea
          label="Name"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Row>
          {obamaPictures.map((img, index) => (
            <Image
              key={index}
              type="icon"
              onClick={() => setActiveIndex(index)}
            >
              <Avatar src={img} alt="" active={index === activeIndex} />
            </Image>
          ))}
        </Row>
        <Button onClick={submitForm} type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};
