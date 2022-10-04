#include <iostream>
#include <fstream>
using namespace std;
#include <ctime>
int main(){
char t;
fstream file;
int i=0;
while(i<10){
file.open("i.txt",ios::app);

file.close();
i++;

}
return 0;

}/*
double time=clock();
int x[]={33,3,4,45,5,6,67,7,5,5,5,55,5,4};
int z=89;
for(int i=0;i<13;i++){
for(int i=0;i<13;i++){for(int i=0;i<13;i++){for(int i=0;i<13;i++){
cout<<z<<"\t";
z*=4;
}z=i*43;}
cout<<endl;}cout<<"\t";}
cout<<clock()-time;
int f=9;
*/
