export default function Exit() {
    const handleExit = (e) => {
        e.preventDefault();
        window.close();
        setTimeout(() => {
            window.history.back();
        }, 1000);
    };
    

    return (
        <li>
            <a href="#" onClick={handleExit} className="nav-game">
                <p>EXIT</p>
            </a>
        </li>
    )
}

