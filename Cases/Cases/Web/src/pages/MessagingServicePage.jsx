import NavBar from "../scenes/NavBar";
import '../styling/MessagingService.css'


const MessagingService = () => {

    function replyMessage(e) {
        const numResponses = 4;
        const reply = document.createElement("div");
        const responses = ["this worked", "Could you tell me what the problem is", "I see, let me look into it", "From what you've told me, you likely have COVID-19"];

        let childrenCount = document.getElementsByClassName("ownMessage").length - 1;
        let responseText = responses[childrenCount];

        reply.className = "response";
        
        if (childrenCount < numResponses) {
            document.getElementById("MessageBox").innerHTML += '<div class="response">' + responseText + '</div>'
            console.log(childrenCount);
        }
    }

    function userMessage(e) {
        const message = document.createElement("div");
        message.className = "ownMessage";
        
        //If we don't care about this for the MVP, then this is the short way of doing things 
        document.getElementById("MessageBox").innerHTML += '<div class="ownMessage">' + e.target.messageValue.value + '</div>';

        replyMessage(e);
    }

    function handleMessage(e){
        e.preventDefault();

        userMessage(e)
        
    }

    function LiveChat() {

        
        return(
            <form onSubmit={(e) => handleMessage(e)}>
                <div className="userChatbox">
                <div className="aaaa"> <input className="inputText" type="text" id="messageValue" placeholder="Enter message" /> </div>
                <div className="bbbb"> <input className="inputLogin" type="submit" value={"Send"} />   </div>
                    
                    
                </div>
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