import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../utils/db";
import bcryptjs from "bcryptjs";

import { LoginUser } from "../../../../../utils/types";
import { loginUser } from "../../../../../utils/validation";
import { generateToken } from "../../../../../utils/generateToken";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoginUser;

    const validation = loginUser.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }
    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (!user) {
      return NextResponse.json(
        { message: "This account does not exist , Please Register" },
        { status: 400 }
      );
    }

    const isRight = await bcryptjs.compare(body.password, user.password);

    if (!isRight) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 400 }
      );
    }
    const jwtPayload = {
      id: user.id,
      username: user.username,
      isAdmin: user.isAdmin,
    };
    const token = generateToken(jwtPayload);

    return NextResponse.json(
      { message: "authenticated", token },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
