---
title: 'use of different functions in Add transaction file '
---
# Introduction

This document will walk you through the implementation of the use of different functions in the Add transaction file.

The feature introduces error handling and transaction creation for deposits and expenses.

We will cover:

1. Error handling logic.
2. Deposit transaction creation.
3. Expense transaction creation.

# Error handling logic

<SwmSnippet path="/src/components/AddTransection/AddTransection.js" line="13">

---

We start by defining the <SwmToken path="/src/components/AddTransection/AddTransection.js" pos="13:3:3" line-data="    const handleError=()=&gt;{">`handleError`</SwmToken> function. This function checks if the input fields are empty or if the amount is less than or equal to zero. If either condition is met, it triggers an error handler with a specific message.

```
    const handleError=()=>{
        if(text===''||Number(amount)<=0){
            errorHandler('All Fileds are required')
            // toast.error('All Filed are required')

            //  toast.error(error)

            return;
        }
        return;
    }
```

---

</SwmSnippet>

# Deposit transaction creation

<SwmSnippet path="/src/components/AddTransection/AddTransection.js" line="25">

---

Next, we define the <SwmToken path="/src/components/AddTransection/AddTransection.js" pos="25:3:3" line-data="    const ondeposit=(e)=&gt;{">`ondeposit`</SwmToken> function. This function handles the form submission for deposit transactions. It first resets any existing errors, then checks if the input fields are valid. If valid, it creates a new transaction object with a positive amount and adds it to the transaction list. Finally, it calls <SwmToken path="/src/components/AddTransection/AddTransection.js" pos="36:1:1" line-data="        handleError();">`handleError`</SwmToken> and resets the input fields.

```
    const ondeposit=(e)=>{
        e.preventDefault();
        reseterrorHandler();
        if(text!==''&&Number(amount)>0){
            const newTrensection={
                id:Math.floor(Math.random()*10000),
                text,
                amount:+amount
            }
            AddTransection(newTrensection)
        }
        handleError();
        settext('')
        setamount(0);
        
        return;
    }
```

---

</SwmSnippet>

# Expense transaction creation

<SwmSnippet path="/src/components/AddTransection/AddTransection.js" line="42">

---

Similarly, the <SwmToken path="/src/components/AddTransection/AddTransection.js" pos="42:3:3" line-data="    const onExpence=(e)=&gt;{">`onExpence`</SwmToken> function handles the form submission for expense transactions. It follows the same logic as <SwmToken path="/src/components/AddTransection/AddTransection.js" pos="25:3:3" line-data="    const ondeposit=(e)=&gt;{">`ondeposit`</SwmToken>, but creates a transaction object with a negative amount.

```
    const onExpence=(e)=>{
        e.preventDefault();
        reseterrorHandler();
        if(text!==''&&Number(amount)>0){
            const newTrensection={
                id:Math.floor(Math.random()*10000),
                text,
                amount:-amount
            }
            AddTransection(newTrensection)
        }
        handleError();
        settext('')
        setamount(0);
        return;
    }
```

---

</SwmSnippet>

This concludes the walkthrough of the main points in the implementation of the use of different functions in the Add transaction file.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBRXhwZW5jZVRyYWNrZXIlM0ElM0F2cnVuZGEyNTEx" repo-name="ExpenceTracker"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
