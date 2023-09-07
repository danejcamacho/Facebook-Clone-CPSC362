<script>
    let posts = [
      {
        id: 1,
        author: 'Mike Hawk',
        timestamp: '2 hours ago',
        content: 'Hello, Svelte World!',
        likes: 10,
        comments: 5,
      },
      // Add more post objects here
    ];
  </script>


<div class="feed">
    {#each posts as post (post.id)}
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

    
  </style>