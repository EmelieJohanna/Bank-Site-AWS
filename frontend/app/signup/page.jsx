"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to create user" + response.statusText);
      }
      const data = await response.json();
      alert("Account created successfully!");
      router.push("/login");
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="text-text">
      <h1 className="flex justify-center">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col space-y-2 md:max-w-lg"
      >
        <label htmlFor="username" className="block">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2 text-black"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 text-black "
          required
        />
        <button
          type="submit"
          className="bg-accent opacity-70 p-2 border rounded-2xl text-slate-50"
        >
          Create User
        </button>
      </form>
    </div>
  );
}
