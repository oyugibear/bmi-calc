function bmi_calc(height, weight){

        
    // weight = request.body.weight;
    w = weight;
    h = height;
    var bmi = w / (h * h);

    if(bmi>=30){
        return 'Obese'
    }
    else if (bmi< 30 && bmi >= 25) {
        return 'overweight'
    }
    else if (bmi < 25 && bmi>= 18.5){
        return 'normal'
    }
    else {
        return 'underweight'
    }
    // response.end('Thank you for submitting, your bmi is: ' + bmi);
   
}
module.exports = {bmi_calc};