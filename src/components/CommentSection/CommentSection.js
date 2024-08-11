import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './CommentSection.module.scss';
import Avatar from '~/components/Avatar';

const cx = classNames.bind(styles);

function CommentSection({ comments, onAddComment, replyMode }) {
    const [commentText, setCommentText] = useState('');

    const handleInputChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleAddComment = () => {
        if (commentText.trim()) {
            onAddComment(commentText);
            setCommentText('');
        }
    };

    return (
        <div className={cx('wrapper' , { replyMode })}>
            <Avatar
                fontsize="4.5px"
                alt="Huynh Minh Ha"
                src="https://www.gravatar.com/avatar/c10970ad0deaaf378db943894a69b1ba.jpg?s=80&d=mp&r=g"
            />

            <div className={cx('comment-section')}>
                <div className={cx('new-comment')}>
                    <input
                        type="text"
                        value={commentText}
                        onChange={handleInputChange}
                        placeholder="Nhập bình luận mới của bạn"
                    />
                    <button onClick={handleAddComment}>Gửi</button>
                </div>
            </div>
        </div>
    );
}

export default CommentSection;
