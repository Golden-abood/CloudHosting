import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../utils/db";
import { updatedArticle } from "../../../../../utils/validation";

interface Props {
  params: { id: string };
}
/**
 * @method Get
 * @route /api/articles/:id
 * @desc Get Single Article
 * @access public
 */

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
      select: { userId: true },
    });

    if (!article) {
      return NextResponse.json(
        { message: "Article Not Found" },
        { status: 404 }
      );
    }
    return NextResponse.json(article, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}

/**
 * @method Put
 * @route /api/articles/:id
 * @desc Update Article
 * @access public
 */

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: "Article Not Found" },
        { status: 404 }
      );
    }
    const body = await request.json();

    const validation = updatedArticle.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors[0].message, {
        status: 400,
      });
    }
    await prisma.article.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json({ message: "article Updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
/**
 * @method Delete
 * @route /api/articles/:id
 * @desc Delete  Article
 * @access public
 */

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: "Article Not Found" },
        { status: 404 }
      );
    }
    await prisma.article.delete({
      where: { id: parseInt(params.id) },
    });
    return NextResponse.json({ message: "article Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
