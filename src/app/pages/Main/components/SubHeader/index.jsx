import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "./../../../../components/Input";
import Button from "./../../../../components/Button";

import { GenericInput, Row, Title, Actions, Icon, ButtonSort } from "./styles";

import block from "./../../../../assets/block.png";
import list from "./../../../../assets/list.png";

export default () => {
  const dispatch = useDispatch();
  const { isList, sortMode } = useSelector((state) => state);
  return (
    <GenericInput>
      <Row>
        <Title>My chatbots</Title>
        <Actions>
          <Input
            type="email"
            placeholder="Search"
            onChange={(e) => dispatch(setFilter(e.target.value))}
          />
          <ButtonSort
            active={sortMode === "name"}
            onClick={() => dispatch(setSort("name"))}
          >
            Order by name
          </ButtonSort>
          <ButtonSort
            active={sortMode === "created"}
            onClick={() => dispatch(setSort("created"))}
          >
            Order by creation
          </ButtonSort>
          <Button type="icon">
            <Icon
              src={block}
              alt="block"
              onClick={() => dispatch(setMode(false))}
              active={!isList}
            />
          </Button>
          <Button type="icon">
            <Icon
              src={list}
              alt="list"
              onClick={() => dispatch(setMode(true))}
              active={isList}
            />
          </Button>
        </Actions>
      </Row>
    </GenericInput>
  );
};
const setMode = (isList) => {
  return { type: "LIST_MODE", isList };
};
const setSort = (sortMode) => {
  return { type: "SORT_MODE", sortMode };
};
const setFilter = (filter) => {
  return { type: "SET_FILTER", filter };
};
