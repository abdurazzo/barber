import React from 'react'

const SubHeader = () => {
    return (
        <div className='container'>
            <div className="card">
                <div className="card_left">
                    <div className="left1">
                        <h1>22 600 +</h1>
                        <p>Мужчин стригутся <br />у нас ежемесячно</p>
                    </div>
                    <div className="right1">
                        <img src="/card1.png" alt="" />
                    </div>
                </div>
                <div className="card_center">
                    <div className="left2">
                        <h1>103 +</h1>
                        <p>Мастера высокого <br />уровня</p>
                    </div>
                    <div className="right2">
                       <img src="/card2.png" alt="" />
                    </div>
                </div>
                <div className="card_right">
                    <div className="left3">
                        <h1>47 +</h1>
                        <p>Барбершопа в <br />России и мире</p>
                    </div>
                    <div className="right3">
                    <img src="/card3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHeader