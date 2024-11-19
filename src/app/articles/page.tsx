import SearchInput from "@/components/Base/SearchInput";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiFileEditOutline } from "@mdi/js";
import { mdiEyeOutline } from "@mdi/js";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BasePagination from "@/components/Base/Pagination";
import Link from "next/link";

const ArticlesPage = async () => {
  let articles = [
    {
      id: 1,
      title: "Hello World",
      photo: "/images/logo.png",
      avatar: "/images/",
      author: "Golden_abood",
      description: "asdknb",
      body: ";sadjfgboasld;g./jbsadgfupoisdfnm' ghnsoduvfhgv ",
    },
    {
      id: 1,
      title: "Hello World",
      photo: "/images/logo.png",
      avatar: "/images/",
      author: "Golden_abood",
      description: "asdknb",
      body: ";sadjfgboasld;g./jbsadgfupoisdfnm' ghnsoduvfhgv ",
    },
    {
      id: 1,
      title: "Hello World",
      photo: "/images/logo.png",
      avatar: "/images/",
      author: "Golden_abood",
      description: "asdknb",
      body: ";sadjfgboasld;g./jbsadgfupoisdfnm' ghnsoduvfhgv ",
    },
    {
      id: 1,
      title: "Hello World",
      photo: "/images/logo.png",
      avatar: "/images/",
      author: "Golden_abood",
      description: "asdknb",
      body: ";sadjfgboasld;g./jbsadgfupoisdfnm' ghnsoduvfhgv ",
    },
    {
      id: 1,
      title: "Hello World",
      photo: "/images/logo.png",
      avatar: "/images/",
      author: "Golden_abood",
      description: "asdknb",
      body: ";sadjfgboasld;g./jbsadgfupoisdfnm' ghnsoduvfhgv ",
    },
    {
      id: 1,
      title: "Hello World",
      photo: "/images/logo.png",
      avatar: "/images/",
      author: "Golden_abood",
      description: "asdknb",
      body: ";sadjfgboasld;g./jbsadgfupoisdfnm' ghnsoduvfhgv ",
    },
    {
      id: 1,
      title: "Hello World",
      photo: "/images/logo.png",
      avatar: "/images/",
      author: "Golden_abood",
      description: "asdknb",
      body: ";sadjfgboasld;g./jbsadgfupoisdfnm' ghnsoduvfhgv ",
    },
    {
      id: 1,
      title: "Hello World",
      photo: "/images/logo.png",
      avatar: "/images/",
      author: "Golden_abood",
      description: "asdknb",
      body: ";sadjfgboasld;g./jbsadgfupoisdfnm' ghnsoduvfhgv ",
    },
    {
      id: 1,
      title: "Hello World",
      photo: "/images/logo.png",
      avatar: "/images/",
      author: "Golden_abood",
      description: "asdknb",
      body: ";sadjfgboasld;g./jbsadgfupoisdfnm' ghnsoduvfhgv ",
    },
  ];

  const res = await fetch("http://localhost:3000/api/articles", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  articles = data;

  return (
    <div className="container">
      <div className="flex justify-center mt-8">
        <SearchInput />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 ">
          {articles.map((article) => (
            <Link href={`articles/${article.id}`}>
              <Card
                key={article.id}
                className="bg-[#18181b]  !border-0 !border-t-8 !border-t-primary cursor-pointer  text-white "
              >
                <CardHeader>
                  <div className="flex gap-5">
                    <div className="w-12 h-12">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-primary">
                          CN
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h3>{article.author}</h3>
                      {/* <p className="text-sm"> {article.description}</p> */}
                    </div>
                  </div>
                </CardHeader>
                <CardContent color={"gray.500"}>
                  <CardTitle className="mb-4 line-clamp-1 text-lg">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {" "}
                    {article.description}
                  </CardDescription>
                </CardContent>

                {/* <Divider borderColor={"gray.200"}></Divider> */}
                <CardFooter className=" pb-y-5">
                  <div className="flex justify-between w-full">
                    <Button
                      variant={"destructive"}
                      className="gap-3 bg-primary hover:bg-white hover:text-primary border-white border-2"
                    >
                      <Icon path={mdiEyeOutline} size={1} />
                      <span>watch</span>
                    </Button>
                    <Button
                      variant={"destructive"}
                      className="gap-3 bg-primary hover:bg-white hover:text-primary border-white border-2"
                    >
                      <Icon path={mdiFileEditOutline} size={1} />
                      <span>Comment</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <BasePagination />
    </div>
  );
};

export default ArticlesPage;
