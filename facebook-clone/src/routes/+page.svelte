
<script>
  let posts = [];

    let author = '';
    let content = '';


    const addPost = () => {
      const d = new Date();
      const fullDateTime = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
      let post = {
        id: 0,
        author: author,
        timestamp: fullDateTime,
        content: content,
        likes: 0,
        comments: 0
      };
      posts = [...posts, post];
      author = '';
      content = '';
    }
    
</script>




<div class="feed">
    {#each posts as post}
      <div class="post" key={post.id}>
        <div class="post-header">
          <div class="avatar"></div>
          <div class="post-author">{post.author}</div>
          <div class="timestamp">{post.timestamp}</div>
        </div>
        <div class="post-content">{post.content}</div>
        <div class="post-actions">
          <div class="action">
            <i class="fas fa-thumbs-up like-icon"></i>
            {post.likes} Likes
          </div>
          <div class="action">
            <i  class="fas fa-comment comment-icon"></i>
            {post.comments} Comments
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class ="create-post">
    <h1>Create a Post!</h1>
    <input type="text" placeholder="put your name here" bind:value={author} />
    <input type="text" placeholder="put content here" bind:value={content} />
    <button on:click={addPost}> Submit </button>
    
    
  </div>

  <style>
    /* Add your CSS styling here to make it look sleek */
    .feed {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
  
    .post {
      background-color: #fff;
      border: 1px solid #e0e0e0;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .post-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #ccc;
      margin-right: 10px;
    }
  
    .post-author {
      font-weight: bold;
    }
  
    .timestamp {
      color: #888;
    }
  
    .post-content {
      margin-bottom: 10px;
    }
  
    .post-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .action {
      display: flex;
      align-items: center;
      color: #555;
      cursor: pointer;
      margin-right: 20px;
    }
  
    .action i {
      margin-right: 5px;
    }
  
    .comment-icon {
      color: #0078ff;
    }
  
    .like-icon {
      color: #ff4500;
    }

    .create-post-button {
      background-color : #31B0D5;
      color: white;
      padding: 10px 20px;
      border-radius: 4px;
      border-color: #46b8da;
   }

   .create-post{
      position: fixed;
      bottom: 20px;
      right: 20px;
    }

    
  </style>