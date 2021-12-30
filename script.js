var names=new Array();
names[0]="yakoov";
names[1]="Jen";
names[2]="Matt";
names[3]="Courtney";
names[4]="Mattey";
names[5]="Lisa";
names[6]="Joey";
names[7]="Chandler";
names[8]="Sam";

for (var i= 0; i < names.length; i++)
  {
    if(names[i].charAt(0)==='j'|| names[i].charAt(0)==='j'){
      console.log("Goodbye "+ names[i])
    }
    else{
      console.log("Hello "+names[i])
    }
  }
