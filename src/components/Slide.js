import React from 'react'

const Slide = () => {
  return (
    <div className='mt-20'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://theme.hstatic.net/1000184601/1000766836/14/slide_4.jpg?v=1223" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="https://theme.hstatic.net/1000184601/1000766836/14/slide_1.jpg?v=1223" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="https://theme.hstatic.net/1000184601/1000766836/14/slide_5.jpg?v=1223" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Slide