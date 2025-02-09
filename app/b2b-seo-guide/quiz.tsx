"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface QuizProps {
  question: string
  options: string[]
  correctAnswer: number
  onComplete: (isCorrect: boolean) => void
}

export function Quiz({ question, options, correctAnswer, onComplete }: QuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setIsSubmitted(true)
      onComplete(selectedAnswer === correctAnswer)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{question}</h3>
      <RadioGroup onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}>
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem
              value={index.toString()}
              id={`option-${index}`}
              className="border-orange-500 text-orange-500"
            />
            <Label htmlFor={`option-${index}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button
        onClick={handleSubmit}
        disabled={selectedAnswer === null || isSubmitted}
        className="bg-orange-500 hover:bg-orange-600"
      >
        Submit Answer
      </Button>
      {isSubmitted && (
        <p className={selectedAnswer === correctAnswer ? "text-green-500" : "text-red-500"}>
          {selectedAnswer === correctAnswer ? "Correct!" : "Incorrect. Try again!"}
        </p>
      )}
    </div>
  )
}

