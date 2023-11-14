// accordance

$('.accord-label').on('click',function(e){

    e.preventDefault();
    let $this = $(this);

    //loop for every panel
    $('.accord-panel').each(function(){
    $this.removeClass('showing');
    }
    );

    //show the panel for the button that we click

    $this.next().toggleClass('showing');
    $this.next().slideToggle()

    //hide other panels
    $('.accord-panel').not($this.next()).slideUp();
});

//tab panels

//hide all panels
$('.tab-panel').hide();
$('#tab1').show();
$('.tab-list li').on('click', function(e){
    e.preventDefault();

    //remove the active class

    $('.tab-list li').removeClass('active');

    //hide panel

    $('.tab-panel').hide();

    //make the li that we clicked
    $(this).addClass('active');

    //find href and id
    let panel= $(this).find('a').attr('href');
    $(panel).show()
    return false;
});