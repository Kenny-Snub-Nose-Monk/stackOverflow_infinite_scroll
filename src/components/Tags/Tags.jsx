import React from 'react'
import { useDispatch } from 'react-redux'
import loading from '../../img/loading.svg'
import { useGetTagsQuery } from '../../services/stackExchange'
import { selectTagged } from '../../features/currentTagged'
import './Tags.styles.css'
import { useState } from 'react'


const Tags = () => {
  const {data : tagsData, isFetching : isTagsFetching, error} = useGetTagsQuery();
  const dispatch = useDispatch();
  const [ selectedTagIndex ,setSelectedTagIndex] = useState(0)

  if(error){
    return <div>
      No get Tags 
    </div>
  }

  return (
      <div className='tagList'>
        {
          isTagsFetching ? (
            <img src={loading} alt="loading"/>
           ) :
          (tagsData.items.slice(0, 10).map((item, index)=>{
            const activeTag = index === selectedTagIndex


            return <div key={`${item.name}_${index}`} className={activeTag ? `tag activeTag` : `tag`} onClick={()=> {
              setSelectedTagIndex(index)
              dispatch(selectTagged(item.name))
            }}>{item.name}</div>
         }))
        }
      </div>
  )
}

export default Tags