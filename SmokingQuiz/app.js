function process(){
    let name = prompt("Як тебе звуть?");
    let age = +prompt("Скільки тобі років?",100);
    let status = confirm("Чи куриш ти?");

    if(typeof age==="number" && age>0 && name!=null){
        if(age<18 && status===false){
            alert(`Молодець ${name}! Гарний приклад для своїх однолітків`);
        }else if(age<18 && status===true){
            alert(`${name}, а твої батьки знають про це?`);
        }else if(age>18 && status===false){
            alert(`Супер ${name}! Мабуть ще й спортом займаєшся!`);
        }else if(age>18 && status===true){
            alert(`Що ж ${name}, це твій вибір. Але я не радив би курити`);
        }
    }
    else{
        alert("Перевір,чи коректно ти ввів дані");
        process();
    }
}

process();