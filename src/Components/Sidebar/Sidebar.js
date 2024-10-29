import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className="w-64 h-[calc(93vh)] border-r-[1px] p-6 sidebar hidden">
      <nav className="sidebar mt-4">
        <ul>
          <li className="text-lg font-semibold mb-2">Get Started</li>
          <li className="pl-4">Introduction</li>
          <li className="text-lg font-semibold mt-4 mb-2">Document</li>
          <ul className="pl-4">
            <li>MDX</li>
            <li>Live Block</li>
            <li>API Generation</li>
          </ul>

          <li className="text-lg font-semibold mt-4 mb-2">Configure</li>
          <ul className="pl-4">
            <li>Config File</li>
            <li>Sidebar</li>
            <li>Provider</li>
            <li>Static Resources</li>
            <li>Socials</li>
            <li>Troubleshooting</li>
          </ul>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
