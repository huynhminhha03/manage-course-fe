import MainContent from '~/components/MainContent';
import CardItem from '~/components/CardItem';

function MyCourse() {
    const completedCourses = <strong>2/8</strong>;
    const description = <>Bạn đã hoàn thành {completedCourses} khóa học của bạn.</>;

    return (
        <MainContent title={'Khóa học của tôi'} desc={description}>
            <div>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                isMyCourse
                            />
                        </div>

                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                isMyCourse
                            />
                        </div>

                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                isMyCourse
                            />
                        </div>

                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                isMyCourse
                            />
                        </div>

                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                isMyCourse
                            />
                        </div>

                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                isMyCourse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MainContent>
    );
}

export default MyCourse;
