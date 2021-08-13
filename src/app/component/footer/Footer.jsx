import "./footer.scss"

const Footer = () => {
    return (
        <div>
            <div className="container container-footer b-400 py-5">
                <div className="row footer mb-3">
                    <div className="col" />
                    <div className="col-lg text-end f-13">
                        <span>Terms of Use</span>
                    </div>
                    <div className="col-lg-2 text-center f-13">
                        <span>Privacy Only</span>
                    </div>
                    <div className="col-lg text-start f-13">
                        <span>Disclaimer</span>
                    </div>
                    <div className="col" />
                </div>
                <div className="row text-center">
                    <div className="col f-13">
                        <span> @ LINE Corporation</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
