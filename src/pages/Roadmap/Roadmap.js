import classNames from 'classnames/bind';

import styles from './Roadmap.module.scss';
import MainContent from '~/components/MainContent';
import RoadmapItem from '~/components/RoadmapItem';

const cx = classNames.bind(styles);

function Roadmap() {
    return (
        <div className={cx('main-wrapper')}>
            <MainContent
                title="Lộ trình học"
                desc="Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí 'Lập trình viên Front-end' bạn nên tập trung vào lộ trình 'Front-end'."
            />
            <div className={cx('main-container')}>
                <RoadmapItem 
                    title="Lộ trình học Front-end"
                    desc="Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé."
                    imgSrc="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                    imgAlt="Lộ trình học Front-end"
                    link="/"
                />
                <RoadmapItem
                    title="Lộ trình học Back-end"
                    desc="Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé."
                    imgSrc="https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png"
                    imgAlt="Lộ trình học Back-end"
                    link="/"
                />
            </div>
        </div>
    );
}

export default Roadmap;
