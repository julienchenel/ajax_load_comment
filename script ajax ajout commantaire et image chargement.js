$("<div id='loading'></div>").insertAfter("#more_com"); // Nous ajoutons un élément après le bouton

$("#loading").css({ // Nous appliquons du CSS à cet élément pour y afficher l'image en background
    background : "url(load.gif)", // On affiche l'image en arrière-plan
    display : "none"  // Nous cachons l'élément
});

$("#more_com").click(function(){

    $.get(
    
        'more_com.php',
        false,
        'fonction_retour',
        'text'

    );

    $("#loading").ajaxStart(function(){ // Nous ciblons l'élément #loading qui est caché
        $(this).show(); // Nous l'affichons quand la requête AJAX démarre
    });

});
// Il existe également un évènement ajaxComplete() que vous pourriez utiliser 
// pour cacher à nouveau le loader. Ainsi, son affichage ne durera que la durée de la requête AJAX.