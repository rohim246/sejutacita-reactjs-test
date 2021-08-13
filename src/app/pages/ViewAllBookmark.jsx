import CardContent from '../component/content/CardContent'
import _ from 'lodash'

const ViewAllBookmark = ({ dataBookmark, addBookmark }) => {

    const bookmarkList = [{}]
    const getArray = JSON.parse(localStorage.getItem("dataBookmark") || '0')
    for (let i = 0; i < getArray.length; i++) {
        let x = getArray[i]
        bookmarkList[i] = JSON.parse(localStorage.getItem(`bookmarkItem${x}`) || '')
    }

    const renderedBookmarkList = bookmarkList.map((bookmark) => {
        return _.isEmpty(bookmark) ?
            "Belum Memiliki Bookmark" :
            <CardContent
                key={bookmark.id}
                title={bookmark.title}
                publisher={bookmark.publisher}
                url={bookmark.url.url}
                thumbnailHash={bookmark.thumbnail.hash}
                id={bookmark.id}
                article={bookmark}
                dataBookmark={dataBookmark}
                addBookmark={addBookmark}
            />
    })

    return (
        <div>
            {renderedBookmarkList}
        </div>
    )
}

export default ViewAllBookmark
