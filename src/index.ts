import axios from "axios";

export const lambdaHandler = async () => {
  console.log(process.env.BASE_ENDPOINT_URL);
  console.log(process.env.AUTH_USER);
  console.log(process.env.AUTH_PASSWORD);
};
