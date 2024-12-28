import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

import {
  Inner,
  Item,
  List,
  ItemTitle,
  ItemText,
  ItemList,
  ItemItem,
  BoxInfo,
  ItemImg,
  ItemBtn,
  BoxBtn,
  BoxControl,
  ControlBtn,
} from './Portfolio.styled';

import { baseURL } from 'api/base.api';
import { Container } from 'pages/Common.styled';
import { Icon } from 'components/reused/icon/Icon';
import { CreatePost } from '../../components/ui/admin/AdminFormCreate/CreatePost';
import { LoadSpiner } from 'components/reused/load-spinner/LoadSpiner';
import { useStoreUser } from '../../globalState/globalState';
import { deletePosts, getPosts, updateOrderPosts } from '../../api/post.api';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? '#F24C4C' : '#16498a',
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
});

const Portfolio = () => {
  const limit = 20;
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isShowCreateForm, setIsShowCreateForm] = useState(false);
  const [isDisableSaveBtn, setIsDisableSaveBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabledAdd, setIsDisabledAdd] = useState(false);
  const [reGet, setReGet] = useState(false);
  const history = useNavigate();
  const {
    userData: { role },
  } = useStoreUser();

  const onDragEnd = result => {
    if (!result.destination) return;

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(newItems);
    setIsDisableSaveBtn(false);
  };

  const deletePostsFn = async id => {
    try {
      await deletePosts(id);
      Notify.success('Видалено');
      setReGet(state => !state);
    } catch (error) {
      Notify.failure('Усп... Щось пішло не так :(');
      Notify.failure(`${error}`);
    }
  };

  const changeOrder = async () => {
    try {
      const orderArr = items.map((item, index) => {
        return { id: item.id, series: index + 1 };
      });
      await updateOrderPosts(orderArr);
      Notify.success('Змінено');
      setReGet(state => !state);
      setIsDisableSaveBtn(true);
    } catch (error) {
      Notify.failure('Усп... Щось пішло не так :(');
      Notify.failure(`${error}`);
    }
  };

  useEffect(() => {
    if (page < 2) return;

    try {
      async function gettingPosts() {
        setIsLoading(true);
        setIsDisabledAdd(true);
        const { posts } = await getPosts(limit, page);
        setItems(i => [...i, ...posts]);
        setIsLoading(false);
        setIsDisabledAdd(false);
      }
      gettingPosts();
    } catch (error) {
      Notify.failure('Щось пішло не так...');
      Notify.failure(`${error}`);
      setIsLoading(false);
      setIsDisabledAdd(false);
    }
  }, [page]);

  useEffect(() => {
    try {
      setPage(1);
      async function gettingPosts() {
        setIsLoading(true);
        setIsDisabledAdd(true);
        const { posts, totalPosts } = await getPosts(limit);
        setItems(posts);
        setTotal(totalPosts);
        setIsLoading(false);
        setIsDisabledAdd(false);
      }
      gettingPosts();
    } catch (error) {
      Notify.failure('Щось пішло не так...');
      Notify.failure(`${error}`);
      setIsLoading(false);
      setIsDisabledAdd(false);
    }
  }, [reGet]);

  return (
    <Container>
      <Inner>
        {role !== 'user' && (
          <BoxControl>
            <ControlBtn
              type="button"
              disabled={isDisableSaveBtn}
              onClick={changeOrder}
            >
              Зберегти
            </ControlBtn>
            <ControlBtn
              type="button"
              onClick={() => setIsShowCreateForm(!isShowCreateForm)}
            >
              {isShowCreateForm ? 'Закрити' : "Новий об'єкт"}
            </ControlBtn>
          </BoxControl>
        )}
        {isShowCreateForm && (
          <CreatePost
            setReGet={setReGet}
            setIsDisableSaveBtn={setIsDisableSaveBtn}
          />
        )}

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <List
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {items.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        const components = JSON.parse(item.components);
                        return (
                          <Item
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <ItemImg
                              src={`${baseURL}/${item.urlImg}`}
                              width="500"
                              height="400"
                              alt={item.title}
                            />
                            <BoxInfo>
                              <ItemTitle>{item.title}</ItemTitle>
                              <ItemText>Рік: {item.year}</ItemText>
                              <ItemList>
                                {components.map(i => {
                                  if (i.trim() === '') return '';
                                  return (
                                    <ItemItem key={i}>
                                      <ItemText>- {i}</ItemText>
                                    </ItemItem>
                                  );
                                })}
                              </ItemList>
                            </BoxInfo>
                            {role !== 'user' && (
                              <BoxBtn>
                                <ItemBtn
                                  type="button"
                                  onClick={() => history(`${item.id}`)}
                                >
                                  <Icon name="icon-pencil" />
                                  Редаг.
                                </ItemBtn>
                                <ItemBtn
                                  type="button"
                                  onClick={() => deletePostsFn(item.id)}
                                >
                                  <Icon name="icon-delete" />
                                  Видал.
                                </ItemBtn>
                              </BoxBtn>
                            )}
                          </Item>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>

        {total / limit > 1 && total / limit > page && (
          <ControlBtn
            type="button"
            style={{ margin: '15px 0' }}
            disabled={isDisabledAdd}
            onClick={() => setPage(state => state + 1)}
          >
            {isLoading ? (
              <LoadSpiner borderColor={'#fff'} barColor={'#fff'} />
            ) : (
              'Завантажити ще'
            )}
          </ControlBtn>
        )}
      </Inner>
    </Container>
  );
};

export default Portfolio;
