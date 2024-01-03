import React from 'react'

const Articles = (props) => {
  return (
    <a className='articles' href={props.url}>{props.title}</a>
  )
}

export default Articles