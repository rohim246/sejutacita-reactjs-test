import "./cardContent.scss"
import { Card, Button } from "react-bootstrap"
import { FiBookmark } from "react-icons/fi"

const CardContent = ({ title, publisher, url, thumbnailHash, article, id, addBookmark, dataBookmark }) => {

    return (
        <div className="card-content mb-lg-5 b-400 px-2">
            <div className="col-lg-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://obs.line-scdn.net/${thumbnailHash}`} />
                    <Card.Body>
                        <a href={url} className="card-title-body text-decoration-none">
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {publisher}
                            </Card.Text>
                        </a>
                        {dataBookmark.includes(id) ?
                            <Button className="btn-card-removeBookmark b-400 mt-2" onClick={() => addBookmark(article, id)}>Remove Bookmark <FiBookmark className="card-bookmark-icon" /></Button>
                            :
                            <Button className="btn-card-addBookmark b-400 mt-2" onClick={() => addBookmark(article, id)}>Add Bookmark <FiBookmark className="card-bookmark-icon" /></Button>
                        }
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CardContent