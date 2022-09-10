function counterOfLikes() {
    const photoItem = document.querySelector('.user-photo__item-panorama');
    const likes = document.querySelectorAll('.user-photo__like');

    likes.forEach(like => {

        const counterElement = like.querySelector('.like-counter');
        let counter = +counterElement.textContent;

        function addLike() {
            render(++counter, counterElement);
        }

        function removeLike() {
            render(--counter, counterElement);
        }

        const render = (counter, counterElement) => counterElement.innerText = counter;

        like.addEventListener('click', () => {
            if (!photoItem.classList.contains('like')) {
                addLike();
            } else {
                removeLike();
            }

        })

    })
}

module.exports = counterOfLikes;