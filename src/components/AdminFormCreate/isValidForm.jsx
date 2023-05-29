import { Notify } from 'notiflix/build/notiflix-notify-aio';
export const isValidForm = (type, value) => {
  if (type === 'electric') {
    if (value === '') {
      Notify.warning('Ви нічого не ввели');
      return false;
    }
    if (!value.includes('-')) {
      Notify.warning('Введіть значення та вимір через тире');
      return false;
    }
    if (value.includes(',')) {
      Notify.warning('Використвуйте точку замість коми');
      return false;
    }
    if (value.split('-').length !== 2 || !Number(value.split('-')[0])) {
      Notify.warning('Введіть значення в правільному форматі');
      return false;
    }

    return true;
  }

  if (type === 'number') {
    if (value.includes(',')) {
      Notify.warning('Використвуйте точку замість коми');
      return false;
    }
    if (!Number(value)) {
      Notify.warning('Введіть тільки число');
      return false;
    }
    return true;
  }

  Notify.warning('Невірний тип валідації');
  return false;
};

export const styleInvalidForm = (e, type) => {
  if (type === 'focus') {
    e.target.style.color = 'black';
  }
  if (type === 'blur') {
    e.target.style.color = 'red';
  }
};
