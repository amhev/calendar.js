function displayEvent(event){
    var width = 600 / event.confilcts;
    var div = document.createElement("div");
    div.className = 'event';
    div.style.width = width + "px";
    div.style.height = event.end - event.start + 'px';
    div.style.top = event.start + 'px';
    div.style.left = 10 + event.column * width + "px";

    var contentWrapper = document.createElement("div");
    contentWrapper.className = 'content-wrapper';

    var eventTitle = document.createElement('span');
    eventTitle.innerHTML = 'Sample Item';
    eventTitle.className = 'title';
    contentWrapper.appendChild(eventTitle);

    var eventLocation = document.createElement('span');
    eventLocation.innerHTML = 'Sample Location';
    eventLocation.className = 'location';
    contentWrapper.appendChild(eventLocation);

    div.appendChild(contentWrapper);

    document.getElementById("events").appendChild(div);
}

function layOutDay(events) {
    var minutes = [];
    events = events.sort(function(a, b){
        return a.start - b.start;}
    );

    for (i=0; i<720; i++) {
        minutes[i] = [];
    }

    for (i = 0; i < events.length; i++) {
        var event = events[i];
        for (var j = event.start; j < event.end; j++) {
            minutes[j].push(i);
        }
        event.confilcts = -1;
        event.column = -1;
    }

    for (var i = 0; i < 720; i++) {
        var column = 0;
        var collisions = minutes[i].length;
        for (var j = 0; j < collisions; j++) {
            event = events[minutes[i][j]];
            if (event.confilcts < collisions) {
                event.confilcts = collisions;
                if (event.column == -1) {
                    event.column = column;
                    column++;
                }
                else{
                    column = event.column + 1;
                }
            }
        }
    }

    document.getElementById("events").innerHTML = "";

    for (var i = 0; i < events.length; i++) {
        displayEvent(events[i]);
    }
	return false;
}






