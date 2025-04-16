'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import '../../styles/globals.css'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-300 via-teal-400 to-cyan-500 animate-gradient">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md transform transition-all duration-700 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 tracking-tight">
          Crea una cuenta
        </h2>

        {/* Error message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="space-y-5">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Correo electrónico" 
            className="w-full px-5 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm placeholder-gray-400 transition-all"
          />
          
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Contraseña" 
            className="w-full px-5 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm placeholder-gray-400 transition-all"
          />
          
          <button 
            onClick={() => {}} 
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:bg-teal-600 transition-all ease-in-out"
          >
            Registrarse
          </button>
        </div>

        <div className="text-center mt-6">
          <span className="text-gray-600">¿Ya tienes cuenta? </span>
          <a href="/login" className="text-teal-500 hover:underline">Inicia sesión aquí</a>
        </div>
      </div>
    </div>
  )
}
