import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      body: "Hello world",
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: "An error occured",
    };
  }
};
