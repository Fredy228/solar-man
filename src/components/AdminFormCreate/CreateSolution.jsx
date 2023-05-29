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
import { isValidForm, styleInvalidForm } from './isValidForm';
import { createStoreSets } from '../API/API';

export const CreateSolution = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Зелений тариф');
  const [cost, setCost] = useState('');
  const [power, setPower] = useState('');
  const [descripMain, setDescripMain] = useState('');
  const [descripCharacter, setDescripCharacter] = useState([
    { subtitle: '', option: [] },
  ]);
  const [descripPhoto, setDescripPhoto] = useState(undefined);
  const [listComponents, setListComponents] = useState([
    { subtitle: '', option: [], image: undefined },
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
  const addComponent = () => {
    if (listComponents.length > 12)
      return Notify.warning('Можна створити до 12 блоків');
    setListComponents(prevState => [
      ...prevState,
      { subtitle: '', option: [], image: undefined },
    ]);
  };

  const deleteCharacter = index => {
    setDescripCharacter(prevState => {
      return prevState.filter((item, i) => i !== index);
    });
  };
  const deleteComponent = index => {
    setListComponents(prevState => {
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
  const updateComponents = (e, index, fieldCurr) => {
    if (fieldCurr === 'option') {
      const arrayField = e.target.value.split('\n');
      setListComponents(prevState => {
        return prevState.map((item, i) => {
          if (i === index) {
            return { ...item, option: arrayField };
          }
          return item;
        });
      });
    }

    if (fieldCurr === 'subtitle') {
      setListComponents(prevState => {
        return prevState.map((item, i) => {
          if (i === index) {
            return { ...item, subtitle: e.target.value };
          }
          return item;
        });
      });
    }
    if (fieldCurr === 'image') {
      setListComponents(prevState => {
        return prevState.map((item, i) => {
          if (i === index) {
            return { ...item, image: e.target.files[0] };
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
      formData.append('title', title);
      formData.append('type', type);
      formData.append('cost', cost);
      formData.append('power', power);
      formData.append('descripMain', descripMain);
      formData.append('descripCharacter', JSON.stringify(descripCharacter));
      formData.append('descripPhoto', descripPhoto);
      const components = listComponents.map(component => {
        formData.append('componentsPhoto', component.image);
        return { subtitle: component.subtitle, option: component.option };
      });
      formData.append('components', JSON.stringify(components));

      await createStoreSets(formData);

      Notify.success('Створено');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Notify.failure('Усп... Щось пішло не так :(');
      console.log(error);
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
      <ImgInfo>
        Рекомендовано формат фото - 1:1* та мінімальними розмірами 500х500
      </ImgInfo>
      <Label>
        Назва комплекту
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
        Тип комплекту
        <Select
          name="type"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <Option value="Зелений тариф">Зелений тариф</Option>
          <Option value="Автономні станції">Автономні станції</Option>
          <Option value="Резервне живлення">Резервне живлення</Option>
          <Option value="Модульні безперебійні системи">
            Модульні безперебійні системи
          </Option>
          <Option value="Для підприємств">Для підприємств</Option>
        </Select>
      </Label>
      <Underline></Underline>
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
      <Label>
        Потужність комплекту
        <Input
          required
          name="power"
          type="text"
          value={power || ''}
          placeholder="Введіть в форматі: 5-кВт"
          onChange={e => {
            if (e.target.value.includes(','))
              return Notify.warning('Використовуйте точку для нецілих чисел');
            setPower(e.target.value);
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
      <Label>
        Опис комплекту
        <Textarey
          required
          name="desription"
          rows="10"
          value={descripMain}
          placeholder="Введіть опис товару"
          onChange={e => setDescripMain(e.target.value)}
        ></Textarey>
      </Label>
      <InputFile>
        {descripPhoto ? (
          <Img src={URL.createObjectURL(descripPhoto)} alt="Вибране фото" />
        ) : (
          'Вибір фото схеми'
        )}
        <input
          required
          name="img-shema"
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
            setDescripPhoto(e.target.files[0]);
          }}
        />
      </InputFile>
      <ImgInfo>
        Рекомендовано формат фото - 4:3* та мінімальними розмірами 940х700
      </ImgInfo>
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
              placeholder="Введіть підзаголовок для хар-к"
              onChange={e => updateCharacter(e, index, 'subtitle')}
            />
            <Textarey
              required
              rows="10"
              name="text-character"
              value={character.option.join('\n')}
              placeholder="Введіть характеристки товару"
              onChange={e => updateCharacter(e, index, 'option')}
            ></Textarey>
          </Label>
        );
      })}
      <Button type="button" onClick={addCharacter}>
        + Додати хар-ки
      </Button>
      <Underline></Underline>
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
            Обладнення {index + 1}
            <br />
            <br />
            <InputFile>
              {listComponents[index].image ? (
                <Img
                  src={URL.createObjectURL(listComponents[index].image)}
                  alt="Вибране фото"
                />
              ) : (
                'Вибір фото обладнання'
              )}
              <input
                required
                name="img-component"
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                multiple=""
                onChange={e => updateComponents(e, index, 'image')}
              />
            </InputFile>
            <Input
              required
              type="text"
              name="title-component"
              value={character.subtitle}
              placeholder="Введіть назву обладнання"
              onChange={e => updateComponents(e, index, 'subtitle')}
            />
            <Textarey
              required
              rows="10"
              name="text-components"
              value={character.option.join('\n')}
              placeholder="Введіть характеристки обладнання"
              onChange={e => updateComponents(e, index, 'option')}
            ></Textarey>
          </Label>
        );
      })}
      <Button type="button" onClick={addComponent}>
        + Додати обладнання
      </Button>
      <Underline></Underline>

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
