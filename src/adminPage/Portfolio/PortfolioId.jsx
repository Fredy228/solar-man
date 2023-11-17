import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Form,
  Input,
  Label,
  Button,
  Textarey,
  InputFile,
  Img,
  ButtonCircle,
} from '../../components/AdminFormCreate/AdminFormCreate.styled';
import {
  updatePosts,
  getPostsById,
  baseURL,
  deletePostImage,
} from 'components/API/API';
import { Inner } from './Portfolio.styled';
import { LoadSpiner } from '../../components/LoadSpiner/LoadSpiner';
import { Icon } from '../../components/Icon/Icon';
import { Modal } from '../../components/Modal/Modal';
import { DeleteWindow } from '../../components/DeleteWindow/DeleteWindow';
import { useShowModal } from '../../globalState/globalState';

const PortfolioId = () => {
  const { postId } = useParams();
  const { isShowModal, toggleModal } = useShowModal();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [components, setComponents] = useState([]);
  const [photo, setPhoto] = useState(undefined);
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [listComponents, setListComponents] = useState([{ file: undefined }]);
  const [gallery, setGallery] = useState([]);
  const [urlPhoto, setUrlPhoto] = useState('');

  const submitForm = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await updatePosts(postId, title, year, components, photo, listComponents);
      setIsLoading(false);
      Notify.success('Змінено');
      history(`/admin/portfolio`);
    } catch (error) {
      setIsLoading(false);
      Notify.failure('Усп... Щось пішло не так :(');
      Notify.failure(`${error}`);
    }
  };

  useEffect(() => {
    async function getPost() {
      const { post } = await getPostsById(postId);
      setPhoto(post.urlImg);
      setTitle(post.title);
      setYear(post.year);
      setComponents(JSON.parse(post.components));
      if (post.galleryUrl) setGallery(JSON.parse(post.galleryUrl));
    }
    getPost().catch(console.error);
  }, [postId]);

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

  const deleteImage = (id, urlMini) => {
    async function fnDelete() {
      setIsLoading(true);
      await deletePostImage(id, urlMini);
      setGallery(prevState => prevState.filter(item => urlMini !== item.mini));
      setIsLoading(false);
      Notify.success('Видалено');
      toggleModal(false);
    }
    fnDelete().catch(console.error);
  };

  return (
    <Inner>
      <Form onSubmit={submitForm}>
        <InputFile>
          {photo && typeof photo !== 'string' ? (
            <Img
              src={URL.createObjectURL(photo)}
              alt="Вибране фото"
              width="100px"
            />
          ) : (
            <>
              {photo && typeof photo === 'string' ? (
                <Img
                  src={`${baseURL}/${photo}`}
                  alt="Вибране фото"
                  width="100px"
                />
              ) : (
                'Вибір фото товару'
              )}
            </>
          )}
          <input
            style={{ display: 'none' }}
            type="file"
            accept="image/*"
            multiple=""
            onChange={e => setPhoto(e.target.files[0])}
          />
        </InputFile>
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

        {gallery.map(item => (
          <Label key={item.mini}>
            <ButtonCircle
              type="button"
              onClick={() => {
                setUrlPhoto(item.mini);
                toggleModal(true);
              }}
              disabled={isLoading}
            >
              <Icon name="icon-delete" />
            </ButtonCircle>
            <Img src={`${baseURL}/${item.mini}`} alt="Вибране фото" />
          </Label>
        ))}

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
            <LoadSpiner borderColor={'#fff'} barColor={'#fff'} />
          ) : (
            'Змінити'
          )}
        </Button>
      </Form>
      {isShowModal && (
        <Modal>
          <DeleteWindow fn={deleteImage} id={postId} url={urlPhoto} />
        </Modal>
      )}
    </Inner>
  );
};

export default PortfolioId;
