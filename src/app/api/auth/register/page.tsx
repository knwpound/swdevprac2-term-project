"use client";

import { useState } from "react";
import userRegister from "@/libs/userRegister";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [role, setRole] = useState("member");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await userRegister({ name, email, tel, role, password });
      router.push("/api/auth/signin");
    } catch (err: any) {
      setError(err.message || "Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <main className="w-full h-screen flex flex-col justify-center items-center z-30 overflow-hidden">
        <div
        className="absolute inset-0 animate-pulseCircle1"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #EECE7B, transparent, transparent)",
          zIndex: 10,
        }}
      ></div>

      <div
        className="absolute inset-0 animate-pulseCircle2"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #FF8D4B, #ffff, #ffff)",
          zIndex: 10,
        }}
      ></div>
        <div className="flex flex-col justify-center items-center w-fit h-fit bg-white/90 px-10 py-15 rounded-lg gap-7 shadow-md
        max-sm:px-4 max-sm:py-8 z-30">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-serif p-0 m-0 text-3xl font-bold max-sm:text-xl">
              Create an Account
            </h1>
            <p className="text-sm text-center">
              Ready to book some fun? Log in and let’s go!
            </p>
          </div>

          <div className="flex flex-col gap-4 w-[80%]">
            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                className="w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex flex-row max-sm:flex-col w-full gap-2">
                <input
                  type="text"
                  className="w-[70%] max-sm:w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                  placeholder="Tel"
                  onChange={(e) => setTel(e.target.value)}
                />
                <select
                  className="text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                  name="role"
                  id="role"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option className="rounded-md" value="member">
                    member
                  </option>
                  <option value="admin">admin</option>
                </select>
              </div>

              <input
                type="password"
                className="w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="w-full text-black text-sm px-3 py-1.5 placeholder:black border border-1 border-black 
            rounded-sm focus:outline focus:outline-gray-500"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-black text-white font-medium px-3 py-1.5 rounded-md border border-1
            hover:bg-white hover:text-black hover:border hover:border-1 hover:border-black transition duration-200"
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </div>

          <div className="flex flex-row gap-2">
            <p className="text-sm">Already have an account?</p>
            <a
              className="text-sm font-semibold hover:underline active:font-bold cursor-pointer"
              href="/api/auth/signin"
            >
              Login
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
