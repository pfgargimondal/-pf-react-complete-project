import { Link } from "react-router-dom";

import "./PageNotFound.css";

export const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row justify-content-center">
                                <div className="col-sm-10 text-center">
                                    <div className="four_zero_four_bg">
                                        <h1 className="text-center ">404</h1>
                                    </div>

                                    <div className="contant_box_404">
                                        <h3 className="h2">
                                            Look like you're lost
                                        </h3>

                                        <p>the page you are looking for not avaible!</p>

                                        <Link to="/" className="btn btn-main">Go to Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}