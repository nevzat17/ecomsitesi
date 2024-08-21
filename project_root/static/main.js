document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:5000'; // Flask uygulamanızın çalıştığı URL

    // Get Users Button Click Event
    document.getElementById('getUsersBtn').addEventListener('click', async () => {
        try {
            const response = await fetch(`${apiUrl}/users`);
            const data = await response.json();
            document.getElementById('usersOutput').textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    });

    // Get User By ID Button Click Event
    document.getElementById('getUserByIdBtn').addEventListener('click', async () => {
        const userId = document.getElementById('userIdInput').value;
        if (!userId) {
            alert('Please enter a user ID.');
            return;
        }
        try {
            const response = await fetch(`${apiUrl}/users/${userId}`);
            const data = await response.json();
            document.getElementById('userOutput').textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    });

    // Create User Form Submit Event
    document.getElementById('createUserForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        
        if (!name || !email) {
            alert('Please fill out both fields.');
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });
            const data = await response.json();
            document.getElementById('createUserOutput').textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    });
});
