<script >
  // import {onMount} from "svelte"
  // import {apiData} from "svelte/store"

  // onMount{async () => {
  //   fetch("http://localhost:3002/users")
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     apiData.set(data)
  //   }).catch(error => {
  //     console.log(error);
  //     return [];
  //   });
  // }}  

  let username = null;
  let password = null;

  const handleSubmit = () => {
    if (username != null && password != null) {
      console.log(username, password);
    }
  };  
  
  export {username as username};
</script>

<main class="create-acc-struct">
  <!-- Body to explain website? idk -->
  <div class="side-body">
    <h1 id="side-header">Not really Facebook</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam velit, reiciendis
    provident perferendis dicta officiis est in? Nemo blanditiis natus non praesentium
    recusandae aliquid commodi corporis, cum sapiente rem facere.
  </div>

  <!-- Patch API Call at some point -->
  <div class="form-body">
    <h1 class="form-header">Create Account!</h1>

    <form class="my-form" action="https://facebook-clone-cpsc-362.vercel.app/" method="get">
      <div class="form-group">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="form-labels">Username: </label>
        <input class="text-input" type="text" bind:value={username} />
      </div>

      <div class="form-group">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="form-labels">Password: </label>
        <input class="text-input" type="password" bind:value={password} />
      </div>

      <div class="form-group"></div>

      <input
        class="button"
        type="submit"
        value="Create Account"
        on:click={handleSubmit()}
      />
    </form>

    <div>
      <a class="login-link" href="/login">Already have an account?</a>
    </div>
  </div>
</main>

<style>
  .create-acc-struct {
    color: #555555;
    line-height: 2em;
    font-size: 18px;
    width: 85vw;
    padding-top: 2%;
    margin: auto;
  }

  .side-body {
    float: left;
    width: 54%;
    background-color: #333;
    color: #ffffff;
    padding: 15px;
    padding-bottom: 100px;
    font-size: xx-large;
  }

  .form-body {
    float: right;
    width: 40%;
    font-size: x-large;
  }

  #side-header {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  /* .form-header{
  font-size: xx-large;
} */
  .form-group {
    padding: 8px;
  }

  .form-group label {
    display: block;
  }

  .form-group input {
    width: 100%;
    height: 30px;
  }

  .text-input {
    font-size: smaller;
  }

  .login-link {
    font-size: medium;
    color: black;
  }

  .login-link:hover {
    color: blue;
  }

  .button {
    background-color: #333;
    color: #ffffff;
    padding: 10px 15x;
    height: 40px;
    float: right;
    width: 60%;
  }

  .button:hover {
    background: #fff;
    color: black;
    cursor: pointer;
  }
</style>
