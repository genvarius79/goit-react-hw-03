import css from './Contact.module.css';
import { MdPerson, MdCall } from 'react-icons/md';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.groupAll}>
        <div className={css.groupImg}>
          <MdPerson color="#00000" size={22} />

          <p>{name}</p>
        </div>
        <div className={css.groupImg}>
          <MdCall color="#00000" size={22} />

          <p>{number}</p>
        </div>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
