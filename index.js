


let sayac = 0;

    
let GenerateNumber = Math.floor(Math.random() * 100); // 0 ile 100 arası random sayı üretildi.
    


function NumberCheck(){
    
    let random_number = GenerateNumber;    // 0 ile  100 arası rastgele sayı oluşturuldu.
     
    let text = document.getElementById("text"); // text'deki veri alınır

   

    
    if(text.value == '' || text.value == '0' || text.value > 100 || text.value <= 0){
        document.getElementById("sonuc").innerText = "0 ile 100 arası bir değer giriniz."
        
    }else if(text.value > random_number){
        document.getElementById("sonuc").innerText = "Düşür..."
        sayac++;
        document.getElementById("attempt").innerText = `${sayac}`;

    }else if(text.value < random_number){
        document.getElementById("sonuc").innerText = "Yükselt..."
        sayac++;
        document.getElementById("attempt").innerText = `${sayac}`;
    }else if(text.value == random_number){
        document.getElementById("sonuc").innerText = "Doğru bildiniz, Tebrikler..."
    }

  console.log(GenerateNumber);

 
}


document.getElementById("check").addEventListener("click", NumberCheck);  //Butona basıldığında fonksiyon çalışır.

