//1
//constructur function  for our next new bank account object
//creat diposite  method to add money to current balance
// creat withdraw method for successful and unsuccessfull log


function BankAccount(name,balance){
    this.name=name;
    this.balance=balance;
    this.diposite=function(money){
        console.log(`${this.name} diposited$${money} new balance $${this.balance}`)
    }
    this.withdraw=function(money){
        if(money>this.balance){
            console.log(`${this.name}tried unsuccessfull withdraw of $${money}`)
        }
        else {
            console.log(`${this.name} withdrew $${money}`)
        }
    }
};
const firstuser=new BankAccount("Titi,45000000")
const seconduser=new BankAccount("Beki",200)
const thirsuser=new BankAccount("Beza",500)
firstuser.diposite(50000)
firstuser.withdraw(200)
seconduser.diposite(400)
seconduser.withdraw(5200)
thirsuser.diposite(100)
thirsuser.diposite(400)

//2
//creat an object taskList
//creat method addtask
//creat method complete task
//creat listTask method to print remaining task


const taskList={
    tasks:[],
    addTask:function(task){
        this.tasks.push(task)
        console.log(`added task${task}`)
    },
    completeTask:function(task){
        const index=this.tasks.indexOf(task)
        if(index !==-1){
             this.tasks.splice(index,1);
             console.log(`complete task ${task}`)}
             else{
                console.log(`${task} unknown`)
             
        }
    },
    listTasks:function(task){
        if (this.tasks.length==0){
            console.log("All are completed")
        }
        else{
        
                console.log(`remaining task${task}`)
            }
        }

    }
    taskList.addTask("doing js assignment")
    taskList.addTask("reading python")
    taskList.addTask("cleaning room")
    taskList.addTask("replay email")

    taskList.completeTask()
    taskList.completeTask("reading python")
    taskList.completeTask("claning room")
    taskList.completeTask()
    taskList.listTasks([])
    taskList.listTasks("reading python")


    //3
    const scors=[
        {name:"Jani",score:[30,90,89,70]},
        {name:"max",score:[60,45,67,89]},
    ];
const getAvarage=(Scors)=>{
    let sum=0
    
    for(let i=0;i<scors.length;i++){
        let allsum=sum+scors[i]
        let ava=allsum/scors.length
    }
    return
       }
console.log((getAvarage(scors)));
// const firststudent=new Student("Tihitna",[80,79,45])
//     const secondstudent=new Student("Beki"[56,89,89])

 //4 creat class to define shoping cart
 //constractor intialize an empty array to hold item in the shopping cart
 //creat method to add item
 //creat method to calculate the total cost of item
 //creat shoping cart object
 //add item
 //console.log getTotal method on the cart object then print
class ShoppingCart {

    constructor() {
    
    this.items = [];
    
    }
    
    addItem(item) {
    
    this.items.push(item); }
    
    getTotal() {
    
    let total = 0;
    
    for (let i=0; i < this.items.length; i++) {
    
    total += this.items[i].price;
    
    }
  return total}
}
const cart = new ShoppingCart();

cart.addItem({ name: "Shirt", price: 25 });

cart.addItem({ name: "Pants", price: 50});

cart.addItem({ name: "Shoes", price: 75});

console.log("Total:", cart.getTotal()); 
//5
//creat constractor function for the next object
//creat isClass method returns true if year is <2000 else false
//creat recommend method returns  recomendation if the rate is >8 else console.log another opption
function Movie(title, year, rating) {
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.isClassic = function(){
            return this.year<2000;
        };
        this.recommend =function(){
            if(this.rating > 8){
                return "Highly recommended!";
            }
            else{
                return "Consider other options";
            }
        };
    }
    const firstmovie = new Movie("Prison Break",2023, 9.2);
    const secondmovie = new Movie("Titanic", 2002, 9);
    const thirdmovie= new Movie("Money Highest", 1997, 7);
    console.log(`"${firstmovie.title}" is classic movie: ${firstmovie.isClassic()}`);
    console.log(`Recommendation: ${firstmovie.recommend()}`);

