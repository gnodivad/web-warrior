import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>Web Warrior</h1>
      <div class="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
