import React, { useState } from 'react'
import { Link } from 'react-router'

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const registerData = {
      email,
      username,
      password,
    }

    console.log('Register form submitted:', registerData)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-8 text-zinc-100">
      <div className="auth-page-in w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-900/95 p-6 shadow-2xl shadow-black/50">
        <div className="mb-5 flex rounded-md border border-zinc-800 bg-zinc-950 p-1 text-sm">
          <Link
            to="/login"
            className="flex-1 rounded px-3 py-2 text-center font-medium text-zinc-400 transition hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="flex-1 rounded bg-cyan-400 px-3 py-2 text-center font-semibold text-zinc-950"
          >
            Register
          </Link>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">Start fresh</p>
          <h1 className="text-2xl font-semibold text-white">Create your account</h1>
          <p className="mt-1.5 text-sm leading-6 text-zinc-400">Choose your username and secure your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-500 hover:border-zinc-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              required
            />
          </div>

          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-zinc-200">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Choose a username"
              className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-500 hover:border-zinc-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-zinc-200">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
              className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-zinc-500 hover:border-zinc-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-950/40 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            Register
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-zinc-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-cyan-300 transition hover:text-cyan-200">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
