//Array containing all the timezones and regions of the world
let regionArr = [
  "Asia / Dubai",
  "Asia / Dushanbe",
  "Asia / Famagusta",
  "Asia / Gaza",
  "Asia / Hebron",
  "Asia / Ho_Chi_Minh",
  "Asia / Hong_Kong",
  "Asia / Hovd",
  "Asia / Irkutsk",
  "Asia / Jakarta",
  "Asia / Jayapura",
  "Asia / Jerusalem",
  "Asia / Kabul",
  "Asia / Kamchatka",
  "Asia / Karachi",
  "Asia / Kathmandu",
  "Asia / Khandyga",
  "Asia / Kolkata",
  "Asia / Krasnoyarsk",
  "Asia / Kuala_Lumpur",
  "Asia / Kuching",
  "Asia / Macau",
  "Asia / Magadan",
  "Asia / Makassar",
  "Asia / Manila",
  "Asia / Nicosia",
  "Asia / Novokuznetsk",
  "Asia / Novosibirsk",
  "Asia / Omsk",
  "Asia / Oral",
  "Asia / Pontianak",
  "Asia / Pyongyang",
  "Asia / Qatar",
  "Asia / Qostanay",
  "Asia / Qyzylorda",
  "Asia / Riyadh",
  "Asia / Sakhalin",
  "Asia / Samarkand",
  "Asia / Seoul",
  "Asia / Shanghai",
  "Asia / Singapore",
  "Asia / Srednekolymsk",
  "Asia / Taipei",
  "Asia / Tashkent",
  "Asia / Tbilisi",
  "Asia / Tehran",
  "Asia / Thimphu",
  "Asia / Tokyo",
  "Asia / Tomsk",
  "Asia / Ulaanbaatar",
  "Asia / Urumqi",
  "Asia / Ust - Nera",
  "Asia / Vladivostok",
  "Asia / Yakutsk",
  "Asia / Yangon",
  "Asia / Yekaterinburg",
  "Asia / Yerevan",
  "Atlantic / Azores",
  "Atlantic / Bermuda",
  "Atlantic / Canary",
  "Atlantic / Cape_Verde",
  "Atlantic / Faroe",
  "Atlantic / Madeira",
  "Atlantic / Reykjavik",
  "Atlantic / South_Georgia",
  "Atlantic / Stanley",
  "Australia / Adelaide",
  "Australia / Brisbane",
  "Australia / Broken_Hill",
  "Australia / Darwin",
  "Australia / Eucla",
  "Australia / Hobart",
  "Australia / Lindeman",
  "Australia / Lord_Howe",
  "Australia / Melbourne",
  "Australia / Perth",
  "Australia / Sydney",
  "CET",
  "CST6CDT",
  "EET",
  "EST",
  "EST5EDT",
  "Etc / GMT",
  "Etc / GMT + 1",
  "Etc / GMT + 10",
  "Etc / GMT + 11",
  "Etc / GMT + 12",
  "Etc / GMT + 2",
  "Etc / GMT + 3",
  "Etc / GMT + 4",
  "Etc / GMT + 5",
  "Etc / GMT + 6",
  "Etc / GMT + 7",
  "Etc / GMT + 8",
  "Etc / GMT + 9",
  "Etc / GMT - 1",
  "Etc / GMT - 10",
  "Etc / GMT - 11",
  "Etc / GMT - 12",
  "Etc / GMT - 13",
  "Etc / GMT - 14",
  "Etc / GMT - 2",
  "Etc / GMT - 3",
  "Etc / GMT - 4",
  "Etc / GMT - 5",
  "Etc / GMT - 6",
  "Etc / GMT - 7",
  "Etc / GMT - 8",
  "Etc / GMT - 9",
  "Etc / UTC",
  "Europe / Amsterdam",
  "Europe / Andorra",
  "Europe / Astrakhan",
  "Europe / Athens",
  "Europe / Belgrade",
  "Europe / Berlin",
  "Europe / Brussels",
  "Europe / Bucharest",
  "Europe / Budapest",
  "Europe / Chisinau",
  "Europe / Copenhagen",
  "Europe / Dublin",
  "Europe / Gibraltar",
  "Europe / Helsinki",
  "Europe / Istanbul",
  "Europe / Kaliningrad",
  "Europe / Kiev",
  "Europe / Kirov",
  "Europe / Lisbon",
  "Europe / London",
  "Europe / Luxembourg",
  "Europe / Madrid",
  "Europe / Malta",
  "Europe / Minsk",
  "Europe / Monaco",
  "Europe / Moscow",
  "Europe / Oslo",
  "Europe / Paris",
  "Europe / Prague",
  "Europe / Riga",
  "Europe / Rome",
  "Europe / Samara",
  "Europe / Saratov",
  "Europe / Simferopol",
  "Europe / Sofia",
  "Europe / Stockholm",
  "Europe / Tallinn",
  "Europe / Tirane",
  "Europe / Ulyanovsk",
  "Europe / Uzhgorod",
  "Europe / Vienna",
  "Europe / Vilnius",
  "Europe / Volgograd",
  "Europe / Warsaw",
  "Europe / Zaporozhye",
  "Europe / Zurich",
  "HST",
  "Indian / Chagos",
  "Indian / Christmas",
  "Indian / Cocos",
  "Indian / Kerguelen",
  "Indian / Mahe",
  "Indian / Maldives",
  "Indian / Mauritius",
  "Indian / Reunion",
  "MET",
  "MST",
  "MST7MDT",
  "PST8PDT",
  "Pacific / Apia",
  "Pacific / Auckland",
  "Pacific / Bougainville",
  "Pacific / Chatham",
  "Pacific / Chuuk",
  "Pacific / Easter",
  "Pacific / Efate",
  "Pacific / Enderbury",
  "Pacific / Fakaofo",
  "Pacific / Fiji",
  "Pacific / Funafuti",
  "Pacific / Galapagos",
  "Pacific / Gambier",
  "Pacific / Guadalcanal",
  "Pacific / Guam",
  "Pacific / Honolulu",
  "Pacific / Kiritimati",
  "Pacific / Kosrae",
  "Pacific / Kwajalein",
  "Pacific / Majuro",
  "Pacific / Marquesas",
  "Pacific / Nauru",
  "Pacific / Niue",
  "Pacific / Norfolk",
  "Pacific / Noumea",
  "Pacific / Pago_Pago",
  "Pacific / Palau",
  "Pacific / Pitcairn",
  "Pacific / Pohnpei",
  "Pacific / Port_Moresby",
  "Pacific / Rarotonga",
  "Pacific / Tahiti",
  "Pacific / Tarawa",
  "Pacific / Tongatapu",
  "Pacific / Wake",
  "Pacific / Wallis",
  "WET",
];

//When a user inputs a timezone and clicks submit, display current time of that timezone.
//Variable is updated on receipt of word input by the user.
let apiSearch;
//Target user input
let userInput = document.getElementById("timeInputByUser");
//console.log(userInput);
//Target submit button to get the current timezone
let submitButton = document.getElementById("timeButton");
//Function handleClick updates the variable according to userinput
//check the input box
//Update the variable with user input
function handleClick() {
  apiSearch = userInput.value;
  //console.log(apiSearch);
  fetchTimezone(apiSearch);
}

//Invoke function handleClick every time submit button is clicked
submitButton.addEventListener("click", handleClick);

//input value from user to be used in API
async function fetchTimezone(apiSearch) {
  const response = await fetch(
    `http://worldtimeapi.org/api/timezone/${apiSearch}`
  );
  const data = await response.json();

  showCurrentTime(data);
}

let currentTimeDiv = document.getElementById("myBg");

async function showCurrentTime(data) {
  currentTime = document.createElement("h3");
  currentTime.innerHTML = data.datetime;
  currentTimeDiv.appendChild(currentTime);
  userInput.value = "";
  currentTime = "";
}

//Use an autocomplete dropdown list to select the timezone region  and get current time for that region

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*initiate the autocomplete function on the "myInput" element, and pass along the regionss array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), regionArr);

let submitDropdownButton = document.getElementById("dropdownSubmit");

submitDropdownButton.addEventListener("submit", handleDropdownClick);

function handleDropdownClick() {
  console.log("test");
  let userSearch = document.getElementById("myInput").value;
  fetchTimezoneRegion(userSearch);
}

// async function fetchTimezoneRegion(userSearch) {
//   const response = await fetch(
//     `http://worldtimeapi.org/api/timezone/${userSearch}`
//   );
//   const data = await response.json();

//   showCurrentTime(data);
// }

//let currentTimeDiv = document.getElementById("currentTime");

// async function showCurrentTime(data) {
//   currentTime = document.createElement("h3");
//   currentTime.innerHTML = data.datetime;
//   currentTimeDiv.appendChild(currentTime);
//   userInput.value = "";
//   currentTime = "";
// }
