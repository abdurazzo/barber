import React from 'react'

const Header = () => {
  return (
    <header>
     <div className="container">
       <div className="header_main">
        <div className="header_main_top">
        <h1>Легендарная сеть барбершопов</h1>
        </div>
        <div className="header_main_center">
         <h1>ЗАПИШИСЬ В СВОЙ БАРБЕРШОП <br /> СО СКИДКОЙ 20%*</h1>
        </div>
        <div className="header_main_bottom">
       <button>Выбрать барбершоп</button>
        </div>
       </div>
     </div>
    </header>
  )

}

export default Header