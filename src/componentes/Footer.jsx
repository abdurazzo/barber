import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_main">
                    <div className="footer_main_left">
                        <Link href={'/'}>
                            <img src="https://barbarossa.top/wp-content/themes/new/assets/images/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="footer_main_center">
                        <Link href='/glavnaya'>Главная</Link>
                        <Link href="/stati">Статьи</Link>
                        <Link href="akademiya">Академия</Link>
                        <Link href="franshiza">Франшиза</Link>

                    </div>
                    <div className="footer_main_right">
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer