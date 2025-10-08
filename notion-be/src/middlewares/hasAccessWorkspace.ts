import { ErrorResponse } from "../response/response";

export default async function hasAccessWorkspace(
  req: any,
  res: any,
  next: any,
): Promise<void> {
  if (!req.user) {
    throw new ErrorResponse({
      message: "Unauthorized",
      statusCode: 401,
      error: "Unauthorized",
    });
  }

  const { workspaceId } = req.params;
  if (!workspaceId) {
    throw new ErrorResponse({
      message: "workspaceId is required",
      statusCode: 400,
      error: "Bad Request",
    });
  }

  next();
}
