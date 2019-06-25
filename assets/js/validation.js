(function(){
    var tab = document.querySelectorAll('a.nav-link'),
        tabContent = document.querySelectorAll('tab-pane');

    for (var i=0; i<tab.length; i++){
        tab[i].addEventListener('click', changeTab);
    }   

    function changeTab(e){
        console.log('hi');
        //clear all 
        for(var i=0; i<tab.length; i++){
            tab[i].classList.remove('active');
        }

        e.target.classList.add('active');
    }

})();