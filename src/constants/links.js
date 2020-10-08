import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "about",
    url: "/#aboutSection",
  },
  {
    id: 2,
    text: "projects",
    url: "/#projectsSection",
  },
  {
    id: 3,
    text: "contact",
    url: "/#contactSection",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}