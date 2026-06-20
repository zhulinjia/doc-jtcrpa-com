import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): null {
  const { i18n } = useDocusaurusContext();
  useEffect(() => {
    const base = i18n.currentLocale === 'en' ? '/en/docs/' : '/docs/';
    window.location.replace(base);
  }, []);
  return null;
}
