// Import Hooks
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Import Bootstrap Components


const TopicPage = () => {
  const [ topic, setTopic ] = useState([])
  const [ errors, setErrors] = useState(false)


  // ! Executed
  useEffect(() => {
  // Get our bread data
    const getData = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/topic')
        // console.log(response)
        setTopic(data)
        console.log('data', data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getData()
  }, [])


  return (
    <>
      <div className="topic-div">
        <h1 className='text-center'>Topics</h1>
      </div>
      <div className="container">
        {topic.map(titles => {
          const { _id, topic, description, imageUrl } = titles
          // console.log('topic', topic)
          return (
            <div key={_id} className="topic">
              <div>
                <Link to={`/topic/${_id}`}>
                  <div className="title">{topic}</div>
                  <div className="description">{description}</div>
                </Link>
              </div>
              <img className="image" src={imageUrl} max-width="300"max-height="200"></img>
              
            </div>
          )
        })}
      </div>
    </>
  )
}
export default TopicPage