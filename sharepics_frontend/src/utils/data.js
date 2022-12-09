export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`; // sanity query to get user
//   const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};
