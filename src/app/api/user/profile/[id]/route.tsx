import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken/";
import prisma from "../../../../../../utils/db";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!user) {
      return NextResponse.json({ messages: "User Not Found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error " },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!user) {
      return NextResponse.json({ messages: "User Not Found" }, { status: 404 });
    }
    const token = request.headers.get("token") as string;

    if (!token) {
      return NextResponse.json(
        {
          message: "no token provided , access Denied",
        },
        { status: 401 }
      );
    }

    const userToken = jwt.verify(
      token,
      process.env.SECRET_KEY as string
    ) as JwtPayload;

    if (userToken === null) {
      return NextResponse.json(
        {
          message: "cant delete an account ",
        },
        { status: 401 }
      );
    }

    if (userToken.id === user.id) {
      await prisma.user.delete({ where: { id: parseInt(params.id) } });
      return NextResponse.json(
        { messages: "Your Profile Has Been Deleted" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error " },
      { status: 500 }
    );
  }
}
