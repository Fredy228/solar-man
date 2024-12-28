import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../api/base.api';
import { Container } from '../../pages/Common.styled';
import {
  BoxBtn,
  BoxControl,
  BoxInfo,
  ControlBtn,
  Item,
  ItemBtn,
  ItemImg,
  ItemText,
  ItemTitle,
  List,
} from '../Portfolio/Portfolio.styled';
import { Icon } from '../../components/reused/icon/Icon';
import { useStoreUser } from '../../globalState/globalState';
import { LoadPage } from '../../components/reused/load-spinner/LoadPage';
import { numbersFormatCost } from '../../services/numbersFormatCost';
import { getSetsHomeOrder, updateSetsHomeOrder } from '../../api/store.api';

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

const OrderHome = () => {
  const [items, setItems] = useState([]);
  const [isDisableSaveBtn, setIsDisableSaveBtn] = useState(true);
  const [reGet, setReGet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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

  const changeOrder = async () => {
    try {
      const orderArr = items.map((item, index) => {
        return { id: item.id, series: index + 1 };
      });
      await updateSetsHomeOrder(orderArr);
      Notify.success('Змінено');
      setReGet(state => !state);
      setIsDisableSaveBtn(true);
    } catch (error) {
      Notify.failure('Усп... Щось пішло не так :(');
      Notify.failure(`${error}`);
    }
  };

  useEffect(() => {
    try {
      async function getSetsHome() {
        setIsLoading(true);
        const { result } = await getSetsHomeOrder();
        setItems(result);
        setIsLoading(false);
      }
      getSetsHome();
    } catch (error) {
      Notify.failure('Щось пішло не так...');
      Notify.failure(`${error}`);
      setIsLoading(false);
    }
  }, [reGet]);

  return (
    <Container>
      <BoxControl>
        <ControlBtn
          type="button"
          disabled={isDisableSaveBtn}
          onClick={changeOrder}
        >
          Зберегти
        </ControlBtn>
      </BoxControl>
      {isLoading ? (
        <LoadPage />
      ) : (
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
                              src={`${baseURL}/${item.photo}`}
                              alt={item.title}
                            />
                            <BoxInfo>
                              <ItemTitle>{item.title}</ItemTitle>
                              <ItemText>
                                Ціна: {numbersFormatCost(item.cost)}$
                              </ItemText>
                            </BoxInfo>
                            {role !== 'user' && (
                              <BoxBtn>
                                <ItemBtn
                                  type="button"
                                  onClick={() =>
                                    navigate(
                                      `/admin/goods/Готові рішення?id-product=${item.id}`
                                    )
                                  }
                                >
                                  <Icon name="icon-pencil" />
                                  Редаг.
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
      )}
    </Container>
  );
};

export default OrderHome;
