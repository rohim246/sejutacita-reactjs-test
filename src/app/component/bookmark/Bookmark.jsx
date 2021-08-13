import "./bookmark.scss"
import { FiBookmark } from "react-icons/fi"

const Bookmark = ({ onClick, title }) => {
    return (
        <div className="container header">
            <div className="row align-items-center">
                <div className="col-4 header-article my-4 text-start">
                    <span className="for-article b-400">{title}</span>
                </div>
                <div className="col-4" />
                <div className="col-4">
                    <div className="bookmark-all my-4 text-end">
                        <button type="button" class="btn btn-bookmark b-400" onClick={onClick}> View All Bookmark <FiBookmark className="icon-bookmark" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookmark
