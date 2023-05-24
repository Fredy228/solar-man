import { useState } from 'react';
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
  Underline,
} from './AdminFormCreate.styled';
import { LoadSpiner } from '../LoadSpiner/LoadSpiner';
import { Icon } from '../Icon/Icon';

export const CreateComponents = () => {
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState(undefined);
  const [brand, setBrand] = useState('');
  const [power, setPower] = useState(undefined);
  const [country, setCountry] = useState('');
  const [descripMain, setDescripMain] = useState('');
  const [descripCharacter, setDescripCharacter] = useState([
    { subtitle: '', option: [] },
  ]);
  const [photo, setPhoto] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const addCharacter = () => {
    if (descripCharacter.length > 7)
      return Notify.warning('Можна створити до 7 блоків');
    setDescripCharacter(prevState => [
      ...prevState,
      { subtitle: '', option: [] },
    ]);
  };

  const deleteCharacter = index => {
    setDescripCharacter(prevState => {
      return prevState.filter((item, i) => i !== index);
    });
  };

  const updateCharacter = (e, index, fieldCurr) => {
    if (fieldCurr === 'option') {
      const arrayField = e.target.value.split('\n');
      setDescripCharacter(prevState => {
        return prevState.map((item, i) => {
          if (i === index) {
            return { ...item, option: arrayField };
          }
          return item;
        });
      });
    }

    if (fieldCurr === 'subtitle') {
      setDescripCharacter(prevState => {
        return prevState.map((item, i) => {
          if (i === index) {
            return { ...item, subtitle: e.target.value };
          }
          return item;
        });
      });
    }
  };

  const submitForm = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setPhoto(undefined);
      setDescripMain('');
      setDescripCharacter([{ subtitle: '', option: [] }]);
      setTitle('');
      setBrand('');
      setPower(0);
      setCost(0);
      setCountry('');
      Notify.success('Створено');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
          'Вибір фото товару'
        )}
        <input
          required
          name="img-main"
          style={{ display: 'none' }}
          type="file"
          accept="image/*"
          multiple=""
          onChange={e => {
            const fileCurr = e.target.files[0];
            if (!fileCurr) return;
            const fileSizeInMB = fileCurr.size / (1024 * 1024);
            if (fileSizeInMB > 10) {
              return Notify.warning(
                'Файл занадто великий! Максимальний розмір: 10 МБ'
              );
            }
            setPhoto(e.target.files[0]);
          }}
        />
      </InputFile>
      <ImgInfo>Рекомендовано формат фото - 3:4*</ImgInfo>
      <Label>
        Назва товару
        <Input
          required
          name="name"
          type="text"
          value={title}
          placeholder="Введіть назву..."
          onChange={e => setTitle(e.target.value)}
        />
      </Label>
      <Underline></Underline>
      <Label>
        Ціна
        <Input
          required
          name="cost"
          type="number"
          value={cost || ''}
          placeholder="Введіть ціну"
          onChange={e => setCost(e.target.value)}
        />
      </Label>
      <Underline></Underline>
      <Label>
        Бренд товару
        <Input
          required
          name="brand"
          type="text"
          value={brand}
          placeholder="Введіть бренд..."
          onChange={e => setBrand(e.target.value)}
        />
      </Label>
      <Underline></Underline>
      <Label>
        Країна виробництва
        <Input
          required
          name="country"
          type="text"
          value={country}
          placeholder="Введіть країну..."
          onChange={e => setCountry(e.target.value)}
        />
      </Label>
      <Underline></Underline>
      <Label>
        Потужність
        <Input
          required
          name="power"
          type="number"
          value={power || ''}
          placeholder="Введіть потужність..."
          onChange={e => setPower(e.target.value)}
        />
      </Label>
      <Underline></Underline>
      <Label>
        Опис товару
        <Textarey
          required
          name="desription"
          rows="10"
          value={descripMain}
          placeholder="Введіть опис товару..."
          onChange={e => setDescripMain(e.target.value)}
        ></Textarey>
      </Label>
      {descripCharacter.map((character, index) => {
        return (
          <Label key={index}>
            <br />
            {descripCharacter.length > 1 && (
              <ButtonCircle
                type="button"
                onClick={() => deleteCharacter(index)}
              >
                <Icon name="icon-delete" />
              </ButtonCircle>
            )}
            Характеристика {index + 1}
            <Input
              required
              name="title-character"
              type="text"
              value={character.subtitle}
              placeholder="Введіть підзаголовок для хар-к..."
              onChange={e => updateCharacter(e, index, 'subtitle')}
            />
            <Textarey
              required
              rows="10"
              name="text-character"
              value={character.option.join('\n')}
              placeholder="Введіть характеристки товару..."
              onChange={e => updateCharacter(e, index, 'option')}
            ></Textarey>
          </Label>
        );
      })}
      <Button type="button" onClick={addCharacter}>
        + Додати хар-ки
      </Button>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <LoadSpiner barColor={'#fff'} borderColor={'#fff'} />
        ) : (
          '-- Створити товар --'
        )}
      </Button>
    </Form>
  );
};
