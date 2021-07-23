/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IOperator } from '../types/operator';
import styles from '../styles/operator.module.css'

interface OperatorProps {
    operator: IOperator
}

const Operator = ({ operator }: OperatorProps) => {

    return (
        <div className={styles.operator}>
            <img className={styles.operator__img} src={operator.link_image} alt={operator.name} />
            <h2 className={styles.operator__text}>{operator.name}</h2>
        </div>
    )
};

export default Operator
