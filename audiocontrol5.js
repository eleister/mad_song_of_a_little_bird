AFRAME.registerComponent('playsound4', {
  
    init: function () {
      
      let audiosource = document.querySelector('#start5');
      

      let musicplay = () => {
      audiosource.components.sound.playSound()
      }
      
      this.el.addEventListener('click', musicplay);

    }});