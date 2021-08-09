console.log('todo app');

function login (evt) {
    evt.preventDefault ();
    var theFromData = {};
    for (i=0;i<evt.target.length;i++) {
        theFromData[evt.target[i].name] = 
            evt.target[i].value;
    }
    fetch(evt.target.action, 
        { 
            method: 'POST', 
            body: JSON.stringify(theFromData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}

function register (evt) {
    evt.preventDefault ();
    var theFromData = {};
    for (i=0;i<evt.target.length;i++) {
        theFromData[evt.target[i].name] = 
            evt.target[i].value;
    }
    fetch(evt.target.action, 
        {
            method: 'PUT', 
            body: JSON.stringify(theFromData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}

function userexists (evt) {
    evt.preventDefault ();
    url = evt.target.action + '?username=' + 
        evt.target[0].value;
    fetch(url, 
        {
            method: 'GET', 
            credentials: 'include'
        }
    );
}

function userloggedin (evt) {
    evt.preventDefault ();
    fetch(evt.target.action, 
        {
            method: 'GET', 
            credentials: 'include'
        }
    );
}
function userlogout (evt) {
    evt.preventDefault ();
    fetch(evt.target.action, 
        {
            method: 'GET', 
            credentials: 'include'
        }
    );
}
function getcategories (evt) {
    evt.preventDefault ();
    fetch(evt.target.action, 
        {
            method: 'GET', 
            credentials: 'include'
        }
    );
}

function addcategory (evt) {
    evt.preventDefault ();
    var theFromData = {};
    theFromData[evt.target[0].name] = 
        evt.target[0].value;
    fetch(evt.target.action, 
        {
            method: 'PUT', 
            body: JSON.stringify(theFromData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }        
    );
}

function delcategory (evt) {
    evt.preventDefault ();
    var url = evt.target.action + '/' + evt.target[0].value;
    fetch(url, 
        {
            method: 'DELETE', 
            credentials: 'include'
        }   
    );
}

function updatecategory (evt) {
    evt.preventDefault ();
    var url = evt.target.action + '/' + evt.target[0].value;
    var theFromData = {};
    theFromData[evt.target[1].name] = 
        evt.target[1].value;
    fetch(url, 
        {
            method: 'PATCH', 
            body: JSON.stringify(theFromData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}

function gettodos (evt) {
    evt.preventDefault ();
    var url = evt.target.action + '/' + evt.target[0].value;
    fetch(url, 
        {
            method: 'GET', 
            credentials: 'include'
        }   
    );
}

function addtodo (evt) {
    evt.preventDefault ();
    var theFromData = {};
    theFromData[evt.target[0].name] = 
        evt.target[0].value;
    fetch(evt.target.action, 
        {
            method: 'PUT', 
            body: JSON.stringify(theFromData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }        
    );
}

function deltodo (evt) {
    evt.preventDefault ();
    var url = evt.target.action + '/' + evt.target[0].value;
    fetch(url, 
        {
            method: 'DELETE', 
            credentials: 'include'
        }   
    );
}

function updatetodo (evt) {
    evt.preventDefault ();
    var url = evt.target.action + '/' + evt.target[0].value;
    var theFromData = {};
    theFromData[evt.target[1].name] = 
        evt.target[1].value;
    fetch(url, 
        {
            method: 'PATCH', 
            body: JSON.stringify(theFromData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}