// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const url = `https://apis.ccbp.in/blogs/${id}`
    console.log(url)
    const response = await fetch(url)
    const blogDetails = await response.json()
    const updatedBlogDetails = {
      id: blogDetails.id,
      title: blogDetails.title,
      imageUrl: blogDetails.image_url,
      avatarUrl: blogDetails.avatar_url,
      author: blogDetails.author,
      topic: blogDetails.topic,
      content: blogDetails.content,
    }
    this.setState({blogItemDetails: updatedBlogDetails, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {author, title, imageUrl, avatarUrl, content} = blogItemDetails

    return isLoading ? (
      <Loader
        className="loader"
        type="TailSpin"
        color="#2f4f4f"
        height={150}
        width={150}
      />
    ) : (
      <div className="blog-item-details">
        <h1 className="blog-item-details-title">{title}</h1>
        <div className="author-tab">
          <div className="author-avatar-container">
            <img className="avatar" src={avatarUrl} alt="profile" />
          </div>
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
