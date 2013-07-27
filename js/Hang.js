
var randomNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;  

var collection = [
    fruits = {
        'words': ['APPLE', 'ORANGE', 'MANGO', 'BANANA','COCONUT','TOMATO','PINEAPPLE','GRAPE','APRICOT','BLACKBERRY','WATERMELON', 'GUAVA','CHERRY','AVOCADO','BREADFRUIT','BILBERRY','BLUEBERRY','JACKFRUIT','LYCHEE','HONEYDEW'],
        'group' : 'Name of a Fruit' 
    },
    
    city = {
        'words' : ['LONDON', 'PARIS', 'ROME', 'NEW YORK','KATHMANDU','DELHI','DHAKA','BEIJING','MUMBAI','MOSCOW','MEXICO','TOKYO','LOS ANGELES','OSAKA','KARACHI','PUNE','MADRID','BERLIN','CAPE TOWN','NEW TAIPEI CITY','LAHORE','BAGHDAD'],
    'group' :'Name of City'
    },

    movie = {
        'words' : ['SHAWSHANK REDEMPTION','LIFE OF PI','FORREST GUMP','BATMAN BEGINS','THE DARK KNIGHT','THE DARK KNIGHT RISES','MEN IN BLACK','CHRONICLES OF NARNIA','THE HOBBIT','DIE HARD','AVENGERS','IRON MAN','EVIL DEAD','PAIN AND GAIN','FLIGHT','MEN IN BLACK','TITANIC','DARK SHADOWS','AVATAR','MAN ON WIRE','TOY STORY','BATTLESHIP'],
        'group' : 'Name of Movie'
    },
    
    country = {
        'words' : ['NEPAL','INDIA','CHINA','USA','AFGHANISTAN','ARGENTINA','AUSTRALIA','AUSTRIA','BANGLADESH','BRAZIL','CANADA','CHINA','INDIA','INDONESIA','WEST INDIES','SCOTLAND','NETHERLAND','KENYA','OMAN','BERMUDA','NAMIBIA','SPAIN','JAPAN','NORTH KOREA', 'SOUTH KOREA','MEXICO','DENMARK','BRAZIL'],
        'group' : 'Name of Country'
    },
    
    FCLUB = {
        'words' : ['CHELSEA','BARCELONA','BAYERN MUNICH','EVERTON','WIGAN','ARSENAL','LIVERPOOL','WEST HAM UNITED','MANCHESTER UNITED','MANCHESTER CITY','ASTON VILLA','TOTTENHAM HOTSPUR','QUEEN PARK RANGERS','NEWCASTLE UNITED','WEST BROMWICH ALBION','SWANSEA CITY','STOKE CITY','FULHAM','SOUTHAMPTON','SUNDERLAND','NORWICH CITY','WIGAN ATHLETIC','READING','REAL MADRID','ATHLETICO MADRID','ATHLETICO BILBAO','VALENSIA','GALATASARAHY','PARIS SAINT GERMAN','BORRUSIA DORTMUND'],
        'group' : 'Name of Football Club'
    }
]

/*
var Fplayer=['FRANK LAMPARD','DIDIER DROGBA','PTR CECH','JUAN MATA','JOHN TERRY','BRANISLAV IVANOVIC','EDEN HAZARD','FERNANDO TORRES','ROBERT LEWANDOWISKI','DEMBA BA','DAVID LUIZ','VICTOR MOSES','ASHLEY COLE','PHILIP LAHM','THOMAS MULLER','LEONEL ANDRES MESSI','ANDRES INIESTA','XAVI','XABI ALONSO','PIQUE','VICTOR VALDES','IKER CASSILAS','RICARDO KAKA','CHRISTIANO RONALDO','PELE','DIEGO MARADONA','WAYNE ROONERY','ROB VAN PERSIE','SERGIO BOSQUETS','KARIM BENZEMA','MESUT OZIL','MARIO BALOTELLI','DAVID BECKHAM','PAUL SCHOLES','ROSS TURNBILL','SERGIO AGUERO'];
var Animals=['DOG','CAT','LION','MOUSE','ELEPHANT','HORSE','BEAR','ALLIGATOR','FOX','MONKEY','TIGER','LEOPARD','RAT','DEER','RHINOCEROS','CHEETAH','DINOSAUR','DRAGON','FISH','FROG','PANDA','GOAT','MULE','SHARK','SNAKE','TURTLE','BUFFALO','WOLF','ZEBRA'
,'YAK','ZEBRA'];
var Birds=['DUCK','PARROT','CROW','PENGUIN','HEN','OSTRICH','OWL','PHEASANT','PEACOCK','PIGEON','SPARROW','KIWI','GOOSE',
'EAGLE','HUMMINGBIRD','MOUSEBIRD','DOVE','MANAKIN','WOODCREPPER','BAT'];
var IPL=['RAJASTHAN ROYALS','CHENNAI SUPER KINGS','MUMBAI INDIANS','DELHI DAREDEVILS','KINGS XI PUNJAB','KOLKATA KNIGHT RIDERS','MUMBAI INDIANS','PUNE WARRIORS INDIA','SUNRISERS HYDERABAD'];
var Novels=['ULYSSES','THE GREAT GATSBY','LOLITA','THE LORD OF THE RINGS','BRAVE NEW WORLD','THE SOUND AND THE FURY',
'DARKNESS AT NOON','SONS AND LOVERS','THE GRAPES OF WRATH','UNDER THE VOLCANO','THE WAY OF ALL FLESH','TO KILL A MOCKINGBIRD',
'MISSION EARTH','GONE WITH THE WIND','THE AGE OF INNOCENCE','HEART OF DARKNESS','A FAREWELL TO ARMS','ANGLE OF REPOSE','LOVING',
'TOBACCO ROAD'];
var Cplayers=['MAHENDRA SINGH DHONI','MICHAEL HUSSY','RAVINDRA JADEJA','MURALI VIJAY','DWAYNE BRAVO','CHRIS MORRIS',
'SURESH RAINA','RICKY PONTING','AIDEN BLIZZARD','HARBHAJAN SINGH','LASITH MALINGA','GLENN MAXWELL','DWAYNE SMITH','ROHIT SHARMA'
,'JAMES FRANKLIN','PHILIP HUGHES','MITCHELL JOHNSON','KIERON POLLARD','SACHIN TENDULKAR','VIRAT KHOLI','DANIEL CHRISTIAN','TILAKARATNE DILSHAN','CHRIS GAYLE','KUMAR SANGAKKARA','NATHAN MCCULLUM','CAMERON WHITE','ANGELO MATHEWS','WAYNE PARNELL',
'YUVRAJ SINGH','MAHELA JAYAWARDENE','VIRENDRA SHEWAG','DAVID WARNER','UNMUKT CHAND','IRFAN PATHAN','GAUTAM GAMBHIR','BRETT LEE',
'YUSUF PATHAN','ADAM GILCHRIST','DAVID MILLER','DAVID HUSSEY','RAHUL DRAVID','BRAD HOGG','AJINKYA RAHANE','SHANE WATSON','BRAD HODGE','SHAHID AFRIDI','HASHIM AMLA'];
var continent=['AFRICA','EUROPE','ASIA','NORTH AMERICA','SOUTH AMERICA','ANTARCTICA','AUSTRALIA'];
var band=['RAGE AGAINST THE MACHINE','METALLICA','RADIOHEAD','THE BEATLES','LED ZEPPELIN','PINK FLOYD','NIRVANA','IRON MAIDEN',
'RED HOT CHILI PEPPERS','SYSTEM OF A DOWN','THE CLASH','PANTERA','BLACK SABBATH','LAMB OF GOD','THE DOORS','TOOL',
'QUEENS OF THE STONE AGE','THE WHO','THE ROLLING STONES','LINKIN PARK' ];
*/

// alphabets in an array for binding
var alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wrongGuess = 0;
var ranfix;
var j = 0;
var len = 0;

$(document).ready(function () {
    // chooses a word randomly
    var ran = chooseWord();
    //console.log(ran);
    var length = ran.length; 
    ranfix = ran;

    for (i = 0; i < length; i++) {
        if (ranfix[i] == ' ')
            len++;
    }

    $(".inputBtn").click(function() {
        j = 0;
	this.setAttribute("disabled","disabled");
	this.setAttribute("style","background-color:rgb(255,255,0)");
        hideIt(this.value);
        setValue(this.value, length);
        changeImage("#img");
    })

    $("#group").attr('value', collection[randomNum-1].group)

    wordHide(length);

    wordHideBlank(ranfix);

});

function hideIt(values) {
    $(values).prop('value', '');
    $(values).attr("disabled","true");
}

function setValue(values, ln) {

    for (var k = 0; k <= 24; k++) {
        if(ranfix[k] == values) {
            $("#word" + (k+1)).val(values);
            j = 1;
            len++;
        }
    }
    
    if (j == 0)
        wrongGuess++;

    if (len >= ln) {
        $("#resultShow").val("Congrats! You won the game!!");
        $("#input").attr("disabled", "true");
        $("input").not("#restart").attr('disabled', 'true');
    }
}

function changeImage(values) {
    if (wrongGuess == 1)
        $(values).attr('src', "img/hang1.gif");
    if (wrongGuess == 2)
        $(values).attr('src', "img/hang2.gif");
    if (wrongGuess == 3)
        $(values).attr('src', "img/hang3.gif");
    if (wrongGuess == 4)
        $(values).attr('src', "img/hang4.gif");
    if (wrongGuess == 5)
        $(values).attr('src', "img/hang5.gif");
    if (wrongGuess == 6) {
        $(values).attr('src', "img/hang6.gif");
        $("#resultShow").val("Sorry !! The Correct word is :  "+ranfix);
        $("input").not("#restart").attr('disabled', 'true');
    }
}

function chooseWord() {
    // returns random word from random object
    return collection[randomNum-1].words[parseInt(Math.random() * collection[randomNum-1].words.length)];
}

function wordHide(temp_length)
{
    for ( var i = (temp_length + 1); i <= 25; i++ )
        $("#word" + i).hide();
}

function wordHideBlank(ranfix) {
    for ( var i = 1; i <= 23; i++ ) {
        if(ranfix[i] == ' ')
            $("#word" + (i+1)).css('visibility', 'hidden');
    }
}
