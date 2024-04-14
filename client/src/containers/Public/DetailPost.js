import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { getPostsLimit  } from '../../store/actions'
const DetailPost = () => {
    const {postId} = useParams()
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.post)
    console.log(posts)
    useEffect(() => {
        postId && dispatch(getPostsLimit({id : postId}))
        
    }, [postId])
    return (
        <div>
            DetaiPost
        </div>
    )
}

export default DetailPost