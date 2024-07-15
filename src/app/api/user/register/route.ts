import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import prisma from "../../../../../utils/db";
import { RegisterUser } from "../../../../../utils/types";
import { registerUser } from "../../../../../utils/validation";
import { generateToken } from "../../../../../utils/generateToken";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegisterUser;
    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (user) {
      return NextResponse.json(
        { message: "The User Already Existed" },
        { status: 400 }
      );
    }

    const validation = registerUser.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(body.password, salt);

    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
      select: {
        username: true,
        id: true,
        isAdmin: true,
      },
    });
    const token = generateToken(newUser);

    return NextResponse.json({ ...newUser, token }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
