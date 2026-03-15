let messages = [
"Initializing Hacking",
"Reading your Files",
"Password files Detected",
"Sending all passwords and personal files to server",
"Cleaning up"
]

let terminal = document.getElementById("terminal")

function randomDelay(){
    return new Promise(resolve=>{
        let delay = Math.random()*6000 + 1000
        setTimeout(resolve, delay)
    })
}

async function showMessage(msg){

    let line = document.createElement("div")
    terminal.appendChild(line)

    let dots = 0

    let interval = setInterval(()=>{
        dots++
        line.innerText = msg + ".".repeat(dots)

        if(dots == 3){
            dots = 0
        }
    },500)

    await randomDelay()

    clearInterval(interval)
    line.innerText = msg + "..."
}

async function startHack(){

    for(let msg of messages){
        await showMessage(msg)
    }

}

startHack()