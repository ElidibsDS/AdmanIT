export const type = "setCurrentPage";

const setCurrentPage = id => {
  return {
    type,
    payload: id
  };
};

export { setCurrentPage };
