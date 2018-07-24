'use strict';
function abbrevName(name){
  var array = name.split(' ');
  return (array[0][0] + '.' + array[1][0]).toUpperCase();
};


Test.assertEquals(abbrevName("Sam Harris"), "S.H");
Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
Test.assertEquals(abbrevName("Evan Cole"), "E.C");
Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
Test.assertEquals(abbrevName("David Mendieta"), "D.M");