import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const lambdaHandler = async (): Promise<void> => {
  await axios({
    baseURL: process.env.BASE_ENDPOINT_URL,
    method: "POST",
    auth: {
      username: "someUsername",
      password: "Somepassword",
    },
  });
};
