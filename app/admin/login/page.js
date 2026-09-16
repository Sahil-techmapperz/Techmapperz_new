'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import {
  Lock,
  Mail,
  ArrowRight,
  ArrowLeft,
  Loader2,
  ShieldCheck,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert({ show: false, message: '', type: '' })

    try {
      const baseURL = typeof window !== 'undefined'
        ? window.location.origin
        : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

      const response = await fetch(`${baseURL}/api/admin/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Invalid email or password. Please try again.')
      }

      const data = await response.json()
      const { token, user } = data

      // Store token and email in cookies (7 days expiry)
      Cookies.set('token', token, { expires: 7 })
      if (user && user.length > 0 && user[0].email) {
        Cookies.set('adminEmail', user[0].email, { expires: 7 })
      }

      setAlert({ show: true, message: 'Authentication successful. Redirecting to dashboard...', type: 'success' })

      // Redirect to dashboard after successful login
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 1000)
    } catch (error) {
      setAlert({ show: true, message: error.message || 'Login failed. Please check your credentials.', type: 'error' })
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex bg-[#F6F8FB] text-[#17202A] font-sans antialiased selection:bg-[#1656B8] selection:text-white">

      {/* ── LEFT PANEL (Desktop Showcase: Deep Navy, Brand Authority & Visual Precision) ── */}
      <div className="hidden lg:flex lg:w-[48%] xl:w-[45%] flex-shrink-0 bg-gradient-to-br from-[#071E40] via-[#0C2E60] to-[#0A264F] text-white p-8 lg:p-12 xl:p-14 relative flex-col justify-between overflow-hidden border-r border-[#1656B8]/30">

        {/* Ambient Glows & Technical Grid Overlay */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1656B8]/30 blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#0F766E]/30 blur-[110px] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(rgba(94, 234, 212, 0.14) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Top Header: Brand Logo & Operational Status */}
        <div className="relative z-10 flex items-center justify-between gap-4">
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

          {/* Live Operational Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[12px] font-semibold text-[#E8F5F3]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5EEAD4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5EEAD4]"></span>
            </span>
            <span className="tracking-wide">System Online</span>
            <span className="text-white/30">•</span>
            <span className="text-[#5EEAD4] font-mono text-[11px]">EPSG:4326</span>
          </div>
        </div>

        {/* Center: Command Center Overview */}
        <div className="relative z-10 my-auto max-w-xl">
          {/* Section Eyebrow on Navy */}
          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]"></span>
            GEOSPATIAL COMMAND &amp; CONTROL
          </span>

          <h1 className="text-[32px] lg:text-[40px] xl:text-[44px] font-bold text-white leading-[1.18] tracking-tight mb-4">
            Enterprise GIS &amp; Drone Analytics Portal
          </h1>

          <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal mb-8 text-white/80">
            Secure administrative gateway for managing spatial datasets, LiDAR point clouds, drone survey pipelines, and client infrastructure deliverables.
          </p>

          {/* Technical Capability Checkmarks (Compliant with Style Guide Section 5.3) */}
          <div className="space-y-3.5 mb-8">
            <div className="flex items-start gap-3">
              <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[14px] sm:text-[15px] text-white/90 font-medium">
                Spatial Database &amp; GeoServer Layer Management
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[14px] sm:text-[15px] text-white/90 font-medium">
                Drone Photogrammetry &amp; LiDAR Processing Pipelines
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[14px] sm:text-[15px] text-white/90 font-medium">
                Enterprise Role-Based Access Control &amp; Audit Logs
              </span>
            </div>
          </div>

          {/* Telemetry Metric Strip */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
            <div className="text-center p-2 rounded-xl bg-white/[0.04]">
              <div className="text-[18px] sm:text-[20px] font-bold text-[#5EEAD4]">99.98%</div>
              <div className="text-[11px] text-[#A8C4E8] uppercase tracking-wider font-semibold mt-0.5">Uptime SLA</div>
            </div>
            <div className="text-center p-2 rounded-xl bg-white/[0.04]">
              <div className="text-[18px] sm:text-[20px] font-bold text-white">256-bit</div>
              <div className="text-[11px] text-[#A8C4E8] uppercase tracking-wider font-semibold mt-0.5">TLS Encryption</div>
            </div>
            <div className="text-center p-2 rounded-xl bg-white/[0.04]">
              <div className="text-[18px] sm:text-[20px] font-bold text-[#5EEAD4]">Tier IV</div>
              <div className="text-[11px] text-[#A8C4E8] uppercase tracking-wider font-semibold mt-0.5">Cloud Security</div>
            </div>
          </div>
        </div>

        {/* Footer on Left: Coordinates & Copyright */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between gap-3 text-xs text-white/60">
          <span className="font-mono">
            22.5726° N, 88.3639° E • Kolkata, India
          </span>
          <span className="font-medium">
            &copy; {new Date().getFullYear()} Techmapperz Geoinformatics
          </span>
        </div>
      </div>

      {/* ── RIGHT PANEL (Enterprise Authentication Surface - 65% Light Canvas) ── */}
      <div className="w-full lg:w-[52%] xl:w-[55%] flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-14 relative bg-[#F6F8FB]">

        {/* Top Bar: Return Link & Access Assurance */}
        <div className="flex items-center justify-between w-full mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4B5563] hover:text-[#1656B8] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Techmapperz.com</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F766E] bg-[#E8F5F3] px-3.5 py-1.5 rounded-full border border-[#0F766E]/20">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
            <span className="hidden xs:inline">Authorized Personnel Only</span>
            <span className="xs:hidden">Authorized</span>
          </div>
        </div>

        {/* Mobile Header: Logo & Status (Only visible on small screens) */}
        <div className="lg:hidden flex flex-col items-center text-center mb-6">
          <Link
            href="/"
            className="inline-flex items-center bg-white px-4 py-2.5 rounded-xl shadow-md border border-white/90 mb-3"
          >
            <Image
              src="/logo.webp"
              alt="Techmapperz Logo"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F3] border border-[#0F766E]/20 text-[11px] font-semibold text-[#0F766E]">
            <span className="h-2 w-2 rounded-full bg-[#0F766E]"></span>
            <span>Enterprise Admin Gateway</span>
          </div>
        </div>

        {/* Authentication Card */}
        <div className="my-auto w-full max-w-[440px] mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-[24px] p-6 sm:p-10 shadow-[0_12px_40px_-8px_rgba(12,46,96,0.08)] border border-[#DDE3EA] relative">

            {/* Form Header */}
            <div className="mb-7">
              <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
                ADMINISTRATIVE ACCESS
              </span>
              <h2 className="text-[24px] sm:text-[30px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight mb-2">
                Sign In to Dashboard
              </h2>
              <p className="text-[#4B5563] text-[14px] sm:text-[15px] leading-[1.6]">
                Enter your credentials to manage maps, spatial data, and client projects.
              </p>
            </div>

            {/* Feedback Alert Messages */}
            {alert.show && (
              <div
                className={`mb-6 p-4 rounded-xl text-sm font-semibold flex items-center gap-3 border transition-all duration-200 ${alert.type === 'success'
                    ? 'bg-[#E8F5F3] text-[#0F766E] border-[#0F766E]/30'
                    : 'bg-[#FFF1F1] text-[#D2292B] border-[#D2292B]/30'
                  }`}
                role="alert"
              >
                {alert.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#0F766E]" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-[#D2292B]" />
                )}
                <span>{alert.message}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Email Address Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="admin-email"
                  className="block text-sm font-semibold text-[#17202A]"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1656B8] transition-colors duration-200">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    id="admin-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-4 py-3 bg-white border border-[#DDE3EA] rounded-xl text-[15px] text-[#17202A] placeholder-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#1656B8] focus:ring-4 focus:ring-[#1656B8]/10 transition-all duration-200 shadow-sm"
                    placeholder="admin@techmapperz.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="admin-password"
                    className="block text-sm font-semibold text-[#17202A]"
                  >
                    Password
                  </label>
                  <Link
                    href="/admin/forgot-password"
                    className="text-xs font-semibold text-[#1656B8] hover:text-[#0C2E60] hover:underline transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1656B8] transition-colors duration-200">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    id="admin-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-11 py-3 bg-white border border-[#DDE3EA] rounded-xl text-[15px] text-[#17202A] placeholder-slate-400 hover:border-slate-400 focus:outline-none focus:border-[#1656B8] focus:ring-4 focus:ring-[#1656B8]/10 transition-all duration-200 shadow-sm"
                    placeholder="••••••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors duration-200 cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Primary Submit Button (Action Blue #1656B8 hover Deep Navy #0C2E60) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] active:scale-[0.99] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg min-h-[48px] disabled:opacity-60 disabled:pointer-events-none group cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" />
                      <span>Verifying Credentials...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to Dashboard</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Micro-Assurance Footer */}
            <div className="pt-5 mt-5 border-t border-[#DDE3EA] flex items-center justify-between text-xs text-[#4B5563]">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
                256-Bit SSL Encrypted
              </span>
              <span className="text-[#6B7280] font-medium">
                Session Monitored
              </span>
            </div>
          </div>
        </div>

        {/* Right Footer: Assistance Info */}
        <div className="mt-8 text-center text-xs text-[#6B7280]">
          <span>Need access assistance? Contact Techmapperz IT Operations at </span>
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
