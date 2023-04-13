// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {id, author, title, imageUrl, avatarUrl, topic} = props
  return (
    <Link className="blog-item-link" to={`/blogs/${id}`}>
      <li className="blog-item">
        <div className="col-1">
          <img src={imageUrl} alt="profile" />
        </div>
        <div className="col-2">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="author-tab">
            <div className="author-avatar-container">
              <img className="avatar" src={avatarUrl} alt="profile" />
            </div>
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
