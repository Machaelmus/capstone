import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createOnePost } from '../../store/posts';
import styles from './CreatePost.module.css';

const CreatePost = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [postText, setPostText] = useState('');
    // const [errors, setErrors] = useState([]);

    const createForm = async (e) => {
        e.preventDefault();

        const formInfo = {
            post: postText,
            userId: sessionUser.id,
            timeOfPost: Date.now()
        }

        // const newlyCreatedClub =
        dispatch(createOnePost(formInfo))
        // if(newlyCreatedClub.errors) {
        //     setErrors(newlyCreatedClub.errors);
        //     return;
        // }
    }

    return (
        <div className={styles.createPostDiv}>
            <h3 className={styles.createPostUsername}>{sessionUser.username}</h3>
            <form onSubmit={createForm} className={styles.createPostForm}>
                <textarea onChange={(e) => setPostText(e.target.value)} className={styles.createPostInput} placeholder={`Whats on your mind, ${sessionUser.username}?`}></textarea>
                <br/>
                <button type="submit" className={styles.createPostSubmit}>Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
