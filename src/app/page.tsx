"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const{ data : session} = authClient.useSession()

  const onSubmit = () =>  authClient.signUp.email({
        email, // user email address
        name, // user display name
        password, // user password -> min 8 characters by default
        callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
    }, {
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: () => {
          window.alert("success")
          
        },
        onError: () => {
            // display the error message
            window.alert("something went wrong");
        },
});

const onLogin = () =>  authClient.signIn.email({
        email, // user email address
        // name, // user display name
        password, // user password -> min 8 characters by default
        callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
    }, {
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: () => {
          window.alert("success")
          
        },
        onError: () => {
            // display the error message
            window.alert("something went wrong");
        },
});

  if (session){
    return(
      <div className="flex flex-col p-4 gap-y-4">
        <p>logged in as {session.user.name} </p>
        <Button onClick={() => authClient.signOut()}>
          sign out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4">
    <div className="p-4 flex flex-col gap-y-4">
      {/* <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} /> */}
      <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onSubmit}> Create User </Button>
    </div>

    <Button onClick={onLogin}> Login </Button>
    </div>
  );
}
