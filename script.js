function updateCount() {
   
    const checkboxes = document.querySelectorAll('.checkbox');
    
   
    let count = 0;
    
   
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            count++;
        }
    });

   
    document.getElementById('count').textContent = count;
}

function refreshPage() {
    // Reload the current page
    location.reload();
}