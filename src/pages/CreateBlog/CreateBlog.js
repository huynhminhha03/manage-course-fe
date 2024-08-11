import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './CreateBlog.module.scss';
import classNames from 'classnames/bind';
import Topic from '~/components/Topic';

const cx = classNames.bind(styles);

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [topic, setTopic] = useState('');

    console.log(topic);
    
    const isButtonDisabled = !title.trim() || !content.replace(/<\/?[^>]+(>|$)/g, '').trim();

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['link', 'image'],
            ['clean'],
        ],
    };

    const formats = [
        'header',
        'font',
        'list',
        'bullet',
        'bold',
        'italic',
        'underline',
        'color',
        'background',
        'align',
        'link',
        'image',
    ];

    useEffect(() => {
        document.title = title || 'Tạo bài viết'; // Set a default title if `title` is empty
    }, [title]);

    const handleSelectedTopic = (selectedTopic) => {
        setTopic(selectedTopic);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('text-editor-container')}>
                <input
                    type="text"
                    placeholder="Tiêu đề"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={cx('title-input')}
                />
                <ReactQuill
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    formats={formats}
                    placeholder="Nội dung viết ở đây"
                    className={cx('quill-editor')}
                />
            </div>
            <div className={cx('wrap-topic')}>
                <Topic setTopic={handleSelectedTopic} title="Thêm chủ đề cho bài viết"/>
            </div>

            <div className={cx('wrap-btn')}>
                <button
                    type="button"
                    className={cx('button', { disabled: isButtonDisabled })}
                    disabled={isButtonDisabled}
                >
                    <span className={cx('title')}>XUẤT BẢN</span>
                </button>
            </div>
        </div>
    );
};

export default CreateBlog;
