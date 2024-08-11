import classNames from 'classnames/bind';
import React, { useState } from 'react';

import styles from './Blog.module.scss';
import MainContent from '~/components/MainContent';
import PostItem from '~/components/PostItem';
import { NextPageIcon, PrevPageIcon } from '~/components/Icons';
import Topic from '~/components/Topic';

const cx = classNames.bind(styles);

function Blog() {
    const [activePage, setActivePage] = useState(1);
    const [topic, setTopic] = useState('');
    const [desc, setDesc] = useState('');

    const handlePageClick = (pageNumber) => {
        setActivePage(pageNumber);
        console.log(pageNumber);
    };

    const fetchPostsByTopic = (topic, desc) => {
        setTopic(topic);
        setDesc(desc);
        // Cập nhật URL mà không tải lại trang
        window.history.pushState(null, '', `/blog/topic/${topic}`);
        // Gọi API để fetch dữ liệu
        console.log(`Fetching posts for topic: ${topic}`);
        // Fetch data logic here
    };

    return (
        <MainContent
            title={topic || 'Bài viết nổi bật'}
            desc={
                desc ||
                'Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.'
            }
        >
            <div className={cx('main-container')}>
                <div className="row">
                    <div className="col col-lg-9">
                        <div className={cx('left-layout')}>
                            <PostItem
                                src={'https://files.fullstack.edu.vn/f8-prod/public-images/6670ea3e254bb.png'}
                                alt={"avatar's post"}
                                name={'Lý Cao Nguyên'}
                                title={' Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày'}
                                desc={
                                    'Xin chào mọi người mình là Lý Cao Nguyên, mình đã làm một dự án website front-end với hơn 100 bài học và 200 bài viết. Bài viết này...'
                                }
                                tags={'Front-end'}
                                createAt={'7'}
                            />

                            <PostItem
                                src={'https://files.fullstack.edu.vn/f8-prod/public-images/6670ea3e254bb.png'}
                                alt={"avatar's post"}
                                name={'Lý Cao Nguyên'}
                                title={' Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày'}
                                desc={
                                    'Xin chào mọi người mình là Lý Cao Nguyên, mình đã làm một dự án website front-end với hơn 100 bài học và 200 bài viết. Bài viết này...'
                                }
                                tags={'Front-end'}
                                createAt={'7'}
                            />
                            <PostItem
                                src={'https://files.fullstack.edu.vn/f8-prod/public-images/6670ea3e254bb.png'}
                                alt={"avatar's post"}
                                name={'Lý Cao Nguyên'}
                                title={' Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày'}
                                desc={
                                    'Xin chào mọi người mình là Lý Cao Nguyên, mình đã làm một dự án website front-end với hơn 100 bài học và 200 bài viết. Bài viết này...'
                                }
                                tags={'Front-end'}
                                createAt={'7'}
                            />
                            <div className={cx('page-wrapper')}>
                                <div className={cx('page-container')}>
                                    <div className={cx('page', { disabled: true })}>
                                        <PrevPageIcon />
                                    </div>
                                    {[1, 2, 3, 4, 5, 6].map((pageNumber) => (
                                        <div
                                            key={pageNumber}
                                            className={cx('page', { active: activePage === pageNumber })}
                                            onClick={() => handlePageClick(pageNumber)}
                                        >
                                            {pageNumber}
                                        </div>
                                    ))}
                                    <div className={cx('page')}>
                                        <NextPageIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                        <Topic setTopic={fetchPostsByTopic}/>
                    </div>
                </div>
            </div>
        </MainContent>
    );
}

export default Blog;
