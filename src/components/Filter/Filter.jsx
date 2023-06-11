import {
  CountInfo,
  CustomCheckBox,
  FilterForm,
  InputCheckBox,
  ItemCheckBox,
  ItemFilter,
  LabelCheckBox,
  ListCheckBox,
  ListFilter,
  ResetFilter,
  TitleFilter,
  WrapperFilter,
} from './Filter.styled';
import { LoadSpiner } from '../LoadSpiner/LoadSpiner';
import { useRef } from 'react';

export const Filter = ({
  filterList,
  isShow,
  handleCheckboxChange,
  count,
  isLoading,
  setCheck,
  initialFilter,
}) => {
  const formRef = useRef(null);

  const handleResetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
      setCheck(initialFilter);
    }
  };

  return (
    <WrapperFilter>
      <FilterForm ref={formRef}>
        <ListFilter>
          {filterList.sortSubtype && filterList.sortSubtype.length > 0 && (
            <ItemFilter>
              <TitleFilter>Тип:</TitleFilter>
              <ListCheckBox isShow={isShow}>
                {filterList.sortSubtype.map(item => (
                  <ItemCheckBox key={item}>
                    <LabelCheckBox>
                      <InputCheckBox
                        type={'checkbox'}
                        value={item}
                        onChange={e => handleCheckboxChange(e, 'subtype')}
                        disabled={isLoading}
                      />
                      <CustomCheckBox></CustomCheckBox>
                      {item}
                    </LabelCheckBox>
                  </ItemCheckBox>
                ))}
              </ListCheckBox>
            </ItemFilter>
          )}
          {filterList.sortCountry && filterList.sortCountry.length > 0 && (
            <ItemFilter>
              <TitleFilter>Країна виробник:</TitleFilter>
              <ListCheckBox isShow={isShow}>
                {filterList.sortCountry.map(item => (
                  <ItemCheckBox key={item}>
                    <LabelCheckBox>
                      <InputCheckBox
                        type={'checkbox'}
                        value={item}
                        onClick={e => handleCheckboxChange(e, 'country')}
                        disabled={isLoading}
                      />
                      <CustomCheckBox></CustomCheckBox>
                      {item}
                    </LabelCheckBox>
                  </ItemCheckBox>
                ))}
              </ListCheckBox>
            </ItemFilter>
          )}
          {filterList.sortBrand && filterList.sortBrand.length > 0 && (
            <ItemFilter>
              <TitleFilter>Бренд:</TitleFilter>
              <ListCheckBox isShow={isShow}>
                {filterList.sortBrand.map(item => (
                  <ItemCheckBox key={item}>
                    <LabelCheckBox>
                      <InputCheckBox
                        type={'checkbox'}
                        value={item}
                        onClick={e => handleCheckboxChange(e, 'brand')}
                        disabled={isLoading}
                      />
                      <CustomCheckBox></CustomCheckBox>
                      {item}
                    </LabelCheckBox>
                  </ItemCheckBox>
                ))}
              </ListCheckBox>
            </ItemFilter>
          )}
          {filterList.sortPower && filterList.sortPower.length > 0 && (
            <ItemFilter>
              <TitleFilter>Потужність:</TitleFilter>
              <ListCheckBox isShow={isShow}>
                {filterList.sortPower.map(item => (
                  <ItemCheckBox key={item}>
                    <LabelCheckBox>
                      <InputCheckBox
                        type={'checkbox'}
                        value={item}
                        onClick={e => handleCheckboxChange(e, 'power')}
                        disabled={isLoading}
                      />
                      <CustomCheckBox></CustomCheckBox>
                      {item}
                    </LabelCheckBox>
                  </ItemCheckBox>
                ))}
              </ListCheckBox>
            </ItemFilter>
          )}
          {filterList.sortReservoir && filterList.sortReservoir.length > 0 && (
            <ItemFilter>
              <TitleFilter>Ємність:</TitleFilter>
              <ListCheckBox isShow={isShow}>
                {filterList.sortReservoir.map(item => (
                  <ItemCheckBox key={item}>
                    <LabelCheckBox>
                      <InputCheckBox
                        type={'checkbox'}
                        value={item}
                        onClick={e => handleCheckboxChange(e, 'reservoir')}
                        disabled={isLoading}
                      />
                      <CustomCheckBox></CustomCheckBox>
                      {item}
                    </LabelCheckBox>
                  </ItemCheckBox>
                ))}
              </ListCheckBox>
            </ItemFilter>
          )}
          {filterList.sortVoltage && filterList.sortVoltage.length > 0 && (
            <ItemFilter>
              <TitleFilter>Потужність:</TitleFilter>
              <ListCheckBox isShow={isShow}>
                {filterList.sortVoltage.map(item => (
                  <ItemCheckBox key={item}>
                    <LabelCheckBox>
                      <InputCheckBox
                        type={'checkbox'}
                        value={item}
                        onClick={e => handleCheckboxChange(e, 'voltage')}
                        disabled={isLoading}
                      />
                      <CustomCheckBox></CustomCheckBox>
                      {item}
                    </LabelCheckBox>
                  </ItemCheckBox>
                ))}
              </ListCheckBox>
            </ItemFilter>
          )}
          {filterList.sortPhases && filterList.sortPhases.length > 0 && (
            <ItemFilter>
              <TitleFilter>Кількість фаз:</TitleFilter>
              <ListCheckBox isShow={isShow}>
                {filterList.sortPhases.map(item => (
                  <ItemCheckBox key={item}>
                    <LabelCheckBox>
                      <InputCheckBox
                        type={'checkbox'}
                        value={item}
                        onClick={e => handleCheckboxChange(e, 'phases')}
                        disabled={isLoading}
                      />
                      <CustomCheckBox></CustomCheckBox>
                      {item}
                    </LabelCheckBox>
                  </ItemCheckBox>
                ))}
              </ListCheckBox>
            </ItemFilter>
          )}
          {filterList.sortMaterial && filterList.sortMaterial.length > 0 && (
            <ItemFilter>
              <TitleFilter>Матеріал:</TitleFilter>
              <ListCheckBox isShow={isShow}>
                {filterList.sortMaterial.map(item => (
                  <ItemCheckBox key={item}>
                    <LabelCheckBox>
                      <InputCheckBox
                        type={'checkbox'}
                        value={item}
                        onClick={e => handleCheckboxChange(e, 'material')}
                        disabled={isLoading}
                      />
                      <CustomCheckBox></CustomCheckBox>
                      {item}
                    </LabelCheckBox>
                  </ItemCheckBox>
                ))}
              </ListCheckBox>
            </ItemFilter>
          )}
        </ListFilter>
      </FilterForm>
      <CountInfo>
        {!isLoading ? (
          `Знайдено (${count})`
        ) : (
          <LoadSpiner barColor={'#fff'} borderColor={'#fff'} />
        )}
        <ResetFilter
          type={'button'}
          disabled={isLoading}
          onClick={handleResetForm}
        >
          Очистити
        </ResetFilter>
      </CountInfo>
    </WrapperFilter>
  );
};
