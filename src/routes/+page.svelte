<style>
  body {
    background-color: #000000;
  }
  
  .container {
    background-color: #ffd5a5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .textbox {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
  }
  
  .button {
    background-color: #47a7f5;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    justify-content: center;
    align-items: center;
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