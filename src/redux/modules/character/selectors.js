export const getById = (state, id) => state.statusById[id];

export const getByStatus = (state) => {
  const { status, idList, statusById } = state;

  const currentStatus = idList[status];
  const statusList = [];

  currentStatus.forEach((id) => {
    statusList.push(statusById[id].id);
  });

  return statusList;
};
