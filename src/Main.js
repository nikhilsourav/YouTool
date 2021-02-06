const Main = () => {

    const handleClick = (e) => {
        e.preventDefault();
        document.querySelector(".response").style.display = 'block';
    }

    return (
        <section className="home" id="home">
            <div className="container home-content">
                <h1>Search Playlist</h1>
                <form action="">
                    <input type="text" placeholder="youtube playlist link" />
                    <button className="btn home-btn" onClick={handleClick}>GO</button>
                </form>
                <div className="response">
                    <p>property: value</p>
                    <p>property: value</p>
                    <p>property: value</p>
                </div>
            </div>
        </section>
    );
}

export default Main;