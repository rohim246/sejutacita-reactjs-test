import { Route, useHistory } from 'react-router-dom';
import { articleSelector, articleThunk } from '../../features/articles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './home.scss';
import NavBar from "../component/topNavBar/NavBar";
import Footer from "../component/footer/Footer";
import Carousel from '../component/contentCarousel/ContentCarousel';
import CardContent from "../component/content/CardContent";
import Bookmark from '../component/bookmark/Bookmark';
import ViewAllBookmark from './ViewAllBookmark';


const Home = () => {

    const [dataBookmark, setDataBookmark] = useState([])
    const dispatch = useDispatch()
    const getArray = JSON.parse(localStorage.getItem("dataBookmark"))
    const updateDataBookmark = () => {
        if (getArray !== 0) {
            setDataBookmark([...getArray])
        }
    }

    useEffect(() => {
        dispatch(articleThunk.fetchArticleData())
        updateDataBookmark()
    }, [dispatch])

    const history = useHistory()

    const handlerClickOnBookmark = () => {
        history.push('/bookmark')
    }

    const handleBookmark = (article, id) => {
        let array = dataBookmark
        let addArray = true
        array.map((item, key) => {
            if (item === id) {
                array.splice(key, 1)
                addArray = false
            }
            return true
        })
        if (addArray) {
            array.push(id)
        }
        setDataBookmark([...array])
        localStorage.setItem("dataBookmark", JSON.stringify(dataBookmark))
        const storage = localStorage.getItem(`bookmarkItem${id}`)
        if (storage === null) {
            localStorage.setItem(`bookmarkItem${id}`, JSON.stringify(article))
        } else {
            localStorage.removeItem(`bookmarkItem${id}`)
        }
    }

    const categories = useSelector(articleSelector.selectCategories)
    const articleFetchStatus = useSelector(articleSelector.selectArticleFetchStatus)
    const articleHome = articleFetchStatus === 'fulfilled' && categories[0].templates[19].sections[0].articles
    const articleCarousel = articleFetchStatus === 'fulfilled' && categories[0].templates[20].sections[0].articles
    const articleTop = articleFetchStatus === 'fulfilled' && categories[0].templates[13].sections[0].articles
    const articleShowbiz = articleFetchStatus === 'fulfilled' && categories[1].templates[3].sections[0].articles
    const articleNews = articleFetchStatus === 'fulfilled' && categories[2].templates[3].sections[0].articles
    const articleLife = articleFetchStatus === 'fulfilled' && categories[3].templates[3].sections[0].articles
    const articleRegional = articleFetchStatus === 'fulfilled' && categories[4].templates[4].sections[0].articles
    const articleIntermezzo = articleFetchStatus === 'fulfilled' && categories[5].templates[4].sections[0].articles
    const articleTrending = articleFetchStatus === 'fulfilled' && categories[6].templates[4].sections[0].articles
    const articleVideos = articleFetchStatus === 'fulfilled' && categories[7].templates[4].sections[0].articles
    const articleSciTech = articleFetchStatus === 'fulfilled' && categories[8].templates[3].sections[0].articles
    const articleSports = articleFetchStatus === 'fulfilled' && categories[9].templates[3].sections[0].articles
    const articleBiz = articleFetchStatus === 'fulfilled' && categories[10].templates[3].sections[0].articles
    const articleMovie = articleFetchStatus === 'fulfilled' && categories[11].templates[4].sections[0].articles
    const articleStory = articleFetchStatus === 'fulfilled' && categories[12].templates[11].sections[0].articles
    const articleHobbies = articleFetchStatus === 'fulfilled' && categories[13].templates[6].sections[0].articles
    const articleOtomotif = articleFetchStatus === 'fulfilled' && categories[14].templates[3].sections[0].articles
    const articleParenting = articleFetchStatus === 'fulfilled' && categories[15].templates[4].sections[0].articles
    const articleCorona = articleFetchStatus === 'fulfilled' && categories[16].templates[2].sections[0].articles
    const articleGames = articleFetchStatus === 'fulfilled' && categories[17].templates[4].sections[0].articles
    const articleKataGaul = articleFetchStatus === 'fulfilled' && categories[18].templates[15].sections[0].articles
    const articleEnglish = articleFetchStatus === 'fulfilled' && categories[19].templates[3].sections[0].articles
    const articleMusic = articleFetchStatus === 'fulfilled' && categories[20].templates[3].sections[0].articles
    const articleCampus = articleFetchStatus === 'fulfilled' && categories[21].templates[1].sections[0].articles

    const renderedContentHome = articleHome && articleHome.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id}
            dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentTop = articleTop && articleTop.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id}
            dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentNews = articleNews && articleNews.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentShowbiz = articleShowbiz && articleShowbiz.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentLife = articleLife && articleLife.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentRegional = articleRegional && articleRegional.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentIntermezzo = articleIntermezzo && articleIntermezzo.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentTrending = articleTrending && articleTrending.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentVideos = articleVideos && articleVideos.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentSciTech = articleSciTech && articleSciTech.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentSports = articleSports && articleSports.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentBiz = articleBiz && articleBiz.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentMovie = articleMovie && articleMovie.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentStory = articleStory && articleStory.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentHobbies = articleHobbies && articleHobbies.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentOtomotif = articleOtomotif && articleOtomotif.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentParenting = articleParenting && articleParenting.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentCorona = articleCorona && articleCorona.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentGames = articleGames && articleGames.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentKataGaul = articleKataGaul && articleKataGaul.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentEnglish = articleEnglish && articleEnglish.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentMusic = articleMusic && articleMusic.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))

    const renderedContentCampus = articleCampus && articleCampus.map((article) => (
        <CardContent
            key={article.id}
            title={article.title}
            publisher={article.publisher}
            url={article.url.url}
            thumbnailHash={article.thumbnail.hash}
            article={article}
            id={article.id} dataBookmark={dataBookmark}
            addBookmark={handleBookmark} />
    ))


    return (
        <div className="container">
            <div className="container-home u-mx-6">
                <NavBar categories={categories} />
                <Route exact path={"/"}>
                    <Carousel articles={articleCarousel} />
                    <Bookmark onClick={handlerClickOnBookmark} title="Article For You" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleHome ? renderedContentHome : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/bookmark"}>
                    <ViewAllBookmark dataBookmark={dataBookmark} addBookmark={handleBookmark} />
                    <Footer />
                </Route>
                <Route exact path={"/top"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="TOP" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleTop ? renderedContentTop : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/news"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="News" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleNews ? renderedContentNews : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/showbiz"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Showbiz" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleShowbiz ? renderedContentShowbiz : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/life"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Life" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleLife ? renderedContentLife : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/regional"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Regional" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleRegional ? renderedContentRegional : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/intermezzo"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Intermezzo" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleIntermezzo ? renderedContentIntermezzo : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/trending"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Trending" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleTrending ? renderedContentTrending : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/videos"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Videos" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleVideos ? renderedContentVideos : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/sci-tech"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Sci-Tech" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleSciTech ? renderedContentSciTech : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/sports"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Sports" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleSports ? renderedContentSports : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/biz"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Biz" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleBiz ? renderedContentBiz : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/movie"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Movies" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleMovie ? renderedContentMovie : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/story"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Story" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleStory ? renderedContentStory : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/hobbies"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Hobbies" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleHobbies ? renderedContentHobbies : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/otomotif"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Otomotif" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleOtomotif ? renderedContentOtomotif : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/parenting"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Parenting" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleParenting ? renderedContentParenting : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/corona-di-ri"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Corona di RI" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleCorona ? renderedContentCorona : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/games"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Games" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleGames ? renderedContentGames : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/kata-gaul"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Kata Gaul" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleKataGaul ? renderedContentKataGaul : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/english"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="English" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleEnglish ? renderedContentEnglish : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/music"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Music" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleMusic ? renderedContentMusic : ''}
                    </div>
                    <Footer />
                </Route>
                <Route exact path={"/campus"}>
                    <Bookmark onClick={handlerClickOnBookmark} title="Campus" />
                    <div className="d-flex justify-content-between flex-wrap overflow-hidden">
                        {articleCampus ? renderedContentCampus : ''}
                    </div>
                    <Footer />
                </Route>
            </div>
        </div>
    )
}

export default Home
