import styles from '../styles/payment.module.css'
import InputMask from "react-input-mask";
import { useInput } from '../hooks/useInput';
import React, { FormEvent, useState } from 'react';
import ResultPaymentForm from './resultPaymentForm';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';

const Span = styled.span`
font-family: Arial, sans-serif;
`

const PaymentForm = () => {
    const num = useInput('')
    const sum = useInput(0)
    const [result, setResult] = useState<boolean>()
    const router = useRouter()

    const Submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Math.floor(Math.random() * 2) === 1) {
            setResult(true)
            setTimeout(() => router.push('/'), 1500)
        }
        else setResult(false)
    }

    return (
        <>

            <form name="paymentForm" className={styles.payment_form} onSubmit={Submit}>
                <Span>Номер телефона</Span>
                <InputMask mask="8(999)999-99-99" maskPlaceholder="_" type="tel" name="tel" pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" autoComplete="off" required placeholder="8(999)999-99-99" className={styles.payOperatorInput} {...num} />
                <Span>Сумма пополнения</Span>
                <input type="number" min="1" max="1000" required placeholder="Cумма пополнения" className={styles.payOperatorInput} {...sum} />
                <button type="submit" className={styles.payOperatorButton}>Оплатить</button>
            </form>

            <ResultPaymentForm result={result} />

        </>
    )
}

export default PaymentForm