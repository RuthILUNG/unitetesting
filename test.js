describe('this test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });
    

});
describe('Greet' , function(){
    it('should show the name of a person ' , function(){
        function greet(neighbourName) {
            return "Hello, " + neighbourName;
        }
        
        // the out put should print hello bob 
        console.log(greet('Bob')); 
        
        
    });
});

describe('Registration' , function(){
        it('should show you how to use MochaJS' , function(){
            function isFromBellville(theregistrationNumber) {
                return theregistrationNumber.startsWith('CY');
            }
            
            
            console.log(isFromBellville('CY123')); 
            console.log(isFromBellville('CA456')); 
            console.log(isFromBellville('CY987'));
            
            
        });
        it('should show you how to use MochaJS' , function(){
            function isFromCapeTown(theregistrationNumber) {
                return theregistrationNumber.startsWith('CA');
            }
            
            //this should return all registration number that start with 'CA'
            console.log(isFromCapeTown('CA123')); 
            console.log(isFromCapeTown('CY456')); 
            console.log(isFromCapeTown('CA789')); 
            
            
        });


    });

    describe('Gauteng number plate' , function(){
        it('this should return all registration number that ends with GP' , function(){
            function isFromGauteng(theregistrationNumber) {
                return theregistrationNumber.endsWith('GP');
            }
            
            
            console.log(isFromGauteng('DR 12 TY GP')); 
            console.log(isFromGauteng('DR 34 AB WC')); 
            console.log(isFromGauteng('AB 56 CD GP'));  
            
            
        });
    });

    describe('Limpompo reg number' , function(){
        it('this should return all registration number that ends with L' , function(){
            function isFromLimpopo(registrationNumber) {
                return registrationNumber.endsWith('L');
            }
            
            
            console.log(isFromLimpopo('DRT 122 L')); 
            console.log(isFromLimpopo('DRT 456 P')); 
            console.log(isFromLimpopo('TSL 789 L'));  
            
            
        });
    });

    describe('More on parameters' , function(){
        it('this function return registration number from different provinces  ' , function(){
            function isFrom(THEregistrationNumber, lIndicator) {
                return THEregistrationNumber.startsWith(lIndicator);
            }
            
            
            console.log(isFrom('CA123', 'CA')); 
            console.log(isFrom('WC456', 'WC')); 
            console.log(isFrom('ND789', 'ND')); 
            console.log(isFrom('GP101', 'WC'));
            
            
            
        });
    });

    describe('One function that checks many' , function(){
        it('this  function should check many  ' , function(){
            function regCheck(theregistrationNumber, thelocation) {
                return theregistrationNumber.endsWith(thelocation);
            }
            
            
            console.log(regCheck('RG 45 HN GP', 'GP')); 
            console.log(regCheck('LKG 679 EC', 'EC')); 
            console.log(regCheck('GHT 456 MP', 'MP')); 
            console.log(regCheck('FGT 491 L', 'L')); 
            console.log(regCheck('ND 123-456', 'GP')); 
            console.log(regCheck('CY 678-453', 'EC')); 
            console.log(regCheck('CA 1234-123', 'MP')); 
            
            
            
            
        });
    });

    describe('From a lsit to a string' , function(){
        it('this  function take the string and return a list  ' , function(){
            function countRegNumber(theregistrationString) {
                //this turns the srting into an array the split function  
                var regNumber = theregistrationString.split(',');    
                return regNumber.length;
            }
            
            var regNumCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
            console.log(regNumCount); 
            
            
            
            
        });
    });


    describe('is a day' , function(){
        it('this  function take the string and check if the day pass through the week ' , function(){
            function isDayName(day) {
    
                var Weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];   
                
                return  Weekdays.includes(day);
            }
            
            console.log(isDayName('Saturday'));
            console.log(isDayName('Monday')); 
            console.log(isDayName('January')); 
            
            
            
            
        });
    });

    describe('Is a week ' , function(){
        it('this  function take the string and return true if it is the day of the week  ' , function(){
            function isWeekday(day) {
    
                var weekends = ['Saturday', 'Sunday'];
                   
                return !weekends.includes(day);
            }
            
            console.log(isWeekday('Saturday')); 
            console.log(isWeekday('Monday')); 
            
            
            
        });
    });

    describe('Which day of the week' , function(){
        it('this  function should check which day of the week a certain date was  ' , function(){
            function getDay(thedate) {
                const date = new Date(thedate);
                const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const Indexes = date.getDay();
                return days[Indexes];
            }
            
            
            console.log(getDay('2010-04-01')); 
            console.log(getDay('2024-04-16')); 
            
            
            
            
        });

    });
    describe('How many years ago' , function(){
        it('this  function should check how many years ago a date was  ' , function(){
            function yearsAgo(year) {
                const theYear = new Date().getFullYear();
                return theYear - year;
            }
            
            console.log(yearsAgo(2000)); 
            
            
            
            
        });
    });

    describe('Same week' , function(){
        it('this  function should check two dates and see if they are on the same day of the week  ' , function(){
            function sameWeekday(firstdate, seconddate) {
                const dateone = new Date(firstdate);
                const datetwo = new Date(seconddate);
                const weekone = dateone.getDay();
                const weektwo = datetwo.getDay();
                return weekone === weektwo;
            }
            
            console.log(sameWeekday('2024-04-15', '2024-04-16')); 
            
            
            
        });
    });

    

  
