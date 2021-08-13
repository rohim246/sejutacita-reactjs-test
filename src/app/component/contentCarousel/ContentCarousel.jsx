import "./contentCarousel.scss"
import { Carousel } from "react-bootstrap"

const ContentCarousel = ({ articles }) => {
    const renderedArticleCarousel = articles && articles.map((article) => (
        <Carousel.Item>
            <img
                className="d-block w-100 carousel-image"
                src={`https://obs.line-scdn.net/${article.thumbnail.hash}`}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{article.title}</h3>
                <p>{article.publisher}</p>
            </Carousel.Caption>
        </Carousel.Item>
    ))
    return (
        <div className="carousel-content my-2">
            <Carousel>
                {renderedArticleCarousel}
            </Carousel>
        </div>
    )
}

export default ContentCarousel
