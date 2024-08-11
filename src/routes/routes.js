//Layout
import { WithoutSidebar } from '~/components/Layouts';
import BlogDetails from '~/pages/BlogDetails';
// import FooterOnly from '~/components/Layouts/FooterOnly';      

import Bookmark from '~/pages/Bookmark';
import Home from '~/pages/Home';
import MyCourse from '~/pages/MyCourse';
import MyBlog from '~/pages/MyBlog';
import Blog from '~/pages/Blog';
import Profile from '~/pages/Profile';
import Roadmap from '~/pages/Roadmap';
import CreateBlog from '~/pages/CreateBlog';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/blog/topic/id', component: Blog },
    { path: '/blog/id', component: BlogDetails, layout: WithoutSidebar },
    { path: '/me/bookmark', component: Bookmark },
    { path: '/new-post', component: CreateBlog, layout: WithoutSidebar },
    { path: '/me/posts', component: MyBlog },
    { path: '/roadmap', component: Roadmap},
    { path: '/my-course', component: MyCourse },
    { path: '/@huynh-minh-ha-1', component: Profile, layout: WithoutSidebar },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
