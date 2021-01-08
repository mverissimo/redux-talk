import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Spinner, Table, Button, Tag } from "bumbag";

import { getColor } from "./utils";
import { Selectors } from "../../../../redux/modules/character";

const ListItem = memo(({ id }) => {
  const character = useSelector(
    (state) => Selectors.getById(state.character.list, id),
    shallowEqual
  );

  return (
    <Table.Row key={id}>
      <Table.Cell>{character.name}</Table.Cell>
      <Table.Cell>
        <Tag palette={getColor(character.status)}>{character.status}</Tag>
      </Table.Cell>
    </Table.Row>
  );
});

function List({ handleLoadMore }) {
  const { isLoading, isRequest } = useSelector(
    (state) => state.character.list,
    shallowEqual
  );
  const characters = useSelector(
    (state) => Selectors.getByFilter(state.character.list),
    shallowEqual
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Table hasDividers isHoverable>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {characters.map((id) => (
          <ListItem key={id} id={id} />
        ))}
      </Table.Body>

      <Table.Foot>
        <Table.Row>
          <Table.Cell />
          <Table.Cell textAlign="right">
            <Button size="small" isLoading={isRequest} onClick={handleLoadMore}>
              Load more
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table>
  );
}

export default List;