"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, AlertCircle, ShieldCheck, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Ungültige E-Mail oder Passwort.");
      } else {
        router.push("/admin/posts");
        router.refresh();
      }
    } catch (err) {
      setError("Ein Fehler ist aufgetreten.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a2a4a]">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
          {/* Header */}
          <div className="px-10 pt-10 pb-8 text-center border-b border-white/10">
            <Link href="/" className="inline-block mb-5">
              <img 
                src="/Logo/Logo_Schiftzug_weiss.png?v=3" 
                alt="JADA Logo" 
                className="h-12 w-auto object-contain mx-auto" 
              />
            </Link>
            <div className="flex items-center justify-center gap-2 text-white/50 text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Sicherer Zugang · Admin Panel</span>
            </div>
          </div>

          {/* Form Area */}
          <div className="p-10">
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">
                  E-Mail Adresse
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-white/30" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                    placeholder="E-Mail Adresse"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/60 mb-2 uppercase tracking-widest">
                  Passwort
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/30" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all font-mono"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/30 hover:text-white/60 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-accent hover:bg-[#c94f03] text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed group mt-2"
              >
                {loading ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Anmelden
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <Link href="/" className="text-sm text-white/30 hover:text-white/60 transition-colors">
                ← Zurück zur Webseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
