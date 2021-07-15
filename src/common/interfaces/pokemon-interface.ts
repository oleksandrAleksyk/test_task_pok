export interface PokemonObjectInterface {
    name: string,
    weight: number,
    base_experience: number,
    moves: [],
    id: number,
    types: Array<object>,
    stats: Array<object>
}
export interface PokemonInterface{
    id: number,
    name: string,
    weight: number,
    totalMoves: number,
    types: Array<string>,
    hp: number,
    attack: number,
    defence: number,
    specialAttack: number,
    specialDefence: number,
    speed: number,
}
