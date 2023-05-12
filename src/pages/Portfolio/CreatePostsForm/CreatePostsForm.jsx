import { useState, useRef } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Form,
  Input,
  Label,
  Button,
  Textarey,
  InputFile,
  Img,
  ImgInfo,
} from './CreatePostsForm.styled';
import { createPosts } from 'components/API/API';

export const CreatePostsForm = ({ setReGet, setIsDisableSaveBtn }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [components, setComponents] = useState([]);
  const [photo, setPhoto] = useState(undefined);
  const fileInputRef = useRef(null);

  const submitForm = async e => {
    e.preventDefault();
    try {
      await createPosts(title, year, components, photo);
      setTitle('');
      setYear('');
      setComponents([]);
      setPhoto(null);
      fileInputRef.current.value = '';
      setReGet(state => !state);
      setIsDisableSaveBtn(false);
      Notify.success('Створено');
    } catch (error) {
      Notify.failure('Усп... Щось пішло не так :(');
      Notify.failure(`${error}`);
    }
  };

  return (
    <Form onSubmit={submitForm}>
      <InputFile>
        {photo ? (
          <Img src={URL.createObjectURL(photo)} alt="Вибране фото" />
        ) : (
          'Вибір фото'
        )}
        <input
          required
          style={{ display: 'none' }}
          type="file"
          accept="image/*"
          multiple=""
          ref={fileInputRef}
          onChange={e => {
            const fileSizeInMB = e.target.files[0].size / (1024 * 1024);
            if (fileSizeInMB > 10) {
              return Notify.failure(
                'Файл занадто великий! Максимальний розмір: 10 МБ'
              );
            }
            setPhoto(e.target.files[0]);
          }}
        />
      </InputFile>
      <ImgInfo>Рекомендовано формат фото - 4:3*</ImgInfo>
      <Label>
        Заголовок
        <Input
          required
          type="text"
          value={title}
          placeholder="Введіть назву..."
          onChange={e => setTitle(e.target.value)}
        />
      </Label>
      <Label>
        Рік
        <Input
          required
          type="text"
          value={year}
          placeholder="Введіть рік(20ХХ)..."
          onChange={e => setYear(e.target.value)}
        />
      </Label>
      <Label>
        <Textarey
          required
          rows="10"
          value={components.join('\n')}
          placeholder="Введіть компоненти..."
          onChange={e => setComponents(e.target.value.split('\n'))}
        ></Textarey>
      </Label>
      <Button type="submit">Створити</Button>
    </Form>
  );
};
