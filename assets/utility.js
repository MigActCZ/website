window.updateGridStatusTag = function(status_values){
    const now = new Date();
  
    document.querySelectorAll(".entities article").forEach(article => {
      const endTime = article.querySelector("header > .timeline > time:last-child");
      const date = new Date(endTime.dateTime);
      const tag = article.querySelector("header > .status-tag");
      const key = date.getTime() < now.getTime() ? "archived" : "active";
      tag.textContent = status_values[key];
      tag.classList.add(key);
    });
  }

  window.updatePageStatusTag = function(status_values){
    const now = new Date();

    const attributes = document.querySelector("#project .attributes");
    const statusTag = attributes.querySelector(".status");
    const date = new Date(attributes.querySelector(".timeline time:last-child").dateTime);
    const key = date.getTime() < now.getTime() ? "archived" : "active";
    statusTag.textContent = status_values[key];
    statusTag.classList.add(key);
  }
