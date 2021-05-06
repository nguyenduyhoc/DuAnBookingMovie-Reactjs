
import React from 'react'
import PlayVideo from './PlayVideo'


export default class PlayVideoCarousel extends React.Component {

    render() {
        return (
            <div>
                <div className="carousel-item active">
                    <div className="imgCarousel">
                        <img style={{ width: '100%',position:'relative' }} src="./img/carousel/gai-gia-lam-chieu-v-16142435114530.jpg" alt="Los Angeles" />
                        <div className="text-center">
                        <PlayVideo />  
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="imgCarousel">
                        <img style={{ width: '100%' ,position:'relative' }} src="./img/carousel/lua-deu-gap-lua-dao-16105107337344.jpg" alt="" />
                        <div className="text-center">
                        <PlayVideo />  
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="imgCarousel">
                        <img style={{ width: '100%' ,position:'relative' }} src="./img/carousel/tazza-16137903733874.jpg" alt="" />
                        <div className="text-center">
                        <PlayVideo />  
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}


