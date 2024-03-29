function sentForm() {
    const main = document.querySelector('main');

    if (main.classList.contains('page-form')) {
        const form = document.querySelector('form');

        const success = document.querySelector('.modal-sent');
        const fail = document.querySelector('.modal-error');
    
        const buttonsCloseModal = document.querySelectorAll('.form__button--close');
    
        const userMail = form.querySelector('.form__contacts--mail');
        const userName = form.querySelector('.form__user-name');
        const userSurname = form.querySelector('.form__user-surname');
    
        function postData(form) {
    
            const formData = new FormData(form);
    
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
           
            console.log(json);
            success.classList.add('modal--open');
    
            form.reset();
        }
    
        buttonsCloseModal.forEach(buttonCloseModal => {
            buttonCloseModal.addEventListener('click', () => {
                success.classList.remove('modal--open');
                fail.classList.remove('modal--open');
            })
        })
    
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            if ((userMail.value !== ' ' && userMail.value !== '') && (userName.value !== ' ' && userName.value !== '') && (userSurname.value !== ' ' && userSurname.value !== '')) {
                postData(form);
            } else {
                fail.classList.add('modal--open');
            }
        })
    }
    
}

module.exports = sentForm;
