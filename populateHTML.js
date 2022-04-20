const fs = require('fs')

function createCards(data) {
    return ` <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="name">
      <h5 class="postion">${data.postion}</h5>
        </div>
        <div class="name">
            <h6>${data.name}</h6>
        </div>
      <h6>${data.ID}</h6>
      <a href="#">[${data.email}] ${data.github}(https//github.com/${data.github})</a>
    </div>
  </div>
    `;

}
module.exports = createCards