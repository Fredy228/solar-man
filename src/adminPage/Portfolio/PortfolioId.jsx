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
} from '../../components/AdminFormCreate/AdminFormCreate.styled';
import { updatePosts, getPostsById } from 'components/API/API';
import { Inner } from './Portfolio.styled';
import { LoadSpiner } from '../../components/LoadSpiner/LoadSpiner';

const PortfolioId = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [components, setComponents] = useState([]);
  const [photo, setPhoto] = useState(undefined);
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await updatePosts(postId, title, year, components, photo);
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
      try {
        const { post } = await getPostsById(postId);
        setTitle(post.title);
        setYear(post.year);
        setComponents(JSON.parse(post.components));
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  }, [postId]);

  return (
    <Inner>
      <Form onSubmit={submitForm}>
        <InputFile>
          {photo ? (
            <Img
              src={URL.createObjectURL(photo)}
              alt="Вибране фото"
              width="100px"
            />
          ) : (
            'Вибір фото'
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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <LoadSpiner borderColor={'#fff'} barColor={'#fff'} />
          ) : (
            'Змінити'
          )}
        </Button>
      </Form>
    </Inner>
  );
};

export default PortfolioId;
