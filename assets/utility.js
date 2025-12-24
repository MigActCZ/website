window.updateGridStatusTag = function(status_values){
    const now = new Date();
  
    document.querySelectorAll("article > header > .timeline").forEach(timeline => {
      const article = timeline.parentElement.parentElement;
      const endTime = timeline.querySelector("time:last-child");
      const date = new Date(endTime.dateTime);
      const tag = article.querySelector("header > .status-tag");
      
      if (isNaN(date) || !tag) return;
      const key = date.getTime() < now.getTime() ? "archived" : "active";
      tag.textContent = status_values[key];
      tag.classList.add(key);
    });
  }