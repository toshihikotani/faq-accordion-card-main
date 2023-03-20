// Get list of buttons
let questionBtns = document.getElementsByClassName('question-button');

for(var i = 0; i < questionBtns.length; i++){

    questionBtns[i].addEventListener("click", function(event) {

        // Hide the current 
        hideUnselectedButton();
        
        // Get the current question button.
        let questionButton = event.target;
        // Concat the name of 'id' and the "-paragraph".
        let buttonId = event.target.getAttribute('id') + '-paragraph';
        // Get the current answer paragraph.
        let faqParagraph = document.getElementById(buttonId);

        let currentClass = faqParagraph.getAttribute('class');

        if(currentClass == "faq-answer-hide"){

            // Change question button to bold.
            questionButton.classList.add("selected");

            faqParagraph.classList.remove("faq-answer-hide");
            faqParagraph.classList.add("faq-answer-show");

        } else {

            // Change question button to regular.
            questionButton.classList.remove("selected");

            faqParagraph.classList.remove("faq-answer-show");
            faqParagraph.classList.add("faq-answer-hide");
        }
        
    });
}

// Hide the paragraph of the current selected question.
function hideUnselectedButton(){

    let selectedButton = document.getElementsByClassName('selected');

    if(selectedButton.length > 0){

        // Get the current selected button.
        let currentButton =  selectedButton[0];

        // Concat the name of 'id' and the "-paragraph".
        let buttonId = currentButton.getAttribute('id') + '-paragraph';
        // Get the current answer paragraph.
        let faqParagraph = document.getElementById(buttonId);

        // Change question button to regular.
        currentButton.classList.remove("selected");

        // Hide the answer paragraph of the current selected button.
        faqParagraph.classList.remove("faq-answer-show");
        faqParagraph.classList.add("faq-answer-hide");

    }
}