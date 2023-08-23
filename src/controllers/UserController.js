module.exports ={

    create (req,res){
        res.send('สร้างผู้ใช้' + JSON.stringify(req.body))
    },
    
    put (req,res){
        res.send('แก้ไขข้อมูลผู้ใช้ '+JSON.stringify(req.body))
    },
    
    remove (req,res){
        res.send('ลบข้อมูลผู้ใช้ Id '+ JSON.stringify(req.body))
    },
    
    show (req,res){
        res.send('ดูข้อมูลผู้ใช้ '+JSON.stringify(req.body))
    },
    
    index (req,res){
        res.send('เรียกข้อมูลผู้ใช้ทั้งหมด')
    },

    que1 (req, res) {
        n = parseInt(JSON.stringify(req.body["input"]));
        console.log("input = " + n);
        output = n - 1;
        console.log("result = " + output);
        res.send(output.toString());
      },

      que2 (req, res) {
        number = parseInt(JSON.stringify(req.body["input"]));
        console.log("input = " + number);
    
        let isPrime = true;
    
        if (number === 1) {
          console.log("1 is neither prime nor composite number.");
        }
    
        else if (number > 1) {
          for (let i = 2; i < number; i++) {
            if (number % i == 0) {
              isPrime = false;
              break;
            }
          }
          if (isPrime) {
            console.log(number+' is a prime number.');
            res.send(number.toString()+" is a prime number.");
          } else {
            console.log(number+' is a not prime number.');
            res.send(number.toString()+" is not a prime number.");
          }
        }
        else {
          console.log(number+" is not a prime number.");
          res.send(number.toString()+" is not a prime number.");
        }
    
      },

      add1(req, res) {
        input = parseInt(JSON.stringify(req.body["input"]));
        console.log("input = " + input);
        output = input + 1;
        res.send(output.toString());
      }

}