"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-pink-600 text-2xl font-bold text-white">
          {timeLeft.days}
        </div>
        <span className="mt-2 text-sm text-gray-600">Dias</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-pink-600 text-2xl font-bold text-white">
          {timeLeft.hours}
        </div>
        <span className="mt-2 text-sm text-gray-600">Horas</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-pink-600 text-2xl font-bold text-white">
          {timeLeft.minutes}
        </div>
        <span className="mt-2 text-sm text-gray-600">Minutos</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-pink-600 text-2xl font-bold text-white">
          {timeLeft.seconds}
        </div>
        <span className="mt-2 text-sm text-gray-600">Segundos</span>
      </div>
    </div>
  )
}
