describe("updateSummary Test", function() {
    beforeEach(function () {
        allPayments = {};
    });
    it('should clear inputs after submitPaymentInfo(e)',function()
    {
        billAmtInput.value = '10';
        tipAmtInput.value = '1';
        submitPaymentInfo(null);
        expect(billAmtInput.value).toEqual('')
        expect(tipAmtInput.value).toEqual('')
    })
    it('should not add if inputs are empty',function()
    {
        billAmtInput.value = '1';
        tipAmtInput.value = '';
        submitPaymentInfo(null);
        expect(allPayments).toEqual({});
        expect(paymentId).toBe(0);
        billAmtInput.value = '';
        tipAmtInput.value = '1';
        submitPaymentInfo(null);
        expect(allPayments).toEqual({});
        expect(paymentId).toBe(0);
        billAmtInput.value = '';
        tipAmtInput.value = '';
        submitPaymentInfo(null);
        expect(allPayments).toEqual({});
        expect(paymentId).toBe(0);
        
    })    
    it('should not add with invalid input',function()
    {
        billAmtInput.value = '  ';
        tipAmtInput.value = 'e';
        submitPaymentInfo(null);
        expect(allPayments).toEqual({});
        expect(paymentId).toBe(0);
        
    })
    it('should add the summary table',function()
    {
        billAmtInput.value = '1';
        tipAmtInput.value = '2';
        submitPaymentInfo(null);
        expect(summaryTds[0].innerHTML).toEqual('$1');
        expect(summaryTds[1].innerHTML).toEqual('$2');
        expect(summaryTds[2].innerHTML).toEqual('200%');
    })
    it('should update the summary table after second input',function()
    {
        billAmtInput.value = '1';
        tipAmtInput.value = '2';
        submitPaymentInfo(null);
        expect(summaryTds[0].innerHTML).toEqual('$1');
        expect(summaryTds[1].innerHTML).toEqual('$2');
        expect(summaryTds[2].innerHTML).toEqual('200%');
        billAmtInput.value = '1';
        tipAmtInput.value = '0';
        submitPaymentInfo(null);
        expect(summaryTds[0].innerHTML).toEqual('$2');
        expect(summaryTds[1].innerHTML).toEqual('$2');
        expect(summaryTds[2].innerHTML).toEqual('100%');
    })
    afterEach(function() {
        paymentId = 0;
        allPayments = {};
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentTbody.innerHTML = '';
      });
    });
    