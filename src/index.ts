export const handler = async (): Promise<void> => {
  console.log(process.env.BASE_ENDPOINT_URL);
  console.log(process.env.AUTH_USER);
  console.log(process.env.AUTH_PASSWORD);
};
