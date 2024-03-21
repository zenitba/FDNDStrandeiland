<!-- <script>
    export let data;
    let reactions = [];
    let currentStatus = '';
    let selectedStatus = null;
    let commentError = '';
    let roleError = '';
    let statusupdate = null; 
  
    function addReaction(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const comment = formData.get('comment');
        const role = formData.get('role');
  
        if (!comment.trim()) {
            commentError = 'Je moet een reactie invoeren voordat je reageert.';
            return;
        } else {
            commentError = '';
        }
  
        if (!role) {
            roleError = 'Selecteer je rol voordat je reageert.';
            return;
        } else {
            roleError = '';
        }
        const reaction = {comment, role, status: currentStatus};
  
        if (reactions.length >= 3) {
            reactions.shift();
        }
  
        reactions.push(reaction);
        commentError = '';
        roleError = '';
        event.target.reset();
        renderReactions(reactions.filter(reaction => reaction.status === currentStatus));
    }
  
    function changeStatus(status) {
        if (selectedStatus === status) {
            selectedStatus = null;
            document.querySelector('.chat').classList.remove('opened');
            statusupdate = null; 
        } else {
            selectedStatus = status;
            document.querySelector('.chat').classList.add('opened');
            currentStatus = status;
            statusupdate = data.statusupdates.find(update => update.comment.text === status); 
            renderReactions(statusupdate.reaction); 
        }
    }
  
    function renderReactions(reactions) {
        const chatList = document.querySelector('.chat ul');
        chatList.innerHTML = '';
  
        if (reactions && reactions.length > 0) {
            reactions.forEach(reaction => {
                const li = document.createElement('li');
                li.textContent = `${reaction.text} - ${reaction.role}`;
                chatList.prepend(li);
            });
        } else {
            const p = document.createElement('p');
            p.textContent = 'Geen reacties';
            chatList.appendChild(p);
        }
    }
  </script> -->

  <!-- <section>
    <h2 class="status-title">Status wens</h2>
    <noscript>
        Voor volledige functionaliteit van deze site is het nodig JavaScript in te schakelen. Hier zijn de <a href="https://www.enable-javascript.com/">instructies voor het inschakelen van JavaScript in uw webbrowser</a>.
    </noscript>
    <ul class="timeline timeline-vertical">
        {#each data.statusupdates as statusupdate}
        <li class={selectedStatus === statusupdate.comment.text ? 'active' : ''}>
          <span class="timeline--date">{statusupdate.date}</span>
          <div class="timeline--circle"><i></i></div>
          <div class="timeline--description">
              <a href="/" on:click={e => { e.preventDefault(); changeStatus(statusupdate.comment.text); }}>
                  {statusupdate.comment.text}
              </a>
              <div class="comment-viewer">{statusupdate.reaction.length} Reacties</div>
          </div>
      </li>   
      {/each}
    </ul> 
    <div class="border-line"></div>
    <div class="chat {selectedStatus ? 'opened' : ''}">
        <h1>{currentStatus}</h1>
        <ul>
            {#if statusupdate && statusupdate.reaction && statusupdate.reaction.length > 0}
                {#each statusupdate.reaction as reaction}
                    <li>{reaction.text}</li>
                {/each}
            {:else}
                <li>Geen reacties</li>
            {/if}
        </ul>
        <form on:submit={addReaction}>
            <textarea name="comment" placeholder="Jouw reactie hier...." required></textarea>
            {#if commentError}
                <p class="error-message">{commentError}</p>
            {/if}
            <p>Selecteer je rol:</p>
            {#if roleError}
                <p class="error-message">{roleError}</p>
            {/if}
            <div>
                <input type="radio" id="option-trekker" name="role" value="Trekker" required>
                <label for="option-trekker">Trekker</label>
                <input type="radio" id="option-helper" name="role" value="Helper" required>
                <label for="option-helper">Helper</label>
                <input type="radio" id="option-deler" name="role" value="Deler" required>
                <label for="option-deler">Deler</label>
            </div>
            <button type="submit">Reageer</button>
        </form>
    </div>
</section> -->

<style>
    section {
      justify-content: space-between;
      padding: 20px;
      background-color: white; 
      max-width: 610px; 
      border: 1px solid rgba(0, 0, 0, 0.125);
      margin-bottom: 70px;
  }
    /* Stijl voor scheidslijn */
    .border-line {
        border-top: 1px solid #acaeae;
        margin-top: 2.5rem;
        background-color: transparent;
    }
    /* Stijl voor de chatsectie */
    .chat {
        margin: 20px; 
        background-color: #f9f9f9; 
        border-radius: 10px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        transition: height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
        overflow: hidden;
        height: 0; 
    }
    
    .chat.opened{
        padding: 20px;
    }
    
    .chat ul{
        margin: 5px 0;
        list-style: none;
    }
    
    .chat li{
        margin: 5px 0;
    
    }
    
    .status-title{
        text-align: center;
     }
    
     /* Stijl voor de reactieformulier */
    form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }
      
    /* Stijl voor de tekstvelden */
    textarea {
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
        padding: 10px; 
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid black; 
    }
      
    /* Stijl voor de submit-knop */
    button {
        padding: 10px 20px;
        background-color: var(--blue);
        color: var(--white);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }
        
    button:hover {
        background-color: #0056b3;
    }
      
    .comment-viewer{
        padding: 5px 0;
        font-weight: 800;
    }
    .chat.opened {
        height: auto; 
    }
    
    .timeline {
      margin: 30px;
      position: relative;
    }
    
    .timeline li {
      display: flex;
      line-height: 1;
    }
    
    .timeline--date {
      flex: 0 0 70px;
      color: #999;
      font-family: 'Droid Serif', serif;
      font-size: 90%;
      text-align: left;
    }
    
    .timeline--circle {
      flex: 0 0 50px;
      position: relative;
      text-align: center;
    }
    
    .timeline--circle:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 2px;
      background: #222;
      margin: auto;
      right: 0;
      left: 0;
      z-index: 2;
    }
    
    .timeline--circle i {
      transition: all 0.4s ease-in-out;
      position: relative;
      display: inline-block;
      background: #222;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      box-sizing: border-box;
      z-index: 3;
    }
    
    .timeline--description {
      margin-left: 5px;
      padding-bottom: 30px;
    
    }
    .timeline--description a {
     color: black;
    
    }
    
    .timeline li:first-child .timeline--date,
    .timeline li:first-child .timeline--description {
      margin-top: 10px;
    }
    
    .timeline li:first-child .timeline--circle:before {
      margin-top: 15px;
    }
    
    .timeline li:first-child .timeline--circle:after {
      content: "";
      background: transparent;
      box-sizing: border-box;
      width: 40px;
      height: 40px;
      border: 2px solid #e9e9e9;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 50%;
      z-index: 1;
    }
    
    .timeline li:first-child .timeline--circle i {
      background: transparent;
      width: 40px;
      height: 40px;
    }
    
    .timeline li:first-child .timeline--circle i:after {
      content: '';
      background: var(--blue);
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    
    .timeline li:hover .timeline--date {
      color: #555;
    }
    
    .timeline li:hover .timeline--circle i {
      transform: scale(4);
    }
    
    .timeline li:hover .timeline--description a {
      color: var(--blue);
    }
    
    .timeline li:first-child:hover .timeline--circle i {
      transform: none;
      background: #222;
    }
    
    .timeline li:first-child:hover .timeline--circle:after {
      border-color: #222;
    }
    
    /* Media Queries */
    @media only screen and (max-width: 768px) {
        section {
            padding: 10px;
        }
        .chat {
            margin: 10px;
        }
    }
    
    @media only screen and (max-width: 480px) {
        .timeline {
            margin: 10px 0;
        }
    }
  
    </style>
    