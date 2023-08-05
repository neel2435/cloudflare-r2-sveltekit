<style>
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #240f03;
  }
  
  .container {
    background-color: #fec88a;
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
  <input type="text" class="textbox" placeholder="Enter text...">
  <button class="button"><a href="/retrieve">Submit</a></button>
</div>
</body>