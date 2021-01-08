export function getColor(status) {
  if (!status) {
    return null;
  }

  const COLOR_STATUS = {
    Alive: "success",
    unknown: "primary",
    Dead: "danger",
  };

  return COLOR_STATUS[status];
}
