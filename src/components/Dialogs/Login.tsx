"use client";
import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { JwtPayload } from "jsonwebtoken";

const Login = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data: JwtPayload = { email, password };
    try {
      const createUser = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include", // Include cookies
      });
      const response = await createUser.json();
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setEmail("");
      setPassword("");
      setIsOpen(false);
    }
  };
  return (
    <>
      <Dialog>
        <DialogTrigger className="text-white" onClick={() => setIsOpen(true)}>
          {children}
        </DialogTrigger>
        {isOpen && (
          <DialogContent className="max-w-xl p-0 !bg-darken !text-white">
            <DialogClose className="absolute p-2 rounded-full -right-4 -top-4 bg-primary">
              <img src="/images/close_icon_x.svg" className="w-5 h-5" />
            </DialogClose>
            <DialogTitle className="py-6 font-semibold text-center box_sh">
              SIGN IN
            </DialogTitle>

            <div className="px-10 text-center">
              <p className="text-base font-bold">
                Welcome to Cloud Hosting <br />
                Your Gateway to Unforgettable Adventures!
              </p>
              <p className="pt-3 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                eveniet quia quas velit quo officiis cupiditate voluptate, illum
                a voluptatem nisi magnam recusandae rerum distinctio odit dolore
                harum repudiandae
              </p>

              <form
                onSubmit={handleSubmit}
                className="pt-8 border-b-[1px] border-dark_gray border-dashed"
              >
                <Input
                  placeholder="Email address"
                  className="bg-darken text-white border-primary border-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="password"
                  className="relative mt-6 bg-darken text-white border-primary border-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-x-3">
                    <Checkbox
                      id="remember_me"
                      className="isChecked && 'bg-primary text-white '"
                    />
                    <Label htmlFor="remember_me"> Remebmer Me </Label>
                  </div>
                </div>
                <Button className="w-full my-5 bg-primary text-white">
                  Login
                </Button>
              </form>

              <div className="flex items-center justify-between py-4 gap-x-5">
                <span className="text-[13px] font-medium text-start text-dark_gray font-rob">
                  Already a member? Log in below to access your account and
                  explore the world with ease.
                </span>
                <Button className="bg-transparent rounded-lg font-medium border-primary border-[1px] text-primary font-rob text-base hover:bg-transparent">
                  register
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default Login;
