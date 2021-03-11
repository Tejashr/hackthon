const clientId = "0bcbb6ba80774c3eb325c193449c67c1";
const clientSecret = "74dd6795ec16424391a10050906f52a7";
const playlistID = '3N6BKeMfREQ6dPmymMYk93';

var getToken = fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
  },
  body: "grant_type=client_credentials",
});

getToken
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    var token = response.access_token;
    var getPlayList = fetch(
      "https://api.spotify.com/v1/playlists/"+playlistID,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    getPlayList
      .then(function (response) {
        return response.json();
    })
      .then(function (response) {
      
              console.log(response.followers);
              console.log(response.tracks.items[0].track.name);
              console.log(response.tracks.items[0].track.track_number);
              console.log(response.tracks.items[5].track);

              for(let i=0;i<response.tracks.items.length;i++)
              {
                var tr=document.createElement("tr");
                document.querySelector(".tablebody").append(tr);
                var td1=document.createElement("td");
                td1.innerHTML=response.tracks.items[i].track.track_number;
                var td2=document.createElement("td");
                td2.innerHTML=response.tracks.items[i].track.name;
                tr.append(td1,td2);

              }

              



    });
});

