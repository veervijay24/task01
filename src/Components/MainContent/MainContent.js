import React from 'react'

function MainContent() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Docit</h1>
      <p className="mt-2">A markdown first react documentation solution</p>
      <ul className="list-disc mt-4 ml-5 space-y-2">
        <li>😎 MDX & MD Syntax oriented. No Noisy JSX!</li>
        <li>⚙️ Fast HMR</li>
        <li>✨ Out of the Box API & Component Props Table Generation</li>
        <li>❤️ Emoji Support and Responsive Designs</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Examples</h2>
      <p className="mt-2">Current site is powered by Docit!</p>

      <h2 className="text-2xl font-semibold mt-8">Get Started</h2>
      <p className="mt-2 ">
        This package is ESM only: Node 12+ is needed to use it, and it must be imported instead of required.
      </p>
    </div>
  )
}

export default MainContent
