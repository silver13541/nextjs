import styles from '../styles/payment.module.css'

const ResultPaymentForm = ({ result }) => {

    return (
        <>
            {(typeof result == "undefined") ?
                <>

                </> :
                <>
                    {result ?
                        <>
                            <span className={styles.result_success}>Операция оплаты прошла успешно!</span>
                        </> :
                        <>
                            <span className={styles.result_error}>Операция оплаты завершилась с ошибкой!</span>
                        </>}

                </>}
        </>
    )
}

export default ResultPaymentForm