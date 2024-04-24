function Footer({ onlyTextChange, handleLikeClick }) {
    return (
        <footer className="footer">
            <p>
                Stopka <button onClick={onlyTextChange}>Ustaw parametry tekstu na 30px, a kolor pozostaw bez zmian.</button>
            </p>
            <p>
                <button onClick={handleLikeClick}>Polub tę stronę!</button>
            </p>
        </footer>
    )
}

export default Footer