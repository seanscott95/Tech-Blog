const editCommentHandler = async (event) => {
    event.preventDefault();

    // 
    const description = document.querySelector('#description-input').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (description && id) {
        // Send a PUT request to the API endpoint
        const response = await fetch(`/api/comments/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard
            document.location.replace('/dashboard');
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
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete comment');
        }
    }
};


document
    .querySelector('.edit-form')
    .addEventListener('submit', editCommentHandler);

document
    .querySelector('#delete-comment')
    .addEventListener('click', delButtonHandler);
