import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Button,
  ButtonCircle,
  DeleteBtnFile,
  Form,
  Img,
  ImgInfo,
  Input,
  InputFile,
  Label,
  LinkFile,
  Option,
  Select,
  Textarey,
  Underline,
  WrappFile,
} from './AdminFormCreate.styled';
import { LoadSpiner } from '../../../reused/load-spinner/LoadSpiner';
import { Icon } from '../../../reused/icon/Icon';
import { baseURL } from '../../../../api/base.api';
import { Modal } from '../../../reused/modal/Modal';
import { DeleteWindow } from '../../../modals/delete-window/DeleteWindow';
import { useShowModal } from '../../../../globalState/globalState';
import {
  createStoreComponents,
  deleteDescripPhotoComponent,
  deletePdfStoreComponent,
  getByIdStoreComponent,
  getFilterStoreComponent,
  updateStoreComponents,
} from '../../../../api/store.api';

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
  const { isShowModal, toggleModal } = useShowModal();
  const [dataList, setDataList] = useState({});
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
  const [youtubeUrl, setYoutubeUrl] = useState([]);
  const [photo, setPhoto] = useState(undefined);

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileCurrent, setPdfFileCurrent] = useState(null);

  const [descripPhotos, setDescripPhotos] = useState([{ file: undefined }]);
  const [currentDescripPhotos, setCurrentDescripPhotos] = useState(null);
  const [delDescripPhoto, setDelDescripPhoto] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFilter = async () => {
      try {
        const data = await getFilterStoreComponent(type);
        setDataList(data);
      } catch (err) {
        Notify.warning('Помилка получення datalist');
        console.log(err);
      }
    };
    fetchFilter();

    switch (type) {
      case 'Панелі':
        setAddSort(prevState => ({ ...prevState, subtype: 'Монокристалічна' }));
        break;
      case 'Інвертори':
        setAddSort(prevState => ({ ...prevState, subtype: 'Автономні' }));
        break;
      case 'Акумулятори':
        setAddSort(prevState => ({ ...prevState, subtype: 'Гелеві' }));
        break;
      case 'Кріплення':
        setAddSort(prevState => ({
          ...prevState,
          subtype: 'На похилий дах',
          material: 'Алюміній',
        }));
        break;
      default:
        break;
    }
  }, [type]);

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
        setYoutubeUrl(result.youtubeUrl ? JSON.parse(result.youtubeUrl) : []);
        setPdfFileCurrent(result.pdfUrl ? result.pdfUrl : null);
        setCurrentDescripPhotos(
          result.descripPhotos ? JSON.parse(result.descripPhotos) : null
        );
      };
      fetchComponent();
    } catch (err) {
      console.log(err);
    }
  }, [idProduct]);

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

  const deletePdf = async () => {
    try {
      setIsLoading(true);
      await deletePdfStoreComponent(idProduct);
      setPdfFileCurrent(null);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      Notify.failure(e);
    }
  };

  const updateDesripPhotos = (e, index) => {
    setDescripPhotos(prevState => {
      return prevState.map((item, i) => {
        if (i === index) {
          return { file: e.target.files[0] };
        }
        return item;
      });
    });
  };

  const addDesripPhotos = () => {
    if (descripPhotos.length > 6)
      return Notify.warning('Можна створити до 5 блоків');
    setDescripPhotos(prevState => [...prevState, { file: undefined }]);
  };

  const deleteDesripPhotos = index => {
    setDescripPhotos(prevState => {
      return prevState.filter((item, i) => i !== index);
    });
  };

  const deleteDescripPhotosApi = async (id, url) => {
    try {
      setIsLoading(true);
      await deleteDescripPhotoComponent(id, url);
      setCurrentDescripPhotos(prevState => prevState.filter(i => i !== url));
      setIsLoading(false);
      Notify.success('Видалено');
      toggleModal(false);
    } catch (e) {
      setIsLoading(false);
      Notify.failure('Сталася невідома помилка');
    }
  };

  const submitForm = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData();

      formData.append('photo', photo);
      formData.append('pdf', pdfFile);
      formData.append('type', type);
      formData.append('title', title);
      formData.append('cost', cost);
      formData.append('brand', brand || 'unknown');
      formData.append('country', country || 'unknown');
      formData.append('optionSort', JSON.stringify(addSort));
      formData.append('descripMain', descripMain);
      formData.append('descripCharacter', JSON.stringify(descripCharacter));
      formData.append('youtubeUrl', JSON.stringify(youtubeUrl));
      formData.append('descripPhotos', descripPhotos);
      descripPhotos.map(i => {
        if (i.file) {
          return formData.append('descripPhotos', i.file);
        }
        return '';
      });

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
      Notify.failure(`Помилка: ${error.response.data.message}`);
    }
  };

  return (
    <>
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
            minlength="2"
            maxlength="80"
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
              setAddSort(initialAddSort);
              setType(e.target.value);
            }}
          >
            <Option value="Панелі">Панелі</Option>
            <Option value="Інвертори">Інвертори</Option>
            <Option value="Акумулятори">Акумулятори</Option>
            <Option value="Кріплення">Кріплення</Option>
            <Option value="Комлпектуючі">Комлпектуючі</Option>
            <Option value="Зарядні станції">Зарядні станції</Option>
          </Select>
        </Label>
        <Underline></Underline>
        {['Панелі', 'Інвертори', 'Акумулятори', 'Кріплення'].includes(type) && (
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
                {type === 'Інвертори' && (
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
          'Інвертори',
          'Акумулятори',
          'Комлпектуючі',
          'Зарядні станції',
        ].includes(type) && (
          <>
            <Label>
              Бренд товару
              <Input
                required
                minlength="2"
                maxlength="20"
                name="brand"
                type="text"
                value={brand}
                placeholder="Введіть бренд"
                onChange={e => setBrand(e.target.value)}
                list={'brand-data'}
              />
              <datalist id={'brand-data'}>
                {dataList.sortBrand && dataList.sortBrand.length > 0
                  ? dataList.sortBrand.map(i => <option key={i} value={i} />)
                  : null}
              </datalist>
            </Label>
            <Underline></Underline>
            <Label>
              Країна виробництва
              <Input
                required
                minlength="2"
                maxlength="20"
                name="country"
                type="text"
                value={country}
                placeholder="Введіть країну"
                onChange={e => setCountry(e.target.value)}
                list={'country-data'}
              />
              <datalist id={'country-data'}>
                {dataList.sortCountry && dataList.sortCountry.length > 0
                  ? dataList.sortCountry.map(i => <option key={i} value={i} />)
                  : null}
              </datalist>
            </Label>
            <Underline></Underline>
          </>
        )}

        {['Панелі', 'Інвертори'].includes(type) && (
          <>
            <Label>
              Потужність, {type === 'Панелі' && 'Вт'}{' '}
              {type === 'Інвертори' && 'кВт'}
              <Input
                required
                minlength="1"
                maxlength="15"
                name="power"
                type="text"
                value={addSort.power || ''}
                placeholder="Введіть в число, наприклад: 7"
                onChange={e => {
                  if (e.target.value.includes(','))
                    return Notify.warning(
                      'Використовуйте точку для нецілих чисел'
                    );
                  if (!Number(e.target.value) && Number(e.target.value) !== 0)
                    return Notify.warning('Використовуйте тільки числа');

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
        {['Інвертори'].includes(type) && (
          <>
            <Label>
              Кількість фаз
              <Input
                required
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
              Ємність акумулятора, Ач
              <Input
                required
                minlength="1"
                maxlength="15"
                name="reservoir"
                type="text"
                value={addSort.reservoir || ''}
                placeholder="Введіть в число, наприклад: 3"
                onChange={e => {
                  if (e.target.value.includes(','))
                    return Notify.warning(
                      'Використовуйте точку для нецілих чисел'
                    );
                  if (!Number(e.target.value) && Number(e.target.value) !== 0)
                    return Notify.warning('Використовуйте тільки числа');

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
              Напруга акумулятора, В
              <Input
                required
                minlength="1"
                maxlength="15"
                name="voltage"
                type="text"
                value={addSort.voltage || ''}
                placeholder="Введіть в число, наприклад: 12"
                onChange={e => {
                  if (e.target.value.includes(','))
                    return Notify.warning(
                      'Використовуйте точку для нецілих чисел'
                    );
                  if (!Number(e.target.value) && Number(e.target.value) !== 0)
                    return Notify.warning('Використовуйте тільки числа');

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
        <Underline></Underline>
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
                minlength="2"
                maxlength="100"
                name="title-character"
                type="text"
                value={character.subtitle}
                placeholder="Введіть підзаголовок для хар-к..."
                onChange={e => updateCharacter(e, index, 'subtitle')}
              />
              <Textarey
                required
                minlength="10"
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
        <Underline></Underline>
        <Label>
          Вставка відео з YouTube
          <Textarey
            name="youtube"
            rows="5"
            value={youtubeUrl.join('\n')}
            placeholder="Введіть ID відео з YouTube"
            onChange={e => setYoutubeUrl(e.target.value.split('\n'))}
          ></Textarey>
          <ImgInfo>Кожне нове ID пишіть з нового рядка*</ImgInfo>
        </Label>
        <Underline></Underline>
        {pdfFileCurrent ? (
          <WrappFile>
            <LinkFile href={`${baseURL}/${pdfFileCurrent}`} target={'_blank'}>
              {pdfFileCurrent.split('/')[3]}
            </LinkFile>
            <DeleteBtnFile
              type="button"
              onClick={deletePdf}
              disabled={isLoading}
            >
              <Icon name="icon-delete" />
            </DeleteBtnFile>
          </WrappFile>
        ) : (
          <InputFile>
            {pdfFile ? pdfFile.name : 'Вибірати pdf файл'}
            <input
              style={{ display: 'none' }}
              name="file-pdf"
              type="file"
              accept=".pdf"
              onChange={e => setPdfFile(e.target.files[0])}
            />
          </InputFile>
        )}
        <Underline></Underline>
        {currentDescripPhotos &&
          currentDescripPhotos.length > 0 &&
          currentDescripPhotos.map(item => (
            <Label key={item}>
              <ButtonCircle
                type="button"
                onClick={() => {
                  setDelDescripPhoto(item);
                  toggleModal(true);
                }}
                disabled={isLoading}
              >
                <Icon name="icon-delete" />
              </ButtonCircle>
              <Img src={`${baseURL}/${item}`} alt="фото" />
            </Label>
          ))}
        {descripPhotos.map((character, index) => {
          return (
            <Label key={index}>
              <br />
              {descripPhotos.length > 1 && (
                <ButtonCircle
                  type="button"
                  onClick={() => deleteDesripPhotos(index)}
                >
                  <Icon name="icon-delete" />
                </ButtonCircle>
              )}

              <InputFile>
                {descripPhotos[index].file ? (
                  <Img
                    src={URL.createObjectURL(descripPhotos[index].file)}
                    alt="Вибране фото"
                  />
                ) : (
                  'Вибір фото опису'
                )}

                <input
                  name="img-component"
                  style={{ display: 'none' }}
                  type="file"
                  accept="image/*"
                  multiple=""
                  onChange={e => updateDesripPhotos(e, index)}
                />
              </InputFile>
            </Label>
          );
        })}
        <Button type="button" onClick={addDesripPhotos}>
          + Додати фото опису
        </Button>
        <Underline></Underline>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <LoadSpiner barColor={'#fff'} borderColor={'#fff'} />
          ) : (
            <>{!idProduct ? '-- Створити товар --' : '-- Змінити товар --'}</>
          )}
        </Button>
      </Form>
      {isShowModal && (
        <Modal>
          <DeleteWindow
            fn={deleteDescripPhotosApi}
            id={idProduct}
            url={delDescripPhoto}
          />
        </Modal>
      )}
    </>
  );
};
