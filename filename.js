window.onload = function() {
    document.getElementById("userForm").addEventListener("submit", alertSubFunc);
};

function alertSubFunc() {
    const titleInput = document.getElementById("title");
    
    if (titleInput.value.length > 50) {
        alert("Title cannot exceed 50 characters.");
    }
}