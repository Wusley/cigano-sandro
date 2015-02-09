( function() {

  document.addEventListener('polymer-ready', function() {
    var navicon = document.getElementById('navicon');
    var drawerPanel = document.getElementById('drawerPanel');
    navicon.addEventListener('click', function() {
      drawerPanel.togglePanel();
    });
  });

    function validate() {
      var decorator = document.getElementById('paper1');
      var input = document.getElementById('input1');
      decorator.isInvalid = !input.validity.valid;
    }

} () );