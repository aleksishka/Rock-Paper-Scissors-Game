
    const output = document.querySelector('.output');
    output.innerHTML = '';

    
    for (i = 10; i >= 0; i--) {
        const para = document.createElement('p');
        if (i === 10) {
            para.textContent = `Countdown: ${i}`;
        } else if (i === 0) {
            para.textContent = 'Blast off!';
        } else {
            para.textContent = i;
        }
        
        output.appendChild(para);
    }


    const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

    const admitted = document.querySelector('.admitted');
    const refused = document.querySelector('.refused');
    
    admitted.textContent = 'Admit: ';
    refused.textContent = 'Refuse: ';

    for (const person for people) {
        if (person === "Phil" || person === "Lola") {
            refused.textContent += `${person}`;
        } else {
            admitted.textContent += `${person}`;
        }
    }

    refused.textContent += ;
    admitted.textContent += ;



    for (let i = 2; i <= 10; i++) {
        if (i % 2 = 0) {
        alert(i);
        }
    }


    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++;
    }
    


    let num;
    
    do {
        num = prompt("Введите число больше 100", 0); 
    } while (num <= 100 && num);