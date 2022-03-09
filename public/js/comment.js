const commentFormHandler = async (event) => {
    event.preventDefault();

    const description = document.querySelector('.comment-input').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // if there is a comment -- preventing from users submitting empty comments 
    if (description) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                description,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to delete comment');
        }
    }
};


document
    .querySelector('#delete-comment')
    .addEventListener('click', delButtonHandler);

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);