import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.css';

export default function Form({ onAddPost }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Evito il ricaricamento della pagina
        if (title.trim() === '') return; // Evito di aggiungere post vuoti
        onAddPost(title); // Passo il titolo al genitore
        setTitle(''); // Resetta  input
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input
                type="text"
                placeholder="Inserisci il titolo del post"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={style.input}
            />
            <button type="submit" className={style.button}>Aggiungi</button>
        </form>
    );
}

Form.propTypes = {
    onAddPost: PropTypes.func.isRequired,
};
