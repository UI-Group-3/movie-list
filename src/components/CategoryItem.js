import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryLabel, CategoryInput } from "../style/jiayingZhou";
import { setClickValue, setTotalPage } from "../redux/actionCreators";
import { selectListByGenre } from '../redux/selectors';

const MemoCategoryItem = memo(({ genres_list }) => {
  const { name, id, isClicked } = genres_list;
  const dispatch = useDispatch();
  const movieLength = Math.ceil(useSelector(selectListByGenre).length / 20);

  useEffect(() => {
    dispatch(setTotalPage(movieLength));
  }, [movieLength])

  return (
    <CategoryLabel className={`${isClicked ? "active" : "activeHover"}`}>
      <CategoryInput
        name="genres"
        onClick={() => dispatch(setClickValue(id))}
      />{" "}
      {name}
    </CategoryLabel>
  );
});

export default MemoCategoryItem;
