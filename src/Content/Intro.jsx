import React from 'react'

export default function Intro() {
  return (
    <div>
        <section>
            <div>

            <h1>Welcome to Rookie Tech Community</h1>
            <p>We are a group of individuals who are new to the tech industry and are determined to carve our own paths to sucess. With support and guidance of eachother !</p>
            <button>Join Our Community</button>
            </div>
            <div className='advert'>
                <picture></picture>
            </div>
        </section>
        <section className='projects'>
            <div className='proj-header'><h2>Our Projects</h2> <span>see all</span></div>
            <div className="proj-body">
                <div className="proj-items">
                    <picture></picture>
                    <p>Hero section page</p>
                </div>
            </div>
        </section>
        <section className="search">
            <h2>Quick Search</h2>
            <input type="search" name="" id="" />
        </section>
        <section className="portfolio">
            <div>
                <picture></picture>
                <div>
                    <p>name</p>
                    <hr />
                    <p>Product Designer</p>
                </div>
                <div>
                    <h3>Bio</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Tincidunt tincidunt maecenas dictum amet posuere neque vitae sit. Id sagittis faucibus elementum amet. Ullamcorper pulvinar vel dui nunc tellus ante amet.</p>
                    <div>
                        <button>See portfolio</button>
                        <button>Contact Me</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
