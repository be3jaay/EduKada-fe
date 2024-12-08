import * as React from "react"
import { ArrowLeftFromLine } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
} from "@/components/ui"
import { RegisterForm, LoginForm } from "@/components/auth";

export default function Login() {
  return (
    <div className="w-full flex h-screen items-center justify-center bg-background">
      <div className="w-full lg:w-2/4 flex flex-col p-12 space-y-12 ">
        <div className="flex items-start justify-start w-full text-gray ">
          <Button className="mt-4 bg-transparent border border-dark text-white" size="lg" variant="outline" >
            <ArrowLeftFromLine /> Back to Home
          </Button>
        </div>
        <div className="flex items-start flex-col space-y-4 ">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Sign In</TabsTrigger>
              <TabsTrigger value="register">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}