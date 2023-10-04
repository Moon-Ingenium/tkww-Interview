import './Header.scss';

export default function Header({ children }) {
    return (
        <header>
            <div className='container'>
                <h1 className='text'>Interview Header</h1>
                {children}
            </div>
        </header>
    );
}
