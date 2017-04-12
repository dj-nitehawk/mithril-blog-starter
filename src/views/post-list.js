import m from 'mithril';
import Blog from '../models/blog';

export default class PostList {

    oninit() {
        Blog.LoadAll();
    }

    RenderPosts() {
        return Blog.PostList.map(post => {
            return (
                <li class="list-group-item">
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
                <h1 class="font-italic bg-info text-white">My Posts:</h1>
                <ul class="list-group">
                    {this.RenderPosts()}
                </ul>
            </div>
        )
    }
}