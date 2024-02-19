/*
Data Types  :-

    1) String :- let/const/var variable = 'Data';
                 Strings can be enclosed by single quotes, double quotes and backtick.

    2) Number :- Range (2^-1074 ( Number.MIN_VALUE ) and 2^1024 ( Number.MAX_VALUE ))

    3) Boolean :- true or false

    4) Object :- let/const/var objectName = { key : value, key : value, key : value, key : value };
                 It is basically what everything in JS made of.
                 There is a section for Objects to give you a normal idea what it is.

    5) null :- let/const/var variable = null
               NULL has no value.

    6) undefined :- let/const/var variable;
                    It means we have define a variable but not given it a value.

-----------------------------------------------------------------------------------------------------------------------------------------

    If-Else Statement :-

    NOTE :- EXECUTION is only done when condition is true

        if(condition) {
            EXECUTION
        } else if(condition) {
            EXECUTION
            if(condition) {
                EXECUTION
            } else {
                EXECUTION
            }
        } else {
            EXECUTION
        }

    Ternary Operators :-

        condition ? true code block EXECUTION : false code block EXECUTION

-----------------------------------------------------------------------------------------------------------------------------------------

    Switch Statement :-

    NOTE :- EXECUTION is only done when condition is true

        switch(data) {
            case condition:
                EXECUTION
                break;
            case condition:
                EXECUTION
                break;
            case condition:
                EXECUTION
                break;
            default:
                EXECUTION
                break;
        }

-----------------------------------------------------------------------------------------------------------------------------------------

    Arrays :- Similar data type stored together. Array starts from '0' / "Zeroth" index.

    let/const array_name = ['data', 'enclosed', 'here']

    for accessing data :- array_name[index]

    NOTE :- String is array of char
    NOTE :- For-of Loop is used for arrays

-----------------------------------------------------------------------------------------------------------------------------------------

    For Loop :-

    NOTE :- EXECUTION works until condition is satisfying

        for(initialization, condition, increment/decrement) {
            EXECUTION
        }

    For-of Loop (Only for arrays):-

        for (let variableName of arrayName) {
            EXECUTION
        }

    For-in Loop (Only for objects) :-

        for (let variableName in objectName) {
            EXECUTION
        }

-----------------------------------------------------------------------------------------------------------------------------------------

    While loop :-

    NOTE :- EXECUTION works until condition is satisfying

        while(condition) {
            EXECUTION
        }

-----------------------------------------------------------------------------------------------------------------------------------------

    Do-While loop :-

    NOTE :- EXECUTION works at least one time whether the condition is true or false.
    After first EXECUTION it checks for condition.

        do {
            EXECUTION
        } while(condition);

-----------------------------------------------------------------------------------------------------------------------------------------

    Functions :-

    NOTE :- When parameters are send they are copied.
    If you want to send real variables send reference of it by adding '&' sign before parameter

    Normal Function:-

        function nameOfFunction(parameters/arguments) {
            EXECUTION
        }

    Arrow Function:-

        const/let/var variable = (parameters/arguments) => {
            EXECUTION
        }

    Async Function:-

        async function nameOfFunction(arguments){
            await EXECUTION
        }

        const/let/var variable = async (arguments) => {
            await EXECUTION
        }

    Eg:-

    Normal Function:-

        function sum(a,b){
            return a+b;
        }

    Arrow Function:-

        const sum = (a,b) => a+b;

    Async Function:-

        async function sum(a,b){
            const c = await a+b;
            return c;
        }

        const sum = async (a,b) => await a+b;

-----------------------------------------------------------------------------------------------------------------------------------------

    Time Complexity :-
        Time Complexity is not time taken by the code while running.
        Different Machines take Different Time to run same code.

        So what is time complexity if not actual time?
        - The time complexity of an algorithm quantifies the amount of time taken by an algorithm
          to run as a function of the length of the input.

        3 Rules :-
            1) Compute Time complexity for the worst case scenario.
            2) Avoid Constants.
            3) Avoid Lower Values.

        Three cases of Time Complexity :-
            1) Best Case
            2) Worst Case
            3) Average Case

        Big-Oh :- Notation for showing time complexity.
                  O(time)

-----------------------------------------------------------------------------------------------------------------------------------------

    Space Complexity :-

    Memory space taken by code.

    It is Noted with Big-Oh.

    Auxiliary Space + Input Space

    Auxiliary Space is the space that you take to solve the problem.
    Input Space is the space you take to store the input.

    eg :-

    let a = prompt("Enter a");
    let b = prompt("Enter b");
    let c = a + b;

    Here c is Auxiliary Space and a,b are Input Space.

-----------------------------------------------------------------------------------------------------------------------------------------
    */