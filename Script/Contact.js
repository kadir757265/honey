const email = document.getElementById('email');
const name = document.getElementById('name');
const message = document.getElementById('message');
const comment = document.getElementById('comment');

const FieldName = document.getElementById('FieldName');
const FieldEmail = document.getElementById('FieldEmail');
const FieldMessage = document.getElementById('FieldMessage');
const FieldMessageNew = document.getElementById('FieldMessageNew');

function ValidateField() {

    if (email.value.trim() === "") {
        FieldEmail.innerText = 'Please enter valid email.';
        email.style.border = '2px solid red';
        email.style.backgroundColor = '#fff5f5';
        email.style.color = '#fd0000';
        email.style.boxShadow = '1px 1px 5px #fd0000';
    }
    else {
        FieldEmail.innerText = '';
        email.style.border = '2px solid green';
        email.style.backgroundColor = '#f5fff5';
        email.style.color = '#008627';
        email.style.boxShadow = '1px 1px 5px #008627';
    }

    if (name.value.trim() === "") {
        FieldName.innerText = 'Please enter valid name.';
        name.style.border = '2px solid red';
        name.style.backgroundColor = '#fff5f5';
        name.style.color = '#fd0000';
        name.style.boxShadow = '1px 1px 5px #fd0000';
    }
    else {
        FieldName.innerText = '';
        name.style.border = '2px solid green';
        name.style.backgroundColor = '#f5fff5';
        name.style.color = '#008627';
        name.style.boxShadow = '1px 1px 5px #008627';
    }

    if (message.value.trim() === "") {
        FieldMessage.innerText = 'Please enter valid subject.';
        message.style.border = '2px solid red';
        message.style.backgroundColor = '#fff5f5';
        message.style.color = '#fd0000';
        message.style.boxShadow = '1px 1px 5px #fd0000';

    }
    else {
        FieldMessage.innerText = '';
        message.style.border = '2px solid green';
        message.style.backgroundColor = '#f5fff5';
        message.style.color = '#008627';
        message.style.boxShadow = '1px 1px 5px #008627';
    }

    if (comment.value.trim() === "") {
        FieldMessageNew.innerText = 'Please enter valid message.';
        comment.style.border = '2px solid red';
        comment.style.backgroundColor = '#fff5f5';
        comment.style.color = '#fd0000';
        comment.style.boxShadow = '1px 1px 5px #fd0000';
        return false;
    }
    else {
        FieldMessageNew.innerText = '';
        comment.style.border = '2px solid green';
        comment.style.backgroundColor = '#f5fff5';
        comment.style.color = '#008627';
        comment.style.boxShadow = '1px 1px 5px #008627';
    }

}

function ValidateName() {
    if (name.value.trim() === "") {
        FieldName.innerText = 'Please enter valid name.';
        name.style.border = '2px solid red';
        name.style.backgroundColor = '#fff5f5';
        name.style.color = '#fd0000';
        name.style.boxShadow = '1px 1px 5px #fd0000';

    }
    else {
        FieldName.innerText = '';
        name.style.border = '2px solid green';
        name.style.backgroundColor = '#f5fff5';
        name.style.color = '#008627';
        name.style.boxShadow = '1px 1px 5px #008627';
    }
}

function ValidateEmail() {
    if (email.value.trim() === "") {
        FieldEmail.innerText = 'Please enter valid email.';
        email.style.border = '2px solid red';
        email.style.backgroundColor = '#fff5f5';
        email.style.color = '#fd0000';
        email.style.boxShadow = '1px 1px 5px #fd0000';

    }
    else {
        FieldEmail.innerText = '';
        email.style.border = '2px solid green';
        email.style.backgroundColor = '#f5fff5';
        email.style.color = '#008627';
        email.style.boxShadow = '1px 1px 5px #008627';
    }
}

function ValidateMessage() {
    if (message.value.trim() === "") {
        FieldMessage.innerText = 'Please enter valid subject.';
        message.style.border = '2px solid red';
        message.style.backgroundColor = '#fff5f5';
        message.style.color = '#fd0000';
        message.style.boxShadow = '1px 1px 5px #fd0000';

    }
    else {
        FieldMessage.innerText = '';
        message.style.border = '2px solid green';
        message.style.backgroundColor = '#f5fff5';
        message.style.color = '#008627';
        message.style.boxShadow = '1px 1px 5px #008627';
    }
}

function ValidateComment() {
    if (comment.value.trim() === "") {
        FieldMessageNew.innerText = 'Please enter valid message.';
        comment.style.border = '2px solid red';
        comment.style.backgroundColor = '#fff5f5';
        comment.style.color = '#fd0000';
        comment.style.boxShadow = '1px 1px 5px #fd0000';
        return false;
    }
    else {
        FieldMessageNew.innerText = '';
        comment.style.border = '2px solid green';
        comment.style.backgroundColor = '#f5fff5';
        comment.style.color = '#008627';
        comment.style.boxShadow = '1px 1px 5px #008627';
    }
}