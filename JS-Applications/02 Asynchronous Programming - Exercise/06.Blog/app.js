function attachEvents() {

    const baseUrl = `http://localhost:3030`;
    const postsEndpoint = `${baseUrl}/jsonstore/blog/posts`;
    const commentsEndpoint = `${baseUrl}/jsonstore/blog/comments`;

    const dropdownPostsMenu = document.getElementById('posts');

    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    const buttonLoadPosts = document.getElementById('btnLoadPosts');
    buttonLoadPosts.addEventListener('click', loadPosts);

    const buttonViewPost = document.getElementById('btnViewPost');
    buttonViewPost.addEventListener('click', viewPost);

    async function viewPost() {

        postComments.innerHTML = '';

        const selectedPostId = dropdownPostsMenu.value;

        const postsResponse = await fetch(postsEndpoint);
        const postsResult = await postsResponse.json();

        postTitle.textContent = postsResult[selectedPostId].title.toUpperCase();
        postBody.textContent = postsResult[selectedPostId].body;

        const commentsResponse = await fetch(`${commentsEndpoint}?postId=${selectedPostId}`);
        const commentsResult = await commentsResponse.json();

        for (const key in commentsResult) {
            const comment = commentsResult[key];
            const liElement = document.createElement('li');
            liElement.textContent = comment.text;
            postComments.appendChild(liElement);
        }
    }

    async function loadPosts() {

        const postsResponse = await fetch(postsEndpoint);
        const postsResult = await postsResponse.json();

        dropdownPostsMenu.innerHTML = '';

        for (const key in postsResult) {

            const optionElement = document.createElement('option');
            optionElement.textContent = postsResult[key].title;
            optionElement.value = key;
            dropdownPostsMenu.appendChild(optionElement);

        }

    }

}

attachEvents();
