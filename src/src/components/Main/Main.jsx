import { useState } from 'react';
import Form from '../Form/form';
import PostCard from '../PostCard/PostCard';
import style from './Main.module.css';
import posts from '../../data/posts';

export default function Main() {
    const [publishedPosts, setPublishedPosts] = useState(
        posts.filter((post) => post.published) // Filtro i post pubblicati inizialmente
    );

    const handleAddPost = (title) => {
        const newPost = {
            id: publishedPosts.length + 1, // Genera un nuovo ID
            title,
            tags: [],
            image: 'default.jpg', // Un'immagine di default
            content: 'Contenuto del nuovo post',
            published: true,
        };
        setPublishedPosts([...publishedPosts, newPost]); // Aggiungi il nuovo post alla lista
    };

    return (
        <main>
            <section className={style.section}>
                <div className="container">
                    <h1 className={style.section_title}>Il mio blog</h1>
                </div>

                {/* Aggiungi il Form */}
                <div className="container">
                    <Form onAddPost={handleAddPost} />
                </div>

                <div className="container">
                    <div className="row">
                        {publishedPosts.map((post) => (
                            <div key={post.id} className="col-3">
                                <PostCard
                                    title={post.title}
                                    tags={post.tags}
                                    image={post.image}
                                    content={post.content}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
