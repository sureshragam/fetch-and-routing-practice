// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <ul>
      {blogsList.map(eachBlog => {
        const {id, author, title, imageUrl, avatarUrl, topic} = eachBlog
        return (
          <BlogItem
            key={id}
            author={author}
            imageUrl={imageUrl}
            avatarUrl={avatarUrl}
            topic={topic}
            id={id}
            title={title}
          />
        )
      })}
    </ul>
  )
}
export default BlogList
