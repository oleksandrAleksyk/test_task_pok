import './Header.scss';
export const Header = ()=>(
    <header className={'header'}>
        <h1 onClick={()=>{window.location.reload()}}>PokeDex</h1>
    </header>
)
