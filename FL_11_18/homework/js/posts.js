window.addEventListener('load', async function () {
  const userId = parseInt(location.hash.slice(1));
  const postList = document.getElementsByClassName('posts-list')[0];
  let [postsResponce, commentsResponce] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    fetch(`https://jsonplaceholder.typicode.com/comments`)
  ]);
  let posts = await postsResponce.json();
  let comments = await commentsResponce.json();
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
    postList.appendChild(newPost);
  }
});
