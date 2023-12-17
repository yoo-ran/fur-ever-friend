// Bootstrap Form Starter
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
    })
})()


// Google Map Plugin
$('.map').googleMaps({
    // My Google Map API Key
    key: 'AIzaSyALiMLroVOKY1rfeN9oanTWGif4dNQ6Hw8',

    points: [{

        //  the location of BCIT 
        lat: 49.283569,
        lng: -123.115021,
        marker: true,
        title: 'Marker title',
        infoWindow: 'Info window content'
      
    }],
    type:'hybrid',
    zoom: 15,
    responsive:true
  });