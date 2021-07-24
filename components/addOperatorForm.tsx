import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useInput } from '../hooks/useInput'
import styles from '../styles/addOper.module.css'

const AddOperatorForm = () => {
    const name = useInput('')
    const link = useInput('')
    const router = useRouter();

    const Submit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await fetch('https://bravedevelopers-operators.herokuapp.com/operators', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "id": name.value,
                "name": name.value,
                "link_image": link.value
            })
        }
        )
        router.push('/')
    }

    return (
        <form name="newOperatorForm" className={styles.newOper_form} onSubmit={Submit}>
            <label>Название оператора</label>
            <input type="text" name="nameOper" required placeholder="Название оператора" className={styles.newOper_form_input} {...name} autoComplete='off' />
            <label>Изображение для оператора</label>
            <input type="link" required placeholder="Ссылка на картинку" pattern="https?:\/\/(www.)?(\w*\W*)*" className={styles.newOper_form_input} {...link} />
            <button type="submit" id="submitButton" className={styles.newOperatorButton}>Создать</button>
        </form>
    )
}

export default AddOperatorForm;