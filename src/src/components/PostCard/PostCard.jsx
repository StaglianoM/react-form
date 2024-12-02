import Button from '../Button/Button';
import style from './PostCard.module.css'
import PropTypes from 'prop-types';
import placeholder from '../../assets/card600.jpg';

export default function PostCard({ title, tags, image, content }) {
    return (
        <div className={style.card}>
            {/* Se l'immagine esiste stampa, altrimenti stampo placeholder(img no available) */}

            <img className={style.image} src={image || placeholder} alt={title} />

            <div className={style.card_body}>
                <h3 className={style.card_title}>{title}</h3>


                <div className={style.tags}>
                    {tags.map((tag, index) => {  // Map ogni tag a una classe CSS corrispondente

                        const tagClass = style[tag]; // Se tag è HTML diventa style.html ed associa la classe nel modulo CSS ecc.

                        // let tagClass = ''; 

                        // if (tag === 'html') {
                        //     tagClass = style.html;
                        // } else if (tag === 'css') {
                        //     tagClass = style.css;
                        // } else if (tag === 'js') {
                        //     tagClass = style.js;
                        // } else if (tag === 'php') {
                        //     tagClass = style.php;
                        // } else if (tag === 'react') {
                        //     tagClass = style.react; 
                        // } else {
                        //     tagClass = ''; 
                        // }

                        return (
                            <span key={index} className={`${style.tag} ${tagClass}`}>
                                {tag}
                            </span>
                        );
                    })}
                    <p className={style.card_description}>{content}</p>
                </div>


                <Button />
            </div>
        </div>
    );
}


PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    content: PropTypes.string,
};