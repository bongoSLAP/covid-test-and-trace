import NavBar from "../scenes/NavBar";
import '../styling/MessagingService.css'


const MessagingService = () => {

    function replyMessage(e) {
        const reply = document.createElement("div")
        reply.className = "response"

        if (e.target.messageValue.value === "hello") {
            reply.innerHTML = "this worked"
            document.getElementById("MessageBox").appendChild(reply)
        }
    }

    function userMessage(e) {
        const message = document.createElement("div")
        
        message.innerHTML = e.target.messageValue.value;
        message.className = "ownMessage"
        document.getElementById("MessageBox").appendChild(message);
        replyMessage(e)
    }

    function handleMessage(e){
        e.preventDefault();

        userMessage(e)
        
    }

    function LiveChat() {

        
        return(
            <form onSubmit={(e) => handleMessage(e)}>
                <input className="inputText" type="text" id="messageValue" placeholder="Enter message" />
                <input className="inputLogin" type="submit" value={"Enter"} />
            </form>
        )
    }

    return(
        <div>
            <NavBar />
            <div id="MessageBox" className="MessageBox"></div>
            <LiveChat />
        </div>
    )
}

export default MessagingService;