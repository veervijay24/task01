import React from 'react'
import './TableOfContents.css'
function TableOfContents() {
  return (
    <div className=" toc w-64 p-6 border-l-[1px] hidden">
      <h2 className="text-xl font-bold text-red-700">Table of Content</h2>
      <ul className="mt-4 space-y-2">
        <li>Docit</li>
        <li>Examples</li>
        <li>Get Started</li>
        <li>Installation</li>
        <li>Usage</li>
        <li>Credits</li>
        <li>Changelog</li>
        <li>Examples</li>
      </ul>
    </div>
  )
}

export default TableOfContents
