import React, { useState, useEffect } from "react";
import { profile } from "./../../services/bots";
import { Link } from "react-router-dom";
import { dateFormat } from "./../../utils";
import { botDelete } from "./../../services/bots";
import {
  Container,
  Header,
  Infos,
  Image,
  Description,
  Title,
  Id,
  Span,
  Created,
  Body,
  Row,
  Col,
  Card,
} from "./styles";

import blip from "./../../assets/blip.png";
import user from "./../../assets/user.png";
import union from "./../../assets/union.png";
import sent from "./../../assets/sent.png";
import plano from "./../../assets/plano.png";
import back from "./../../assets/back.png";
import trash from "./../../assets/trash.png";

import Button from "./../../components/Button";

export default ({ match, history }) => {
  const moment = dateFormat;
  const [profileBot, setProfile] = useState([]);
  const profileId = 0;
  const handleDelete = async (id) => {
    await botDelete(id);
    history.push(await `/`);
  };

  const getProfile = async () => {
    const { id } = await match.params;
    const data = await profile(id);
    setProfile(data);
  };
  useEffect(() => {
    getProfile();
  }, [profileId]);

  return (
    <Container>
      <Header>
        <Infos>
          <Button type="icon">
            <Link to="/">
              <img src={back} alt="back" width="20" />
            </Link>
          </Button>
          <Image src={blip} alt="bot" />
          <Description>
            <Title>{profileBot.name}</Title>
            <Id>id: {profileBot.shortName} </Id>
          </Description>
        </Infos>
        <Created>
          Created at {moment(profileBot.created, profileBot.culture)}
          <Button type="icon" onClick={() => handleDelete(profileBot.id)}>
            <img src={trash} alt="trash" width="20" />
          </Button>
        </Created>
      </Header>
      <Body>
        <Row>
          <Col col={9}>
            <Row>
              <Col col={4}>
                <Card start="true">
                  <Span>Region idiom</Span>
                  <Span>EUA - English (EN)</Span> <br />
                  <Span>Timezone</Span>
                  <Span>(UTC - 03:00) Brasília</Span>
                </Card>
              </Col>
              <Col col={6}>
                <Card>
                  <Infos>
                    <Image src={user} alt="users" color="#2BC2D3" />
                    <Description>
                      <Title>
                        {profileBot.analytics
                          ? profileBot.analytics.user.actived
                          : ""}
                      </Title>
                      <Span>Usuário ativos</Span>
                    </Description>
                  </Infos>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col col={8}>
                <Card>
                  <Infos>
                    <Image src={union} alt="union" color="#4DCA7C" />
                    <Description>
                      <Title>
                        {profileBot.analytics
                          ? profileBot.analytics.message.received
                          : ""}
                      </Title>
                      <Span>Mensagens recebidas</Span>
                    </Description>
                  </Infos>
                </Card>
              </Col>
              <Col col={5}>
                <Card>
                  <Infos>
                    <Image src={sent} alt="sent" color="#517BF3" />
                    <Description>
                      <Title>
                        {profileBot.analytics
                          ? profileBot.analytics.message.sent
                          : ""}
                      </Title>
                      <Span>Mensagens enviadas</Span>
                    </Description>
                  </Infos>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col col={3} align="center">
            <img src={plano} alt="Plano" /> <br />
            <Id>Status account </Id>
            <Title margin={24}>{profileBot.plan} </Title>
            <Button>Upgrade account</Button>
          </Col>
        </Row>
      </Body>
    </Container>
  );
};
