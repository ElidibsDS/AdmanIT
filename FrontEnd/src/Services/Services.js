import * as axios from "axios";

const BASE_URL = process.env.REACT_APP_GTWSERV;

function UserServices(Data, methodUrl, method) {
  const url = `${BASE_URL}${methodUrl}`;
  return axios({
    method: method,
    url: url,
    data: Data,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.data;
  });
}

export { UserServices };
