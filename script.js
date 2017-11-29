// A password generator that creates passwords in the form <word><number><word><number><word>

var words = new Array(
"Actor","Adult","Age","Agent","Air","Alarm","Anger","Angle","Apple","Army","Art","Aside","Award","Baby","Bad","Bag","Bake","Ball","Band","Bank","Bar","Base","Basis","Bat","Bath","Beach","Bear","Bed","Beer","Bell","Belt","Bench","Bend","Bet","Bid","Bike","Bill","Bird","Birth","Bit","Bite","Black","Blame","Blank","Blind","Block","Blood","Blow","Blue","Board","Boat","Body","Bone","Bonus","Book","Boot","Boss","Bowl","Box","Boy","Brain","Brave","Bread","Break","Brick","Brief","Broad","Brown","Brush","Buddy","Bug","Bunch","Burn","Bus","Buy","Buyer","Cable","Cake","Call","Calm","Camp","Candy","Cap","Car","Card","Care","Carry","Cash","Cat","Catch","Cause","Cell","Chain","Chair","Chart","Check","Chest","Child","Chip","City","Claim","Class","Clerk","Click","Clock","Cloud","Club","Clue","Coach","Coast","Coat","Code","Cold","Cook","Copy","Cost","Count","Court","Cover","Cow","Crack","Craft","Crash","Crazy","Cream","Crew","Cross","Cry","Cup","Curve","Cut","Cycle","Dad","Dance","Dare","Dark","Data","Date","Day","Dead","Deal","Dear","Death","Debt","Deep","Delay","Depth","Desk","Devil","Diet","Dig","Dirt","Dish","Disk","Dog","Door","Dot","Doubt","Draft","Drag","Drama","Draw","Dream","Dress","Drink","Drive","Drop","Drunk","Dues","Dump","Dust","Duty","Ear","Earth","East","Eat","Edge","Egg","Entry","Equal","Error","Essay","Event","Exam","Exit","Eye","Fail","Fall","Fan","Farm","Fat","Fault","Fear","Fee","Feed","Feel","Field","Fight","File","Film","Final","Fire","Fish","Fix","Floor","Flow","Fly","Focus","Fold","Food","Foot","Force","Form","Frame","Front","Fruit","Fuel","Fun","Funny","Gain","Game","Gap","Gas","Gate","Gear","Gene","Gift","Girl","Glad","Glass","Glove","Goal","Gold","Golf","Grab","Grade","Grand","Grass","Green","Guard","Guide","Guy","Habit","Hair","Half","Hall","Hand","Hang","Harm","Hat","Hate","Head","Heart","Heat","Heavy","Hell","Hello","Help","Hide","Hire","Hit","Hold","Hole","Home","Honey","Hook","Hope","Horse","Host","Hotel","Hour","House","Human","Hunt","Hurry","Hurt","Ice","Idea","Ideal","Image","Iron","Issue","Item","Job","Join","Joint","Joke","Judge","Juice","Jump","Jury","Key","Kick","Kid","Kill","King","Kiss","Knee","Knife","Lab","Lack","Lady","Lake","Land","Laugh","Law","Lay","Layer","Lead","Leave","Leg","Level","Lie","Life","Lift","Light","Limit","Line","Link","Lip","List","Load","Loan","Local","Lock","Log","Look","Loss","Love","Low","Luck","Lunch","Mail","Main","Major","Male","Mall","Map","March","Mark","Match","Mate","Math","Meal","Meat","Media","Meet","Menu","Mess","Metal","Milk","Mind","Mine","Minor","Miss","Mix","Mode","Model","Mom","Money","Month","Mood","Motor","Mouse","Mouth","Move","Movie","Mud","Music","Nail","Name","Nasty","Neat","Neck","Nerve","Net","News","Night","Noise","North","Nose","Note","Novel","Nurse","Offer","Oil","Oven","Owner","Pace","Pack","Page","Pain","Paint","Pair","Panic","Paper","Park","Party","Pass","Past","Path","Pause","Pay","Peace","Peak","Pen","Phase","Phone","Photo","Piano","Pick","Pie","Piece","Pin","Pipe","Pitch","Pizza","Plan","Plane","Plant","Plate","Play","Poem","Poet","Pool","Pop","Post","Pot","Pound","Power","Press","Price","Pride","Print","Prior","Prize","Proof","Pull","Punch","Push","Queen","Quiet","Quit","Quote","Race","Radio","Rain","Raise","Range","Rate","Ratio","Raw","Reach","Read","Red","Rent","Reply","Rest","Rice","Rich","Ride","Ring","Rip","Rise","Risk","River","Road","Rock","Role","Roll","Roof","Rope","Rough","Round","Row","Royal","Rub","Ruin","Rule","Run","Rush","Sad","Safe","Sail","Salad","Sale","Salt","Sand","Save","Scale","Scene","Score","Screw","Sea","Self","Serve","Set","Sex","Shake","Shame","Shape","Share","Shift","Shine","Ship","Shirt","Shock","Shoe","Shoot","Shop","Shot","Sick","Sign","Silly","Sink","Site","Size","Skill","Skin","Skirt","Sky","Sleep","Slice","Slide","Slip","Smell","Smile","Smoke","Snow","Sock","Soft","Soil","Solid","Song","Sort","Sound","Soup","South","Space","Spare","Speed","Spell","Spend","Spite","Split","Sport","Spot","Spray","Staff","Stage","Stand","Star","Start","Stay","Steal","Step","Stick","Stock","Stop","Store","Storm","Story","Strip","Study","Stuff","Style","Suck","Sugar","Suit","Sun","Sweet","Swim","Swing","Table","Tale","Talk","Tank","Tap","Task","Taste","Tax","Tea","Teach","Team","Tear","Tell","Term","Test","Text","Theme","Tie","Till","Time","Tip","Title","Toe","Tone","Tool","Tooth","Top","Topic","Total","Touch","Tour","Towel","Tower","Town","Track","Trade","Train","Trash","Treat","Tree","Trick","Trip","Truck","Trust","Truth","Try","Tune","Twist","Type","Uncle","Unit","Upper","User","Value","Vast","Video","View","Virus","Visit","Voice","Wait","Wake","Walk","Wall","War","Wash","Watch","Water","Wave","Wear","Web","Week","West","Wheel","White","Wife","Win","Wind","Wine","Wing","Wish","Woman","Wood","Word","World","Worry","Worth","Wrap","Yard","Youth","Zone"
);
shuffle(words);
var wordIndex = 0;

var nums = new Array(
"001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "031", "032", "033", "034", "035", "036", "037", "038", "039", "040", "041", "042", "043", "044", "045", "046", "047", "048", "049", "050", "051", "052", "053", "054", "055", "056", "057", "058", "059", "060", "061", "062", "063", "064", "065", "066", "067", "068", "069", "070", "071", "072", "073", "074", "075", "076", "077", "078", "079", "080", "081", "082", "083", "084", "085", "086", "087", "088", "089", "090", "091", "092", "093", "094", "095", "096", "097", "098", "099", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "125", "127", "128", "130", "131", "133", "135", "140", "141", "144", "145", "147", "150", "151", "155", "159", "160", "161", "165", "166", "170", "171", "175", "177", "180", "181", "185", "188", "190", "191", "195", "199", "200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "215", "220", "221", "223", "224", "225", "226", "227", "228", "229", "230", "232", "233", "234", "235", "240", "242", "244", "245", "246", "250", "252", "255", "256", "258", "260", "262", "265", "266", "270", "272", "275", "277", "280", "282", "285", "288", "290", "292", "295", "299", "300", "301", "302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "313", "315", "320", "321", "322", "323", "325", "330", "331", "332", "334", "335", "336", "337", "338", "339", "340", "343", "344", "345", "350", "353", "355", "357", "360", "363", "365", "366", "369", "370", "373", "375", "377", "380", "383", "385", "388", "390", "393", "395", "399", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "414", "415", "420", "422", "424", "425", "430", "432", "433", "434", "435", "440", "441", "442", "443", "445", "446", "447", "448", "449", "450", "454", "455", "456", "460", "464", "465", "466", "468", "470", "474", "475", "477", "480", "484", "485", "488", "490", "494", "495", "499", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511", "512", "515", "520", "522", "525", "530", "531", "533", "535", "540", "543", "544", "545", "550", "551", "552", "553", "554", "555", "556", "557", "558", "559", "560", "565", "566", "567", "570", "575", "577", "579", "580", "585", "588", "590", "595", "599", "600", "601", "602", "603", "604", "605", "606", "607", "608", "609", "610", "611", "615", "616", "620", "622", "625", "626", "630", "633", "635", "636", "640", "642", "644", "645", "646", "650", "654", "655", "656", "660", "661", "662", "663", "664", "665", "667", "668", "669", "670", "675", "676", "677", "678", "680", "685", "686", "688", "690", "695", "696", "699", "700", "701", "702", "703", "704", "705", "706", "707", "708", "709", "710", "711", "715", "717", "720", "722", "725", "727", "730", "733", "735", "737", "740", "741", "744", "745", "747", "750", "753", "755", "757", "760", "765", "766", "767", "770", "771", "772", "773", "774", "775", "776", "778", "779", "780", "785", "787", "788", "789", "790", "795", "797", "799", "800", "801", "802", "803", "804", "805", "806", "807", "808", "809", "810", "811", "815", "818", "820", "822", "825", "828", "830", "833", "835", "838", "840", "844", "845", "848", "850", "852", "855", "858", "860", "864", "865", "866", "868", "870", "875", "876", "877", "878", "880", "881", "882", "883", "884", "885", "886", "887", "889", "890", "895", "898", "899", "900", "901", "902", "903", "904", "905", "906", "907", "908", "909", "910", "911", "915", "919", "920", "922", "925", "929", "930", "933", "935", "939", "940", "944", "945", "949", "950", "951", "955", "959", "960", "963", "965", "966", "969", "970", "975", "977", "979", "980", "985", "987", "988", "989", "990", "991", "992", "993", "994", "995", "996", "997", "998"
);
shuffle(nums);
var numIndex = 0;

var spec = new Array(
"!", "#", "$", "%", "*", "+", "-", ":", "=", "?", "@", "."
);
shuffle(spec);
var specIndex = 0;

// Event timings
$interval = 6
//repeat(putTime,$interval);
setTimeout(initPwd);

function repeat(handle, seconds) {
  setTimeout(handle);
  setInterval(handle, seconds*1000);
}

// Return a random word
function w() {
  var out = words[wordIndex++];
  wordIndex %= words.length;
  return out;
}

// Return a random word
function s() {
  var out = spec[specIndex++];
  specIndex %= spec.length;
  return out;
}

// Return a random number
function n() {
  var out = nums[numIndex++];
  numIndex %= nums.length;
  return out;
}

// Return a number on [0,999]
function nx() {
  return pad3(Math.floor(Math.random()*1000));
}

// Notes
// Animationend event is never thrown with iteration-count=infinite
// Use animation-iteration with infinite

$blocks = 16
$cycle = 20
$rows = $blocks;

function initPwd() {
  $('#PwdRoot').empty();

  var pwdTable = $('<table/>');

  for (i = 0; i < $rows; i++) {
    pwdTable.append(getPwdRow(i));
  }

  $('#PwdRoot').append(pwdTable);
}

function getPwdRow(row) {
  var pwdBlock = getPwdBlock(row, 0);
  var pwdRow = $('<tr/>');
  var pwdCell = $('<td/>');
  pwdCell.css('height', '64px');
  pwdCell.append(pwdBlock);
  pwdRow.append(pwdCell);
  return pwdRow;
}

function getPwdBlock(row, col) {
  var which = (col*$rows)+row;
  var pwdLeft = $('<button/>');
  pwdLeft.attr('id','pwd'+which);
  pwdLeft.css({ width: "300px" });
  pwdLeft.attr('type','button');
  pwdLeft.addClass('btn');
  pwdLeft.addClass('btn-default');
  pwdLeft.addClass('btn-pwd');
  pwdLeft.attr('data-toggle','popover');
  //pwdLeft.attr('title','Copied');
  pwdLeft.attr('data-content','Copied');
  pwdLeft.css('border-color', '#000000');
  var newPwd = (which<($blocks/2)) ? pwdV5() : pwdV6();
  //console.log(">>> ("+which+"): "+newPwd);
  pwdLeft.append(newPwd);
  pwdLeft.attr('data-clipboard-text',newPwd);

  var pwdRight = $('<button/>');
  pwdRight.attr('id','flag'+which);
  pwdRight.attr('type','button');
  pwdRight.addClass('btn');
  pwdRight.addClass('btn-success');
  pwdRight.addClass('fader');
  pwdRight.css('animation-name','FlagCycleInit');
  pwdRight.css('animation-duration', $cycle+'s');
  pwdRight.css('background-color', '#007E33');
  pwdRight.css('border-color', '#000000');
  var delay = (which / $blocks) * $cycle;
  //console.log("delay ("+which+"): "+delay+": "+col);
  pwdRight.css('animation-delay',delay+'s');
  pwdRight.on('animationiteration', {"which": which}, pwdReset);
  pwdRight.append('&nbsp;');
  
  var pwdDiv = $('<div/>');
  pwdDiv.addClass('btn-group');
  pwdDiv.addClass('btn-group-lg');
  pwdDiv.append(pwdLeft);
  pwdDiv.append(pwdRight);
  return pwdDiv;
}

function pwdReset(event) {
  //console.log("reset: "+event.data.which);
  var newPwd = (event.data.which<($blocks/2)) ? pwdV5() : pwdV6();
  var pwdHandle = $('#pwd'+event.data.which)
  pwdHandle.html(newPwd);
  pwdHandle.attr('data-clipboard-text',newPwd);
  var flagHandle = $('#flag'+event.data.which)
  flagHandle.css('animation-name','FlagCycleMain');
  flagHandle.css('animation-delay','');
}

$(function () {
  $('[data-toggle="popover"]').popover()
  $('[data-toggle="popover"]').on('shown.bs.popover', function() {
    this_popover = $(this);
    setTimeout(function () {
      this_popover.popover('hide');
    }, 333);
  });
})

// Word123Word456Word
function pwdV1() {
  return w() + n() + w() + n() + w();
}
 
// Word123Word231Word
function pwdV2() {
  var n = getNumbersV2();
  return w() + n[0] + w() + n[1] + w();
}
 
// WordWord**123
function pwdV5() {
  return w() + w() + s() + s() + n();
}
 
// WordWordWord*123
function pwdV6() {
  return w() + w() + w() + s() + n();
}
 
// 483, 843... entropy?
function getNumbersV2() {
  var dgt = new Array(0,1,2,3,4,5,6,7,8,9);
  shuffle(dgt);
  var plt = new Array(dgt[0],dgt[0],dgt[1],dgt[1],dgt[2],dgt[2]);
  shuffle(plt);
  var out = new Array(""+plt[0]+plt[1]+plt[2],""+plt[3]+plt[4]+plt[5]);
  return out;
}

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

function pad2(x) {
  var pad = "";
  if (x<10) pad += '0';
  return pad+x;
}

function pad3(x) {
  var pad = "";
  if (x<10) pad += '0';
  if (x<100) pad += '0';
  return pad+x;
}
