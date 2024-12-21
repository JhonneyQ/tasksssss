import React from 'react'
import styles from "./index.module.scss"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nigga from "../images/Bitmap (1).png"

const Nav = () => {
  return (
    <>
        <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.all}>
                <h2>Agency</h2>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li>
                            <a href=''>About</a>
                        </li>
                        <li>
                            <a href=''>Services</a>
                        </li>
                        <li>
                            <a href=''>Pricing</a>
                        </li>
                        <li>
                            <a href=''>Blog</a>
                        </li>
                    </ul>
                </nav>
                <button className={styles.button}>contact</button>
            </div>
        </div>
    </header>
    <main className={styles.main}>
        <section>
        <div className={styles.container}>
            <Row>
                <Col xs={6}>
                    <img src={Nigga}/>
                </Col>
                <Col>
                    <h5>About</h5>
                    <h2>An Experience 
                    Design Agency</h2>
                    <p>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
                </Col>
            </Row>
        </div>
        </section>
    </main>
    </>
  )
}

export default Nav