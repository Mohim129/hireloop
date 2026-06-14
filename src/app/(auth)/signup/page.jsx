"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Imported native Next.js router hook
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeSlash, ArrowRight } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

export default function SignUp() {
  const router = useRouter(); // Initialized the client-side router

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // 1. Front-end Validations
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
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

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        style: {
          background: "#161619",
          color: "#fff",
          borderRadius: "12px",
          border: "1px solid #262626",
        },
      });
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long", {
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
      // 2. Fire signup payload using your single configured authClient instance
      const { data, error } = await authClient.signUp.email({
        email: email.trim(),
        password: password,
        name: name.trim(),
      });

      if (error) {
        toast.error(error.message || "Registration failed. Try again.", {
          style: {
            background: "#161619",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid #262626",
          },
        });
      } else {
        // Success notification with a clear visual feedback state
        toast.success("Account created successfully! Redirecting...", {
          style: {
            background: "#161619",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid #262626",
          },
        });

        // Clear out input values safely
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });

        // 3. Delays redirection for 1.5s so the user can read the success notice
        setTimeout(() => {
          router.push("/signin");
        }, 1500);
      }
    } catch (err) {
      toast.error("Something went wrong connection-wise.", {
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
      {/* Toast configuration provider layer container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-md bg-[#0F0F11] border border-neutral-900 rounded-[28px] p-8 md:p-10 shadow-2xl shadow-black/60 relative overflow-hidden">
        {/* Subtle Ambient Top Border Highlight Rim */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        {/* Header Branding Area */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Create an account
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Join us to manage your setup and match your insights.
          </p>
        </div>

        {/* Input Interactive Form Fieldsets */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3.5 rounded-xl bg-[#161619] border border-neutral-800/80 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all duration-200"
            />
          </div>

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
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Password
            </label>
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

          {/* Confirm Password Field */}
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3.5 rounded-xl bg-[#161619] border border-neutral-800/80 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/60 transition-all duration-200"
            />
          </div>

          {/* Core Submit CTA Trigger */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-between px-5 py-4 rounded-xl text-xs font-bold tracking-wide bg-white text-black hover:bg-neutral-200 disabled:bg-neutral-700 disabled:text-neutral-400 transition-all duration-200 active:scale-[0.98] shadow-xl shadow-white/5"
            >
              <span>{isLoading ? "Creating Account..." : "Sign Up"}</span>
              {!isLoading && (
                <ArrowRight width={14} height={14} strokeWidth={2} />
              )}
            </button>
          </div>
        </form>

        {/* Redirection Options Section */}
        <div className="mt-8 pt-6 border-t border-neutral-900/60 text-center">
          <p className="text-xs text-neutral-500">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-neutral-300 font-semibold hover:text-white underline underline-offset-4 transition-colors ml-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
