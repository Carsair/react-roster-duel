var Player = function(name) {
  this.name = name;
}

Player.prototype.attack = function() {
  console.log("attack");
};

Player.prototype.render = function(container) {
  template  = "<div class=\"Player\">";
  template += this.name;
  template += "</div>";
  if(container){
    $(container).html(template);
  }
  return template;
};

var LeftStriker = new Player("Sergio Aguero");
