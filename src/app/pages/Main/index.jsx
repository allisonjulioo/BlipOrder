import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get, update } from "./../../services/bots";
import { dateFormat } from "./../../utils";
import * as _ from "lodash";
import {
  Container,
  Content,
  Star,
  StarImage,
  Ball,
  BallImage,
  CardBot,
  InfoBot,
  Title,
  Description,
  Row,
} from "./styles";

import star from "./../../assets/star.png";
import starOutline from "./../../assets/star-outline.png";

import SubHeader from "./components/SubHeader";
import Button from "./../../components/Button";

export default ({ history }) => {
  const moment = dateFormat;
  const [listBots, setListBots] = useState([]);
  const [sort, setSort] = useState("");
  const [filterData, setFilter] = useState("");
  const botId = 0;
  const { isList, sortMode, filter } = useSelector((state) => state);

  const fetchBots = async () => {
    const data = await get();
    setListBots(data);
    setSort(sortMode);
    setFilter(filter);
  };

  const updateBots = async (bot) => {
    bot.favorite = !bot.favorite;
    await update(bot);
    fetchBots();
  };

  const applyFilter = (arr) => {
    return _.filter(
      _.orderBy(arr, [sort], ["asc"]),
      (item) =>
        item.name.indexOf(filterData) > -1 ||
        item.shortName.indexOf(filterData) > -1
    );
  };

  useEffect(() => {
    fetchBots();
  }, [botId, isList, sortMode, filter]);
  return (
    <>
      <Container>
        <Content>
          <SubHeader />
          <h2>Favorities ({listBots.length && listBots[0].length})</h2>
          {listBots.map((bots) => (
            <Row inline={isList} key={bots}>
              {applyFilter(bots).map((bot, index) => (
                <CardBot key={index} inline={isList}>
                  <InfoBot inline={isList}>
                    <Star
                      type="icon"
                      inline={isList}
                      onClick={() => updateBots(bot)}
                    >
                      <StarImage
                        src={bot.favorite ? star : starOutline}
                        alt="*"
                      />
                    </Star>
                    <Ball inline={isList}>
                      <BallImage src={bot.image} alt="" />
                    </Ball>
                    <Title onClick={() => history.push(`/profile/${bot.id}`)}>
                      {bot.name}
                    </Title>
                  </InfoBot>
                  <Description>
                    {isList
                      ? `Created at ${moment(bot.created, bot.culture)}`
                      : `${bot.description.substr(0, 80)}...`}
                  </Description>
                </CardBot>
              ))}
            </Row>
          ))}
        </Content>
        <Button type="fab" onClick={() => history.push("/bot/new")}>
          +
        </Button>
      </Container>
    </>
  );
};
