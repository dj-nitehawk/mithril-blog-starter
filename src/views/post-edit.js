import m from 'mithril';
import Blog from '../models/blog';

export default class PostEdit {

    SaveSuccess = false;

    oninit(vnode) {
        if (!Blog.ActivePost.id) {
            Blog.LoadPost(vnode.attrs.id);
        }
    }

    //http://lhorie.github.io/mithril-blog/asymmetrical-data-bindings.html
    updateModel() {
        return ({
            onchange: e => {
                Blog.ActivePost[e.target.name] = e.target.value;
            }
        })
    }

    view() {
        let { id, title, categories, content } = Blog.ActivePost;

        return (
            <div>
                <h1>Edit Post</h1>
                <form { ...this.updateModel() }>
                    <div>
                        <label>Title</label>
                        <input type='text' name='title' value={title} />
                    </div>
                    <div>
                        <label>Categories</label>
                        <input type='text' name='categories' value={categories} />
                    </div>
                    <div>
                        <label>Content</label>
                        <textarea name='content' value={content} />
                    </div>
                    <button onclick={this.submitForm.bind(this)}>Save!</button>
                </form>
                {this.renderSaveMsg()}
            </div>
        )
    }

    renderSaveMsg() {
        if (this.SaveSuccess) {
            return (
                <div>
                    <p>POST SAVED!</p>
                    <a href={`/post/${Blog.ActivePost.id}`} oncreate={m.route.link}>
                        Click here to view the post...
                    </a>
                </div>
            )
        }
        return (
            <div></div>
        )
    }

    submitForm(e) {
        e.preventDefault();
        Blog.SavePost()
            .then(res => {
                Blog.ActivePost = res;
                this.SaveSuccess = true;
            })
            .catch(err => {
                console.log(err.error);
            });
    }
}