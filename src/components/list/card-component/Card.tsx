import './Card.scss';
import store from '../../../common/store/store';
export const Card = (props: any) => {
    return (

            <div className={'card'} key={props.id} onClick={()=>{store.setSelectedCard(props.id)}}>
                <h1 className={'card-headline '}>{props.name}</h1>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} alt={props.name}/>
                <div className={'card-types'}>
                    {props.types.map((item: any,index:any) => (<p className={item} key={index} >{item}</p>))}
                </div>
            </div>
    )
}

