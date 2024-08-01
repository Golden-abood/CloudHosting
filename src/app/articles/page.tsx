import SearchInput from "@/components/Base/SearchInput";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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

const ArticlesPage = () => {
  const articles = [
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
  return (
    <div className="container">
      <div className="flex justify-center mt-8">
        <SearchInput />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {articles.map((a) => (
            <Card
              key={a.id}
              className="bg-[#18181b] border-none !border-t-primary border-t-8 text-white "
            >
              <CardHeader>
                <div className="flex gap-5">
                  <div className="w-12 h-12">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h3>{a.author}</h3>
                    <p> {a.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent color={"gray.500"}>
                <CardTitle>{a.title}</CardTitle>
                <CardDescription> {a.body}</CardDescription>
              </CardContent>

              {/* <Divider borderColor={"gray.200"}></Divider> */}
              <CardFooter>
                <div className="flex justify-between w-full">
                  <Button variant={"ghost"} className="gap-3">
                    <Icon path={mdiEyeOutline} size={1} />
                    <span>watch</span>
                  </Button>
                  <Button variant={"ghost"} className="gap-3">
                    <Icon path={mdiFileEditOutline} size={1} />
                    <span>Comment</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <BasePagination />
    </div>
  );
};

export default ArticlesPage;
