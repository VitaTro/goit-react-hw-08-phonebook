import css from './Home.module.css';

export default function Home() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to PhoneBook</h1>{' '}
      </div>
    </section>
  );
}
