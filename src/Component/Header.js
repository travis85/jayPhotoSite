
import React from 'react'
import { Card } from 'react-bootstrap'
import '../index.css'
import photo from '../Assets/photo.jpeg'
export default function Header() {
  return (
    <div className=''>
      <Card className="text-center">
        <header className='bg-gray-200 pt-2 shadow-xl sticky top-0 opacity-90'>
          <h1 className='text-blue-500'>Jays Photo's LLC</h1>
          <p className='text-xs'>(123) 456 - 7890</p>
        </header>
        <Card.Body className=''>
          <div className='grid grid-cols-2'>
            <div className='grid grid-cols-1 content-center'>
              <p className='text-sm'>Born and raised in the city of Detroit!
            I fell in love with photography at a young age and now i use my talents
              to highlight my city in a positive light.</p>
            </div>
            
              <img src={photo} className='pl-10 h-48'></img>
          </div>
          <div>
        </div>
        </Card.Body>
        <Card.Footer className="bg-gray-300 shadow-xl text-xs"><span className='text-blue-500'>Weddings</span> |
          <span className='text-blue-500'> Prom Photo's</span> |
          <span className='text-blue-500'> Real Estate Listing's</span> |
          <span className='text-blue-500'> Company Photo's</span>

        </Card.Footer>
      </Card>
    </div>
  )
}
