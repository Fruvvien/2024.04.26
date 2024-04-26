class BankAccount{

    #accountNo;
    #balance = 0;
    

    constructor(accountNo, balance){
        this.#accountNo = accountNo,
        this.#balance = balance
        
    }


    returnAccountNo(){
        return this.#accountNo;
    }

    returnBalance(){
        return this.#balance;
    }

   


    updateBalance(penz){
        return this.#balance += penz;
    }

   

    


}