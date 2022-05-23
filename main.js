let mobile = document.querySelector('.mobile-nav');
let navElement = document.querySelector('nav');
    
mobile.addEventListener('click', function(){
    this.classList.toggle('is-active');
    navElement.classList.toggle('is-active');
                            
 });

                  