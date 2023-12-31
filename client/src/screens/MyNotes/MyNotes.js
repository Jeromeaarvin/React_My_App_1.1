import React from 'react'
import Mainscreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Accordion, Badge, Button, Card , 
  CardHeader ,AccordionCollapse} from 'react-bootstrap'
  import { AccordionButton } from 'react-bootstrap'
import notes from '../../data/notes'
// import { defaultMethod } from 'react-router-dom/dist/dom'

const MyNotes = () => {
  const deleteHandler =(id) =>{
    if (window.confirm("Are u sure?")){

    }
  };
  return (
    <Mainscreen title='Welcome back Jerome.....'>
    <Link to='createnote'>
        <Button style={{marginLeft: 10, marginBottom: 6}} size='lg'>
            Create New Note
        </Button>
        </Link>
        {notes.map(note=>(
          <Accordion>
             <Card style={{margin:10}}>
          <CardHeader style={{display:'flex'}}>
            <span 
            style={{
              color:"black",
              textDecoration:"none",
              flex:1,
              cursor:"pointer",
              alignSelf:"center",
              fontSize:18,
            }}
            >
              <AccordionButton as={Card.Text} variant='link' eventKey='0'>
                {note.title}
              </AccordionButton>
              {note.title}
              </span>
          
          <div>
            <Button href={'/note/${note._id}'}>Edit</Button> 
            <Button variant='danger' className='mx-2' onClick={()=>deleteHandler(note._id)}>
              Delete</Button> 
          </div>
          </CardHeader>
          <AccordionCollapse eventKey='0'>
            <Card.Body>
            <h4>
              <Badge variant='success'>
                Category -{note.category}
              </Badge>
            </h4>
          <blockquote className="blockquote mb-0">
          <p>
           {note.content}
          </p>
          <footer className="blockquote-footer">
           Created on - 12 11 22
          </footer>
        </blockquote>
          </Card.Body>
          </AccordionCollapse>
        </Card>
          </Accordion>
           
          ))
        }
        
    
    </Mainscreen>
  )
}

export default MyNotes