import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavLink } from "react-router-dom"

export default function AuthPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [countdown, setCountdown] = useState(52)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const fullCode = code.join("")
    console.log("Verification code:", fullCode)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex w-full">

      {/* Right side - Form */}
      <div className="w-full flex items-center justify-center py-8 ">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <NavLink to="/auth/login" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-block mb-2 underline">
              Back
            </NavLink>
            <h1 className="text-3xl font-semibold text-gray-900">Authenticate your account</h1>
            <p className="text-gray-600">
              We've emailed you a code to <span className="font-medium">xyz@outlook.com</span>. Enter it in the space
              below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-10">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">6-digit code*</Label>
              <div className="flex gap-2">
                {code.map((digit, index) => (
                  <Input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-16 h-16 text-center text-3xl bg-blue-500/5 rounded-[4px] font-medium border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    maxLength={1}
                  />
                ))}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-15 bg-blue-600 hover:bg-blue-700 text-white py-3 h-16 text-xl font-semibold rounded-[4px]"
            >
              Verify Code
            </Button>
          </form>

          <div className="text-center mt-10 pt-8 border-t">
            <p className="text-sm text-blue-600 font-semibold ">
              Request new OTP again in <span className="font-medium">{formatTime(countdown)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
