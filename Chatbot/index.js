	$(document).ready(function(){
$('#action_menu_btn').click(function(){
	$('.action_menu').toggle();
});
	});



// Class to create a text message div each time clicking send on a text
class MyMessage {
	constructor(myText) {
		this.myText = myText;
	}
	
	sendText() {
		let create = document.createElement("div");
			let textMess = document.getElementById("textMess").value;
			let yourText = "<div class='msg_cotainer_send'>" + textMess + "</div><div class='img_cont_msg'><img src='avatar.jpg' class='rounded-circle user_img_msg'></div>";
		
			create.innerHTML = yourText;
			create.setAttribute('class', 'd-flex justify-content-end mb-4 slide-reverse');
			document.getElementById("textBox").appendChild(create);
	}
}

// Class to create a text message div each time recieving a text from sender
class TheirMessage {
	constructor(theirText) {
		this.theirText = theirText;
	}
	
	recieveText() {
		let response = document.createElement("div");
		
		let styledText = "<div class='img_cont_msg'><img src='brian.jpg' class='rounded-circle user_img_msg'></div><div class='msg_cotainer'>" + this.theirText + "</div>";
		
		response.innerHTML = styledText;
		response.setAttribute('class', 'd-flex justify-content-start mb-4 slide');
		document.getElementById("textBox").appendChild(response);
	}
	
}

//scroll to the bottom
//function scrollToBottom() {
//	const messages = document.getElementById('textBox');
//  messages.scrollTop = messages.scrollHeight;
//}

//delay
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



//text message send button
function textMessage() {
			let str = document.getElementById("textMess").value;
			let textMess = str.toLowerCase();
			let received;
			
			//create your text message
			let sent = new MyMessage(this.myText);
			sent.sendText();
			sleep(500);
		
		//else statment to contain questions and answers. 
		switch(textMess) {
			case "muy bien gracias. y usted, ¿cómo está?":	
				received = new TheirMessage("Bien gracias.");
				received.recieveText();					
				break;

			case "y su esposa, ¿cómo está?":
				received = new TheirMessage("Elle está muy bien, gracias.");
				received.recieveText();
				break;

			case "hasta mañana. saludos a su esposa.":
				received = new TheirMessage("Hasta luego.");
				received.recieveText();		
				document.getElementById("great_job").style.display = "block";
				break;


			default:
				received = new TheirMessage("Lo siento, no entiendo :(");
				received.recieveText();
				break;
		}
	
	//clear textBox
	document.getElementById("textMess").value = "";
	
	//scroll to bottom of text after each text
	const messages = document.getElementById('textBox');
  			messages.scrollTop = messages.scrollHeight;
	
	
		}