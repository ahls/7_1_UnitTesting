function CreateSamplePayment()
{
    return {
        billAmt:0, 
        tipAmt:0, 
        tipPercent:0};
}
describe('sumPaymentTotal test',function(){
    beforeEach(function() {
        allPayments = {};
    });

    it('should sum up all of the numbers with the same property name.',function(){
        let samplePayment = CreateSamplePayment();
        samplePayment.billAmt = 1;
        samplePayment.tipAmt = 300;
        samplePayment.tipPercent = 20
        allPayments['test0'] = samplePayment;
        samplePayment = CreateSamplePayment();
        samplePayment.billAmt = 2;
        samplePayment.tipAmt = 20;
        samplePayment.tipPercent = 30;
        allPayments['test1'] = samplePayment;
        samplePayment = CreateSamplePayment();
        samplePayment.billAmt = 120;
        samplePayment.tipAmt = 1;
        samplePayment.tipPercent = 50;
        allPayments['test2'] = samplePayment;

        expect(sumPaymentTotal('billAmt')).toBe(123);
        expect(sumPaymentTotal('tipAmt')).toBe(321);
        expect(sumPaymentTotal('tipPercent')).toBe(100);
    })
    it('should not accept arguments other than the given options',function(){
        
        let samplePayment = CreateSamplePayment();
        samplePayment.billAmt = 1;
        samplePayment.tipAmt = 300;
        samplePayment.tipPercent = 20
        allPayments['test0'] = samplePayment;
        expect(sumPaymentTotal('randomInput')).toEqual(NaN);
    })
    

});
describe('calculateTipPercent test',function(){
    beforeEach(function() {
        allPayments = {};
    });

    it('should correctly calculate the tip',function(){
        expect(calculateTipPercent(10,2)).toBe(20);
        expect(calculateTipPercent(10,1)).toBe(10);
        expect(calculateTipPercent(1,10)).toBe(1000);
    })
    it('should handle cases with zero',function(){
        expect(calculateTipPercent(0,2)).toBe(Infinity);
        expect(calculateTipPercent(2,0)).toBe(0);
    })

    afterEach(function(){
        allPayments = {};
    });
})
describe('appendTd test',function(){
    let newTr;
    beforeEach(function() {
        newTr = document.createElement('tr');
    });

    it('should append to the tr',function(){
        appendTd(newTr,'a');
        expect(newTr.childElementCount).toBe(1);
    })
    it('should append additional elements to the tr',function(){
        appendTd(newTr,'a');
        appendTd(newTr,'a');
        expect(newTr.childElementCount).toBe(2);
        appendTd(newTr,'a');
        expect(newTr.childElementCount).toBe(3);
    })

    afterEach(function(){
        newTr.remove();
    });
})
describe('appendDeleteBtn test',function(){
    let newTr;
    beforeEach(function() {
        newTr = document.createElement('tr');
    });
    it('should append additional elements to the tr',function(){
        appendDeleteBtn(newTr,'a');
        appendDeleteBtn(newTr,'a');
        expect(newTr.childElementCount).toBe(2);
        appendDeleteBtn(newTr,'a');
        expect(newTr.childElementCount).toBe(3);
    })

    afterEach(function(){
        newTr.remove();
    });
})