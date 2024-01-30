import Link from 'next/link'
import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <nav>
      <div className="container">
        <div className="nav_main">

          <div className="nav_main_left">
            <Link href={'/'}>
              <img src="https://barbarossa.top/wp-content/themes/new/assets/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="nav_main_right">
            <Link href='/o-nas'>О нас</Link>
            <Link href="/stati">Статьи</Link>
            <Link href="akademiya">Академия</Link>
            <Link href="franshiza">Франшиза</Link>
            <Link href="kontakti">Контакты</Link>
          </div>
          <div class="mobile">
            <svg onClick={toggleDrawer} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
              class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='top'
              className='bla bla bla'
              size={"100%"}
            >
              <div className='mobile_drawer'>
                <div className="label">
                  <Link href={'/'}>
                    <img src="https://barbarossa.top/wp-content/themes/new/assets/images/logo.png" alt="" />
                  </Link>
                  <h1 onClick={toggleDrawer}>❌</h1>
                </div>
                <div className="mob_nav">
                  <h3>О нас</h3>
                  <br />
                  <h3>Статьи</h3>
                  <br />
                  <h3>Академия</h3>
                  <br />
                  <h3>Франшиза</h3>
                  <br />
                  <h3>Контакты</h3>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav