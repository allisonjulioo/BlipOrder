import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { botDelete, profile } from "./../../services/bots";
import { dateFormat } from "./../../utils";
import {
  Body,
  Card,
  Col,
  Container,
  Created,
  Description,
  Header,
  Id,
  Image,
  Infos,
  Row,
  Span,
  Title
} from "./styles";

import back from "./../../assets/back.png";
import blip from "./../../assets/blip.png";
import plano from "./../../assets/plano.png";
import sent from "./../../assets/sent.png";
import trash from "./../../assets/trash.png";
import union from "./../../assets/union.png";
import user from "./../../assets/user.png";

import { useCallback } from "react";
import Button from "./../../components/Button";

export default ({ match, history }) => {
  const moment = dateFormat;
  const [profileBot, setProfile] = useState([]);

  const handleDelete = async (id) => {
    await botDelete(id);
    history.push(`/`);
  };

  const getProfile = useCallback(async () => {
    const { id } = await match.params;
    const data = await profile(id);
    setProfile(data);
  }, [match.params]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

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
