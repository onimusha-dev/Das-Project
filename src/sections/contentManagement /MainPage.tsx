import { NavLink } from "react-router-dom"

const navItems = [
  { name: "HomePage Banners", path: "homepage-banners" },
  { name: "Our Partners", path: "our-partners" },
  { name: "Team Members", path: "team-members" },
  { name: "Capturing Our Mission / Gallery", path: "gallery" },
  { name: "Terms of Service", path: "terms-of-service" },
  { name: "Privacy Policy", path: "privacy-policy" },
  { name: "About Us", path: "about-us" },
  { name: "Our Impact", path: "our-impact" },
];

const MainPage = () => {
  return (
    
    <div>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={`bg-gray-50 shadow-xs border-1 rounded-md font-medium hover:bg-white py-5 px-8 mt-5 block `}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainPage

