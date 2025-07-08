<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>GreenCell</title>
  <link rel="stylesheet" href="styles.css"/>
</head>
<body>
  <header>
    <div class="top-bar">
      <button class="top-btn" id="loginBtn">Log In</button>
      <button class="top-btn" id="signupBtn">Sign In</button>
      <input class="search-input" type="text" placeholder="Research..." id="searchInput">
      <button class="top-btn" id="askBtn">Ask Question</button>
    </div>
  </header>
  <main>
    <div class="brand">
      <h1>greenCell</h1>
    </div>
  </main>

  <!-- Log In Modal -->
  <div class="modal" id="loginModal">
    <div class="modal-content">
      <span class="close" id="closeLogin">&times;</span>
      <h2>Log In</h2>
      <form>
        <label for="loginEmail">Gmail</label>
        <input type="email" id="loginEmail" placeholder="Enter your Gmail" required>

        <label for="loginPassword">Password</label>
        <input type="password" id="loginPassword" placeholder="Enter your password" required>

        <button type="submit" class="modal-submit">Log In</button>
      </form>
    </div>
  </div>

  <!-- Sign In Modal -->
  <div class="modal" id="signupModal">
    <div class="modal-content">
      <span class="close" id="closeSignup">&times;</span>
      <h2>Sign In</h2>
      <form>
        <label for="signupUsername">Username</label>
        <input type="text" id="signupUsername" placeholder="Choose a username" required>

        <label for="signupEmail">Gmail</label>
        <input type="email" id="signupEmail" placeholder="Enter your Gmail" required>

        <label for="signupPassword">Password</label>
        <input type="password" id="signupPassword" placeholder="Create a password" required>

        <button type="submit" class="modal-submit">Sign In</button>
      </form>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>