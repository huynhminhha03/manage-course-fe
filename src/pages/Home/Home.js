import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from '~/components/Layouts/components/Slider';
import Classify from '~/components/Classify';
import CardItem from '~/components/CardItem';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <div className={cx('body')}>
                <Classify title="Khóa học Pro" label={'Mới'}>
                    <div className="row">
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'}
                                title={'HTML CSS Pro'}
                                oldPrice={'2.500.000đ'}
                                mainPrice={'1.299.000đ'}
                                isProCourse
                                name={'Sơn Đặng'}
                                avatar={'https://fullstack.edu.vn/images/founder.jpeg'}
                                quantityVideo={'590'}
                                totalHours={'116h33p'}
                            />
                        </div>
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                            <CardItem
                                isProCourse
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'}
                                title={'HTML CSS Pro'}
                                oldPrice={'2.500.000đ'}
                                mainPrice={'1.299.000đ'}
                                name={'Sơn Đặng'}
                                avatar={'https://fullstack.edu.vn/images/founder.jpeg'}
                                quantityVideo={'590'}
                                totalHours={'116h33p'}
                            />
                        </div>
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                            <CardItem
                                isProCourse
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'}
                                title={'HTML CSS Pro'}
                                oldPrice={'2.500.000đ'}
                                mainPrice={'1.299.000đ'}
                                name={'Sơn Đặng'}
                                avatar={'https://fullstack.edu.vn/images/founder.jpeg'}
                                quantityVideo={'590'}
                                totalHours={'116h33p'}
                            />
                        </div>
                    </div>
                </Classify>

                <Classify title="Khóa học miễn phí" viewMore={'Xem lộ trình'}>
                    <div className="row">
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                            <CardItem
                                isFreeCourse
                                totalUsers={'127.641'}
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'}
                                title={'HTML CSS Pro'}
                                mainPrice={'Miễn phí'}
                                name={'Sơn Đặng'}
                                avatar={'https://fullstack.edu.vn/images/founder.jpeg'}
                                quantityVideo={'590'}
                                totalHours={'116h33p'}
                            />
                        </div>
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                            <CardItem
                                isFreeCourse
                                totalUsers={'127.641'}
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'}
                                title={'HTML CSS Pro'}
                                mainPrice={'Miễn phí'}
                                name={'Sơn Đặng'}
                                avatar={'https://fullstack.edu.vn/images/founder.jpeg'}
                                quantityVideo={'590'}
                                totalHours={'116h33p'}
                            />
                        </div>
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                            <CardItem
                                isFreeCourse
                                totalUsers={'127.641'}
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'}
                                title={'HTML CSS Pro'}
                                mainPrice={'Miễn phí'}
                                name={'Sơn Đặng'}
                                avatar={'https://fullstack.edu.vn/images/founder.jpeg'}
                                quantityVideo={'590'}
                                totalHours={'116h33p'}
                            />
                        </div>
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                            <CardItem
                                isFreeCourse
                                totalUsers={'127.641'}
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'}
                                title={'HTML CSS Pro'}
                                mainPrice={'Miễn phí'}
                                name={'Sơn Đặng'}
                                avatar={'https://fullstack.edu.vn/images/founder.jpeg'}
                                quantityVideo={'590'}
                                totalHours={'116h33p'}
                            />
                        </div>
                    </div>
                </Classify>

                <Classify title={'Bài viết nổi bật'} viewMore={'Xem tất cả'}>
                    <div className="row">
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                            <CardItem
                                isArticle
                                totalUsers={'127.641'}
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'}
                                title={'HTML CSS Pro'}
                                oldPrice={'2.500.000đ'}
                                mainPrice={'1.299.000đ'}
                                name={'Sơn Đặng'}
                                avatar={'https://fullstack.edu.vn/images/founder.jpeg'}
                                quantityVideo={'590'}
                                totalHours={'116h33p'}
                            />
                        </div>
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                            <CardItem
                                isArticle
                                totalUsers={'127.641'}
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'}
                                title={'HTML CSS Pro'}
                                oldPrice={'2.500.000đ'}
                                mainPrice={'1.299.000đ'}
                                name={'Sơn Đặng'}
                                avatar={'https://fullstack.edu.vn/images/founder.jpeg'}
                                quantityVideo={'590'}
                                totalHours={'116h33p'}
                            />
                        </div>
                        <div className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                            <CardItem
                                isArticle
                                totalUsers={'127.641'}
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png'}
                                title={'HTML CSS Pro'}
                                oldPrice={'2.500.000đ'}
                                mainPrice={'1.299.000đ'}
                                name={'Sơn Đặng'}
                                avatar={'https://fullstack.edu.vn/images/founder.jpeg'}
                                quantityVideo={'590'}
                                totalHours={'116h33p'}
                            />
                        </div>
                    </div>
                </Classify>
            </div>
        </div>
    );
}

export default Home;
