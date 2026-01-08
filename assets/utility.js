window.updateGridStatusTag = function(){
    const now = new Date();

    const entities = document.querySelector("menu.entities");
  
    entities.querySelectorAll(":scope article").forEach(article => {
      const endTime = article.querySelector(":scope > header > .timeline > time:last-child");
      const date = new Date(endTime.dateTime);
      const tag = article.querySelector("header > .status-tag");
      const key = date.getTime() < now.getTime() ? "archived" : "active";
      tag.textContent = entities.dataset[key];
      tag.classList.add(key);
    });
  }

  window.updatePageStatusTag = function(){
    const now = new Date();

    const attributes = document.querySelector("#project .attributes");
    const statusTag = attributes.querySelector(".status");
    const date = new Date(attributes.querySelector(".timeline time:last-child").dateTime);
    const key = date.getTime() < now.getTime() ? "archived" : "active";
    statusTag.textContent = statusTag.dataset[key];
    statusTag.classList.add(key);
  }
