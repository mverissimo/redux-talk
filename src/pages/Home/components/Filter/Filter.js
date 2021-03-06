import React from "react";
import { useSelector } from "react-redux";
import { Group, Button } from "bumbag";

function Filter({ handleFilter }) {
  let { character } = useSelector((state) => state);

  let filters = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Alive",
      value: "alive",
    },
    {
      name: "Dead",
      value: "dead",
    },
    {
      name: "Unknown",
      value: "unknown",
    },
  ];

  return (
    <Group>
      {filters.map(({ name, value }) => (
        <Button
          key={value}
          size="small"
          palette={value === character.list.status ? "primary" : "default"}
          onClick={() => handleFilter(value)}
        >
          {name}
        </Button>
      ))}
    </Group>
  );
}

export default Filter;
