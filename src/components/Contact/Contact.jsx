import css from './Contact.module.css';
import svg from '../../img/icons.svg';
export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.groupAll}>
        <div className={css.groupSvg}>
          <svg className={css.svg} width="24" height="24">
            <use href={svg + '#icon-user'}></use>
          </svg>

          <p>{name}</p>
        </div>
        <div className={css.groupSvg}>
          <svg className={css.svg} width="24" height="24">
            <use href={svg + '#icon-phone'}></use>
          </svg>

          <p>{number}</p>
        </div>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
