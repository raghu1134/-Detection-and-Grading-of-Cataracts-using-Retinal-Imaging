const loginbox = document.querySelector('.login-box');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');

registerlink.onclick = () => {
    loginbox.classList.add('active');

}
loginlink.onclick = () => {
    loginbox.classList.remove('active');
}