
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    setTimeout(() => {
        heart.remove();
    }, 2000);
}


function createMusicNote() {
    // Create a div element for the music note sticker
    const musicNote = document.createElement('div');
    musicNote.classList.add('music-note'); // You can define CSS styles for the music note class to customize its appearance
    document.body.appendChild(musicNote);

    // Set random position for the music note sticker within the window
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    musicNote.style.left = x + 'px';
    musicNote.style.top = y + 'px';

    // Remove the music note sticker after a certain duration (e.g., 2000 milliseconds)
    setTimeout(() => {
        musicNote.remove();
    }, 2000);
}

function createCheese() {
    const Cheese = document.createElement('div');
    Cheese.classList.add('Cheese');
    document.body.appendChild(Cheese);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
   Cheese.style.left = x + 'px';
    Cheese.style.top = y + 'px';

    setTimeout(() => {
        Cheese.remove();
    }, 2000);
}

function createButterfly() {
    // Create a div element for the music note sticker
    const butterfly = document.createElement('div');
    butterfly.classList.add('butterfly'); // You can define CSS styles for the music note class to customize its appearance
    document.body.appendChild(butterfly);

    // Set random position for the music note sticker within the window
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    butterfly.style.left = x + 'px';
    butterfly.style.top = y + 'px';

    // Remove the music note sticker after a certain duration (e.g., 2000 milliseconds)
    setTimeout(() => {
       butterfly.remove();
    }, 2000);
}

window.onload = function() {
    const canvas = document.getElementById('myPieChart');
    const ctx = canvas.getContext('2d');
    
    const data = [300, 15, 30, 5, 10, 5]; // Example data
    const labels = ['Happy', 'Excited', 'Loved', 'Angry', 'Stressed', 'Sad'];
    const colors = ['#FEFEBE', '#E6D1F2', '#FFD1DC', '#FF817A', '#FED3B1', '#E5F3FD'];
    const innerRadius = 100; // Radius of the hole in the donut
    const outerRadius = Math.min(canvas.width, canvas.height) / 2 - 20; // Radius of the outer edge of the donut

    function drawDonutChart(ctx, data, labels, colors) {
        const total = data.reduce((acc, val) => acc + val, 0);
        let startAngle = 0;

        data.forEach((value, index) => {
            const sliceAngle = (value / total) * 2 * Math.PI;
            const endAngle = startAngle + sliceAngle;

            // Draw the donut slice
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, outerRadius, startAngle, endAngle); // Outer arc
            ctx.arc(canvas.width / 2, canvas.height / 2, innerRadius, endAngle, startAngle, true); // Inner arc (draw in the opposite direction)
            ctx.closePath();
            ctx.fillStyle = colors[index];
            ctx.fill();

            // Draw the percentage text
            const middleAngle = startAngle + sliceAngle / 2;
            const textX = canvas.width / 2 + (outerRadius - (outerRadius - innerRadius) / 2) * Math.cos(middleAngle);
            const textY = canvas.height / 2 + (outerRadius - (outerRadius - innerRadius) / 2) * Math.sin(middleAngle);
            const percentage = ((value / total) * 100).toFixed(1) + '%';

            ctx.fillStyle = '#000';
            ctx.font = '16px "Share Tech Mono"';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(percentage, textX, textY);

            startAngle = endAngle;
        });

        // Draw centered text in the donut
        const textLines = ['My Emotion', 'Index'];
        const fontSize = 24;
        ctx.fillStyle = '#000';
        ctx.font = `${fontSize}px "Share Tech Mono"`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Calculate the vertical position for each line of text
        textLines.forEach((line, index) => {
            const lineHeight = fontSize * 1.2; // Line height with some spacing
            const textY = canvas.height / 2 - (textLines.length - 1) * lineHeight / 2 + index * lineHeight;
            ctx.fillText(line, canvas.width / 2, textY);
        });

        // Draw chart legend
        const legend = document.getElementById('legend');
        legend.innerHTML = ''; // Clear previous legend

        labels.forEach((label, index) => {
            // Create legend item
            const legendItem = document.createElement('div');
            legendItem.style.marginBottom = '10px'; // Space between legend items

            // Draw the color block
            const colorBlock = document.createElement('span');
            colorBlock.style.display = 'inline-block';
            colorBlock.style.width = '15px';
            colorBlock.style.height = '15px';
            colorBlock.style.backgroundColor = colors[index];
            colorBlock.style.marginRight = '10px';

            // Draw the label text
            const labelText = document.createElement('span');
            labelText.textContent = label;
            labelText.style.fontFamily = '"Share Tech Mono", monospace'; // Apply the Share Tech Mono font

            legendItem.appendChild(colorBlock);
            legendItem.appendChild(labelText);
            legend.appendChild(legendItem);
        });
    }

    drawDonutChart(ctx, data, labels, colors);
};

document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('addNoteButton');
    const noteContent = document.getElementById('noteContent');
    const noteImage = document.getElementById('noteImage');
    const noteVideo = document.getElementById('noteVideo');
    const gridContainer = document.getElementById('gridContainer');

    addNoteButton.addEventListener('click', () => {
        const content = noteContent.value.trim();
        const imageFile = noteImage.files[0];
        const videoFile = noteVideo.files[0];

        if (content || imageFile || videoFile) {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');

            if (content) {
                const textElement = document.createElement('p');
                textElement.textContent = content;
                noteElement.appendChild(textElement);
            }

            if (imageFile) {
                const imgElement = document.createElement('img');
                imgElement.src = URL.createObjectURL(imageFile);
                noteElement.appendChild(imgElement);
            }

            if (videoFile) {
                const videoElement = document.createElement('video');
                videoElement.src = URL.createObjectURL(videoFile);
                videoElement.controls = true;
                noteElement.appendChild(videoElement);
            }

            gridContainer.appendChild(noteElement);

            // Clear the form
            noteContent.value = '';
            noteImage.value = '';
            noteVideo.value = '';
        }
    });
});