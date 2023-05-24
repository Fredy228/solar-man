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
  Select,
  Option,
} from './AdminFormCreate.styled';
import { LoadSpiner } from '../LoadSpiner/LoadSpiner';
import { Icon } from '../Icon/Icon';

const initialAddSort = {
  subtype: undefined,
  power: undefined,
  material: undefined,
  reservoir: undefined,
  voltage: undefined,
  phases: undefined,
};

export const CreateComponents = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Панелі');
  const [cost, setCost] = useState(undefined);
  const [brand, setBrand] = useState('');
  const [country, setCountry] = useState('');
  const [addSort, setAddSort] = useState(initialAddSort);
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
      setCost('');
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
        Назва обладнання
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
        Тип обладнання
        <Select
          name="type"
          value={type}
          onChange={e => {
            setType(e.target.value);
            setAddSort(initialAddSort);
          }}
        >
          <Option value="Панелі">Панелі</Option>
          <Option value="Інвентори">Інвентори</Option>
          <Option value="Акумулятори">Акумулятори</Option>
          <Option value="Кріплення">Кріплення</Option>
          <Option value="Комлпектуючі">Комлпектуючі</Option>
          <Option value="Контролери заряду">Контролери заряду</Option>
        </Select>
      </Label>
      <Underline></Underline>
      {['Панелі', 'Інвентори', 'Акумулятори', 'Кріплення'].includes(type) && (
        <>
          <Label>
            Підтип обладнання
            <Select
              name="subtype"
              value={addSort.subtype}
              onChange={e => {
                setAddSort(prevState => ({
                  ...prevState,
                  subtype: e.target.value,
                }));
              }}
            >
              {type === 'Панелі' && (
                <>
                  <Option value="Монокристалічна">Монокристалічна</Option>
                  <Option value="Полікристалічна">Полікристалічна</Option>
                </>
              )}
              {type === 'Інвентори' && (
                <>
                  <Option value="Автономний">Автономний</Option>
                  <Option value="Гібридний">Гібридний</Option>
                  <Option value="ІБП">ІБП</Option>
                </>
              )}
              {type === 'Акумулятори' && (
                <>
                  <Option value="Гелеві">Гелеві</Option>
                  <Option value="Карбонові">Карбонові</Option>
                  <Option value="Літієві">Літієві</Option>
                </>
              )}
              {type === 'Кріплення' && (
                <>
                  <Option value="На похилий дах">На похилий дах</Option>
                  <Option value="На плаский дах">На плаский дах</Option>
                  <Option value="На керамічний дах">На керамічний дах</Option>
                </>
              )}
            </Select>
          </Label>
          <Underline></Underline>
        </>
      )}
      <Label>
        Ціна
        <Input
          required
          name="cost"
          type="text"
          value={cost || ''}
          placeholder="Введіть ціну"
          onChange={e => {
            if (Number(e.target.value)) setCost(e.target.value);
          }}
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
          placeholder="Введіть бренд"
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
          placeholder="Введіть країну"
          onChange={e => setCountry(e.target.value)}
        />
      </Label>
      <Underline></Underline>
      {['Панелі', 'Інвентори'].includes(type) && (
        <>
          <Label>
            Потужність
            <Input
              name="power"
              type="text"
              value={addSort.power || ''}
              placeholder="Введіть потужність"
              onChange={e => {
                if (Number(e.target.value) || e.target.value === '')
                  setAddSort(prevState => ({
                    ...prevState,
                    power: e.target.value,
                  }));
              }}
            />
          </Label>
          <Underline></Underline>
        </>
      )}
      {['Інвентори'].includes(type) && (
        <>
          <Label>
            Кількість фаз
            <Input
              name="phases"
              type="text"
              value={addSort.phases || ''}
              placeholder="Введіть кількість фаз"
              onChange={e => {
                if (Number(e.target.value) || e.target.value === '')
                  setAddSort(prevState => ({
                    ...prevState,
                    phases: e.target.value,
                  }));
              }}
            />
          </Label>
          <Underline></Underline>
        </>
      )}
      {['Акумулятори'].includes(type) && (
        <>
          <Label>
            Ємність, Ампер/годин (Аг)
            <Input
              name="reservoir"
              type="text"
              value={addSort.reservoir || ''}
              placeholder="Введіть ємність"
              onChange={e => {
                if (Number(e.target.value) || e.target.value === '')
                  setAddSort(prevState => ({
                    ...prevState,
                    reservoir: e.target.value,
                  }));
              }}
            />
          </Label>
          <Underline></Underline>
        </>
      )}
      {['Акумулятори'].includes(type) && (
        <>
          <Label>
            Напруга, Вольт (В)
            <Input
              name="voltage"
              type="text"
              value={addSort.voltage || ''}
              placeholder="Введіть напругу"
              onChange={e => {
                if (Number(e.target.value) || e.target.value === '')
                  setAddSort(prevState => ({
                    ...prevState,
                    voltage: e.target.value,
                  }));
              }}
            />
          </Label>
          <Underline></Underline>
        </>
      )}
      {['Кріплення'].includes(type) && (
        <>
          <Label>
            Матеріал
            <Input
              name="material"
              type="text"
              list="list-material"
              value={addSort.material || ''}
              placeholder="Введіть матеріал"
              onChange={e => {
                setAddSort(prevState => ({
                  ...prevState,
                  material: e.target.value,
                }));
              }}
            />
            <datalist id="list-material">
              <Option value="Алюміній" />
              <Option value="Цинк" />
              <Option value="Метал" />
            </datalist>
          </Label>
          <Underline></Underline>
        </>
      )}
      <Label>
        Опис товару
        <Textarey
          required
          name="desription"
          rows="10"
          value={descripMain}
          placeholder="Введіть опис товару"
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
