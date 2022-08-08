import Link from 'next/link';
import { useRouter } from 'next/router';
import style from '../styles/NavBar.module.css';
const Navbar = () => {
  const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Contact', path: '/contacts' },
    { id: 3, title: 'Posts', path: '/posts' },
  ];

  const { pathname } = useRouter();

  return (
    <div className={style.wrap}>
      {navigation.map(({ id, title, path }) => (
        <Link key={id} href={path}>
          <a className={pathname === path ? style.active : null}>{title}</a>
        </Link>
      ))}
    </div>
  );
};
export default Navbar;
