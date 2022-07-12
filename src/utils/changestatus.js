export const changeStatus = (status) => {
  const contentArr = status.split('_');
  return contentArr
    .map(
      (item, index) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    )
    .join(' ');
};
