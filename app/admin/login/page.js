'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { Lock, Mail, ArrowRight, Loader2, ShieldCheck, Map, Layers, Eye, EyeOff } from 'lucide-react'
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
        throw new Error('Invalid credentials')
      }

      const data = await response.json()
      const { token, user } = data
      
      // Store token and email in cookies
      Cookies.set('token', token, { expires: 7 }) 
      if (user && user.length > 0 && user[0].email) {
        Cookies.set('adminEmail', user[0].email, { expires: 7 })
      }
      
      setAlert({ show: true, message: 'Authentication successful', type: 'success' })
      
      // Redirect to dashboard after successful login
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 1000)
    } catch (error) {
      setAlert({ show: true, message: error.message || 'Login failed', type: 'error' })
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex bg-[#030712] overflow-hidden text-slate-200 font-sans">
      
      {/* ── LEFT PANEL (Branding & Visuals) ── */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 overflow-hidden border-r border-white/5 bg-[#0f172a]">
        {/* Animated Background Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }}></div>
        
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="relative z-10 flex items-center">
          <Link href="/" className="bg-white rounded-xl px-4 py-3 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="Techmapperz Logo"
              width={180}
              height={50}
              style={{ height: '44px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }}
              priority
            />
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Geospatial <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Intelligence Hub
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Access the central dashboard to manage maps, spatial data, and infrastructure projects across all technical sectors.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#0f172a] bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-md">TM</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0f172a] bg-emerald-600 flex items-center justify-center text-xs font-bold text-white shadow-md">GIS</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0f172a] bg-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                <Layers className="w-4 h-4"/>
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400">Secure Admin Portal</p>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Techmapperz. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL (Login Form) ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative bg-[#030712]">
        
        {/* Mobile background */}
        <div className="lg:hidden absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[100px]"></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          <div className="mb-10 text-center lg:text-left">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-6">
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
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">Welcome Back</h2>
            <p className="text-slate-400 text-base">Sign in to your account to continue</p>
          </div>

          {alert.show && (
            <div className={`mb-8 p-4 rounded-xl text-sm font-semibold flex items-center border ${
              alert.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
            }`}>
              <ShieldCheck className="w-5 h-5 mr-3 shrink-0" />
              {alert.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors duration-300" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-4 py-3.5 bg-[#0f172a]/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 shadow-sm"
                    placeholder="admin@techmapperz.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-semibold text-slate-300">Password</label>
                  <a href="/admin/forgot-password" className="text-xs font-medium text-blue-500 hover:text-blue-400 transition-colors">Forgot password?</a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors duration-300" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-12 py-3.5 bg-[#0f172a]/60 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 shadow-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors duration-200"
                    tabIndex={-1}
                  >
                    {showPassword
                      ? <EyeOff className="h-5 w-5" />
                      : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-sm font-bold text-white bg-white/5 hover:bg-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 disabled:opacity-50 shadow-[0_0_40px_-10px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.4)]"
              style={{
                background: 'linear-gradient(90deg, #2563eb, #059669)'
              }}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center">
                {loading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    Sign In to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </button>
          </form>
          
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
