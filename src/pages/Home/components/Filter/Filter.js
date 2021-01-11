import React from "react";
import { useSelector } from "react-redux";
import { Group, Button } from "bumbag";

function Filter({ handleFilter }) {
  const { character } = useSelector((state) => state);

  const filters = [
    {
      name: "All",
      value: "all",
      onClick: handleFilter,
    },
    {
      name: "Alive",
      value: "alive",
      onClick: handleFilter,
    },
    {
      name: "Dead",
      value: "dead",
      onClick: handleFilter,
    },
    {
      name: "Unknown",
      value: "unknown",
      onClick: handleFilter,
    },
  ];

  return (
    <Group>
      {filters.map(({ name, value, onClick }) => (
        <Button
          key={value}
          size="small"
          palette={value === character.list.status ? "primary" : "default"}
          onClick={() => onClick(value)}
        >
          {name}
        </Button>
      ))}
    </Group>
  );
}

export default Filter;
