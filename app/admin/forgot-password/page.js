'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Mail, ArrowRight, Loader2, ShieldCheck, Eye, EyeOff, ArrowLeft, CheckCircle2 } from 'lucide-react'
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

      // Verify the email exists by calling with a dummy password check approach
      // We send to forgot-password with just email to verify it
      const response = await fetch(`${baseURL}/api/admin/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, checkOnly: true }),
      })

      const data = await response.json()

      if (response.status === 404) {
        setAlert({ show: true, message: 'No admin account found with this email address.', type: 'error' })
      } else {
        // Email verified — go to step 2
        setStep(2)
      }
    } catch (error) {
      setAlert({ show: true, message: 'Something went wrong. Please try again.', type: 'error' })
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
      setAlert({ show: true, message: 'Password must be at least 6 characters.', type: 'error' })
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
        throw new Error(data.message || 'Failed to reset password')
      }

      setStep(3)
    } catch (error) {
      setAlert({ show: true, message: error.message || 'Something went wrong.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex bg-[#030712] overflow-hidden text-slate-200 font-sans">

      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 overflow-hidden border-r border-white/5 bg-[#0f172a]">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="relative z-10 flex items-center">
          <div className="bg-white rounded-xl px-4 py-3 shadow-lg" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="Techmapperz Logo"
              width={180}
              height={50}
              style={{ height: '44px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Reset Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Admin Password
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Enter your registered email address, then set a new secure password to regain access to the admin dashboard.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { step: 1, label: 'Verify your email address' },
              { step: 2, label: 'Set a new password' },
              { step: 3, label: 'Access restored' },
            ].map((s) => (
              <div key={s.step} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                  step > s.step
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : step === s.step
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-transparent border-slate-600 text-slate-500'
                }`}>
                  {step > s.step ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                </div>
                <span className={`text-sm font-medium ${step >= s.step ? 'text-slate-200' : 'text-slate-600'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Techmapperz. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative bg-[#030712]">
        <div className="lg:hidden absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[100px]"></div>
        </div>

        <div className="w-full max-w-md relative z-10">

          {/* Step 1 — Email Verification */}
          {step === 1 && (
            <>
              <div className="mb-10 text-center lg:text-left">
                <div className="lg:hidden flex justify-center mb-6">
                  <div className="bg-white rounded-xl px-4 py-3 shadow-lg" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Image src="/logo.png" alt="Techmapperz Logo" width={180} height={50}
                      style={{ height: '44px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }} priority />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">Forgot Password?</h2>
                <p className="text-slate-400 text-base">Enter your admin email to get started</p>
              </div>

              {alert.show && (
                <div className={`mb-6 p-4 rounded-xl text-sm font-semibold flex items-center border ${
                  alert.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
                }`}>
                  <ShieldCheck className="w-5 h-5 mr-3 shrink-0" />
                  {alert.message}
                </div>
              )}

              <form onSubmit={handleVerifyEmail} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors duration-300" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3.5 bg-[#0f172a]/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 shadow-sm"
                      placeholder="admin@techmapperz.com"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-sm font-bold text-white overflow-hidden transition-all duration-300 disabled:opacity-50"
                  style={{ background: 'linear-gradient(90deg, #2563eb, #059669)' }}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    {loading ? (
                      <><Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />Verifying...</>
                    ) : (
                      <>Verify Email <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </span>
                </button>
              </form>

              <div className="mt-8 text-center">
                <Link href="/admin/login" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to Sign In
                </Link>
              </div>
            </>
          )}

          {/* Step 2 — New Password */}
          {step === 2 && (
            <>
              <div className="mb-10 text-center lg:text-left">
                <div className="lg:hidden flex justify-center mb-6">
                  <div className="bg-white rounded-xl px-4 py-3 shadow-lg" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Image src="/logo.png" alt="Techmapperz Logo" width={180} height={50}
                      style={{ height: '44px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }} priority />
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  <CheckCircle2 className="w-4 h-4" /> Email verified
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">Set New Password</h2>
                <p className="text-slate-400 text-base">Create a strong new password for <span className="text-blue-400 font-semibold">{email}</span></p>
              </div>

              {alert.show && (
                <div className={`mb-6 p-4 rounded-xl text-sm font-semibold flex items-center border ${
                  alert.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
                }`}>
                  <ShieldCheck className="w-5 h-5 mr-3 shrink-0" />
                  {alert.message}
                </div>
              )}

              <form onSubmit={handleResetPassword} className="space-y-6">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">New Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors duration-300" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="block w-full pl-11 pr-12 py-3.5 bg-[#0f172a]/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 shadow-sm"
                        placeholder="Min. 6 characters"
                      />
                      <button type="button" onClick={() => setShowPassword(p => !p)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors" tabIndex={-1}>
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Confirm Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors duration-300" />
                      </div>
                      <input
                        type={showConfirm ? 'text' : 'password'}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="block w-full pl-11 pr-12 py-3.5 bg-[#0f172a]/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 shadow-sm"
                        placeholder="Re-enter password"
                      />
                      <button type="button" onClick={() => setShowConfirm(p => !p)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors" tabIndex={-1}>
                        {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {confirmPassword && newPassword !== confirmPassword && (
                      <p className="text-xs text-red-400 ml-1 mt-1">Passwords do not match</p>
                    )}
                    {confirmPassword && newPassword === confirmPassword && (
                      <p className="text-xs text-emerald-400 ml-1 mt-1 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Passwords match</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-sm font-bold text-white overflow-hidden transition-all duration-300 disabled:opacity-50"
                  style={{ background: 'linear-gradient(90deg, #2563eb, #059669)' }}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    {loading ? (
                      <><Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />Updating...</>
                    ) : (
                      <>Reset Password <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </span>
                </button>
              </form>

              <div className="mt-8 text-center">
                <button onClick={() => { setStep(1); setAlert({ show: false, message: '', type: '' }) }}
                  className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back
                </button>
              </div>
            </>
          )}

          {/* Step 3 — Success */}
          {step === 3 && (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">Password Reset!</h2>
              <p className="text-slate-400 text-base mb-2">Your admin password has been successfully updated.</p>
              <p className="text-slate-500 text-sm mb-10">You can now sign in with your new password.</p>

              <Link
                href="/admin/login"
                className="group relative inline-flex justify-center py-4 px-10 border border-transparent rounded-xl text-sm font-bold text-white overflow-hidden transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, #2563eb, #059669)' }}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  Go to Sign In
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          )}

          <div className="mt-8 text-center lg:hidden">
            <p className="text-xs text-slate-600 font-medium">
              &copy; {new Date().getFullYear()} Techmapperz. All rights reserved.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
