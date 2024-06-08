import { IPost } from "./types/posts";

const baseUrl = 'http://localhost:3001';

export const getAllPosts = async (): Promise<IPost> => {
    const res = await fetch(`${baseUrl}/posts`);
    const posts = await res.json();
    return posts;
};

export const addPost = async (post) => {
    const res = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
})
const newPost = await res.json();
return newPost;
}