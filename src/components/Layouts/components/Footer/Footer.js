import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '~/assets/images';
import { FacebookSocialIcon, TiktokSocialIcon, YoutubeSocialIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xl-3 col-md-4">
                        <div className={cx('column-top')}>
                            <a href="/">
                                <img className={cx('top-logo')} src={images.logo} alt="Yuko" />
                            </a>
                            <h2 className={cx('top-slogan')}>Học Lập Trình Để Đi Làm</h2>
                        </div>
                        <p className={cx('list-contact')}>
                            <b>Điện thoại:</b>
                            <a href="tel:0246.329.1102">0246.329.1102</a>
                            <br />
                            <b>Email:</b>
                            <a href="mailto:contact@fullstack.edu.vn">contact@yuko.edu.vn</a>
                            <br />
                            <b>Địa chỉ:</b> Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy, Hà Nội
                        </p>
                    </div>
                    <div className="col col-xl-3 col-md-4">
                        <div>
                            <h2 className={cx('heading')}>Về Yuko</h2>
                            <ul className={cx('list')}>
                                <li> Giới thiệu </li>
                                <li> Liên hệ </li>
                                <li> Điều khoản </li>
                                <li> Bảo mật </li>
                                <li> Cơ hội việc làm </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3 col-md-4">
                        <div>
                            <h2 className={cx('heading')}>Sản phẩm</h2>
                            <ul className={cx('list')}>
                                <li>Game Nester</li>
                                <li>Game CSS Diner</li>
                                <li>Game CSS Selectors</li>
                                <li>Game Froggy</li>
                                <li>Game Froggy Pro</li>
                                <li>Game Scoops</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-3">
                        <div>
                            <h2 className={cx('heading')}>CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC YUKO</h2>
                            <ul className={cx('list')}>
                                <li>
                                    <b>Mã số thuế:</b> 0109922901
                                </li>
                                <li>
                                    <b>Ngày thành lập:</b> 04/03/2022
                                </li>
                                <li>
                                    <b>Lĩnh vực hoạt động:</b> Giáo dục, công nghệ - lập trình. Chúng tôi tập trung xây
                                    dựng và phát triển các sản phẩm mang lại giá trị cho cộng đồng lập trình viên Việt
                                    Nam.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12">
                        <div className={cx('bottom')}>
                            <p className={cx('copyright')}>
                                © 2018 - 2024 Yuko. Nền tảng học lập trình hàng đầu Việt Nam
                            </p>
                            <ul className={cx('social-list')}>
                                <li className={cx('social-item')}>
                                    <YoutubeSocialIcon className={cx('youtube-icon')} />
                                </li>

                                <li className={cx('social-item')}>
                                    <FacebookSocialIcon className={cx('facebook-icon')} />
                                </li>

                                <li className={cx('social-item')}> 
                                    <TiktokSocialIcon className={cx('tiktok-icon')} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
