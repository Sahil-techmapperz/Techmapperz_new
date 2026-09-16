'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Lock,
  Mail,
  ArrowRight,
  Loader2,
  ShieldCheck,
  Eye,
  EyeOff,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  KeyRound
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [step, setStep] = useState(1) // 1 = enter email, 2 = set new password, 3 = success
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })

  const handleVerifyEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert({ show: false, message: '', type: '' })

    try {
      const baseURL = typeof window !== 'undefined'
        ? window.location.origin
        : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

      const response = await fetch(`${baseURL}/api/admin/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, checkOnly: true }),
      })

      const data = await response.json()

      if (response.status === 404) {
        setAlert({ show: true, message: 'No registered admin account found with this email.', type: 'error' })
      } else {
        setStep(2)
      }
    } catch (error) {
      setAlert({ show: true, message: 'Something went wrong. Please check your connection and try again.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setAlert({ show: false, message: '', type: '' })

    if (newPassword !== confirmPassword) {
      setAlert({ show: true, message: 'Passwords do not match.', type: 'error' })
      return
    }
    if (newPassword.length < 6) {
      setAlert({ show: true, message: 'Password must be at least 6 characters long.', type: 'error' })
      return
    }

    setLoading(true)
    try {
      const baseURL = typeof window !== 'undefined'
        ? window.location.origin
        : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

      const response = await fetch(`${baseURL}/api/admin/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, newPassword }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to reset password.')
      }

      setStep(3)
    } catch (error) {
      setAlert({ show: true, message: error.message || 'Something went wrong. Please try again.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#F6F8FB] text-[#17202A] font-sans antialiased selection:bg-[#1656B8] selection:text-white">

      {/* ── LEFT PANEL (Branding & Recovery Progress) ── */}
      <div className="w-full lg:w-[48%] xl:w-[45%] flex-shrink-0 bg-gradient-to-br from-[#071E40] via-[#0C2E60] to-[#0A264F] text-white p-6 sm:p-10 lg:p-12 xl:p-14 relative flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-[#1656B8]/30">

        {/* Ambient Glows & Grid Pattern */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1656B8]/30 blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#0F766E]/30 blur-[110px] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(rgba(94, 234, 212, 0.14) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Top Header: Logo & Recovery Pill */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center bg-white px-4 py-2.5 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-200 border border-white/90"
            title="Return to Techmapperz Home"
          >
            <Image
              src="/logo.webp"
              alt="Techmapperz Logo"
              width={180}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[12px] font-semibold text-[#E8F5F3]">
            <KeyRound className="w-3.5 h-3.5 text-[#5EEAD4]" />
            <span>Account Recovery</span>
          </div>
        </div>

        {/* Center: Recovery Guidance & Stepper */}
        <div className="relative z-10 my-8 lg:my-auto max-w-xl">
          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]"></span>
            SECURITY &amp; ACCESS CONTROL
          </span>

          <h1 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-white leading-[1.18] tracking-tight mb-4">
            Reset Your Admin Credentials
          </h1>

          <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal mb-8 text-white/80">
            Follow the multi-step verification process to verify your administrative email and establish a new strong password.
          </p>

          {/* Stepper Progress Badges */}
          <div className="space-y-4 mb-8">
            {[
              { num: 1, label: 'Verify Administrative Email' },
              { num: 2, label: 'Configure Strong Password' },
              { num: 3, label: 'Credentials Updated & Access Restored' },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-3.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-300 ${step > s.num
                      ? 'bg-[#0F766E] border-[#5EEAD4] text-white shadow-sm'
                      : step === s.num
                        ? 'bg-[#1656B8] border-white text-white shadow-md ring-2 ring-[#5EEAD4]/40'
                        : 'bg-white/5 border-white/20 text-white/40'
                    }`}
                >
                  {step > s.num ? <CheckCircle2 className="w-4 h-4 text-[#5EEAD4]" /> : s.num}
                </div>
                <span
                  className={`text-[14px] sm:text-[15px] font-medium transition-colors ${step >= s.num ? 'text-white' : 'text-white/40'
                    }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Telemetry Metric Strip */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md max-w-sm">
            <div className="p-2 rounded-xl bg-white/[0.04]">
              <div className="text-[18px] font-bold text-[#5EEAD4]">256-bit</div>
              <div className="text-[11px] text-[#A8C4E8] uppercase tracking-wider font-semibold mt-0.5">TLS Verification</div>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.04]">
              <div className="text-[18px] font-bold text-white">Instant</div>
              <div className="text-[11px] text-[#A8C4E8] uppercase tracking-wider font-semibold mt-0.5">Session Refresh</div>
            </div>
          </div>
        </div>

        {/* Footer on Left */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <span className="font-mono">
            22.5726° N, 88.3639° E • Kolkata, India
          </span>
          <span className="font-medium">
            &copy; {new Date().getFullYear()} Techmapperz Geoinformatics
          </span>
        </div>
      </div>

      {/* ── RIGHT PANEL (Form Container) ── */}
      <div className="w-full lg:w-[52%] xl:w-[55%] flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-14 relative bg-[#F6F8FB]">

        {/* Top Header */}
        <div className="flex items-center justify-between w-full mb-6">
          <Link
            href="/admin/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4B5563] hover:text-[#1656B8] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Sign In</span>
          </Link>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#0F766E] bg-[#E8F5F3] px-3.5 py-1.5 rounded-full border border-[#0F766E]/20">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>Identity Verification</span>
          </div>
        </div>

        {/* Center Card */}
        <div className="my-auto w-full max-w-[440px] mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-[24px] p-7 sm:p-10 shadow-[0_12px_40px_-8px_rgba(12,46,96,0.08)] border border-[#DDE3EA] relative">

            {/* Step 1: Email Verification */}
            {step === 1 && (
              <>
                <div className="mb-8">
                  <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
                    STEP 1 OF 2
                  </span>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight mb-2">
                    Forgot Password?
                  </h2>
                  <p className="text-[#4B5563] text-[15px] leading-[1.6]">
                    Enter your registered admin email address to verify your account identity.
                  </p>
                </div>

                {alert.show && (
                  <div
                    className={`mb-6 p-4 rounded-xl text-sm font-semibold flex items-center gap-3 border ${alert.type === 'success'
                        ? 'bg-[#E8F5F3] text-[#0F766E] border-[#0F766E]/30'
                        : 'bg-[#FFF1F1] text-[#D2292B] border-[#D2292B]/30'
                      }`}
                  >
                    {alert.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#0F766E]" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 text-[#D2292B]" />
                    )}
                    <span>{alert.message}</span>
                  </div>
                )}

                <form onSubmit={handleVerifyEmail} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#17202A]">
                      Admin Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1656B8] transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full pl-11 pr-4 py-3 bg-white border border-[#DDE3EA] rounded-xl text-[15px] text-[#17202A] placeholder-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#1656B8] focus:ring-4 focus:ring-[#1656B8]/10 transition-all duration-200 shadow-sm"
                        placeholder="admin@techmapperz.com"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] active:scale-[0.99] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg min-h-[48px] disabled:opacity-60 disabled:pointer-events-none group cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin h-5 w-5" />
                          <span>Verifying Identity...</span>
                        </>
                      ) : (
                        <>
                          <span>Verify Admin Email</span>
                          <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    href="/admin/login"
                    className="inline-flex items-center text-sm font-semibold text-[#1656B8] hover:text-[#0C2E60] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1.5" />
                    Back to Sign In
                  </Link>
                </div>
              </>
            )}

            {/* Step 2: New Password Form */}
            {step === 2 && (
              <>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-1.5 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/20 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" />
                    Email Verified: {email}
                  </div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight mb-2">
                    Create New Password
                  </h2>
                  <p className="text-[#4B5563] text-[15px] leading-[1.6]">
                    Choose a strong, secure password for your administrative profile.
                  </p>
                </div>

                {alert.show && (
                  <div
                    className={`mb-6 p-4 rounded-xl text-sm font-semibold flex items-center gap-3 border ${alert.type === 'success'
                        ? 'bg-[#E8F5F3] text-[#0F766E] border-[#0F766E]/30'
                        : 'bg-[#FFF1F1] text-[#D2292B] border-[#D2292B]/30'
                      }`}
                  >
                    {alert.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#0F766E]" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 text-[#D2292B]" />
                    )}
                    <span>{alert.message}</span>
                  </div>
                )}

                <form onSubmit={handleResetPassword} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#17202A]">
                      New Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1656B8] transition-colors">
                        <Lock className="h-5 w-5" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="block w-full pl-11 pr-11 py-3 bg-white border border-[#DDE3EA] rounded-xl text-[15px] text-[#17202A] placeholder-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#1656B8] focus:ring-4 focus:ring-[#1656B8]/10 transition-all duration-200 shadow-sm"
                        placeholder="Min. 6 characters"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(p => !p)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                        tabIndex={-1}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-[#17202A]">
                      Confirm New Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1656B8] transition-colors">
                        <Lock className="h-5 w-5" />
                      </div>
                      <input
                        type={showConfirm ? 'text' : 'password'}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="block w-full pl-11 pr-11 py-3 bg-white border border-[#DDE3EA] rounded-xl text-[15px] text-[#17202A] placeholder-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#1656B8] focus:ring-4 focus:ring-[#1656B8]/10 transition-all duration-200 shadow-sm"
                        placeholder="Re-enter password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(p => !p)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                        tabIndex={-1}
                      >
                        {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {confirmPassword && newPassword !== confirmPassword && (
                      <p className="text-xs text-[#D2292B] font-medium pt-1">Passwords do not match</p>
                    )}
                    {confirmPassword && newPassword === confirmPassword && (
                      <p className="text-xs text-[#0F766E] font-medium pt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" /> Passwords match
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] active:scale-[0.99] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg min-h-[48px] disabled:opacity-60 disabled:pointer-events-none group cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin h-5 w-5" />
                          <span>Updating Password...</span>
                        </>
                      ) : (
                        <>
                          <span>Save &amp; Update Password</span>
                          <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => { setStep(1); setAlert({ show: false, message: '', type: '' }) }}
                    className="inline-flex items-center text-sm font-semibold text-[#4B5563] hover:text-[#1656B8] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1.5" />
                    Change Email
                  </button>
                </div>
              </>
            )}

            {/* Step 3: Success Confirmation */}
            {step === 3 && (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-[#E8F5F3] border-2 border-[#0F766E]/30 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-9 h-9 text-[#0F766E]" />
                </div>
                <h2 className="text-[26px] sm:text-[30px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight mb-2">
                  Password Updated!
                </h2>
                <p className="text-[#4B5563] text-[15px] leading-[1.6] mb-8">
                  Your administrator password has been securely updated. You may now log in to the dashboard.
                </p>

                <Link
                  href="/admin/login"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] active:scale-[0.99] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg min-h-[48px] group"
                >
                  <span>Proceed to Sign In</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}

            {/* Bottom Security Micro-Assurance */}
            <div className="pt-6 mt-6 border-t border-[#DDE3EA] flex items-center justify-between text-xs text-[#4B5563]">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
                256-Bit SSL Encrypted
              </span>
              <span className="text-[#6B7280] font-medium">
                Audit Logged
              </span>
            </div>
          </div>
        </div>

        {/* Right Footer */}
        <div className="mt-8 text-center text-xs text-[#6B7280]">
          <span>Need assistance? Contact Techmapperz IT Operations at </span>
          <a
            href="mailto:info@techmapperz.com"
            className="text-[#1656B8] font-semibold hover:underline"
          >
            info@techmapperz.com
          </a>
        </div>
      </div>

    </div>
  )
}
