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

    static SearchPosts(title) {

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
}