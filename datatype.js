function student(i,n,cls){
    console.log(i,n,cls);

}
function employee(i,n,sa){
    console.log(i,n,sa);
}
function fetch(i,n,d,fun){
    fun(i,n,d);
}
fetch(1,"abc",25,student);
fetch(100,"emp",50000,employee);