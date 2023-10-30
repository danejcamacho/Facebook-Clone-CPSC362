<script>
    let user = {
      username: null,
      password: null,
      pfp: null
    }
    
    const validSubmitCheck = () => {
      null  
    }
    const handleSubmit = () => {
        if (user.username != null && user.password != null){
            console.log(user.username, user.password)
        }
    }
    
</script>

<main class="create-acc-struct">

<!-- Body to explain website? idk -->
  <div class='side-body'>
    <h1 id='side-header'>Not really Facebook</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam velit, reiciendis provident perferendis dicta officiis est in? Nemo blanditiis natus non praesentium recusandae aliquid commodi corporis, cum sapiente rem facere.
  </div>

<!-- Patch API Call at some point -->
  <div class='form-body'>   
    <h1 class='form-header'>Create Account!</h1>

      <form class="my-form" on:submit|preventDefault={handleSubmit}>

        <div class="form-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class='form-labels'>Username: </label>
            <input class='text-input' type="text" bind:value={user.username}>
        </div>
        
        <div class="form-group">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class='form-labels'>Password: </label>
            <input class='text-input' type="password" bind:value={user.password}>
        </div>

        <div class="form-group">
            <label for="file-upload" class="pfp-file-upload">
              Profile Picture (Optional)
            </label>
            <input id="file-upload" type="file"/>
        </div>

        <input class="button" type='submit' value="Create Account">
      </form>


      <div>
        <a class='login-link' href="/login">Already have an account?</a>
      </div>
  </div>
</main>

<style>
  .create-acc-struct {
    color:#555555;
    line-height: 2em;
    font-size: 18px;
    width: 85vw;
    padding-top: 2%;
    margin:auto; 
  }

  .side-body{
    float: left;
    width: 54%;
    background-color: #333;
    color: #ffffff;
    padding: 15px;
    padding-bottom: 150px;
    font-size: x-large;
  }

  .form-body{
    float:right;
    width:40%;
    font-size: large;
  }
  
  #side-header{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

/* .form-header{
  font-size: xx-large;
} */
.form-group{
  padding: 8px;
}

.form-group label{
  display: block;
}

.form-group input{
  width: 100%;
  height: 30px;
}

.text-input{
  font-size: smaller;
}

.login-link{
  font-size: medium;
  color: black;
}

.login-link:hover{
  color: blue;
}

.button{ 
  background-color: #333; 
   color: #ffffff; 
   padding: 10px 15x; 
   height: 40px;
   float: right; 
   width: 60%;
 } 

.button:hover{
  background: #fff;
  color: black;
  cursor: pointer;
}

.pfp-file-upload{
    border: 1px solid #333;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}

</style>