import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";

export const verifyToken = async (token: string): string => {
  const userToken = jwt.verify(
    token,
    process.env.SECRET_KEY as string
  ) as JwtPayload;

  return token;
};
