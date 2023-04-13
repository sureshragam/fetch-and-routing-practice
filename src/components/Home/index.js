import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

class Home extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const url = 'https://apis.ccbp.in/blogs'
    const response = await fetch(url)
    const blogDetails = await response.json()
    const updatedBlogDetails = blogDetails.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
      author: eachBlog.author,
      topic: eachBlog.topic,
    }))
    this.setState({blogsList: updatedBlogDetails, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              className="loader"
              type="TailSpin"
              color="#2f4f4f"
              height={150}
              width={150}
            />
          </div>
        ) : (
          <BlogList blogsList={blogsList} />
        )}
      </div>
    )
  }
}

export default Home
