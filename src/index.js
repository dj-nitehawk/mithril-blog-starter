import m from 'mithril';
import PostList from './views/post-list';
import PostDisplay from './views/post-display';
import PostEdit from './views/post-edit';

class App {
    constructor() {
        console.log(process.env.NODE_ENV);
    }

    view() {
        return (
            <div>
                <h1>My Blog</h1>
                <PostList />
            </div>
        )
    }
}

m.route(document.body, '/', {
    '/': App,
    '/post/:id': PostDisplay,
    '/post/edit/:id': PostEdit
})