import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { getPostsLimit  } from '../../store/actions'
import  { Slider } from '../../components'
const DetailPost = () => {
    const {postId} = useParams()
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.post)
    console.log(posts)
    useEffect(() => {
        postId && dispatch(getPostsLimit({id : postId}))
        
    }, [postId])
    return (
       <div className='w-full flex gap-4'>
         <div className='w-[70%] bg-red-300'>
           <Slider images={posts && posts.length > 0 && JSON.parse(posts[0]?.images?.image)} />
           
        </div>
        <di className='w-[30%]'>
           content
        </di>
       </div>
    )
}

export default DetailPost