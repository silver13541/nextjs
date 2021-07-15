import styles from 'styles/payment.css'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

export default function Payment() {
    const H1 = styled.h1`
    margin-top: 20px;
    `;
    return (
       
            <div className={styles.container}>
                <Head>
                    <title>Payment</title>
                    <meta name="description" content="Generated by create next app" />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Пополнение баланса
                    </h1>

                    <form name="paymentForm">

                    </form>
                    
                </main>
            </div>
       
    )
}