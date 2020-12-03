import { memo } from "react";
import { useDispatch } from "react-redux";
import { CategoryLabel, CategoryInput } from '../style/jiayingZhou';
import { setClickValue } from '../redux/actionCreators'

const MemoCategoryItem = memo(({ genres_list }) => {
    const dispatch = useDispatch();
    const { name, id, isClicked } = genres_list;
    // const [isClicked, setClicked] = useState(false);
    // const [afterClick, setAfterClick] = useState(false);    
    return (

        <CategoryLabel className={`${isClicked ? "active" : ''}`}>
            <CategoryInput name="genres" onClick={() => {dispatch(setClickValue(id))}}/> {name}
        </CategoryLabel>

    )
});

export default MemoCategoryItem;