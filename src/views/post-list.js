import m from 'mithril';
import Blog from '../models/blog';

export default class PostList {

    oninit() {
        Blog.LoadAll();
    }

    RenderPosts() {
        return Blog.PostList.map(post => {
            return (
                <li>
                    <a href={`/post/${post.id}`} oncreate={m.route.link}>
                        {post.title}
                    </a>
                </li>
            )
        })
    }

    view() {
        return (
            <div>
                <h1>M Posts:</h1>
                <ul>
                    {this.RenderPosts()}
                </ul>
            </div>
        )
    }
}