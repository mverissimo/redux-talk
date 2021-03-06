import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { PageContent, Stack } from "bumbag";

import { List } from "./components/List";
import { Filter } from "./components/Filter";

import { Actions } from "../../redux/modules/character";

function Home() {
  let dispatch = useDispatch();
  let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(Actions.getAll(currentPage));
  }, [dispatch, currentPage]);

  let handleLoadMore = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  let handlerFilter = useCallback(
    (value) => {
      dispatch(Actions.filterCharacters(value));
    },
    [dispatch]
  );

  return (
    <PageContent>
      <Stack>
        <Filter onFilter={handlerFilter} />
        <List onLoadMore={handleLoadMore} />
      </Stack>
    </PageContent>
  );
}

export default Home;
