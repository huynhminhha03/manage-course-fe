import classNames from 'classnames/bind';
import styles from './OtherPost.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function OtherPost({ posts }) {
    return (
        <aside className={cx('wrapper')}>
            <h3 className={cx('heading')}>Bài đăng cùng tác giả</h3>
                {posts ? (
            <ul className={cx('list')}>
                   { posts.map((post) => {
                        return (
                            <li>
                                <Link to={post.to}>{post.title}</Link>
                            </li>
                        );
                    })}
            </ul>
                ) : (
                    <p className={cx('no-result')}>Tác giả chưa có bài đăng nào khác.</p>
                )}
        </aside>
    );
}

export default OtherPost;
