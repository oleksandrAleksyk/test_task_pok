import './SelectedCard.scss';
import store from '../../common/store/store';
import {observer} from 'mobx-react';
const SelectedCard = (props: any) => {
   let {showSelected} = store;
   let {selectedCardObject}=store;
   return (
       <div className={'selected-area'}>
           {showSelected?
                   <div className={'selected-card'}>
                       <h1 className={'selected-card-headline'}>{selectedCardObject[0].name}</h1>
                       <img src={`https://pokeres.bastionbot.org/images/pokemon/${selectedCardObject[0].id}.png`}
                            alt={selectedCardObject[0].name}/>
                       <div className={'selected-card-types'}>
                           {selectedCardObject[0].types.map((item: any, index: any) => (
                               <p className={item} key={index}>{item}</p>))}
                       </div>
                       <table>
                           <thead>
                               <tr>
                                   <th>Ability</th>
                                   <th>Base Stat</th>
                               </tr>
                           </thead>
                           <tbody>
                            <tr>
                                <td>HP</td>
                                <td>{selectedCardObject[0].hp}</td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>{selectedCardObject[0].attack}</td>
                            </tr>
                            <tr>
                                <td>Defence</td>
                                <td>{selectedCardObject[0].defence}</td>
                            </tr>
                            <tr>
                                <td>Special Attack</td>
                                <td>{selectedCardObject[0].specialAttack}</td>
                            </tr>
                            <tr>
                                <td>Special Defence</td>
                                <td>{selectedCardObject[0].specialDefence}</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>{selectedCardObject[0].speed}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{selectedCardObject[0].weight}</td>
                            </tr>
                           </tbody>
                       </table>
                   </div>

               :
               <div></div>
       }
       </div>

   )
}
export default observer(SelectedCard)
