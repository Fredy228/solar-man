import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { isValidForm, styleInvalidForm } from './isValidForm';
import {
  baseURL,
  createStoreComponents,
  getByIdStoreComponent,
  updateStoreComponents,
} from '../API/API';

const initialAddSort = {
  subtype: undefined,
  power: undefined,
  material: undefined,
  reservoir: undefined,
  voltage: undefined,
  phases: undefined,
};

export const CreateComponents = ({ idProduct }) => {
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!idProduct) return;
    try {
      const fetchComponent = async () => {
        const { result } = await getByIdStoreComponent(idProduct);
        setTitle(result.title);
        setType(result.type);
        setCost(result.cost);
        setBrand(result.brand);
        setCountry(result.country);
        setAddSort(JSON.parse(result.optionSort));
        setDescripMain(result.descripMain);
        setDescripCharacter(JSON.parse(result.descripCharacter));
        setPhoto(result.photo);
      };
      fetchComponent();
    } catch (err) {
      console.log(err);
    }
  }, []);

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
      const formData = new FormData();

      formData.append('photo', photo);
      formData.append('type', type);
      formData.append('title', title);
      formData.append('cost', cost);
      formData.append('brand', brand || 'unknown');
      formData.append('country', country || 'unknown');
      formData.append('optionSort', JSON.stringify(addSort));
      formData.append('descripMain', descripMain);
      formData.append('descripCharacter', JSON.stringify(descripCharacter));

      if (!idProduct) {
        await createStoreComponents(formData);
      } else {
        await updateStoreComponents(formData, idProduct);
      }

      Notify.success(!idProduct ? 'Створено' : 'Змінено');
      setIsLoading(false);
      navigate('/admin/goods');
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 401)
        return Notify.failure(
          'Неавторизовано, ваша сесія закінчилася або невірний токен'
        );
      Notify.failure(`Щось пішло не так, помилка: ${error.response.message}`);
    }
  };

  return (
    <Form onSubmit={submitForm}>
      <InputFile>
        {photo && (!idProduct || typeof photo !== 'string') ? (
          <Img src={URL.createObjectURL(photo)} alt="Вибране фото" />
        ) : (
          <>
            {typeof photo === 'string' && idProduct ? (
              <Img src={`${baseURL}/${photo}`} alt="Вибране фото" />
            ) : (
              'Вибір фото товару'
            )}
          </>
        )}
        <input
          required={!idProduct}
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
      <ImgInfo>Рекомендовано формат фото - 1:1*</ImgInfo>
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
                  <Option value="Автономні">Автономні</Option>
                  <Option value="Гібридні">Гібридні</Option>
                  <Option value="Мережеві">Мережеві</Option>
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
        Ціна, $
        <Input
          required
          name="cost"
          type="text"
          value={cost || ''}
          placeholder="Введіть ціну"
          onChange={e => {
            if (e.target.value.includes(','))
              return Notify.warning('Використовуйте точку для нецілих чисел');
            if (
              Number(e.target.value) ||
              e.target.value === '' ||
              e.target.value === '.'
            )
              setCost(e.target.value);
          }}
        />
      </Label>
      <Underline></Underline>
      {[
        'Панелі',
        'Інвентори',
        'Акумулятори',
        'Комлпектуючі',
        'Контролери заряду',
      ].includes(type) && (
        <>
          <Label>
            Бренд товару
            <Input
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
              name="country"
              type="text"
              value={country}
              placeholder="Введіть країну"
              onChange={e => setCountry(e.target.value)}
            />
          </Label>
          <Underline></Underline>
        </>
      )}

      {['Панелі', 'Інвентори'].includes(type) && (
        <>
          <Label>
            Потужність
            <Input
              name="power"
              type="text"
              value={addSort.power || ''}
              placeholder="Введіть в форматі: 7-кВт"
              onChange={e => {
                setAddSort(prevState => ({
                  ...prevState,
                  power: e.target.value,
                }));
              }}
              onBlur={e => {
                if (!isValidForm('electric', e.target.value)) {
                  styleInvalidForm(e, 'blur');
                }
              }}
              onFocus={e => styleInvalidForm(e, 'focus')}
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
            Ємність акумулятора
            <Input
              name="reservoir"
              type="text"
              value={addSort.reservoir || ''}
              placeholder="Введіть в форматі: 3-Ач"
              onChange={e => {
                setAddSort(prevState => ({
                  ...prevState,
                  reservoir: e.target.value,
                }));
              }}
              onBlur={e => {
                if (!isValidForm('electric', e.target.value)) {
                  styleInvalidForm(e, 'blur');
                }
              }}
              onFocus={e => styleInvalidForm(e, 'focus')}
            />
          </Label>
          <Underline></Underline>
        </>
      )}
      {['Акумулятори'].includes(type) && (
        <>
          <Label>
            Напруга акумулятора
            <Input
              name="voltage"
              type="text"
              value={addSort.voltage || ''}
              placeholder="Введіть в форматі: 12.5-В"
              onChange={e => {
                if (e.target.value.includes(','))
                  return Notify.warning(
                    'Використовуйте точку для нецілих чисел'
                  );
                setAddSort(prevState => ({
                  ...prevState,
                  voltage: e.target.value,
                }));
              }}
              onBlur={e => {
                if (!isValidForm('electric', e.target.value)) {
                  styleInvalidForm(e, 'blur');
                }
              }}
              onFocus={e => styleInvalidForm(e, 'focus')}
            />
          </Label>
          <Underline></Underline>
        </>
      )}
      {['Кріплення'].includes(type) && (
        <>
          <Label>
            Матеріал
            <Select
              name="material"
              value={addSort.material}
              onChange={e => {
                setAddSort(prevState => ({
                  ...prevState,
                  material: e.target.value,
                }));
              }}
            >
              <Option value="Алюміній">Алюміній</Option>
              <Option value="Цинк">Цинк</Option>
              <Option value="Метал">Метал</Option>
            </Select>
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
          <>{!idProduct ? '-- Створити товар --' : '-- Змінити товар --'}</>
        )}
      </Button>
    </Form>
  );
};
