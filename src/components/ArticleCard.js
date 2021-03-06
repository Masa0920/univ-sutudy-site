import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ArticleCard = (props) => {
   return (
      <div>
         <Card border="primary" style={{ width: '18rem' }}>
         <Card.Body>
            <Card.Title className="underline" > {props.title} </Card.Title>
            <Card.Text>
               {props.text}
            </Card.Text>
            <Card.Text>
               投稿日<br/>
               {props.date}
            </Card.Text>
            <Link to={'/' + props.link} >
               <Button variant="primary">記事をみる</Button>
            </Link>
         </Card.Body>
         </Card>
      </div>
   )
}

export default ArticleCard
