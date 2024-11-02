class TenthStudent{

    static passMarks =35;
    constructor(){
    

        console.log("Inside the Constructor");
        this.engMarks =0;
        this.telMarks =0;
        this.hinMarks =0;
        this.sciMarks =0;
        this.socMarks =0;
        this.mathsMarks =0;
       

    }
    calculateResult = ()=>{
        if(this.engMarks >= TenthStudent.passMarks &&
            this.telMarks >= TenthStudent.passMarks &&
            this.hinMarks >= TenthStudent.passMarks &&
            this.sciMarks >= TenthStudent.passMarks &&
            this.socMarks >= TenthStudent.passMarks &&
            this.mathsMarks >= TenthStudent.passMarks 

        ){
            console.log("student passed in Tenth")
        }else{
            console.log("student failed in Tenth")
        }
    }
}

export default TenthStudent