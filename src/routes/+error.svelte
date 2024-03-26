<script>
  import { goto } from '$app/navigation';
</script>

<div class="error-container">
  <h1 class="error-title">404</h1>
  <div class="error-message">
    <span>Sorry,</span>
    <span>er</span>
    <span>ging</span>
    <span>iets</span>
    <span>mis.</span>
  </div>
  <a href="/" class="home-button" on:click={() => goto('/')}>Terug naar de homepagina</a>
</div>

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    height: 100vh; 
  }

  .error-title {
    font-size: 4rem;
    color: var(--black); 
  }

  .error-message {
    font-size: 2.1rem;
    font-weight: 700;
    padding: 0 0.8rem; 
    display: flex;
    margin-bottom: 0.5rem;
    width: fit-content;
  }

  .error-message span {
    margin-left: 10px;
  }

  .error-message span:nth-child(1) {
    color: var(--white);
    background-color: var(--blue);
  }
  
  .error-message span:nth-child(2) {
    color: var(--black);
    background-color: var(--yellow);
  }
  
  .error-message span:nth-child(3) {
    color: var(--white);
    background-color: var(--black);
  }
  
  .error-message span:nth-child(4) {
    color: var(--black);
    background-color: var(--white);
  }
  
  .error-message span:nth-child(5) {
    color: var(--yellow);
    background-color: var(--black);
  }

  .home-button {
  font-size: 2.1rem;
  font-weight: 700;
  padding: 0 0.8rem;
  display: flex;
  margin-bottom: 0.3rem;
  width: fit-content;
  cursor: pointer;
  color: var(--black);
  background-color: var(--yellow);
  transition: transform 0.2s, background-color 0.2s; 
}

.home-button:hover {
  transform: scale(1.1); 
  background-color: var(--black); 
  color: var(--yellow);
}


</style>



