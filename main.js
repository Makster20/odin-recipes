const form = document.getElementById('myForm');
        const message = document.getElementById('message');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Retrieve form data
            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData.entries());
            console.log('Form Data:', formValues); // Log for debugging or further use

            // Simulate exporting the data (you can send it to a server here)
            exportData(formValues);

            // Show success message with delay
            setTimeout(() => {
                message.style.display = 'block';
            }, 1000); // Delay in milliseconds (1 second)
        });

        // Example of "exporting" form data
        function exportData(data) {
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'form-data.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }