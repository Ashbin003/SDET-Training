function personInfo(name: string, age: number, city: string, gender?: string){
    if(gender){
        console.log("Name: " + name + ", Age: " + age + ", Gender: " + gender + ", City: " + city);
    }
    else{
        console.log("Name: " + name + ", Age: " + age + ", City: " + city);
    }
}

personInfo("John", 24, "Idukki", "Male");
personInfo("Jane", 36, "Idukki");