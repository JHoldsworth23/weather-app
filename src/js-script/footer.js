function gitHubFooter() {
    const copyright = document.querySelector('.copyright');
    const date = new Date();
    copyright.textContent = `Copyright ©️ ${date.getFullYear()} JHoldsworth23`;
}

export default gitHubFooter;