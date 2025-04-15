const rollBtn = document.getElementById('rollBtn');
        const cube = document.getElementById('cube');
        const result = document.getElementById('result');
        const resultText = document.getElementById('resultText');
        const resultIcon = document.getElementById('resultIcon');
        
        const outcomes = [
            {
                text: "Ты будешь играть с модами! Готовься к багам, крашам и бессонным ночам!",
                icon: "fa-bug",
                color: "text-red-500"
            },
            {
                text: "Будь психически здоровым! Но кто мы вообще такие, чтобы решать?",
                icon: "fa-brain",
                color: "text-green-500"
            },
            {
                text: "50/50: будешь играть с модами, но притворяться психически здоровым",
                icon: "fa-theater-masks",
                color: "text-yellow-500"
            },
            {
                text: "Сначала моды, потом психическое здоровье. Или наоборот. Или одновременно. Кто знает?",
                icon: "fa-random",
                color: "text-purple-500"
            },
            {
                text: "Ты будешь устанавливать моды, удалять их, и повторять это снова и снова. Бесконечный цикл!",
                icon: "fa-infinity",
                color: "text-blue-500"
            },
            {
                text: "Судьба дала тебе шанс... но ты всё равно выберешь моды, не так ли?",
                icon: "fa-grin-squint-tears",
                color: "text-pink-500"
            }
        ];
        
        rollBtn.addEventListener('click', () => {
            // Disable button during animation
            rollBtn.disabled = true;
            rollBtn.classList.remove('hover:scale-105', 'hover:bg-red-600');
            rollBtn.classList.add('opacity-50');
            
            // Shake effect
            document.body.classList.add('shake');
            
            // Roll the cube
            cube.classList.add('roll');
            
            // Hide previous result
            result.classList.add('hidden');
            
            setTimeout(() => {
                document.body.classList.remove('shake');
                
                // Random result
                const randomSide = Math.floor(Math.random() * 6) + 1;
                const outcome = outcomes[randomSide - 1];
                
                // Set final rotation based on the side
                let rotateX, rotateY;
                switch(randomSide) {
                    case 1: rotateX = 0; rotateY = 0; break;
                    case 2: rotateX = 0; rotateY = 180; break;
                    case 3: rotateX = 0; rotateY = 90; break;
                    case 4: rotateX = 0; rotateY = -90; break;
                    case 5: rotateX = 90; rotateY = 0; break;
                    case 6: rotateX = -90; rotateY = 0; break;
                }
                
                cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                
                // Show result
                resultText.textContent = outcome.text;
                resultIcon.innerHTML = `<i class="fas ${outcome.icon} ${outcome.color}"></i>`;
                result.classList.remove('hidden');
                
                // Re-enable button
                setTimeout(() => {
                    rollBtn.disabled = false;
                    rollBtn.classList.remove('opacity-50');
                    rollBtn.classList.add('hover:scale-105', 'hover:bg-red-600');
                    cube.classList.remove('roll');
                }, 500);
                
            }, 1500);
        });