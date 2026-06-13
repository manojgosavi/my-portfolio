import { useEffect, useState } from 'react'

interface TypewriterResult {
  lines: string[]
  currentLine: string
  done: boolean
}

export function useTypewriter(
  script: string[],
  speed = 35,
  lineDelay = 350,
): TypewriterResult {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= script.length) return

    const target = script[lineIndex]

    if (currentLine.length < target.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(target.slice(0, currentLine.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setLines((prev) => [...prev, target])
      setCurrentLine('')
      setLineIndex((prev) => prev + 1)
    }, lineDelay)
    return () => clearTimeout(timeout)
  }, [currentLine, lineIndex, script, speed, lineDelay])

  return { lines, currentLine, done: lineIndex >= script.length }
}
