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
  ButtonCircle,
} from './AdminFormCreate.styled';
import { LoadSpiner } from '../../../reused/load-spinner/LoadSpiner';
import { Icon } from '../../../reused/icon/Icon';
import { createPosts } from '../../../../api/post.api';

export const CreatePost = ({ setReGet, setIsDisableSaveBtn }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [components, setComponents] = useState([]);
  const [photo, setPhoto] = useState(undefined);
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [listComponents, setListComponents] = useState([{ file: undefined }]);

  const submitForm = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await createPosts(title, year, components, photo, listComponents);
      setTitle('');
      setYear('');
      setComponents([]);
      setPhoto(null);
      setListComponents([{ file: undefined }]);
      fileInputRef.current.value = '';
      setReGet(state => !state);
      setIsDisableSaveBtn(false);
      Notify.success('Створено');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Notify.failure('Усп... Щось пішло не так :(');
      Notify.failure(`${error}`);
    }
  };

  const addComponent = () => {
    if (listComponents.length > 12)
      return Notify.warning('Можна створити до 12 блоків');
    setListComponents(prevState => [...prevState, { file: undefined }]);
  };

  const updateComponents = (e, index) => {
    setListComponents(prevState => {
      return prevState.map((item, i) => {
        if (i === index) {
          return { file: e.target.files[0] };
        }
        return item;
      });
    });
  };

  const deleteComponent = index => {
    setListComponents(prevState => {
      return prevState.filter((item, i) => i !== index);
    });
  };

  return (
    <Form onSubmit={submitForm}>
      <InputFile>
        {photo ? (
          <Img src={URL.createObjectURL(photo)} alt="Вибране фото" />
        ) : (
          'Вибір головного фото'
        )}
        <input
          required
          style={{ display: 'none' }}
          type="file"
          accept="image/*"
          multiple=""
          ref={fileInputRef}
          onChange={e => {
            const fileCurr = e.target.files[0];
            if (!fileCurr) return;
            const fileSizeInMB = fileCurr.size / (1024 * 1024);
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

      {listComponents.map((character, index) => {
        return (
          <Label key={index}>
            <br />
            {listComponents.length > 1 && (
              <ButtonCircle
                type="button"
                onClick={() => deleteComponent(index)}
              >
                <Icon name="icon-delete" />
              </ButtonCircle>
            )}
            <InputFile>
              {listComponents[index].file ? (
                <Img
                  src={URL.createObjectURL(listComponents[index].file)}
                  alt="Вибране фото"
                />
              ) : (
                "Вибір фото об'єкта"
              )}

              <input
                required
                name="img-component"
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                multiple=""
                onChange={e => updateComponents(e, index)}
              />
            </InputFile>
          </Label>
        );
      })}

      <Button type="button" onClick={addComponent}>
        + Додати об'єкт
      </Button>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <LoadSpiner barColor={'#fff'} borderColor={'#fff'} />
        ) : (
          'Створити'
        )}
      </Button>
    </Form>
  );
};
