export let getById = (state, id) => state.statusById[id];

export let getByStatus = (state) => {
  let { status, idList, statusById } = state;

  const currentStatus = idList[status];
  const statusList = [];

  currentStatus.forEach((id) => {
    statusList.push(statusById[id].id);
  });

  return statusList;
};
