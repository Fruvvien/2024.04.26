document.addEventListener("DOMContentLoaded", ()=>{
  
    const lista = [];
    const szamlaletrehozas = document.getElementById("szamlaLetrehozas");
    
    
    szamlaletrehozas.addEventListener("click", () =>{
        
        
        const accountNo = document.getElementById("accountNo");
        const balance = document.getElementById("balance");        

        bankAccount = new BankAccount( accountNo.value, parseInt(balance.value) );  
        feltoltes(bankAccount.returnAccountNo(), bankAccount.returnBalance());
        
        
        lista.push(bankAccount.returnAccountNo());
        lista.push(bankAccount.returnBalance())
        
        
 
        
    })
   
    const tableBody = document.getElementById("tableBody");

  

    function szamlaLekerdezes(){
        
        let asd ;
        for (let index = 0; index < lista.length; index++) { 
            asd= 
            `<tr>
                <td >
                    ${lista[index-1]}
                </td>
                <td >
                    ${lista[index]}
                </td>
            </tr>` 
            
         } 
        tableBody.innerHTML+= asd;
       
        
    }


    function feltoltes(szamlaSzam, penz){
        for (let index = 0; index < lista.length; index++) { 
                
            
         } 
        
    }
    

    window.szamlaLekerdezes = szamlaLekerdezes;
   

})