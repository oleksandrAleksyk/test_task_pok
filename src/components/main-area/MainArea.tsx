import List from "../list/List";
import SelectedCard from "../selected-card/SelectedCard";
import './MainArea.scss';
export const MainArea = ()=>{

    return(
        <div className={'main-area'}>
            <List />
            <SelectedCard />
        </div>
    )
}
