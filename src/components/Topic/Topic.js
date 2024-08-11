import classNames from 'classnames/bind';
import styles from './Topic.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Topic({ title = 'Xem các bài viết theo chủ đề', setTopic }) {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const handleSelectedTopic = (topic) => {
        setSelectedTopic(topic.label);
        if (setTopic) {
            setTopic(topic);
        }
    };

    const topics = [
        { label: 'Front-end / Mobile apps', link: 'front-end-mobile-apps', desc: 'Các bài viết về Front-end và phát triển ứng dụng di động.' },
        { label: 'Back-end / Devops', link: 'back-end-devops', desc: 'Các bài viết về Back-end và DevOps.' },
        { label: 'UI / UX / Design', link: 'ui-ux-design', desc: 'Các bài viết về UI, UX và thiết kế.' },
        { label: 'Others', link: 'others', desc: 'Các bài viết khác.' },
    ];

    return (
        <div className={cx('wrapper')}>
            <h3>{title}</h3>
            <ul className={cx('topics')}>
                {topics.map((topic, index) => (
                    <li key={index}>
                        <span
                            className={cx({ actived: selectedTopic === topic.label })}
                            onClick={() => handleSelectedTopic(topic.link)}
                        >
                            {topic.label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Topic;
