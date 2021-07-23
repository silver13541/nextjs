import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/dist/client/router'
import { IOperator } from '../types/operator'
import Operator from '../components/Operator'

interface IOperatorProps {
    operators: IOperator[];
}


const Home = ({ operators }: IOperatorProps) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <main className={styles.main}>
                <h1>
                    Пополнение баланса
                </h1>
                <div className={styles.grid}>
                    {operators.map((operator) => (
                        <a className={styles.card} onClick={() => router.push(`/operator/${operator.id}`)} key={operator.id}>
                            <Operator operator={operator}/>
                        </a>))}
                    <a className={styles.addOper} onClick={() => router.push("/addOper")}>
                        <input type='image' className={styles.addButton} src='https://icon-library.com/images/add-icon-png/add-icon-png-27.jpg' alt="backButton" />
                    </a>
                </div>
            </main>
        </div>
    )
}

export default Home

Home.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/operators')
    const operators: IOperator[] = await response.json()
    return { operators }
}