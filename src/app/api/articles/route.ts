import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../utils/db";
import { createArticle } from "../../../../utils/validation";

/**
 * @method Get
 * @route /api/articles
 * @desc Get All Articles
 * @access public
 */

export async function GET(request: NextRequest) {
  try {
    const articles = await prisma.article.findMany();
    console.log(articles);
    return NextResponse.json(articles, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
/**
 * @method Post
 * @route /api/articles
 * @desc Create Article
 * @access public
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = createArticle.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors[0].message, {
        status: 400,
      });
    }
    const newArticle = await prisma.article.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });
    return NextResponse.json({ message: "article Created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
