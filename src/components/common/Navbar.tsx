import Link from "next/link"

interface NavbarProps {
  title: string
  links?: any[],
}

const Navbar: React.FC<NavbarProps> = ({ title }: NavbarProps) => {
  return (
    <div className="navbar bg-primary-content text-white">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href={'/'} data-cy="home-link">
          { title }
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li data-cy="cart-link">
            <Link href="/cart">Cart</Link>
          </li>
          <li data-cy="books-link">
            <Link href="/">Books</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar