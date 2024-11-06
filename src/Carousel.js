import { useState } from 'react';

function Carousel ({gifts}){

    const [giftIndex, setGiftIndex] =useState(0);

    const {link, image} = gifts[giftIndex]; 

    const nextGift = () => {
        setGiftIndex((giftIndex => {
            giftIndex ++;
            if (giftIndex > gifts.length -1) {
                giftIndex = 0;
            }
            return giftIndex;
        }))}

    const previousGift = () => {
            setGiftIndex((giftIndex => {
                giftIndex --;
                if (giftIndex < 0) {
                    return gifts.length -1
                }
                return giftIndex;
            }))}  
    return(
        <div>
            <div className="container">
                <div>
                  <button className="btnOption" onClick ={previousGift}>Other option</button>
                </div>

                <div className="carouselBox">

                  <div>
                     <img src={image} alt="gift" width="300px"/>
                  </div>

                  <div className='ref'>
                     <a href={link} target="blank">Link for purchase</a>
                  </div>
                
                </div>

                <div>
                  <button className="btnOption" onClick = {nextGift}>Other option</button>
                </div>
            </div>
        </div>
    )


}

export default Carousel;