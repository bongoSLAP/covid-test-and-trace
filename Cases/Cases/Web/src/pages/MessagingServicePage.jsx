import NavBar from "../scenes/NavBar";
import '../styling/MessagingService.css'


const MessagingService = () => {

    async function replyMessage(e) {
        const numResponses = 4;
        const reply = document.createElement("div");
        const responses = ["this worked", "Could you tell me what the problem is", "I see, let me look into it", "From what you've told me, you likely have COVID-19"];

        let childrenCount = document.getElementsByClassName("ownMessage").length - 1;
        let responseText = responses[childrenCount];

        reply.className = "response";
        
        if (childrenCount < numResponses) {
            await typingMessage();
            document.getElementById("MessageBox").innerHTML += '<div class="response">' + responseText + '</div>'
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
        document.getElementById("messageValue").value = "";
    }

    function LiveChat() {

        
        return(
                <form onSubmit={(e) => handleMessage(e)} className="LiveChatForm">
                    <div className="userChatbox">
                    <input className="inputText" type="text" id="messageValue" placeholder="Enter message" />
                    <input className="inputLogin" type="submit" value={"Send"} />
                    </div>
                </form>
        )
    }

    function IsTyping () {
        
        return (
            <div className="userTyping" id="userTyping"></div>
        )
    }

    async function typingMessage() {

        //"User is typing" to appear after user submits form, but before message appears
        //Would setInterval to several seconds in order to prevent new message appearing
        //During interval "user is typing" div appears
        //When interval ends, div disappears, new message takes its place

        let userTyping = document.getElementById("userTyping");

        userTyping.innerHTML = '<div class="isTypingMessage id="isTypingMessage">' + "Doctor is Typing" + '</div>';
        await sleep(2000);
        userTyping.innerHTML = '<div class="isTypingMessage" id="isTypingMessage"></div>';
        document.getElementById("isTypingMessage").remove();
        //userTyping.style.backgroundColor = "White";
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return(
        <div>
            <NavBar />
            <br /> <br />
            <h2>Doctor Live Chat</h2>
            <div id="MessageBox" className="MessageBox"></div>
            <IsTyping />
            <LiveChat />
        </div>
    )
}

export default MessagingService;