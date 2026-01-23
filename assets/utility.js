window.updateGridStatusTag = function(){
    const now = new Date();

    const entities = document.querySelector("ul.entities");

    entities.querySelectorAll(":scope article").forEach(article => {
      const endTime = article.querySelector(":scope > header > .timeline > time:last-child");
      const date = new Date(endTime.dateTime);
      const tag = article.querySelector("header > .status-tag");
      let key = "active";
      if (date.getTime() < now.getTime()) {
        key = "archived";
        article.querySelectorAll(".button, .buttons").forEach(el => el.classList.toggle("hidden"));
      }
      tag.textContent = entities.dataset[key];
      tag.classList.add(key);
    });
  }

  window.updatePageStatusTag = function(){
    const now = new Date();

    const timeline = document.querySelector("#project .timeline");
    const statusTag = timeline.querySelector(".status");
    const date = new Date(timeline.querySelector("time:last-of-type").dateTime);
    const key = date.getTime() < now.getTime() ? "archived" : "active";
    statusTag.textContent = statusTag.dataset[key];
    statusTag.classList.add(key);
  }

  window.updateEventActions = function(){
    const now = new Date();

    const attributes = document.querySelector("#info");
    const date = new Date(attributes.querySelector(".timeline time:last-child").dateTime);
    if (date.getTime() < now.getTime()) attributes.querySelectorAll(".button, .buttons").forEach(el => el.classList.toggle("hidden"));
  }
