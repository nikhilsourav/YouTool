const Main = () => {
    return (
        <section className="home" id="home">
            <div className="container home-content">
                <h1>Search Playlist</h1>
                <form action="">
                    <input type="text" placeholder="youtube playlist link" />
                    <button className="btn home-btn">GO</button>
                </form>
            </div>
        </section>
    );
}

export default Main;