async function setupCamera() {
    try {
        const video = document.getElementById("video");
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error("Erro ao acessar a câmera:", error);
    }
}

setupCamera();