import m from 'mithril';

export default class Blog {

    static PostList = [];
    static ActivePost = {};

    static LoadAll() {
        return m.request({
            method: 'GET',
            url: 'http://reduxblog.herokuapp.com/api/posts?key=test',
            withCredentials: true
        }).then(res => {
            this.PostList = res;
        })
    }

    static LoadPost(id) {
        return m.request({
            method: 'GET',
            url: `http://reduxblog.herokuapp.com/api/posts/${id}?key=test`,
            withCredentials: true
        }).then(res => {
            this.ActivePost = res;
        })
    }

    // since there is no api endpoint for updating posts, a new post will be created instead
    static SavePost() {
        return m.request({
            method: 'POST',
            data: this.ActivePost,
            url: 'http://reduxblog.herokuapp.com/api/posts?key=test',
            withCredentials: true
        })
    }
}