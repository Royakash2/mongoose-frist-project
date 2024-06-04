import { Response } from 'express';
type TheResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
}

const sendResponse = <T>(
  res: Response,
  data: TheResponse<T>,
) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};
export default sendResponse;
