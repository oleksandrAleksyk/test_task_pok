import {makeAutoObservable} from "mobx";
import {PokemonInterface, PokemonObjectInterface} from "../interfaces/pokemon-interface";
import {StatsOrder} from "../enums/stat-enum";

class Store {
    pokemonNameList: Array<object> = [];
    pokemonObjectsList: Array<PokemonInterface> = [];
    sortedList: Array<PokemonInterface> = [];
    offset: number = 0;
    reloadPage: boolean = false;
    selectedCardObject: Array<PokemonInterface> = [];
    pokemonTypes : Array<any> = [];
    showSelected : boolean = false;
    constructor() {
        makeAutoObservable(this);
        this.loadData();
        this.sortedList = this.pokemonObjectsList;
    }

    setOffset(){
        this.offset++;
        this.loadData();
    }
    setSelectedCard(value:number){
        console.log(value);
        this.selectedCardObject = this.pokemonObjectsList.filter((item)=>{
            return item.id === value;
        })
        this.showSelected=true;
    }
    loadData():void {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${this.offset*12}`)
                .then((res) => {
                    res.json()
                        .then((r) => {
                            this.pokemonNameList.length = 0;
                            this.pokemonObjectsList.length = 0;
                            this.pokemonTypes.length = 0;
                            this.pokemonNameList = r.results;
                        })
                        .then(()=>{
                            this.loadPokemonData();
                            this.sortedList = this.pokemonObjectsList;
                        })
                })
    }
    loadPokemonData():void{
        this.pokemonNameList.forEach((item: any)=>{
                fetch(item.url)
                    .then((res)=>{res.json()
                        .then((r:PokemonObjectInterface)=>{
                            this.pokemonObjectsList.push({
                                attack: this.returnStat(r.stats[StatsOrder.ATTACK]),
                                defence: this.returnStat(r.stats[StatsOrder.DEFENCE]),
                                hp: this.returnStat(r.stats[StatsOrder.HP]),
                                id: r.id,
                                name:r.name,
                                specialAttack: this.returnStat(r.stats[StatsOrder.SPECIAL_ATTACK]),
                                specialDefence: this.returnStat(r.stats[StatsOrder.SPECIAL_DEFENCE]),
                                speed: this.returnStat(r.stats[StatsOrder.SPEED]),
                                totalMoves: r.moves.length,
                                types: this.returnObjectTypes(r.types),
                                weight: r.weight,
                            })
                            this.pokemonTypes.push(this.returnObjectTypes(r.types));
                        })})
        })
    }
    get sortedTypes(){
        const allTypes = this.pokemonTypes.map((item)=>{
            return Object.values(item);
        })
        return ([...new Set(allTypes.flat(2))]);
    }
    sortPokemonObjects(type:any){
        this.sortedList = this.pokemonObjectsList.filter((item)=>{
            return item.types.some((a)=>{return a===type})
        })
    }
    returnObjectTypes(array:object[]){
        return array.map((item:any)=>{
            return item.type.name;
        });
    }
    returnStat(obj:any){
        return obj.base_stat
    }

}




export default new Store();
