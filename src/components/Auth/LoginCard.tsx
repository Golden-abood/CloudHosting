import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const LoginCard = () => {
  return (
    <div className="md:w-[600px] px-6 py-6 rounded-3xl">
      <Card className="bg-transparent text-white">
        <CardHeader>
          <CardDescription className="uppercase leading-7">
            Lets Get You Started
          </CardDescription>

          <CardTitle>Create an Account</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginCard;
