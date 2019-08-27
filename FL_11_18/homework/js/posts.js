window.addEventListener('load', function () {
  const userId = parseInt(location.hash.slice(1));
  const postList = document.getElementsByClassName('posts-list')[0];
  setTimeout(() => loader.classList.add("loader_hidden"), 10000);
  Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    fetch(`https://jsonplaceholder.typicode.com/comments`)
  ])
    .then((responce) => Promise.all([responce[0].json(), responce[1].json()]))
    .then(([posts, comments]) => {
      loader.classList.add("loader_hidden");
      for (let indexPosts = 0; indexPosts < posts.length; indexPosts++) {
        let newPost = document.createElement('div');
        newPost.className = 'post';
        let postHeader = document.createElement('h3');
        postHeader.className = 'post__header';
        postHeader.innerText = posts[indexPosts].title;
        newPost.appendChild(postHeader);
        let postText = document.createElement('p');
        postText.className = 'post__text';
        postText.innerText = posts[indexPosts].body;
        newPost.appendChild(postText);
        for (let indexComment = 0; indexComment < comments.length; indexComment++) {
          if (comments[indexComment].postId == posts[indexPosts].id) {
            let newComment = document.createElement('p');
            newComment.className = 'post__comment';
            newComment.innerText = comments[indexComment].body;
            newPost.appendChild(newComment);
          }
        }
        postList.appendChild(newPost);
      }
    });
});
