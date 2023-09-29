import {links} from "../data"

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
        <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
          <h2 className="">Web<span className="text-emerald-600">Dev</span></h2>
          <div className="flex gap-x3">{links}</div>
        </div>
    </nav>
  )
}

export default Navbar