import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        console.log("Login attempt:", { email, password })
    }

    return (<>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold text-gray-900">Log In to ETE</h1>
                <p className="text-gray-600">Enter your login details to access your account.</p>
            </div>
            <div className="space-y-2 mt-8">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address*
                </Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-blue-500/5 rounded-[4px] border-gray-200 h-15 focus:border-blue-500 focus:ring-blue-500"
                        required
                    />
                </div>
            </div>

            <div className="space-y-2 mt-10">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password*
                </Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-15 bg-blue-500/5 rounded-[4px] border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            <Button type="submit" className="w-full text-xl font-semibold bg-blue-600 rounded-[4px] hover:bg-blue-700 text-white mt-8 py-3 h-15 ">
                Login
            </Button>
        </form>

        <div className="text-center mt-10">
            <NavLink to="/auth/forgot-password" className="flex justify-start text-xl underline pt-8 text-blue-600 hover:text-blue-700 border-t-1 font-medium">
                Forgot password?
            </NavLink>
        </div>
    </>
    )
}
