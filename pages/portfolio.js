import Navbar from "../component/Navbar";

export default function portfolio() {
    return (
        <>
        <Navbar />

        <section className="section">
            <div className="container">
                <div className="text-wrapper full-w">
                <h1 className="title">Portfolio</h1>
                <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>

                <div className="portfolio-wrapper">
                    <div className="portfolio-item">
                        <img src="/tkit.png" alt="tkit" className="img-portfolio" />
                        <h4 className="portfolio-name">Tkit Web</h4>
                        <p className="portfolio-category">Reactjs, Bootsrap</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="/istiqomah.png" alt="istiqomah" className="img-portfolio" />
                        <h4 className="portfolio-name">Istiqomah Web</h4>
                        <p className="portfolio-category">Reactjs, Bootsrap</p>
                    </div>
                </div>
                </div>

                
            </div>
        </section>
        </>
    )
}