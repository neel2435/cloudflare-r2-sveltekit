<script>
    /** @type {import('./$types').ActionData} */
    export let form;
    
</script>

<style>
	body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      /* align-items: center; */
      min-height: 100vh;
      margin: 0;
      background-color: #f0f0f0;
    }
    
    .container {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .textbox {
      width: 300px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 10px;
      font-size: 16px;
    }
    
    .button {
      background-color: #47a7f5;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .button:hover {
      background-color: #368dd0;
    }
</style>

<body>
    <div class="container">
    <form method="POST" action="?/verify">
        <input name="url" type="url" class="textbox" placeholder="Enter URL Here...">
        <button class="button" type="submit">Submit</button>
    </form>
    </div>
    {#if form?.success}
        <h1>{@html form?.title}</h1>
        <p>{@html form?.content}</p>
    {/if}
</body>

  