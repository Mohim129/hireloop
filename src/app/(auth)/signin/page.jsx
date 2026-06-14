"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeSlash, ArrowRight } from "@gravity-ui/icons";
import { signIn } from "@/lib/auth-client"; // Direct import from your fixed client instance

export default function SignIn() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // 1. Basic Front-end Validation
    if (!email.trim() || !password) {
      toast.error("Please fill in all fields", {
        style: {
          background: "#161619",
          color: "#fff",
          borderRadius: "12px",
          border: "1px solid #262626",
        },
      });
      return;
    }

    setIsLoading(true);

    try {
      // 2. Fire credentials check using Better Auth client
      const { data, error } = await signIn.email({
        email: email.trim(),
        password: password,
        callbackURL: "/", // Keeps a fallback reference, but we handle router natively below
      });

      if (error) {
        toast.error(error.message || "Invalid email or password.", {
          style: {
            background: "#161619",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid #262626",
          },
        });
      } else {
        toast.success("Welcome back! Redirecting...", {
          style: {
            background: "#161619",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid #262626",
          },
        });

        // Clear out input fields smoothly
        setFormData({ email: "", password: "" });

        // 3. Take user to homepage after toast mounts nicely
        setTimeout(() => {
          router.push("/");
          router.refresh(); // Refreshes server components to instantly catch your active session
        }, 1200);
      }
    } catch (err) {
      toast.error("An unexpected error occurred during sign in.", {
        style: {
          background: "#161619",
          color: "#fff",
          borderRadius: "12px",
          border: "1px solid #262626",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#0B0B0C] text-white flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification Mount Layer */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-md bg-[#0F0F11] border border-neutral-900 rounded-[28px] p-8 md:p-10 shadow-2xl shadow-black/60 relative overflow-hidden">
        {/* Subtle Ambient Top Border Highlight Rim */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        {/* Header Branding Area */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Sign in to your account
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Welcome back! Enter your details to view your dashboard matches.
          </p>
        </div>

        {/* Input Interactive Form Fieldsets */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-4 py-3.5 rounded-xl bg-[#161619] border border-neutral-800/80 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all duration-200"
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Password
              </label>
              {/* Optional: Add a link for forgot password if needed later */}
              <span className="text-[11px] text-neutral-500 hover:text-neutral-300 cursor-pointer transition-colors">
                Forgot password?
              </span>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3.5 pr-12 rounded-xl bg-[#161619] border border-neutral-800/80 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                {showPassword ? (
                  <EyeSlash width={16} height={16} />
                ) : (
                  <Eye width={16} height={16} />
                )}
              </button>
            </div>
          </div>

          {/* Core Submit CTA Trigger */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-between px-5 py-4 rounded-xl text-xs font-bold tracking-wide bg-white text-black hover:bg-neutral-200 disabled:bg-neutral-700 disabled:text-neutral-400 transition-all duration-200 active:scale-[0.98] shadow-xl shadow-white/5"
            >
              <span>{isLoading ? "Signing In..." : "Sign In"}</span>
              {!isLoading && (
                <ArrowRight width={14} height={14} strokeWidth={2} />
              )}
            </button>
          </div>
        </form>

        {/* Redirection Options Section */}
        <div className="mt-8 pt-6 border-t border-neutral-900/60 text-center">
          <p className="text-xs text-neutral-500">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className="text-neutral-300 font-semibold hover:text-white underline underline-offset-4 transition-colors ml-1"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
