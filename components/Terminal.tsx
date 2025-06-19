"use client"

import { useEffect, useState } from "react"

export function Terminal() {
  const [showCode, setShowCode] = useState(false)
  const [showCommand2, setShowCommand2] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [command1Complete, setCommand1Complete] = useState(false)
  const [command2Complete, setCommand2Complete] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowCode(true)
    }, 2000)

    const timer2 = setTimeout(() => {
      setCommand1Complete(true)
    }, 2200)

    const timer3 = setTimeout(() => {
      setShowCommand2(true)
    }, 4000)

    const timer4 = setTimeout(() => {
      setShowOutput(true)
    }, 5500)

    const timer5 = setTimeout(() => {
      setCommand2Complete(true)
    }, 6200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [])

  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm text-gray-600 dark:text-gray-400">expert_developer.py</div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm leading-relaxed">
        <div className="space-y-3">
          {/* Command 1: cat file */}
          <div className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
            <span className="text-green-600 dark:text-green-400">$</span>
            <span 
              className={`typing-command ${command1Complete ? 'border-r-0' : ''}`}
              data-text="cat expert_developer.py"
            >
              cat expert_developer.py
            </span>
          </div>
          
          {/* Python Code with syntax highlighting */}
          <div 
            className={`text-sm transition-opacity duration-500 ${showCode ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="mb-2">
              <span className="text-purple-600 dark:text-purple-400">class</span>
              <span className="text-blue-700 dark:text-yellow-300"> ExpertDeveloper</span>
              <span className="text-gray-900 dark:text-white">:</span>
            </div>
            <div className="ml-4">
              <span className="text-purple-600 dark:text-purple-400">def</span>
              <span className="text-blue-600 dark:text-blue-300"> __init__</span>
              <span className="text-gray-900 dark:text-white">(</span>
              <span className="text-orange-600 dark:text-orange-400">self</span>
              <span className="text-gray-900 dark:text-white">):</span>
            </div>
            <div className="ml-8 space-y-1 mb-4">
              <div>
                <span className="text-orange-600 dark:text-orange-400">self</span><span className="text-gray-900 dark:text-white">.</span><span className="text-blue-600 dark:text-blue-300">experience</span>
                <span className="text-gray-900 dark:text-white"> = </span>
                <span className="text-green-600 dark:text-green-300">"5+ années"</span>
              </div>
              <div>
                <span className="text-orange-600 dark:text-orange-400">self</span><span className="text-gray-900 dark:text-white">.</span><span className="text-blue-600 dark:text-blue-300">stack</span>
                <span className="text-gray-900 dark:text-white"> = [</span>
                <span className="text-green-600 dark:text-green-300">"Django"</span>
                <span className="text-gray-900 dark:text-white">, </span>
                <span className="text-green-600 dark:text-green-300">"DevOps"</span>
                <span className="text-gray-900 dark:text-white">, </span>
                <span className="text-green-600 dark:text-green-300">"Flutter"</span>
                <span className="text-gray-900 dark:text-white">]</span>
              </div>
              <div>
                <span className="text-orange-600 dark:text-orange-400">self</span><span className="text-gray-900 dark:text-white">.</span><span className="text-blue-600 dark:text-blue-300">projects</span>
                <span className="text-gray-900 dark:text-white"> = </span>
                <span className="text-green-600 dark:text-green-300">"Production-ready"</span>
              </div>
            </div>
            <div className="ml-4 mb-1">
              <span className="text-purple-600 dark:text-purple-400">def</span>
              <span className="text-blue-600 dark:text-blue-300"> deploy</span>
              <span className="text-gray-900 dark:text-white">(</span>
              <span className="text-orange-600 dark:text-orange-400">self</span>
              <span className="text-gray-900 dark:text-white">):</span>
            </div>
            <div className="ml-8">
              <span className="text-purple-600 dark:text-purple-400">return</span>
              <span className="text-green-600 dark:text-green-300"> "✅ Déployé avec succès!"</span>
            </div>
          </div>
          
          {/* Command 2: python */}
          <div 
            className={`flex items-start space-x-2 text-gray-600 dark:text-gray-400 transition-opacity duration-500 ${showCommand2 ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="text-green-600 dark:text-green-400">$</span>
            <span 
              className={`typing-command-2 ${command2Complete ? 'border-r-0' : ''}`}
              data-text="python expert_developer.py"
            >
              python expert_developer.py
            </span>
          </div>
          
          {/* Output */}
          <div 
            className={`text-green-600 dark:text-green-400 transition-opacity duration-500 ${showOutput ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="inline-block animate-pulse">●</span> Expert Django & DevOps initialisé
            <br />
            <span className="inline-block animate-pulse">●</span> Prêt pour nouveaux projets !
          </div>
        </div>
      </div>
    </div>
  )
} 