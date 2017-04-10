import m from 'mithril';
import Blog from '../models/blog';

export default class PostEdit {

    oninit(vnode) {
        if (!Blog.ActivePost.id) {
            Blog.LoadPost(vnode.attrs.id);
        }
    }

    view() {
        let { id, title, categories, content } = Blog.ActivePost;
        return (
            <div>
                <h1>Edit Post</h1>
                <form>
                    <div>
                        <label>Title</label>
                        <input type='text' value={title} />
                    </div>
                    <div>
                        <label>Categories</label>
                        <input type='text' value={categories} />
                    </div>
                    <div>
                        <label>Content</label>
                        <textarea value={categories} />
                    </div>
                </form>
            </div>
        )
    }
}