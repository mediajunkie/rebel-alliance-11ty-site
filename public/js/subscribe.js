document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribeForm');
    const statusMessage = document.getElementById('statusMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = document.getElementById('email');
        const submitButton = form.querySelector('button[type="submit"]');
        
        if (!emailInput.value) {
            statusMessage.textContent = 'Please enter an email address.';
            statusMessage.className = 'error';
            return;
        }

        // Disable the submit button while processing
        submitButton.disabled = true;
        statusMessage.textContent = 'Subscribing...';
        statusMessage.className = '';

        // Set up the form submission URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzS5hXY39Pt6KXKk9qMhno50Q7ib3TA4aetMOGZPf3tEuMqocK9hgA010rLB_WH8TKz/exec';
        
        try {
            const urlWithParams = `${scriptURL}?email=${encodeURIComponent(emailInput.value)}`;
            const response = await fetch(urlWithParams, {
                method: 'GET',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
            });
            
            // Since we're using no-cors, we won't be able to read the response
            // but if we get here, the request was sent successfully
            statusMessage.textContent = 'Thanks for subscribing!';
            statusMessage.className = 'success';
            form.reset();
        } catch (error) {
            console.error('Submission error:', error);
            statusMessage.textContent = 'Sorry, there was an error. Please try again.';
            statusMessage.className = 'error';
        } finally {
            submitButton.disabled = false;
        }
    });
});
