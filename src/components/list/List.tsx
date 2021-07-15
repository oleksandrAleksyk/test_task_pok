import store from '../../common/store/store';
import {observer} from "mobx-react";
import {Card} from "./card-component/Card";
import './List.scss';

const List = ()=>{
    let {sortedList} = store;
    let {sortedTypes} = store;
    return (
        <>
            <div className={'list'}>
                <div className={"list-types"}>
                {
                    sortedTypes.map((item:any, index:any)=>{
                        return <p
                            key={index}
                            onClick={()=>{store.sortPokemonObjects(item)}}
                        >{item}</p>
                    })
                }
                </div>
                {
                    sortedList.map((item) => {
                        return <Card
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            types={item.types}
                            hp={item.hp}
                            attack={item.attack}
                            defence={item.defence}
                            specialAttack={item.specialAttack}
                            specialDefence={item.specialDefence}
                            speed={item.speed}
                            weight={item.weight}
                        />
                    })
                }
                <button onClick={()=>{store.setOffset()}}>Load More</button>
            </div>
        </>
       )
}
export default observer(List)
