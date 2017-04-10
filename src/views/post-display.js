import m from 'mithril';
import Blog from '../models/blog';

export default class PostDisply {

    oninit(vnode) {
        Blog.LoadPost(vnode.attrs.id);
    }

    view() {
        let { title, categories, content } = Blog.ActivePost;

        return (
            <div>
                <h1>Title: {title}</h1>
                <h2>Categories: {categories}</h2>
                <p>{content}</p>
                <button type='button' onclick={this.showEditView.bind(this)}>Edit</button>
            </div>

        )
    }

    showEditView(e) {
        e.preventDefault();
        m.route.set('/post/edit/' + Blog.ActivePost.id);
    }
}