function confirmAction(action) {
    if (confirm(`¿Estás seguro de que deseas ${action.toLowerCase()}?`)) {
        showNotification(`${action} realizado con éxito.`, 'success');
    } else {
        showNotification(`${action} cancelado.`, 'error');
    }
}

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = type === 'success' ? '' : 'error';
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}
