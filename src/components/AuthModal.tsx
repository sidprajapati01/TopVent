import React, { useState } from 'react';
import { UserProfile } from '../types';
import { TopventBrandLogo } from './TopventBrandLogo';

interface AuthModalProps {
  isOpen: boolean;
  onLoginSuccess: (user: UserProfile) => void;
}

const PRESET_AVATARS = [
  { id: 'av1', url: 'https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Couture Editorial' },
  { id: 'av2', url: 'https://images.unsplash.com/photo-1740252117044-2af197eea287?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww', label: 'Classic Gentleman' },
  { id: 'av3', url: 'https://plus.unsplash.com/premium_photo-1739786996040-32bde1db0610?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Modern Minimalist' },
  { id: 'av4', url: 'https://images.unsplash.com/photo-1740252117027-4275d3f84385?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Avant-Garde' },
  { id: 'av5', url: 'https://plus.unsplash.com/premium_photo-1723586835725-140cff683aeb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Executive Luxe' },
  { id: 'av6', url: 'https://plus.unsplash.com/premium_photo-1723677830955-90e9bcdae719?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Resort Chic' },
];

const CLOTHING_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const CATEGORY_OPTIONS = [
  { id: 'men', label: "Men's Fashion", icon: 'man' },
  { id: 'women', label: "Women's Couture", icon: 'woman' },
];

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onLoginSuccess }) => {
  const [authMode, setAuthMode] = useState<'signup' | 'signin'>('signup');

  // Sign up fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(PRESET_AVATARS[0].url);
  const [clothingSize, setClothingSize] = useState('L');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['men']);
  const [errorMessage, setErrorMessage] = useState('');

  // OTP states
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otpError, setOtpError] = useState('');

  // Sign in fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  if (!isOpen) return null;

  // Handle custom photo upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('Profile image must be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setSelectedAvatar(reader.result);
          setErrorMessage('');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleCategory = (catId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
    );
  };

  // ⭐ STEP 1: Signup form submit → Generate Demo OTP
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
    if (!mobile.trim() || mobile.length < 10) {
      setErrorMessage('Please enter valid 10-digit mobile number');
      return;
    }
    if (!password.trim() || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return;
    }

    // Check if email already registered
    try {
      const savedUsersRaw = localStorage.getItem('topvent_registered_users');
      const savedUsers: UserProfile[] = savedUsersRaw ? JSON.parse(savedUsersRaw) : [];
      const alreadyExists = savedUsers.find(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase()
      );
      if (alreadyExists) {
        setErrorMessage('❌ This email is already registered. Please "Sign In".');
        return;
      }
    } catch {
      // Ignore
    }

    // ⭐ Generate Demo OTP
    const demoOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(demoOtp);
    setShowOtpScreen(true);
    setErrorMessage('');
    setOtp('');
    setOtpError('');

    setTimeout(() => {
      alert(
        `📧 DEMO OTP (In real app, sent to email/SMS)\n\n` +
        `Your OTP: ${demoOtp}\n\n` +
        `📱 Mobile: +91 ${mobile}\n` +
        `📧 Email: ${email}`
      );
    }, 500);
  };

  // ⭐ STEP 2: Verify OTP → Save user & login
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setOtpError('❌ Please enter 6-digit OTP');
      return;
    }
    if (otp !== generatedOtp) {
      setOtpError('❌ Wrong OTP. Please try again.');
      return;
    }

    const newUser: UserProfile = {
      id: `usr-${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      isEmailVerified: true,
      isMobileVerified: true,
      avatarUrl: selectedAvatar,
      clothingSize,
      shoeSize: 'Not Set',
      favoriteCategories: selectedCategories,
      joinedDate: 'September 2026',
      vipTier: 'VIP Premiere Member',
    };

    // ⭐ Save user to localStorage (Checked during Sign In)
    try {
      const savedUsersRaw = localStorage.getItem('topvent_registered_users');
      const savedUsers: UserProfile[] = savedUsersRaw ? JSON.parse(savedUsersRaw) : [];
      savedUsers.push(newUser);
      localStorage.setItem('topvent_registered_users', JSON.stringify(savedUsers));
    } catch {
      // Ignore
    }

    onLoginSuccess(newUser);
  };

  // ⭐ Resend OTP
  const handleResendOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setOtp('');
    setOtpError('');
    alert(`📧 New DEMO OTP: ${newOtp}`);
  };

  // ⭐ Sign In
  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginEmail.trim() || !loginEmail.includes('@')) {
      setErrorMessage('Please provide a valid registered email');
      return;
    }
    if (!loginPassword.trim() || loginPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return;
    }

    // ⭐ Check if user previously signed up (from localStorage)
    try {
      const savedUsersRaw = localStorage.getItem('topvent_registered_users');
      const savedUsers: UserProfile[] = savedUsersRaw ? JSON.parse(savedUsersRaw) : [];

      const existingUser = savedUsers.find(
        (u) => u.email.toLowerCase() === loginEmail.trim().toLowerCase()
      );

      if (!existingUser) {
        setErrorMessage('❌ This email is not registered. Please "Create Account" first.');
        return;
      }

      // User exists — Sign In
      onLoginSuccess(existingUser);
    } catch {
      setErrorMessage('❌ Sign in failed. Please try again.');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#08020e]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-lg bg-[#140526] text-white rounded-3xl border border-purple-800/40 shadow-2xl overflow-hidden my-auto">
        {/* Glow ambient background accents */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-purple-600/25 blur-3xl pointer-events-none" />

        {/* Header Ribbon */}
        <div className="relative z-10 px-6 pt-6 pb-4 border-b border-purple-900/40 flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 mb-2">
            <TopventBrandLogo size={36} showBackground={true} className="rounded-xl shadow-lg shadow-purple-950/70" />
            <span className="text-xl font-extrabold text-orange-400 tracking-tight">
              TOPVENT VIP
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {authMode === 'signup'
              ? showOtpScreen
                ? 'Verify Your Identity'
                : 'Create Your VIP Profile'
              : 'Welcome Back to TopVent'}
          </h2>
          <p className="text-xs text-purple-200/80 mt-1 max-w-xs leading-relaxed">
            {authMode === 'signup'
              ? showOtpScreen
                ? 'Enter the 6-digit code sent to your email & mobile'
                : 'Join our private luxury curation circle for flash price drops & tailored fit drops.'
              : 'Sign in to access your curated wardrobe, active cart & VIP lightning drops.'}
          </p>

          {!showOtpScreen && (
            <div className="mt-4 p-1 rounded-2xl bg-white/10 backdrop-blur-md flex items-center w-full max-w-xs border border-white/10">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMessage('');
                }}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  authMode === 'signup'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-purple-200/80 hover:text-white'
                }`}
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signin');
                  setErrorMessage('');
                }}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  authMode === 'signin'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-purple-200/80 hover:text-white'
                }`}
              >
                Sign In
              </button>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="relative z-10 px-6 py-5 max-h-[72vh] overflow-y-auto no-scrollbar">
          {errorMessage && !showOtpScreen && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {authMode === 'signup' ? (
            showOtpScreen ? (
              // OTP VERIFICATION SCREEN
              <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
                <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-center">
                  <div className="w-14 h-14 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-2">
                    <span className="material-symbols-outlined text-[28px]">mark_email_read</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white">Verify Your Email</h3>
                  <p className="text-xs text-purple-200/80 mt-1">
                    We've sent a 6-digit OTP:
                  </p>
                  <p className="text-xs text-orange-300 font-bold mt-0.5">
                    📧 {email}
                  </p>
                  <p className="text-xs text-orange-300 font-bold">
                    📱 +91 {mobile}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-purple-200 text-center">
                    Enter 6-Digit OTP
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value.replace(/\D/g, ''));
                      setOtpError('');
                    }}
                    placeholder="● ● ● ● ● ●"
                    autoFocus
                    className="h-14 px-3.5 rounded-xl bg-white/10 border border-purple-800/40 text-2xl text-white text-center tracking-[0.5em] font-extrabold placeholder:text-purple-300/30 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {otpError && (
                  <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold text-center">
                    {otpError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Verify OTP & Continue</span>
                </button>

                <div className="flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setShowOtpScreen(false);
                      setOtp('');
                      setOtpError('');
                    }}
                    className="text-purple-300/80 hover:text-white font-bold flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">refresh</span>
                    <span>Resend OTP</span>
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-[10px] text-blue-200 text-center">
                  💡 Demo Mode: In real app, OTP is sent to your email/SMS. Currently shown in alert.
                </div>
              </form>
            ) : (
              // SIGNUP FORM
              <form onSubmit={handleSignUpSubmit} className="flex flex-col gap-4">
                {/* Profile Photo / Avatar Picker */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-purple-200 flex items-center justify-between">
                    <span>Profile Photo or Luxury Avatar</span>
                    <span className="text-[10px] text-orange-400 font-semibold">Required</span>
                  </label>

                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-orange-500 shrink-0 bg-purple-950 shadow-md">
                      <img
                        src={selectedAvatar}
                        alt="Selected Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col gap-1.5">
                      <label className="cursor-pointer inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-colors">
                        <span className="material-symbols-outlined text-[16px] text-orange-400">upload</span>
                        <span>Upload Custom Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                      <span className="text-[10px] text-purple-300/70">Or choose a preset below:</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-2 pt-1">
                    {PRESET_AVATARS.map((av) => (
                      <button
                        key={av.id}
                        type="button"
                        onClick={() => setSelectedAvatar(av.url)}
                        className={`relative aspect-square rounded-xl overflow-hidden transition-all ${
                          selectedAvatar === av.url
                            ? 'ring-2 ring-orange-500 scale-105 shadow-md'
                            : 'opacity-60 hover:opacity-100'
                        }`}
                        title={av.label}
                      >
                        <img src={av.url} alt={av.label} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-purple-200">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Siddharth Prajapati"
                      className="h-11 px-3.5 rounded-xl bg-white/10 border border-purple-800/40 text-sm text-white placeholder:text-purple-300/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-purple-200">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="siddharth@example.com"
                      className="h-11 px-3.5 rounded-xl bg-white/10 border border-purple-800/40 text-sm text-white placeholder:text-purple-300/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-purple-200 flex items-center justify-between">
                    <span>Mobile Number</span>
                    <span className="text-[10px] text-orange-400 font-semibold">
                      {mobile.length}/10
                    </span>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="h-11 px-3 rounded-xl bg-white/10 border border-purple-800/40 text-sm text-purple-200 flex items-center">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="9876543210"
                      className="flex-1 h-11 px-3.5 rounded-xl bg-white/10 border border-purple-800/40 text-sm text-white placeholder:text-purple-300/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  {mobile.length > 0 && mobile.length < 10 && (
                    <span className="text-[10px] text-rose-400">
                      ⚠️ {10 - mobile.length} more digits needed
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-purple-200">Password / Access Passcode</label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="h-11 px-3.5 rounded-xl bg-white/10 border border-purple-800/40 text-sm text-white placeholder:text-purple-300/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <span className="text-[10px] text-purple-300/60">Minimum 6 characters</span>
                </div>
                {/* Favorite Categories */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-purple-200 flex items-center justify-between">
                    <span>Favorite Product Categories</span>
                    <span className="text-[10px] text-orange-400 font-medium">Select 1 or more</span>
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    {CATEGORY_OPTIONS.map((cat) => {
                      const isSelected = selectedCategories.includes(cat.id);
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => toggleCategory(cat.id)}
                          className={`p-2.5 rounded-xl border text-left flex items-center gap-2 text-xs font-bold transition-all ${
                            isSelected
                              ? 'border-orange-500 bg-orange-500/20 text-white shadow-sm'
                              : 'border-purple-900/40 bg-white/5 text-purple-300 hover:bg-white/10'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[16px] text-orange-400">
                            {cat.icon}
                          </span>
                          <span className="truncate">{cat.label}</span>
                          {isSelected && (
                            <span className="material-symbols-outlined text-[16px] text-orange-400 ml-auto">
                              check
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all mt-2"
                >
                  <span>Continue to Verify Email</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>
            )
          ) : (
            // SIGN IN FORM
            <form onSubmit={handleSignInSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-purple-200">Registered Email Address</label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="name@vip.topvent.co"
                  className="h-11 px-3.5 rounded-xl bg-white/10 border border-purple-800/40 text-sm text-white placeholder:text-purple-300/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-purple-200">Passcode / Password</label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="h-11 px-3.5 rounded-xl bg-white/10 border border-purple-800/40 text-sm text-white placeholder:text-purple-300/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all mt-1"
              >
                <span>Sign In to VIP Account</span>
                <span className="material-symbols-outlined text-[18px]">login</span>
              </button>

              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-[10px] text-blue-200 text-center">
                💡 No account? Click "Create Account" above.
              </div>
            </form>
          )}

          <div className="mt-4 pt-3 text-center border-t border-purple-900/30">
            <span className="text-[10px] text-purple-300/60 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[13px] text-emerald-400">lock</span>
              <span>256-bit encrypted authentication • Privacy guaranteed</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};