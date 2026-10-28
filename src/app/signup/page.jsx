
"use client";

// import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { email } from "better-auth";
import { signUpEmail } from "better-auth/api";
import { authClient, signUp } from "@/lib/auth-client"; //import the auth client

const SignUpPage = () => {
     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("form data", data)

    const { data : resData, error } = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,

        callbackURL: "/"


        });
        console.log(resData, error)


    };

    return (
        <div>
            <h1 className='text-2xl font-bold'>
                অ্যাকাউন্ট তৈরি করুন
            </h1>
            <p className='text-gray-400 mb-2'>
                বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
            </p>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>নাম</Label>
            <Input placeholder="যেমন: রহিম উদ্দিন" />
            <FieldError />
          </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>ইমেইল</Label>
        <Input placeholder="Your e-mail" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>পাসওয়ার্ড</Label>
        <Input placeholder="Set a password" />
        <Description>কমপক্ষে ৮ অক্ষর</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          {/* <Check /> */}
          অ্যাকাউন্ট তৈরি করুন
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
        </div>
    );
};

export default SignUpPage;