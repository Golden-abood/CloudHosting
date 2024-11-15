import jwt from "jsonwebtoken";

type jwtPayload = {
  id: number;
  username: string;
  isAdmin: Boolean;
};

export const generateToken = (payload: jwtPayload): string => {
  const secretKey = process.env.SECRET_KEY as string;
  const token = jwt.sign(payload, secretKey, {
    expiresIn: "30d",
  });

  return token;
};
