"use client";

import { useState, ChangeEvent } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  return (
    <div className="h-screen overflow-hidden flex flex-col lg:grid lg:grid-cols-2 font-[family-name:var(--font-dm-sans)]">
      {/* ─── Left Branding Panel (desktop only) ─── */}
      <div className="hidden lg:flex flex-col items-center justify-center relative bg-gradient-to-br from-sky-50 via-cyan-50 to-white px-12">
        <div className="absolute top-16 left-16 w-56 h-56 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-20 w-44 h-44 bg-cyan-200/30 rounded-full blur-2xl" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-200/60">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight text-center">
            MedCare
          </h1>

          <p className="text-xl font-semibold text-sky-600 text-center">
            Your Health, Our Priority
          </p>

          <p className="max-w-sm text-center text-slate-500 text-sm leading-relaxed">
            Access your medical records, book appointments, and connect with
            trusted healthcare professionals — all in one secure place.
          </p>
        </div>
      </div>

      {/* ─── Right / Main Login Panel ─── */}
      <div className="flex-1 flex items-center justify-center bg-slate-50/60 px-5 py-6 lg:bg-white lg:px-12">
        <div className="w-full max-w-md space-y-5">
          {/* Heading */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Welcome back</h2>
            <p className="text-sm text-slate-500 mt-1">
              Sign in to continue to your account
            </p>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Email or Mobile Number
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-400/50"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-400/50 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                👁
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setRememberMe(e.target.checked)
                }
                className="w-4 h-4 accent-sky-500"
              />
              <span className="text-sm text-slate-600">Remember me</span>
            </label>

            <span className="text-sm font-medium text-red-500 cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="w-full py-2.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400 uppercase">
              Or Login With
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50"
          >
            Continue with Google
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-slate-500">
            Don&apos;t have an account?{" "}
            <span className="font-semibold text-sky-500 cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
