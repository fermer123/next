import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 100);
  }, [router]);

  return (
    <div
      style={{
        fontSize: '50px',
        color: 'blue',
        textAlign: 'center',
      }}
    >
      ошибка
    </div>
  );
};
export default Error;
