const myEmail = "aW5mb0BwYXBhbGlhYXV0b2RlbW9saXppb25pLml0";
const emailSubject = "Get In Touch - FROM Mywebsite";
const specialForm = document.querySelector("#contact-form");
const textarea = document.querySelector("#message-175e");
const checkbox = document.querySelector("#check");
const btnSend = document.querySelector("#send");
const inputName = document.querySelector("#name-175e");
const inputMessage = document.querySelector("#message-175e");
const inputs = document.querySelectorAll("input:not([type=checkbox])");

checkbox.addEventListener("click", () => {
  if (!checkbox.checked) {
    btnSend.classList.add("disabled");
    inputName.disabled = false;
    inputMessage.disabled = false;
    btnSend.removeAttribute("href");
    inputName.style.opacity = 1;
    inputMessage.style.opacity = 1;
  } else {
    if (inputName.value.length != 0 && inputMessage.value.length != 0) {
      btnSend.classList.remove("disabled");
      inputName.disabled = true;
      inputMessage.disabled = true;
      inputName.style.opacity = 0.3;
      inputMessage.style.opacity = 0.3;
      btnSend.href = `mailto:${atob(
        myEmail
      )}?subject=${emailSubject}%20-%20Name:%20${inputName.value}&body=${
        inputMessage.value
      }`;
    } else {
      checkbox.checked = false;
    }
  }
});

document.addEventListener("keyup", () => {
  inputs.forEach((input) => {
    if (input.value.length != 0) {
      if (textarea.value.length != 0) {
        checkbox.disabled = false;
      } else {
        checkbox.disabled = true;
      }
    } else {
      checkbox.disabled = true;
    }
  });
});

