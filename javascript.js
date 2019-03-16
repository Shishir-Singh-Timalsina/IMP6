var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

function getImages(){
    
    document.getElementById("images").innerHTML = "";
    var imagetag = document.getElementById("name").value;
    
    $.getJSON( flickerAPI, {
        tags: imagetag,
        tagmode: "any",
        format: "json"
    })
    .done(function( data ) {
        $.each( data.items, function( i, item ) {
            $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
            if ( i === 7 ) {
                return false;
            }
        });
    });
    
}
 