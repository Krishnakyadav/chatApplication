class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode =statusCode;
        
    Error.captureStackTrace(this,this.constructor)
    }

}

export const errorHandler= ErrorHandler;

// without Error.captureStakTrace:- If you didn't use this line, the error report would include unnecessaary technical det like where the ErrorHandler class itself is defined. 
// That;s not very  helpful when you're trying to debug.

//  with Error.captureStackTrace, you're saying:-  "Skip all the stepup  details and just show me where the error acc"